"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTicketingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneTicketingArgs_1 = require("./args/CreateOneTicketingArgs");
const Ticketing_1 = require("../../../models/Ticketing");
const helpers_1 = require("../../../helpers");
let CreateOneTicketingResolver = class CreateOneTicketingResolver {
    async createOneTicketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ticketing_1.Ticketing, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTicketingArgs_1.CreateOneTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneTicketingResolver.prototype, "createOneTicketing", null);
CreateOneTicketingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ticketing_1.Ticketing)
], CreateOneTicketingResolver);
exports.CreateOneTicketingResolver = CreateOneTicketingResolver;
