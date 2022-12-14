"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyWebsitesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyWebsitesArgs_1 = require("./args/DeleteManyWebsitesArgs");
const Websites_1 = require("../../../models/Websites");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyWebsitesResolver = class DeleteManyWebsitesResolver {
    async deleteManyWebsites(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).websites.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyWebsitesArgs_1.DeleteManyWebsitesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyWebsitesResolver.prototype, "deleteManyWebsites", null);
DeleteManyWebsitesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Websites_1.Websites)
], DeleteManyWebsitesResolver);
exports.DeleteManyWebsitesResolver = DeleteManyWebsitesResolver;
