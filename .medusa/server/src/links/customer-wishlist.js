"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const customer_1 = __importDefault(require("@medusajs/medusa/customer"));
const wishlist_1 = __importDefault(require("../modules/wishlist"));
exports.default = (0, utils_1.defineLink)(customer_1.default.linkable.customer, {
    linkable: wishlist_1.default.linkable.wishlist,
    deleteCascade: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItd2lzaGxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlua3MvY3VzdG9tZXItd2lzaGxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBc0Q7QUFDdEQseUVBQXNEO0FBQ3RELG1FQUFnRDtBQUVoRCxrQkFBZSxJQUFBLGtCQUFVLEVBQ3ZCLGtCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFDaEM7SUFDRSxRQUFRLEVBQUUsa0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUTtJQUMxQyxhQUFhLEVBQUUsSUFBSTtDQUNwQixDQUNGLENBQUEifQ==