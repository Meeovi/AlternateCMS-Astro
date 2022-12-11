"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAttributesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstAttributesOrThrowArgs_1 = require("./args/FindFirstAttributesOrThrowArgs");
const Attributes_1 = require("../../../models/Attributes");
const helpers_1 = require("../../../helpers");
let FindFirstAttributesOrThrowResolver = class FindFirstAttributesOrThrowResolver {
    async findFirstAttributesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Attributes_1.Attributes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAttributesOrThrowArgs_1.FindFirstAttributesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstAttributesOrThrowResolver.prototype, "findFirstAttributesOrThrow", null);
FindFirstAttributesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attributes_1.Attributes)
], FindFirstAttributesOrThrowResolver);
exports.FindFirstAttributesOrThrowResolver = FindFirstAttributesOrThrowResolver;
