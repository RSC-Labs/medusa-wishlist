"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const wishlist_1 = __importDefault(require("./models/wishlist"));
const wishlist_item_1 = __importDefault(require("./models/wishlist-item"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class WishlistModuleService extends (0, utils_1.MedusaService)({
    Wishlist: wishlist_1.default,
    WishlistItem: wishlist_item_1.default
}) {
    constructor({}, options) {
        super(...arguments);
        this.options_ = {
            jwtSecret: options && options.jwtSecret ? options.jwtSecret : '',
        };
    }
    async deleteItem(wishlistId, productId, productVariantId) {
        await this.deleteWishlistItems({
            wishlist_id: wishlistId,
            productId: productId,
            productVariantId: productVariantId
        });
    }
    async addOrUpdateItem(wishlistId, productId, productVariantId, quantity) {
        const existingItem = await this.listAndCountWishlistItems({
            productVariantId: productVariantId
        });
        if (existingItem[1]) {
            const existingItem = await this.updateWishlistItems({
                selector: {
                    productId: productId,
                    productVariantId: productVariantId
                },
                data: {
                    quantity: quantity
                }
            });
            return existingItem;
        }
        else {
            const newItem = await this.createWishlistItems({
                quantity: quantity,
                productId: productId,
                productVariantId: productVariantId,
                wishlist_id: wishlistId
            });
            return newItem;
        }
    }
    async create() {
        const wishlist = await this.createWishlists({});
        return wishlist.id;
    }
    getSharedToken(customerId) {
        return jsonwebtoken_1.default.sign({
            customer_id: customerId
        }, this.options_.jwtSecret);
    }
    decodeToken(token) {
        const decode = jsonwebtoken_1.default.decode(token, this.options_.jwtSecret);
        if (!decode || !decode.customer_id) {
            throw new utils_1.MedusaError(utils_1.MedusaErrorTypes.NOT_FOUND, `Invalid token`);
        }
        return decode.customer_id;
    }
}
exports.default = WishlistModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3dpc2hsaXN0L3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBd0Y7QUFDeEYsaUVBQXlDO0FBQ3pDLDJFQUFrRDtBQUNsRCxnRUFBOEI7QUFNOUIsTUFBTSxxQkFBc0IsU0FBUSxJQUFBLHFCQUFhLEVBQUM7SUFDaEQsUUFBUSxFQUFSLGtCQUFRO0lBQ1IsWUFBWSxFQUFaLHVCQUFZO0NBQ2IsQ0FBQztJQUlBLFlBQVksRUFBRSxFQUFFLE9BQXVCO1FBQ3JDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFBO1FBRW5CLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxTQUFTLEVBQUUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDakUsQ0FBQTtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQWtCLEVBQUUsU0FBaUIsRUFBRSxnQkFBd0I7UUFDOUUsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDN0IsV0FBVyxFQUFFLFVBQVU7WUFDdkIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsZ0JBQWdCLEVBQUUsZ0JBQWdCO1NBQ25DLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLFVBQWtCLEVBQUUsU0FBaUIsRUFBRSxnQkFBd0IsRUFBRSxRQUFnQjtRQUNyRyxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztZQUN4RCxnQkFBZ0IsRUFBRSxnQkFBZ0I7U0FDbkMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNwQixNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbEQsUUFBUSxFQUFFO29CQUNSLFNBQVMsRUFBRSxTQUFTO29CQUNwQixnQkFBZ0IsRUFBRSxnQkFBZ0I7aUJBQ25DO2dCQUNELElBQUksRUFBRTtvQkFDSixRQUFRLEVBQUUsUUFBUTtpQkFDbkI7YUFDRixDQUFDLENBQUE7WUFDRixPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDO2FBQU0sQ0FBQztZQUNMLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QyxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLGdCQUFnQixFQUFFLGdCQUFnQjtnQkFDbEMsV0FBVyxFQUFFLFVBQVU7YUFDeEIsQ0FBQyxDQUFBO1lBQ0YsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsTUFBTTtRQUNWLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoRCxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGNBQWMsQ0FBQyxVQUFrQjtRQUMvQixPQUFPLHNCQUFHLENBQUMsSUFBSSxDQUNiO1lBQ0UsV0FBVyxFQUFFLFVBQVU7U0FDeEIsRUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDeEIsQ0FBQTtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsS0FBYTtRQUN2QixNQUFNLE1BQU0sR0FBRyxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25DLE1BQU0sSUFBSSxtQkFBVyxDQUNuQix3QkFBZ0IsQ0FBQyxTQUFTLEVBQzFCLGVBQWUsQ0FDaEIsQ0FBQTtRQUNILENBQUM7UUFDRCxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBRUQsa0JBQWUscUJBQXFCLENBQUEifQ==