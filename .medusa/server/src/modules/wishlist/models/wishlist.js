"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const wishlist_item_1 = __importDefault(require("./wishlist-item"));
const Wishlist = utils_1.model.define("wishlist", {
    id: utils_1.model.id().primaryKey(),
    items: utils_1.model.hasMany(() => wishlist_item_1.default, {
        mappedBy: "wishlist"
    })
}).cascades({
    delete: ["items"],
});
exports.default = Wishlist;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy93aXNobGlzdC9tb2RlbHMvd2lzaGxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBaUQ7QUFDakQsb0VBQTBDO0FBRTFDLE1BQU0sUUFBUSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO0lBQ3hDLEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQzNCLEtBQUssRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUFZLEVBQUU7UUFDdkMsUUFBUSxFQUFFLFVBQVU7S0FDckIsQ0FBQztDQUNILENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDVixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7Q0FDbEIsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsUUFBUSxDQUFBIn0=