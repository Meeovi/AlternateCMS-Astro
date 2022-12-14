import { SegmentsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SegmentsOrderByWithRelationAndSearchRelevanceInput";
import { SegmentsWhereInput } from "../../../inputs/SegmentsWhereInput";
import { SegmentsWhereUniqueInput } from "../../../inputs/SegmentsWhereUniqueInput";
export declare class AggregateSegmentsArgs {
    where?: SegmentsWhereInput | undefined;
    orderBy?: SegmentsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SegmentsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
