import type {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"
import { Logger } from "@medusajs/framework/types";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import WishlistModuleService from "../../../../../../modules/wishlist/service"
import { WISHLIST_MODULE } from "../../../../../../modules/wishlist"
import assignWishlistToCustomerWorkflow from "../../../../../../workflows/assign-wishlist-to-customer"

type RequestType = {
  quantity: number,
  productVariantId: string,
  productId: string
}

export const POST = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const rawRequest = req as unknown as any;

  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: customerWithWishlist } = await query.graph({
    entity: "customer",
    fields: [
      "wishlist.*",
    ],
    filters: {
      id: [req.auth_context.actor_id],
    }, 
  })

  const logger: Logger = req.scope.resolve("logger")

  if (customerWithWishlist && customerWithWishlist.length) {
    const wishlistModuleService: WishlistModuleService = req.scope.resolve(WISHLIST_MODULE)

    let wishlistId: string | undefined;

    if (customerWithWishlist[0].wishlist) {
      wishlistId = customerWithWishlist[0].wishlist.id
    } else {
      logger.debug(`Wishlist will be initialized for customer`)
      wishlistId = await wishlistModuleService.create();
      await assignWishlistToCustomerWorkflow(req.scope)
        .run({
          input: {
            customerId: customerWithWishlist[0].id,
            wishlistId: wishlistId
          }
        })
      logger.info(`Wishlist initialized for customer`)
    }

    if (wishlistId) {
      logger.debug(`Adding item to wishlist`);
      await wishlistModuleService.addOrUpdateItem(
        wishlistId,
        (rawRequest.body as RequestType).productId,
        (rawRequest.body as RequestType).productVariantId, 
        (rawRequest.body as RequestType).quantity
      )
      const updatedWishlist = await wishlistModuleService.retrieveWishlist(wishlistId, {
        relations: ['items']
      });
      return res.json(updatedWishlist);
    }
  }
  
  return res.json(422);
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {

  const rawRequest = req as unknown as any;
  const productId = rawRequest.query.productId;
  const productVariantId = rawRequest.query.productVariantId;

  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: customerWithWishlist } = await query.graph({
    entity: "customer",
    fields: [
      "wishlist.*",
    ],
    filters: {
      id: [req.auth_context.actor_id],
    }, 
  })

  const logger: Logger = req.scope.resolve("logger")

  if (customerWithWishlist && customerWithWishlist.length) {
    const wishlistModuleService: WishlistModuleService = req.scope.resolve(WISHLIST_MODULE)

    if (customerWithWishlist[0].wishlist && customerWithWishlist[0].wishlist.id) {
      logger.debug(`Removing item from wishlist`);
      await wishlistModuleService.deleteItem(
        customerWithWishlist[0].wishlist.id,
        productId,
        productVariantId
      )
      const updatedWishlist = await wishlistModuleService.retrieveWishlist(customerWithWishlist[0].wishlist.id, {
        relations: ['items']
      });
      return res.json(updatedWishlist);
    }
  }

  res.json({});
}