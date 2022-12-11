"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProjectsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyProjectsArgs_1 = require("./args/DeleteManyProjectsArgs");
const Projects_1 = require("../../../models/Projects");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyProjectsResolver = class DeleteManyProjectsResolver {
    async deleteManyProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProjectsArgs_1.DeleteManyProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyProjectsResolver.prototype, "deleteManyProjects", null);
DeleteManyProjectsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Projects_1.Projects)
], DeleteManyProjectsResolver);
exports.DeleteManyProjectsResolver = DeleteManyProjectsResolver;
