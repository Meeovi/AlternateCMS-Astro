"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTaxesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/TaxesOrderByWithRelationAndSearchRelevanceInput");
const TaxesWhereInput_1 = require("../../../inputs/TaxesWhereInput");
const TaxesWhereUniqueInput_1 = require("../../../inputs/TaxesWhereUniqueInput");
const TaxesScalarFieldEnum_1 = require("../../../../enums/TaxesScalarFieldEnum");
let FindFirstTaxesArgs = class FindFirstTaxesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesWhereInput_1.TaxesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesWhereInput_1.TaxesWhereInput)
], FindFirstTaxesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaxesOrderByWithRelationAndSearchRelevanceInput_1.TaxesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTaxesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesWhereUniqueInput_1.TaxesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesWhereUniqueInput_1.TaxesWhereUniqueInput)
], FindFirstTaxesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTaxesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTaxesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaxesScalarFieldEnum_1.TaxesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTaxesArgs.prototype, "distinct", void 0);
FindFirstTaxesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTaxesArgs);
exports.FindFirstTaxesArgs = FindFirstTaxesArgs;
