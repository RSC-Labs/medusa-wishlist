"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const wishlist_1 = __importDefault(require("./wishlist"));
const WishlistItem = utils_1.model.define("wishlist_item", {
    id: utils_1.model.id().primaryKey(),
    quantity: utils_1.model.number(),
    productId: utils_1.model.text(),
    productVariantId: utils_1.model.text(),
    wishlist: utils_1.model.belongsTo(() => wishlist_1.default, {
        mappedBy: "items"
    })
});
exports.default = WishlistItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3QtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3dpc2hsaXN0L21vZGVscy93aXNobGlzdC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQWlEO0FBQ2pELDBEQUFpQztBQUVqQyxNQUFNLFlBQVksR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtJQUNqRCxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUMzQixRQUFRLEVBQUUsYUFBSyxDQUFDLE1BQU0sRUFBRTtJQUN4QixTQUFTLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUN2QixnQkFBZ0IsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFO0lBQzlCLFFBQVEsRUFBRSxhQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFRLEVBQUU7UUFDeEMsUUFBUSxFQUFFLE9BQU87S0FDbEIsQ0FBQztDQUNILENBQUMsQ0FBQTtBQUVGLGtCQUFlLFlBQVksQ0FBQSJ9