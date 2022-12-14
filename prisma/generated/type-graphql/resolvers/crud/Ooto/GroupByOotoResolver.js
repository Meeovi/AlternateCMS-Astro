"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByOotoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByOotoArgs_1 = require("./args/GroupByOotoArgs");
const Ooto_1 = require("../../../models/Ooto");
const OotoGroupBy_1 = require("../../outputs/OotoGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByOotoResolver = class GroupByOotoResolver {
    async groupByOoto(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OotoGroupBy_1.OotoGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOotoArgs_1.GroupByOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByOotoResolver.prototype, "groupByOoto", null);
GroupByOotoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ooto_1.Ooto)
], GroupByOotoResolver);
exports.GroupByOotoResolver = GroupByOotoResolver;
