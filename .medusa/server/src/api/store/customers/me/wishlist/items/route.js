"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const wishlist_1 = require("../../../../../../modules/wishlist");
const assign_wishlist_to_customer_1 = __importDefault(require("../../../../../../workflows/assign-wishlist-to-customer"));
const POST = async (req, res) => {
    const rawRequest = req;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: customerWithWishlist } = await query.graph({
        entity: "customer",
        fields: [
            "wishlist.*",
        ],
        filters: {
            id: [req.auth_context.actor_id],
        },
    });
    const logger = req.scope.resolve("logger");
    if (customerWithWishlist && customerWithWishlist.length) {
        const wishlistModuleService = req.scope.resolve(wishlist_1.WISHLIST_MODULE);
        let wishlistId;
        if (customerWithWishlist[0].wishlist) {
            wishlistId = customerWithWishlist[0].wishlist.id;
        }
        else {
            logger.debug(`Wishlist will be initialized for customer`);
            wishlistId = await wishlistModuleService.create();
            await (0, assign_wishlist_to_customer_1.default)(req.scope)
                .run({
                input: {
                    customerId: customerWithWishlist[0].id,
                    wishlistId: wishlistId
                }
            });
            logger.info(`Wishlist initialized for customer`);
        }
        if (wishlistId) {
            logger.debug(`Adding item to wishlist`);
            await wishlistModuleService.addOrUpdateItem(wishlistId, rawRequest.body.productId, rawRequest.body.productVariantId, rawRequest.body.quantity);
            const updatedWishlist = await wishlistModuleService.retrieveWishlist(wishlistId, {
                relations: ['items']
            });
            return res.json(updatedWishlist);
        }
    }
    return res.json(422);
};
exports.POST = POST;
const DELETE = async (req, res) => {
    const rawRequest = req;
    const productId = rawRequest.query.productId;
    const productVariantId = rawRequest.query.productVariantId;
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: customerWithWishlist } = await query.graph({
        entity: "customer",
        fields: [
            "wishlist.*",
        ],
        filters: {
            id: [req.auth_context.actor_id],
        },
    });
    const logger = req.scope.resolve("logger");
    if (customerWithWishlist && customerWithWishlist.length) {
        const wishlistModuleService = req.scope.resolve(wishlist_1.WISHLIST_MODULE);
        if (customerWithWishlist[0].wishlist && customerWithWishlist[0].wishlist.id) {
            logger.debug(`Removing item from wishlist`);
            await wishlistModuleService.deleteItem(customerWithWishlist[0].wishlist.id, productId, productVariantId);
            const updatedWishlist = await wishlistModuleService.retrieveWishlist(customerWithWishlist[0].wishlist.id, {
                relations: ['items']
            });
            return res.json(updatedWishlist);
        }
    }
    res.json({});
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2N1c3RvbWVycy9tZS93aXNobGlzdC9pdGVtcy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQSxxREFBcUU7QUFFckUsaUVBQW9FO0FBQ3BFLDBIQUFzRztBQVEvRixNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLFVBQVUsR0FBRyxHQUFxQixDQUFDO0lBRXpDLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDdkQsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFO1lBQ04sWUFBWTtTQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7U0FDaEM7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLE1BQU0sR0FBVyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUVsRCxJQUFJLG9CQUFvQixJQUFJLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hELE1BQU0scUJBQXFCLEdBQTBCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLDBCQUFlLENBQUMsQ0FBQTtRQUV2RixJQUFJLFVBQThCLENBQUM7UUFFbkMsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxVQUFVLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUs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