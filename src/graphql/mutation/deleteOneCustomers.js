import gql from 'graphql-tag'
export const deleteOneCustomers = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneCustomers (
    where: {
    id: $id,
    }
  ) } {
    Address
    address_two
    comments
    confirmed_email
    country
    credit_memos
    customer_group
    customer_payment
    customer_since
    date_of_birth
    description
    email
    emails
    first_name
    gender
    id
    image
    last_name
    mediamanager
    messages
    middle_name
    name_prefix
    name_suffix
    newsletter_subscribers
    orders
    password
    payment_type
    phone
    product
    projects
    quotes
    returns
    short_description
    state
    tax_vat_number
    thumbnail
    username
    websites
    workspaces
    zipcode
  }`