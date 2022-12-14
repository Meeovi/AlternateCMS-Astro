import gql from 'graphql-tag'
export const updateManyContent_type = gql`
mutation (
    data: {
    $boolean: NullableBoolFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $database_name: NullableStringFieldUpdateOperationsInput!,
    $date: NullableDateTimeFieldUpdateOperationsInput!,
    $email: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $json: JSON!,
    $link: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $number: NullableDecimalFieldUpdateOperationsInput!,
    $password: NullableStringFieldUpdateOperationsInput!,
    $rich_text: NullableStringFieldUpdateOperationsInput!,
    $text: NullableStringFieldUpdateOperationsInput!,
    $time: NullableDateTimeFieldUpdateOperationsInput!,
    $timestamp: NullableDateTimeFieldUpdateOperationsInput!,
    $uid: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [Content_typeWhereInput!]!,
    $NOT: [Content_typeWhereInput!]!,
    $OR: [Content_typeWhereInput!]!,
    $boolean: BoolNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $database_name: StringNullableFilter!,
    $date: DateTimeNullableFilter!,
    $email: StringNullableFilter!,
    $id: BigIntFilter!,
    $json: JsonNullableFilter!,
    $link: StringNullableFilter!,
    $media: StringNullableFilter!,
    $number: DecimalNullableFilter!,
    $password: StringNullableFilter!,
    $rich_text: StringNullableFilter!,
    $text: StringNullableFilter!,
    $time: DateTimeNullableFilter!,
    $timestamp: DateTimeNullableFilter!,
    $uid: StringNullableFilter!,
    }
  ) {
updateManyContent_type (
    data: {
    boolean: $boolean,
    created_at: $created_at,
    database_name: $database_name,
    date: $date,
    email: $email,
    id: $id,
    json: $json,
    link: $link,
    media: $media,
    number: $number,
    password: $password,
    rich_text: $rich_text,
    text: $text,
    time: $time,
    timestamp: $timestamp,
    uid: $uid,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    boolean: $boolean,
    created_at: $created_at,
    database_name: $database_name,
    date: $date,
    email: $email,
    id: $id,
    json: $json,
    link: $link,
    media: $media,
    number: $number,
    password: $password,
    rich_text: $rich_text,
    text: $text,
    time: $time,
    timestamp: $timestamp,
    uid: $uid,
    }
  ) } {
    count
  }`
