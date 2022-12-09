import gql from 'graphql-tag'
export const deleteManyWorkspaces = gql`
mutation (
    where: {
    $AND: [WorkspacesWhereInput!]!,
    $NOT: [WorkspacesWhereInput!]!,
    $OR: [WorkspacesWhereInput!]!,
    $author: StringNullableFilter!,
    $brands: BigIntNullableFilter!,
    $brands_brandsToworkspaces: StringNullableFilter!,
    $categories: StringNullableFilter!,
    $category: IntNullableFilter!,
    $code: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $customers: IntNullableFilter!,
    $customers_customersToworkspaces: StringNullableFilter!,
    $description: StringNullableFilter!,
    $id: BigIntFilter!,
    $isPublic: BoolNullableFilter!,
    $media: StringNullableFilter!,
    $name: StringNullableFilter!,
    $products: BigIntNullableFilter!,
    $products_productsToworkspaces: StringNullableFilter!,
    $projects: BigIntNullableFilter!,
    $projects_projectsToworkspaces: StringNullableFilter!,
    $shops: IntNullableFilter!,
    $shops_shopsToworkspaces: StringNullableFilter!,
    $tasks: BigIntNullableFilter!,
    $tasks_tasksToworkspaces: StringNullableFilter!,
    $users: IntNullableFilter!,
    $users_usersToworkspaces: StringNullableFilter!,
    }
  ) {
deleteManyWorkspaces (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    author: $author,
    brands: $brands,
    brands_brandsToworkspaces: $brands_brandsToworkspaces,
    categories: $categories,
    category: $category,
    code: $code,
    created_at: $created_at,
    customers: $customers,
    customers_customersToworkspaces: $customers_customersToworkspaces,
    description: $description,
    id: $id,
    isPublic: $isPublic,
    media: $media,
    name: $name,
    products: $products,
    products_productsToworkspaces: $products_productsToworkspaces,
    projects: $projects,
    projects_projectsToworkspaces: $projects_projectsToworkspaces,
    shops: $shops,
    shops_shopsToworkspaces: $shops_shopsToworkspaces,
    tasks: $tasks,
    tasks_tasksToworkspaces: $tasks_tasksToworkspaces,
    users: $users,
    users_usersToworkspaces: $users_usersToworkspaces,
    }
  ) } {
    count
  }`