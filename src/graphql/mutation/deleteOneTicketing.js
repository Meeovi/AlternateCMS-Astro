import gql from 'graphql-tag'
export const deleteOneTicketing = gql`
mutation (
    where: {
    $id: BigInt!,
    }
  ) {
deleteOneTicketing (
    where: {
    id: $id,
    }
  ) } {
    account_name
    assigned_to
    comment
    content
    created_at
    date
    date_modified
    department
    id
    level
    location
    media
    name
    priority
    products
    projects
    projects_projectsToticketing
    requester
    requester_email
    resolution
    severity
    status
    team
    ticket_type
  }`