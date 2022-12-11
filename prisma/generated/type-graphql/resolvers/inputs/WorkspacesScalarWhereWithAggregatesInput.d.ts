import { BigIntNullableWithAggregatesFilter } from "../inputs/BigIntNullableWithAggregatesFilter";
import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class WorkspacesScalarWhereWithAggregatesInput {
    AND?: WorkspacesScalarWhereWithAggregatesInput[] | undefined;
    OR?: WorkspacesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: WorkspacesScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    code?: StringNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    customers?: IntNullableWithAggregatesFilter | undefined;
    users?: IntNullableWithAggregatesFilter | undefined;
    products?: BigIntNullableWithAggregatesFilter | undefined;
    tasks?: BigIntNullableWithAggregatesFilter | undefined;
    brands?: BigIntNullableWithAggregatesFilter | undefined;
    shops?: IntNullableWithAggregatesFilter | undefined;
    category?: IntNullableWithAggregatesFilter | undefined;
    isPublic?: BoolNullableWithAggregatesFilter | undefined;
    projects?: BigIntNullableWithAggregatesFilter | undefined;
    author?: StringNullableWithAggregatesFilter | undefined;
    media?: StringNullableWithAggregatesFilter | undefined;
    brands_brandsToworkspaces?: StringNullableWithAggregatesFilter | undefined;
    categories?: StringNullableWithAggregatesFilter | undefined;
    customers_customersToworkspaces?: StringNullableWithAggregatesFilter | undefined;
    products_productsToworkspaces?: StringNullableWithAggregatesFilter | undefined;
    projects_projectsToworkspaces?: StringNullableWithAggregatesFilter | undefined;
    shops_shopsToworkspaces?: StringNullableWithAggregatesFilter | undefined;
    tasks_tasksToworkspaces?: StringNullableWithAggregatesFilter | undefined;
    users_usersToworkspaces?: StringNullableWithAggregatesFilter | undefined;
}
