"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstEventsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstEventsOrThrowArgs_1 = require("./args/FindFirstEventsOrThrowArgs");
const Events_1 = require("../../../models/Events");
const helpers_1 = require("../../../helpers");
let FindFirstEventsOrThrowResolver = class FindFirstEventsOrThrowResolver {
    async findFirstEventsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).events.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEventsOrThrowArgs_1.FindFirstEventsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstEventsOrThrowResolver.prototype, "findFirstEventsOrThrow", null);
FindFirstEventsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Events_1.Events)
], FindFirstEventsOrThrowResolver);
exports.FindFirstEventsOrThrowResolver = FindFirstEventsOrThrowResolver;
