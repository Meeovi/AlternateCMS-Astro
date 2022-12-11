"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneWorkspacesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneWorkspacesArgs_1 = require("./args/UpsertOneWorkspacesArgs");
const Workspaces_1 = require("../../../models/Workspaces");
const helpers_1 = require("../../../helpers");
let UpsertOneWorkspacesResolver = class UpsertOneWorkspacesResolver {
    async upsertOneWorkspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Workspaces_1.Workspaces, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneWorkspacesArgs_1.UpsertOneWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneWorkspacesResolver.prototype, "upsertOneWorkspaces", null);
UpsertOneWorkspacesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspaces_1.Workspaces)
], UpsertOneWorkspacesResolver);
exports.UpsertOneWorkspacesResolver = UpsertOneWorkspacesResolver;
