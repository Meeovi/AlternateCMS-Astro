import gql from 'graphql-tag'
export const deleteOneFullfillments = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneFullfillments (
    where: {
    id: $id,
    }
  ) } {
    address
    address_two
    city
    company
    country
    country_area
    created_at
    id
    name
    phone
    pickup
    shipping_zones
    state
    stock
    zipcode
  }`
