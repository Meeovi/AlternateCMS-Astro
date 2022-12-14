import { CategoriesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CategoriesOrderByWithRelationAndSearchRelevanceInput";
import { CategoriesWhereInput } from "../../../inputs/CategoriesWhereInput";
import { CategoriesWhereUniqueInput } from "../../../inputs/CategoriesWhereUniqueInput";
export declare class FindFirstCategoriesOrThrowArgs {
    where?: CategoriesWhereInput | undefined;
    orderBy?: CategoriesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CategoriesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "thumbnail" | "name" | "visibility" | "status" | "websites" | "product" | "country" | "description" | "content" | "image" | "meta_title" | "meta_keywords" | "meta_description" | "meta_url" | "workspaces"> | undefined;
}
