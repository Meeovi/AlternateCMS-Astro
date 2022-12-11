import { GraphQLResolveInfo } from "graphql";
import { AggregateArticlesArgs } from "./args/AggregateArticlesArgs";
import { CreateManyArticlesArgs } from "./args/CreateManyArticlesArgs";
import { CreateOneArticlesArgs } from "./args/CreateOneArticlesArgs";
import { DeleteManyArticlesArgs } from "./args/DeleteManyArticlesArgs";
import { DeleteOneArticlesArgs } from "./args/DeleteOneArticlesArgs";
import { FindFirstArticlesArgs } from "./args/FindFirstArticlesArgs";
import { FindFirstArticlesOrThrowArgs } from "./args/FindFirstArticlesOrThrowArgs";
import { FindManyArticlesArgs } from "./args/FindManyArticlesArgs";
import { FindUniqueArticlesArgs } from "./args/FindUniqueArticlesArgs";
import { FindUniqueArticlesOrThrowArgs } from "./args/FindUniqueArticlesOrThrowArgs";
import { GroupByArticlesArgs } from "./args/GroupByArticlesArgs";
import { UpdateManyArticlesArgs } from "./args/UpdateManyArticlesArgs";
import { UpdateOneArticlesArgs } from "./args/UpdateOneArticlesArgs";
import { UpsertOneArticlesArgs } from "./args/UpsertOneArticlesArgs";
import { Articles } from "../../../models/Articles";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateArticles } from "../../outputs/AggregateArticles";
import { ArticlesGroupBy } from "../../outputs/ArticlesGroupBy";
export declare class ArticlesCrudResolver {
    aggregateArticles(ctx: any, info: GraphQLResolveInfo, args: AggregateArticlesArgs): Promise<AggregateArticles>;
    createManyArticles(ctx: any, info: GraphQLResolveInfo, args: CreateManyArticlesArgs): Promise<AffectedRowsOutput>;
    createOneArticles(ctx: any, info: GraphQLResolveInfo, args: CreateOneArticlesArgs): Promise<Articles>;
    deleteManyArticles(ctx: any, info: GraphQLResolveInfo, args: DeleteManyArticlesArgs): Promise<AffectedRowsOutput>;
    deleteOneArticles(ctx: any, info: GraphQLResolveInfo, args: DeleteOneArticlesArgs): Promise<Articles | null>;
    findFirstArticles(ctx: any, info: GraphQLResolveInfo, args: FindFirstArticlesArgs): Promise<Articles | null>;
    findFirstArticlesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstArticlesOrThrowArgs): Promise<Articles | null>;
    findManyArticles(ctx: any, info: GraphQLResolveInfo, args: FindManyArticlesArgs): Promise<Articles[]>;
    findUniqueArticles(ctx: any, info: GraphQLResolveInfo, args: FindUniqueArticlesArgs): Promise<Articles | null>;
    findUniqueArticlesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueArticlesOrThrowArgs): Promise<Articles | null>;
    groupByArticles(ctx: any, info: GraphQLResolveInfo, args: GroupByArticlesArgs): Promise<ArticlesGroupBy[]>;
    updateManyArticles(ctx: any, info: GraphQLResolveInfo, args: UpdateManyArticlesArgs): Promise<AffectedRowsOutput>;
    updateOneArticles(ctx: any, info: GraphQLResolveInfo, args: UpdateOneArticlesArgs): Promise<Articles | null>;
    upsertOneArticles(ctx: any, info: GraphQLResolveInfo, args: UpsertOneArticlesArgs): Promise<Articles>;
}
