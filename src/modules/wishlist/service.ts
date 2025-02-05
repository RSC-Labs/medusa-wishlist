import { MedusaError, MedusaErrorTypes, MedusaService } from "@medusajs/framework/utils"
import Wishlist from "./models/wishlist";
import WishlistItem from "./models/wishlist-item";
import jwt from "jsonwebtoken"

type ModuleOptions = {
  jwtSecret: string,
}

class WishlistModuleService extends MedusaService({
  Wishlist,
  WishlistItem
}) {

  protected options_: ModuleOptions

  constructor({}, options?: ModuleOptions) {
    super(...arguments)

    this.options_ = {
      jwtSecret: options && options.jwtSecret ? options.jwtSecret : '',
    }
  }

  async deleteItem(wishlistId: string, productId: string, productVariantId: string) {
    await this.deleteWishlistItems({
      wishlist_id: wishlistId,
      productId: productId,
      productVariantId: productVariantId
    })
  }

  async addOrUpdateItem(wishlistId: string, productId: string, productVariantId: string, quantity: number) : Promise<any> {
    const existingItem = await this.listAndCountWishlistItems({
      productVariantId: productVariantId
    })
    if (existingItem[1]) {
      const existingItem = await this.updateWishlistItems({
        selector: {
          productId: productId,
          productVariantId: productVariantId
        },
        data: {
          quantity: quantity
        }
      })
      return existingItem;
    } else {
       const newItem = await this.createWishlistItems({
        quantity: quantity,
        productId: productId,
        productVariantId: productVariantId,
        wishlist_id: wishlistId
      })
      return newItem;
    }
  }

  async create() : Promise<string> {
    const wishlist = await this.createWishlists({});
    return wishlist.id;
  }

  getSharedToken(customerId: string) : string {
    return jwt.sign(
      {
        customer_id: customerId
      },
      this.options_.jwtSecret
    )
  }

  decodeToken(token: string) : string {
    const decode = jwt.decode(token, this.options_.jwtSecret);
    if (!decode || !decode.customer_id) {
      throw new MedusaError(
        MedusaErrorTypes.NOT_FOUND,
        `Invalid token`
      )
    }
    return decode.customer_id;
  }
}

export default WishlistModuleService