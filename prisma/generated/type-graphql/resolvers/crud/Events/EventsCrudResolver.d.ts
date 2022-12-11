import { GraphQLResolveInfo } from "graphql";
import { AggregateEventsArgs } from "./args/AggregateEventsArgs";
import { CreateManyEventsArgs } from "./args/CreateManyEventsArgs";
import { CreateOneEventsArgs } from "./args/CreateOneEventsArgs";
import { DeleteManyEventsArgs } from "./args/DeleteManyEventsArgs";
import { DeleteOneEventsArgs } from "./args/DeleteOneEventsArgs";
import { FindFirstEventsArgs } from "./args/FindFirstEventsArgs";
import { FindFirstEventsOrThrowArgs } from "./args/FindFirstEventsOrThrowArgs";
import { FindManyEventsArgs } from "./args/FindManyEventsArgs";
import { FindUniqueEventsArgs } from "./args/FindUniqueEventsArgs";
import { FindUniqueEventsOrThrowArgs } from "./args/FindUniqueEventsOrThrowArgs";
import { GroupByEventsArgs } from "./args/GroupByEventsArgs";
import { UpdateManyEventsArgs } from "./args/UpdateManyEventsArgs";
import { UpdateOneEventsArgs } from "./args/UpdateOneEventsArgs";
import { UpsertOneEventsArgs } from "./args/UpsertOneEventsArgs";
import { Events } from "../../../models/Events";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEvents } from "../../outputs/AggregateEvents";
import { EventsGroupBy } from "../../outputs/EventsGroupBy";
export declare class EventsCrudResolver {
    aggregateEvents(ctx: any, info: GraphQLResolveInfo, args: AggregateEventsArgs): Promise<AggregateEvents>;
    createManyEvents(ctx: any, info: GraphQLResolveInfo, args: CreateManyEventsArgs): Promise<AffectedRowsOutput>;
    createOneEvents(ctx: any, info: GraphQLResolveInfo, args: CreateOneEventsArgs): Promise<Events>;
    deleteManyEvents(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEventsArgs): Promise<AffectedRowsOutput>;
    deleteOneEvents(ctx: any, info: GraphQLResolveInfo, args: DeleteOneEventsArgs): Promise<Events | null>;
    findFirstEvents(ctx: any, info: GraphQLResolveInfo, args: FindFirstEventsArgs): Promise<Events | null>;
    findFirstEventsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstEventsOrThrowArgs): Promise<Events | null>;
    findManyEvents(ctx: any, info: GraphQLResolveInfo, args: FindManyEventsArgs): Promise<Events[]>;
    findUniqueEvents(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEventsArgs): Promise<Events | null>;
    findUniqueEventsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEventsOrThrowArgs): Promise<Events | null>;
    groupByEvents(ctx: any, info: GraphQLResolveInfo, args: GroupByEventsArgs): Promise<EventsGroupBy[]>;
    updateManyEvents(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEventsArgs): Promise<AffectedRowsOutput>;
    updateOneEvents(ctx: any, info: GraphQLResolveInfo, args: UpdateOneEventsArgs): Promise<Events | null>;
    upsertOneEvents(ctx: any, info: GraphQLResolveInfo, args: UpsertOneEventsArgs): Promise<Events>;
}
