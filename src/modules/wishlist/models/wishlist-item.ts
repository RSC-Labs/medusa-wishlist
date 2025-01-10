import { model } from "@medusajs/framework/utils"
import Wishlist from "./wishlist"

const WishlistItem = model.define("wishlist_item", {
  id: model.id().primaryKey(),
  quantity: model.number(),
  productId: model.text(),
  productVariantId: model.text(),
  wishlist: model.belongsTo(() => Wishlist, {
    mappedBy: "items"
  })
}) 

export default WishlistItem