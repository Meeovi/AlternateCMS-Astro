import gql from 'graphql-tag'
export const deleteManyAttributes = gql`
mutation (
    where: {
    $AND: [AttributesWhereInput!]!,
    $NOT: [AttributesWhereInput!]!,
    $OR: [AttributesWhereInput!]!,
    $allow_html_tags_storefront: BoolNullableFilter!,
    $attribute_class: StringNullableFilter!,
    $attribute_code: StringNullableFilter!,
    $attribute_value: StringNullableFilter!,
    $column_options: StringNullableFilter!,
    $default_label: StringNullableFilter!,
    $faceted_navigation: BoolNullableFilter!,
    $filter_options: StringNullableFilter!,
    $id: IntFilter!,
    $isPublic: StringNullableFilter!,
    $layered_navigation: BoolNullableFilter!,
    $meta_description: StringNullableFilter!,
    $meta_name: BoolNullableFilter!,
    $meta_url: StringNullableFilter!,
    $position: StringNullableFilter!,
    $prod_id: BigIntFilter!,
    $product_attribute_set: StringNullableFilter!,
    $products: StringNullableFilter!,
    $promo_rule_conditions: BoolNullableFilter!,
    $search_results_layered_navigation: BoolNullableFilter!,
    $use_search: StringNullableFilter!,
    $used_product_listing: BoolNullableFilter!,
    $used_sorting_product_listing: BoolNullableFilter!,
    $visible_catalog_pages_storefront: BoolNullableFilter!,
    }
  ) {
deleteManyAttributes (
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    allow_html_tags_storefront: $allow_html_tags_storefront,
    attribute_class: $attribute_class,
    attribute_code: $attribute_code,
    attribute_value: $attribute_value,
    column_options: $column_options,
    default_label: $default_label,
    faceted_navigation: $faceted_navigation,
    filter_options: $filter_options,
    id: $id,
    isPublic: $isPublic,
    layered_navigation: $layered_navigation,
    meta_description: $meta_description,
    meta_name: $meta_name,
    meta_url: $meta_url,
    position: $position,
    prod_id: $prod_id,
    product_attribute_set: $product_attribute_set,
    products: $products,
    promo_rule_conditions: $promo_rule_conditions,
    search_results_layered_navigation: $search_results_layered_navigation,
    use_search: $use_search,
    used_product_listing: $used_product_listing,
    used_sorting_product_listing: $used_sorting_product_listing,
    visible_catalog_pages_storefront: $visible_catalog_pages_storefront,
    }
  ) } {
    count
  }`
