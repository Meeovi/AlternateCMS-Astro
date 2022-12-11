"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVendorsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VendorsWhereUniqueInput_1 = require("../../../inputs/VendorsWhereUniqueInput");
let FindUniqueVendorsArgs = class FindUniqueVendorsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VendorsWhereUniqueInput_1.VendorsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VendorsWhereUniqueInput_1.VendorsWhereUniqueInput)
], FindUniqueVendorsArgs.prototype, "where", void 0);
FindUniqueVendorsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueVendorsArgs);
exports.FindUniqueVendorsArgs = FindUniqueVendorsArgs;
