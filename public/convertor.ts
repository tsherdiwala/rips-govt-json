import { FieldResponseItem, Section, SubmissionItem } from "./types/index";

type FieldsOutput = {
  id: number;
  fieldName: string;
  inputValue: string | undefined;
  serialNumber: string | undefined;
  subFields: FieldsOutput[];
  serialSubFields: {
    [serial: string]: FieldsOutput[];
  };
};

export const doConvert = ({
  fields,
  submissionItem,
  sections,
}: {
  fields: FieldResponseItem[];
  sections: Section[];
  submissionItem: SubmissionItem;
}) => {
  const sectionToFieldResponses: {
    [sectionId: string]: {
      [parentItemId: string]: FieldsOutput[];
    };
  } = {};

  const mapFieldToOutput = (fieldResponse: FieldsOutput): any => {
    if (Object.keys(fieldResponse.serialSubFields).length > 0) {
      return Object.keys(fieldResponse.serialSubFields).map((key) => {
        return mapFieldToOutput({
          fieldName: fieldResponse.fieldName,
          id: fieldResponse.id,
          inputValue: fieldResponse.inputValue,
          serialNumber: key,
          subFields: fieldResponse.serialSubFields[key].map((field) => {
            return {
              ...field,
              serialNumber: undefined,
            };
          }),
          serialSubFields: {},
        });
      });
    } else {
      return {
        fieldName: fieldResponse.fieldName,
        inputValue: fieldResponse.inputValue,
        serialNumber:
          fieldResponse.serialNumber == "no-serial"
            ? undefined
            : fieldResponse.serialNumber,
        subFields:
          fieldResponse.subFields.length > 0
            ? fieldResponse.subFields.map((subField) => {
                return mapFieldToOutput(subField);
              })
            : undefined,
      };
    }
  };

  const fieldsCopy = [...fields];

  let index = 0;
  while (true) {
    const element = fieldsCopy.shift();
    console.log("loop start: ", index++, element);
    if (!element) {
      break;
    }

    if (!sectionToFieldResponses[element.sectionId]) {
      sectionToFieldResponses[element.sectionId] = {};
    }

    const serialNumber = element.parentSerialNumber ?? "no-serial";

    if (!element.parentItemId) {
      // this is the parent itself and hence can go in section
      sectionToFieldResponses[element.sectionId] ??= {};
      sectionToFieldResponses[element.sectionId][element.id!] = [
        {
          id: element.id!,
          fieldName: element.fieldName,
          inputValue: element.inputValue,
          serialNumber: serialNumber,
          subFields: [],
          serialSubFields: {},
        },
      ];
      continue;
    }

    if (!sectionToFieldResponses[element.sectionId][element.parentItemId]) {
      // there is no parent yet hence push to the end and process later
      fieldsCopy.push(element);
      continue;
    }

    const indexOfSectionResponseToInsert = sectionToFieldResponses[
      element.sectionId
    ][element.parentItemId].findIndex(
      (item) => item.id == element.parentItemId
    );

    if (index >= 0) {
      // there is an index at which it can be inserted
      if (element.parentSerialNumber) {
        sectionToFieldResponses[element.sectionId][element.parentItemId][
          indexOfSectionResponseToInsert
        ].serialSubFields ??= {};

        sectionToFieldResponses[element.sectionId][element.parentItemId][
          indexOfSectionResponseToInsert
        ].serialSubFields[element.parentSerialNumber] ??= [];

        sectionToFieldResponses[element.sectionId][element.parentItemId][
          indexOfSectionResponseToInsert
        ].serialSubFields[element.parentSerialNumber].push({
          id: element.id!,
          fieldName: element.fieldName,
          inputValue: element.inputValue,
          serialNumber: serialNumber,
          subFields: [],
          serialSubFields: {},
        });
      } else {
        sectionToFieldResponses[element.sectionId][element.parentItemId][
          indexOfSectionResponseToInsert
        ].subFields.push({
          id: element.id!,
          fieldName: element.fieldName,
          inputValue: element.inputValue,
          serialNumber: serialNumber,
          subFields: [],
          serialSubFields: {},
        });
      }
    }
  }

  return [
    {
      approvalId: submissionItem.approvalId,
      swsId: submissionItem.swsId,
      projectNumber: submissionItem.projectNumber,
      forms: [
        {
          name: "P2 Form (Directorate of Sugar)",
          sections: sections.map((section) => {
            const sectionResponses = sectionToFieldResponses[section.id!];
            return {
              sectionName: section.sectionName,
              fieldResponses: Object.keys(sectionResponses)
                .map((sectionId) => {
                  if (sectionResponses[sectionId].length == 0) {
                    return null;
                  } else if (sectionResponses[sectionId].length == 1) {
                    return mapFieldToOutput(sectionResponses[sectionId][0]);
                  } else {
                    return sectionResponses[sectionId].map((response) =>
                      mapFieldToOutput(response)
                    );
                  }
                })
                .filter((data) => !!data),
            };
          }),
        },
      ],
    },
  ];
};
