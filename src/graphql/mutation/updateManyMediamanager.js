import gql from 'graphql-tag'
export const updateManyMediamanager = gql`
mutation (
    data: {
    $agreements: NullableStringFieldUpdateOperationsInput!,
    $agreements_agreementsTomediamanager: NullableStringFieldUpdateOperationsInput!,
    $albums: NullableStringFieldUpdateOperationsInput!,
    $author: NullableStringFieldUpdateOperationsInput!,
    $brands: NullableStringFieldUpdateOperationsInput!,
    $brands_brandsTomediamanager: NullableStringFieldUpdateOperationsInput!,
    $comment: NullableStringFieldUpdateOperationsInput!,
    $comments: NullableStringFieldUpdateOperationsInput!,
    $content_type: NullableStringFieldUpdateOperationsInput!,
    $copyright: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $dimensions: NullableStringFieldUpdateOperationsInput!,
    $expiration_date: NullableStringFieldUpdateOperationsInput!,
    $keywords: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $members: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $products_mediamanagerToproducts: NullableStringFieldUpdateOperationsInput!,
    $status: NullableStringFieldUpdateOperationsInput!,
    $tags: NullableStringFieldUpdateOperationsInput!,
    $task_description: NullableStringFieldUpdateOperationsInput!,
    $task_name: NullableStringFieldUpdateOperationsInput!,
    $task_type: NullableStringFieldUpdateOperationsInput!,
    $tasks: NullableStringFieldUpdateOperationsInput!,
    $users: NullableStringFieldUpdateOperationsInput!,
    $versions: NullableStringFieldUpdateOperationsInput!,
    $watermark_description: NullableStringFieldUpdateOperationsInput!,
    $watermark_media: NullableStringFieldUpdateOperationsInput!,
    $watermark_name: NullableStringFieldUpdateOperationsInput!,
    $workspace: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [MediamanagerWhereInput!]!,
    $NOT: [MediamanagerWhereInput!]!,
    $OR: [MediamanagerWhereInput!]!,
    $agreements: StringNullableFilter!,
    $agreements_agreementsTomediamanager: StringNullableFilter!,
    $albums: StringNullableFilter!,
    $author: StringNullableFilter!,
    $brands: StringNullableFilter!,
    $brands_brandsTomediamanager: StringNullableFilter!,
    $comment: StringNullableFilter!,
    $comments: StringNullableFilter!,
    $content_type: StringNullableFilter!,
    $copyright: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $customers: StringNullableFilter!,
    $description: StringNullableFilter!,
    $dimensions: StringNullableFilter!,
    $expiration_date: StringNullableFilter!,
    $id: IntFilter!,
    $keywords: StringNullableFilter!,
    $media: StringNullableFilter!,
    $members: StringNullableFilter!,
    $name: StringNullableFilter!,
    $products: StringNullableFilter!,
    $products_mediamanagerToproducts: StringNullableFilter!,
    $status: StringNullableFilter!,
    $tags: StringNullableFilter!,
    $task_description: StringNullableFilter!,
    $task_name: StringNullableFilter!,
    $task_type: StringNullableFilter!,
    $tasks: StringNullableFilter!,
    $users: StringNullableFilter!,
    $versions: StringNullableFilter!,
    $watermark_description: StringNullableFilter!,
    $watermark_media: StringNullableFilter!,
    $watermark_name: StringNullableFilter!,
    $workspace: StringNullableFilter!,
    }
  ) {
updateManyMediamanager (
    data: {
    agreements: $agreements,
    agreements_agreementsTomediamanager: $agreements_agreementsTomediamanager,
    albums: $albums,
    author: $author,
    brands: $brands,
    brands_brandsTomediamanager: $brands_brandsTomediamanager,
    comment: $comment,
    comments: $comments,
    content_type: $content_type,
    copyright: $copyright,
    created_at: $created_at,
    customers: $customers,
    description: $description,
    dimensions: $dimensions,
    expiration_date: $expiration_date,
    keywords: $keywords,
    media: $media,
    members: $members,
    name: $name,
    products: $products,
    products_mediamanagerToproducts: $products_mediamanagerToproducts,
    status: $status,
    tags: $tags,
    task_description: $task_description,
    task_name: $task_name,
    task_type: $task_type,
    tasks: $tasks,
    users: $users,
    versions: $versions,
    watermark_description: $watermark_description,
    watermark_media: $watermark_media,
    watermark_name: $watermark_name,
    workspace: $workspace,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    agreements: $agreements,
    agreements_agreementsTomediamanager: $agreements_agreementsTomediamanager,
    albums: $albums,
    author: $author,
    brands: $brands,
    brands_brandsTomediamanager: $brands_brandsTomediamanager,
    comment: $comment,
    comments: $comments,
    content_type: $content_type,
    copyright: $copyright,
    created_at: $created_at,
    customers: $customers,
    description: $description,
    dimensions: $dimensions,
    expiration_date: $expiration_date,
    id: $id,
    keywords: $keywords,
    media: $media,
    members: $members,
    name: $name,
    products: $products,
    products_mediamanagerToproducts: $products_mediamanagerToproducts,
    status: $status,
    tags: $tags,
    task_description: $task_description,
    task_name: $task_name,
    task_type: $task_type,
    tasks: $tasks,
    users: $users,
    versions: $versions,
    watermark_description: $watermark_description,
    watermark_media: $watermark_media,
    watermark_name: $watermark_name,
    workspace: $workspace,
    }
  ) } {
    count
  }`
