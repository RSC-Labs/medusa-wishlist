"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [customer] } = await query.graph({
        entity: "customer",
        fields: [
            "wishlist.*",
            "wishlist.items.*",
        ],
        filters: {
            id: [req.auth_context.actor_id],
        },
    });
    res.json({
        wishlist: customer.wishlist,
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2N1c3RvbWVycy9tZS93aXNobGlzdC9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxxREFBcUU7QUFFOUQsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzdDLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRTtZQUNOLFlBQVk7WUFDWixrQkFBa0I7U0FDbkI7UUFDRCxPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztTQUNoQztLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7S0FDNUIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBcEJZLFFBQUEsR0FBRyxPQW9CZiJ9