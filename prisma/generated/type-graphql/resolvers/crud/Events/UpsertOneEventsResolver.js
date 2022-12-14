"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneEventsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneEventsArgs_1 = require("./args/UpsertOneEventsArgs");
const Events_1 = require("../../../models/Events");
const helpers_1 = require("../../../helpers");
let UpsertOneEventsResolver = class UpsertOneEventsResolver {
    async upsertOneEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).events.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Events_1.Events, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneEventsArgs_1.UpsertOneEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneEventsResolver.prototype, "upsertOneEvents", null);
UpsertOneEventsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Events_1.Events)
], UpsertOneEventsResolver);
exports.UpsertOneEventsResolver = UpsertOneEventsResolver;
