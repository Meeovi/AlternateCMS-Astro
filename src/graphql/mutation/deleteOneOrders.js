import gql from 'graphql-tag'
export const deleteOneOrders = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneOrders (
    where: {
    id: $id,
    }
  ) } {
    action
    allocated_sources
    bill_to_name
    braintree_transaction_source
    cust_id
    customers
    grand_total_base
    grand_total_purchased
    id
    prod_id
    products
    purchase_date
    purchase_point
    quotes
    ship_to_name
    status
    transactions
  }`