import {
  createWorkflow,
  when,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { createRemoteLinkStep } from "@medusajs/medusa/core-flows";
import { Modules } from "@medusajs/framework/utils";
import { WISHLIST_MODULE } from "src/modules/wishlist";

type AssignWishlistToCustomerInput = {
  customerId: string,
  wishlistId: string,
}

const assignWishlistToCustomerWorkflow = createWorkflow(
  "assign-wishlist-to-customer",
  function (input: AssignWishlistToCustomerInput) {

    createRemoteLinkStep([{
      [Modules.CUSTOMER]: {
        customer_id: input.customerId
      },
      [WISHLIST_MODULE]: {
        wishlist_id: input.wishlistId
      }
    }])

    return new WorkflowResponse({})
  }
)

export default assignWishlistToCustomerWorkflow