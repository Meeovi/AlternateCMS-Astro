import gql from 'graphql-tag'
export const deleteOneProducts = gql`
mutation (
    where: {
    $id: BigInt!,
    $sku: BigInt!,
    }
  ) {
deleteOneProducts (
    where: {
    id: $id,
    sku: $sku,
    }
  ) } {
    attributes
    brand
    brands
    categories
    content
    contract
    cost_string
    country
    coupons
    created_at
    credit_memos
    customer_type
    family
    file
    format
    height
    id
    image
    manufacture
    manufacturer
    manufacturer_part_number
    mediamanager
    meta_description
    meta_keywords
    meta_title
    meta_url
    name
    occassions
    occassions_occassionsToproducts
    orders
    other_products
    part_number
    price
    product
    product_attribute
    product_types
    products
    quantity_per_source
    quotes
    rating
    related_product
    returns
    salable_quantity
    short_description
    size
    sku
    status
    stock_status
    tags
    tax_class
    tax_rate
    tax_rule
    thumbnail
    trainings
    types
    variants
    visibility
    websites
    weight
    workspaces
    zone
  }`