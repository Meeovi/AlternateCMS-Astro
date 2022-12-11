import gql from 'graphql-tag'
export const deleteOneMediamanager = gql`
mutation (
    where: {
    $id: Int!,
    }
  ) {
deleteOneMediamanager (
    where: {
    id: $id,
    }
  ) } {
    agreements
    agreements_agreementsTomediamanager
    albums
    author
    brands
    brands_brandsTomediamanager
    comment
    comments
    content_type
    copyright
    created_at
    customers
    description
    dimensions
    expiration_date
    id
    keywords
    media
    members
    name
    products
    products_mediamanagerToproducts
    status
    tags
    task_description
    task_name
    task_type
    tasks
    users
    versions
    watermark_description
    watermark_media
    watermark_name
    workspace
  }`