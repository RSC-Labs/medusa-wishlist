"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const wishlist_1 = require("../modules/wishlist");
const assignWishlistToCustomerWorkflow = (0, workflows_sdk_1.createWorkflow)("assign-wishlist-to-customer", function (input) {
    (0, core_flows_1.createRemoteLinkStep)([{
            [utils_1.Modules.CUSTOMER]: {
                customer_id: input.customerId
            },
            [wishlist_1.WISHLIST_MODULE]: {
                wishlist_id: input.wishlistId
            }
        }]);
    return new workflows_sdk_1.WorkflowResponse({});
});
exports.default = assignWishlistToCustomerWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaWduLXdpc2hsaXN0LXRvLWN1c3RvbWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9hc3NpZ24td2lzaGxpc3QtdG8tY3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFJMEM7QUFDMUMsNERBQW1FO0FBQ25FLHFEQUFvRDtBQUNwRCxrREFBc0Q7QUFPdEQsTUFBTSxnQ0FBZ0MsR0FBRyxJQUFBLDhCQUFjLEVBQ3JELDZCQUE2QixFQUM3QixVQUFVLEtBQW9DO0lBRTVDLElBQUEsaUNBQW9CLEVBQUMsQ0FBQztZQUNwQixDQUFDLGVBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDbEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxVQUFVO2FBQzlCO1lBQ0QsQ0FBQywwQkFBZSxDQUFDLEVBQUU7Z0JBQ2pCLFdBQVcsRUFBRSxLQUFLLENBQUMsVUFBVTthQUM5QjtTQUNGLENBQUMsQ0FBQyxDQUFBO0lBRUgsT0FBTyxJQUFJLGdDQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FDRixDQUFBO0FBRUQsa0JBQWUsZ0NBQWdDLENBQUEifQ==