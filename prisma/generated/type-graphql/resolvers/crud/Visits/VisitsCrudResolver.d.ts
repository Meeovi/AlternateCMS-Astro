import { GraphQLResolveInfo } from "graphql";
import { AggregateVisitsArgs } from "./args/AggregateVisitsArgs";
import { CreateManyVisitsArgs } from "./args/CreateManyVisitsArgs";
import { CreateOneVisitsArgs } from "./args/CreateOneVisitsArgs";
import { DeleteManyVisitsArgs } from "./args/DeleteManyVisitsArgs";
import { DeleteOneVisitsArgs } from "./args/DeleteOneVisitsArgs";
import { FindFirstVisitsArgs } from "./args/FindFirstVisitsArgs";
import { FindFirstVisitsOrThrowArgs } from "./args/FindFirstVisitsOrThrowArgs";
import { FindManyVisitsArgs } from "./args/FindManyVisitsArgs";
import { FindUniqueVisitsArgs } from "./args/FindUniqueVisitsArgs";
import { FindUniqueVisitsOrThrowArgs } from "./args/FindUniqueVisitsOrThrowArgs";
import { GroupByVisitsArgs } from "./args/GroupByVisitsArgs";
import { UpdateManyVisitsArgs } from "./args/UpdateManyVisitsArgs";
import { UpdateOneVisitsArgs } from "./args/UpdateOneVisitsArgs";
import { UpsertOneVisitsArgs } from "./args/UpsertOneVisitsArgs";
import { Visits } from "../../../models/Visits";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVisits } from "../../outputs/AggregateVisits";
import { VisitsGroupBy } from "../../outputs/VisitsGroupBy";
export declare class VisitsCrudResolver {
    aggregateVisits(ctx: any, info: GraphQLResolveInfo, args: AggregateVisitsArgs): Promise<AggregateVisits>;
    createManyVisits(ctx: any, info: GraphQLResolveInfo, args: CreateManyVisitsArgs): Promise<AffectedRowsOutput>;
    createOneVisits(ctx: any, info: GraphQLResolveInfo, args: CreateOneVisitsArgs): Promise<Visits>;
    deleteManyVisits(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVisitsArgs): Promise<AffectedRowsOutput>;
    deleteOneVisits(ctx: any, info: GraphQLResolveInfo, args: DeleteOneVisitsArgs): Promise<Visits | null>;
    findFirstVisits(ctx: any, info: GraphQLResolveInfo, args: FindFirstVisitsArgs): Promise<Visits | null>;
    findFirstVisitsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstVisitsOrThrowArgs): Promise<Visits | null>;
    findManyVisits(ctx: any, info: GraphQLResolveInfo, args: FindManyVisitsArgs): Promise<Visits[]>;
    findUniqueVisits(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVisitsArgs): Promise<Visits | null>;
    findUniqueVisitsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVisitsOrThrowArgs): Promise<Visits | null>;
    groupByVisits(ctx: any, info: GraphQLResolveInfo, args: GroupByVisitsArgs): Promise<VisitsGroupBy[]>;
    updateManyVisits(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVisitsArgs): Promise<AffectedRowsOutput>;
    updateOneVisits(ctx: any, info: GraphQLResolveInfo, args: UpdateOneVisitsArgs): Promise<Visits | null>;
    upsertOneVisits(ctx: any, info: GraphQLResolveInfo, args: UpsertOneVisitsArgs): Promise<Visits>;
}
