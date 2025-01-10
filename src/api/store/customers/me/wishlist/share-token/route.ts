import type {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"
import { Logger } from "@medusajs/framework/types";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import WishlistModuleService from "../../../../../../modules/wishlist/service"
import { WISHLIST_MODULE } from "../../../../../../modules/wishlist"

export const POST = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
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

  if (customerWithWishlist && customerWithWishlist.length) {
    const wishlistModuleService: WishlistModuleService = req.scope.resolve(WISHLIST_MODULE)

    if (customerWithWishlist[0].wishlist && customerWithWishlist[0].wishlist.id) {
      const token = wishlistModuleService.getSharedToken(req.auth_context.actor_id);
      return res.json({
        shared_token: token
      })
    } 
  }
  
  return res.json(422);
}