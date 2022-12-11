import { ApitokenOrderByRelevanceInput } from "../inputs/ApitokenOrderByRelevanceInput";
export declare class ApitokenOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    token_type?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    token?: "asc" | "desc" | undefined;
    _relevance?: ApitokenOrderByRelevanceInput | undefined;
}
