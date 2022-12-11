"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDeepdiveOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveWhereUniqueInput_1 = require("../../../inputs/DeepdiveWhereUniqueInput");
let FindUniqueDeepdiveOrThrowArgs = class FindUniqueDeepdiveOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveWhereUniqueInput_1.DeepdiveWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DeepdiveWhereUniqueInput_1.DeepdiveWhereUniqueInput)
], FindUniqueDeepdiveOrThrowArgs.prototype, "where", void 0);
FindUniqueDeepdiveOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueDeepdiveOrThrowArgs);
exports.FindUniqueDeepdiveOrThrowArgs = FindUniqueDeepdiveOrThrowArgs;
