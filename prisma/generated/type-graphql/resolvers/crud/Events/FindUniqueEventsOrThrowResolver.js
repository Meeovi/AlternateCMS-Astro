"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEventsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueEventsOrThrowArgs_1 = require("./args/FindUniqueEventsOrThrowArgs");
const Events_1 = require("../../../models/Events");
const helpers_1 = require("../../../helpers");
let FindUniqueEventsOrThrowResolver = class FindUniqueEventsOrThrowResolver {
    async findUniqueEventsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).events.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Events_1.Events, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEventsOrThrowArgs_1.FindUniqueEventsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueEventsOrThrowResolver.prototype, "findUniqueEventsOrThrow", null);
FindUniqueEventsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Events_1.Events)
], FindUniqueEventsOrThrowResolver);
exports.FindUniqueEventsOrThrowResolver = FindUniqueEventsOrThrowResolver;
