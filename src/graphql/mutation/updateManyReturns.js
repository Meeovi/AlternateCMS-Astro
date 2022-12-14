import gql from 'graphql-tag'
export const updateManyReturns = gql`
mutation (
    data: {
    $case_id: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $customers: NullableStringFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $height: NullableStringFieldUpdateOperationsInput!,
    $howShipped: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $liquidationReason: NullableStringFieldUpdateOperationsInput!,
    $location: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $products: NullableStringFieldUpdateOperationsInput!,
    $return_prefix: NullableStringFieldUpdateOperationsInput!,
    $shipTo: NullableStringFieldUpdateOperationsInput!,
    $shippingDescription: NullableStringFieldUpdateOperationsInput!,
    $shippingNumber: NullableStringFieldUpdateOperationsInput!,
    $status: NullableStringFieldUpdateOperationsInput!,
    $type: NullableStringFieldUpdateOperationsInput!,
    $validity: NullableStringFieldUpdateOperationsInput!,
    $weight: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [ReturnsWhereInput!]!,
    $NOT: [ReturnsWhereInput!]!,
    $OR: [ReturnsWhereInput!]!,
    $case_id: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $customers: StringNullableFilter!,
    $description: StringNullableFilter!,
    $height: StringNullableFilter!,
    $howShipped: StringNullableFilter!,
    $id: BigIntFilter!,
    $liquidationReason: StringNullableFilter!,
    $location: StringNullableFilter!,
    $media: StringNullableFilter!,
    $name: StringNullableFilter!,
    $products: StringNullableFilter!,
    $return_prefix: StringNullableFilter!,
    $shipTo: StringNullableFilter!,
    $shippingDescription: StringNullableFilter!,
    $shippingNumber: StringNullableFilter!,
    $status: StringNullableFilter!,
    $type: StringNullableFilter!,
    $validity: StringNullableFilter!,
    $weight: StringNullableFilter!,
    }
  ) {
updateManyReturns (
    data: {
    case_id: $case_id,
    created_at: $created_at,
    customers: $customers,
    description: $description,
    height: $height,
    howShipped: $howShipped,
    id: $id,
    liquidationReason: $liquidationReason,
    location: $location,
    media: $media,
    name: $name,
    products: $products,
    return_prefix: $return_prefix,
    shipTo: $shipTo,
    shippingDescription: $shippingDescription,
    shippingNumber: $shippingNumber,
    status: $status,
    type: $type,
    validity: $validity,
    weight: $weight,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    case_id: $case_id,
    created_at: $created_at,
    customers: $customers,
    description: $description,
    height: $height,
    howShipped: $howShipped,
    id: $id,
    liquidationReason: $liquidationReason,
    location: $location,
    media: $media,
    name: $name,
    products: $products,
    return_prefix: $return_prefix,
    shipTo: $shipTo,
    shippingDescription: $shippingDescription,
    shippingNumber: $shippingNumber,
    status: $status,
    type: $type,
    validity: $validity,
    weight: $weight,
    }
  ) } {
    count
  }`
