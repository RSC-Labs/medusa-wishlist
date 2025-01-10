import { 
  MedusaRequest, 
  MedusaResponse,
} from "@medusajs/framework/http"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import WishlistModuleService from "../../../modules/wishlist/service"
import { WISHLIST_MODULE } from "../../../modules/wishlist"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const rawRequest = req as unknown as any;
  const token = rawRequest.query.token;

  if (token) {
    const wishlistModuleService: WishlistModuleService = req.scope.resolve(WISHLIST_MODULE)
    const customerId = wishlistModuleService.decodeToken(token);
    if (customerId) {
      const { data: [customer] } = await query.graph({
        entity: "customer",
        fields: [
          "wishlist.*",
          "wishlist.items.*",
        ],
        filters: {
          id: [customerId],
        }, 
      })
    
      return res.json({
        wishlist: customer.wishlist,
      })
    }
  }

  return res.json(422);
}