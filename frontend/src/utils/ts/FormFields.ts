export type Field = {
  type?: string;
  span?: string;
  fullWidth?: boolean;
};

export function groupFields(fields: Field[]): (Field | Field[])[] {
  const groupedFields: (Field | Field[])[] = [];

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];

    if (field.fullWidth) {
      groupedFields.push(field);
    } else {
      const nextField = fields[i + 1];

      if (nextField && !nextField.fullWidth) {
        groupedFields.push([field, nextField]);
        i++;
      } else {
        groupedFields.push([field]);
      }
    }
  }

  return groupedFields;
}
