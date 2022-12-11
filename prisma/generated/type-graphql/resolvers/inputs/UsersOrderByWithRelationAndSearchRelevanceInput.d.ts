import { UsersOrderByRelevanceInput } from "../inputs/UsersOrderByRelevanceInput";
export declare class UsersOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    first_name?: "asc" | "desc" | undefined;
    last_name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    interface_locale?: "asc" | "desc" | undefined;
    value?: "asc" | "desc" | undefined;
    permissions?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    emails?: "asc" | "desc" | undefined;
    mediamanager?: "asc" | "desc" | undefined;
    messages?: "asc" | "desc" | undefined;
    projects?: "asc" | "desc" | undefined;
    workspaces?: "asc" | "desc" | undefined;
    _relevance?: UsersOrderByRelevanceInput | undefined;
}
