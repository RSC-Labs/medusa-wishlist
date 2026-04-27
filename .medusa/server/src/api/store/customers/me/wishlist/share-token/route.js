"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const wishlist_1 = require("../../../../../../modules/wishlist");
const POST = async (req, res) => {
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
    if (customerWithWishlist && customerWithWishlist.length) {
        const wishlistModuleService = req.scope.resolve(wishlist_1.WISHLIST_MODULE);
        if (customerWithWishlist[0].wishlist && customerWithWishlist[0].wishlist.id) {
            const token = wishlistModuleService.getSharedToken(req.auth_context.actor_id);
            return res.json({
                shared_token: token
            });
        }
    }
    return res.json(422);
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2N1c3RvbWVycy9tZS93aXNobGlzdC9zaGFyZS10b2tlbi9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFLQSxxREFBcUU7QUFFckUsaUVBQW9FO0FBRTdELE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDdkQsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFO1lBQ04sWUFBWTtTQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7U0FDaEM7S0FDRixDQUFDLENBQUE7SUFFRixJQUFJLG9CQUFvQixJQUFJLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hELE1BQU0scUJBQXFCLEdBQTBCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLDBCQUFlLENBQUMsQ0FBQTtRQUV2RixJQUFJLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUUsTUFBTSxLQUFLLEdBQUcscUJBQXFCLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUUsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNkLFlBQVksRUFBRSxLQUFLO2FBQ3BCLENBQUMsQ0FBQTtRQUNKLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQTtBQTVCWSxRQUFBLElBQUksUUE0QmhCIn0=