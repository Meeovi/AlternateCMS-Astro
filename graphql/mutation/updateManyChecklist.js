import gql from 'graphql-tag'
export const updateManyChecklist = gql`
mutation (
    data: {
    $country: NullableStringFieldUpdateOperationsInput!,
    $created_at: NullableDateTimeFieldUpdateOperationsInput!,
    $description: NullableStringFieldUpdateOperationsInput!,
    $id: BigIntFieldUpdateOperationsInput!,
    $location: NullableStringFieldUpdateOperationsInput!,
    $manager: NullableStringFieldUpdateOperationsInput!,
    $media: NullableStringFieldUpdateOperationsInput!,
    $prod_id: NullableStringFieldUpdateOperationsInput!,
    $project: NullableStringFieldUpdateOperationsInput!,
    $region: NullableStringFieldUpdateOperationsInput!,
    $regional_manager: NullableStringFieldUpdateOperationsInput!,
    $task: NullableStringFieldUpdateOperationsInput!,
    $ticket: NullableStringFieldUpdateOperationsInput!,
    $trainings: NullableStringFieldUpdateOperationsInput!,
    $type: NullableStringFieldUpdateOperationsInput!,
    $username: NullableStringFieldUpdateOperationsInput!,
    }
    where: {
    $AND: [ChecklistWhereInput!]!,
    $NOT: [ChecklistWhereInput!]!,
    $OR: [ChecklistWhereInput!]!,
    $country: StringNullableFilter!,
    $created_at: DateTimeNullableFilter!,
    $description: StringNullableFilter!,
    $id: BigIntFilter!,
    $location: StringNullableFilter!,
    $manager: StringNullableFilter!,
    $media: StringNullableFilter!,
    $prod_id: StringNullableFilter!,
    $project: StringNullableFilter!,
    $region: StringNullableFilter!,
    $regional_manager: StringNullableFilter!,
    $task: StringNullableFilter!,
    $ticket: StringNullableFilter!,
    $trainings: StringNullableFilter!,
    $type: StringNullableFilter!,
    $username: StringNullableFilter!,
    }
  ) {
updateManyChecklist (
    data: {
    country: $country,
    created_at: $created_at,
    description: $description,
    id: $id,
    location: $location,
    manager: $manager,
    media: $media,
    prod_id: $prod_id,
    project: $project,
    region: $region,
    regional_manager: $regional_manager,
    task: $task,
    ticket: $ticket,
    trainings: $trainings,
    type: $type,
    username: $username,
    }
    where: {
    AND: $AND,
    NOT: $NOT,
    OR: $OR,
    country: $country,
    created_at: $created_at,
    description: $description,
    id: $id,
    location: $location,
    manager: $manager,
    media: $media,
    prod_id: $prod_id,
    project: $project,
    region: $region,
    regional_manager: $regional_manager,
    task: $task,
    ticket: $ticket,
    trainings: $trainings,
    type: $type,
    username: $username,
    }
  ) } {
    count
  }`