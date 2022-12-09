import gql from 'graphql-tag'
export const deleteOneQuotes = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneQuotes (
    where: {
    id: $id,
    }
  ) } {
    account
    approval_issues
    approval_status
    assigned_to
    billing_city
    billing_country
    billing_postal
    billing_state
    billing_street
    categories
    contact
    created_at
    currency
    cust_id
    customers
    customers_customersToquotes
    discount
    grand_total
    id
    invoice_status
    line_item_discount
    line_item_group_total
    line_item_name
    line_item_subtotal
    line_item_tax
    line_item_total
    name
    order_id
    orders
    payment_terms
    prod_id
    products_productsToquotes
    quote_stage
    shipping
    shipping_city
    shipping_country
    shipping_postal
    shipping_state
    shipping_street
    shipping_tax
    subtotal
    tax
    total
    valid_until
  }`
