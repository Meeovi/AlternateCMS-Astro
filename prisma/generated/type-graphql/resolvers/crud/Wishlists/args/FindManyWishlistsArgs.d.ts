import { WishlistsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/WishlistsOrderByWithRelationAndSearchRelevanceInput";
import { WishlistsWhereInput } from "../../../inputs/WishlistsWhereInput";
import { WishlistsWhereUniqueInput } from "../../../inputs/WishlistsWhereUniqueInput";
export declare class FindManyWishlistsArgs {
    where?: WishlistsWhereInput | undefined;
    orderBy?: WishlistsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: WishlistsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "customers" | "visibility" | "products" | "quantity" | "occassions"> | undefined;
}
