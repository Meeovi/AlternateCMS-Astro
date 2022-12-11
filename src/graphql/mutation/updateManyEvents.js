import gql from 'graphql-tag'
export const updateManyEvents = gql`
mutation (
    data: {
    $category: NullableStringFieldUpdateOperationsInput!,
    $city: NullableStringFieldUpdateOperationsInput!,
    $content: NullableStringFieldUpdateOperationsInput!,
    $country: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $end: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $image: NullableStringFieldUpdateOperationsInput!,
    $invitationBillingAddress: NullableStringFieldUpdateOperationsInput!,
    $invitationCustomerName: NullableStringFieldUpdateOperationsInput!,
    $invitationEmail: NullableStringFieldUpdateOperationsInput!,
    $invitationGrandTotalPurchased: NullableStringFieldUpdateOperationsInput!,
    $invitationInvoiceDate: NullableStringFieldUpdateOperationsInput!,
    $invitationOrderNumber: NullableStringFieldUpdateOperationsInput!,
    $invitationPaymentMethod: NullableStringFieldUpdateOperationsInput!,
    $invitationShippingAddress: NullableStringFieldUpdateOperationsInput!,
    $invitationStatus: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $name: NullableStringFieldUpdateOperationsInput!,
    $postalcode: NullableStringFieldUpdateOperationsInput!,
    $start: NullableStringFieldUpdateOperationsInput!,
    $state: NullableStringFieldUpdateOperationsInput!,
    $tickets: NullableStringFieldUpdateOperationsInput!,
    $type: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [EventsWhereInput!]!,
    $NOT: [EventsWhereInput!]!,
    $OR: [EventsWhereInput!]!,
    $category: StringNullableFilter!,
    $city: StringNullableFilter!,
    $content: StringNullableFilter!,
    $country: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $end: StringNullableFilter!,
    $id: BigIntFilter!,
    $image: StringNullableFilter!,
    $invitationBillingAddress: StringNullableFilter!,
    $invitationCustomerName: StringNullableFilter!,
    $invitationEmail: StringNullableFilter!,
    $invitationGrandTotalPurchased: StringNullableFilter!,
    $invitationInvoiceDate: StringNullableFilter!,
    $invitationOrderNumber: StringNullableFilter!,
    $invitationPaymentMethod: StringNullableFilter!,
    $invitationShippingAddress: StringNullableFilter!,
    $invitationStatus: StringNullableFilter!,
    $media: StringNullableFilter!,
    $name: StringNullableFilter!,
    $postalcode: StringNullableFilter!,
    $start: StringNullableFilter!,
    $state: StringNullableFilter!,
    $tickets: StringNullableFilter!,
    $type: StringNullableFilter!,
    }
  ) {
updateManyEvents (
    data: {
    category: $category,
    city: $city,
    content: $content,
    country: $country,
    created_at: $created_at,
    end: $end,
    id: $id,
    image: $image,
    invitationBillingAddress: $invitationBillingAddress,
    invitationCustomerName: $invitationCustomerName,
    invitationEmail: $invitationEmail,
    invitationGrandTotalPurchased: $invitationGrandTotalPurchased,
    invitationInvoiceDate: $invitationInvoiceDate,
    invitationOrderNumber: $invitationOrderNumber,
    invitationPaymentMethod: $invitationPaymentMethod,
    invitationShippingAddress: $invitationShippingAddress,
    invitationStatus: $invitationStatus,
    media: $media,
    name: $name,
    postalcode: $postalcode,
    start: $start,
    state: $state,
    tickets: $tickets,
    type: $type,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    category: $category,
    city: $city,
    content: $content,
    country: $country,
    created_at: $created_at,
    end: $end,
    id: $id,
    image: $image,
    invitationBillingAddress: $invitationBillingAddress,
    invitationCustomerName: $invitationCustomerName,
    invitationEmail: $invitationEmail,
    invitationGrandTotalPurchased: $invitationGrandTotalPurchased,
    invitationInvoiceDate: $invitationInvoiceDate,
    invitationOrderNumber: $invitationOrderNumber,
    invitationPaymentMethod: $invitationPaymentMethod,
    invitationShippingAddress: $invitationShippingAddress,
    invitationStatus: $invitationStatus,
    media: $media,
    name: $name,
    postalcode: $postalcode,
    start: $start,
    state: $state,
    tickets: $tickets,
    type: $type,
    }
  ) } {
    count
  }`