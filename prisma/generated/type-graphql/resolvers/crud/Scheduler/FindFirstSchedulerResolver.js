"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSchedulerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstSchedulerArgs_1 = require("./args/FindFirstSchedulerArgs");
const Scheduler_1 = require("../../../models/Scheduler");
const helpers_1 = require("../../../helpers");
let FindFirstSchedulerResolver = class FindFirstSchedulerResolver {
    async findFirstScheduler(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).scheduler.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Scheduler_1.Scheduler, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSchedulerArgs_1.FindFirstSchedulerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstSchedulerResolver.prototype, "findFirstScheduler", null);
FindFirstSchedulerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Scheduler_1.Scheduler)
], FindFirstSchedulerResolver);
exports.FindFirstSchedulerResolver = FindFirstSchedulerResolver;
