"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const wishlist_1 = require("../../../modules/wishlist");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const rawRequest = req;
    const token = rawRequest.query.token;
    if (token) {
        const wishlistModuleService = req.scope.resolve(wishlist_1.WISHLIST_MODULE);
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
            });
            return res.json({
                wishlist: customer.wishlist,
            });
        }
    }
    return res.json(422);
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3dpc2hsaXN0cy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxxREFBcUU7QUFFckUsd0RBQTJEO0FBRXBELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sVUFBVSxHQUFHLEdBQXFCLENBQUM7SUFDekMsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFFckMsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNWLE1BQU0scUJBQXFCLEdBQTBCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLDBCQUFlLENBQUMsQ0FBQTtRQUN2RixNQUFNLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUQsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNmLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDN0MsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLE1BQU0sRUFBRTtvQkFDTixZQUFZO29CQUNaLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQztpQkFDakI7YUFDRixDQUFDLENBQUE7WUFFRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO2FBQzVCLENBQUMsQ0FBQTtRQUNKLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQTtBQS9CWSxRQUFBLEdBQUcsT0ErQmYifQ==