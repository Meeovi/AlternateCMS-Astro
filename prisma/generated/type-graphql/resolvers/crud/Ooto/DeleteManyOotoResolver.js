"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyOotoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyOotoArgs_1 = require("./args/DeleteManyOotoArgs");
const Ooto_1 = require("../../../models/Ooto");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyOotoResolver = class DeleteManyOotoResolver {
    async deleteManyOoto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyOotoArgs_1.DeleteManyOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyOotoResolver.prototype, "deleteManyOoto", null);
DeleteManyOotoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ooto_1.Ooto)
], DeleteManyOotoResolver);
exports.DeleteManyOotoResolver = DeleteManyOotoResolver;
