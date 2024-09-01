import { FieldResponseItem, Form, Section, Submission, SubmissionItem } from "./types/index";

export const submission : Submission = {
    id: 1,
    status: "pending"
}

export const submissionItem: SubmissionItem = {
    id: 1,
    approvalId: "M009_D001_A076",
    projectNumber: "P_11",
    submissionId: submission.id!,
    swsId: "SW3795947361"
}

export const form : Form = {
    id: 1,
    name: "P2 Form (Directorate of Sugar)",
    submissionItemId: submissionItem.id!
}

let sectionId = 1;
const sectionCaneCrushed : Section = {
    id: sectionId++,
    sectionName: "Cane Crushed",
    formId: form.id!,
}

const sectionDispatches : Section = {
    id: sectionId++,
    sectionName: "Dispatches",
    formId: form.id!,
}

export const sections = [
    sectionCaneCrushed,
    sectionDispatches
]

let fieldId = 1;

const fieldsInternal: FieldResponseItem[] = [];

const caneCrushedField1 : FieldResponseItem = {
    id: fieldId++,
    fieldName: "Capacity (In TCD for sugar mills/Tons Per Day (TPD) for refineries)",
    inputValue: "100",
    parentItemId: undefined,
    sectionId: sectionCaneCrushed.id!,
    parentSerialNumber: undefined,
}
fieldsInternal.push(caneCrushedField1);

const caneCrushedField2 : FieldResponseItem = {
    id: fieldId++,
    fieldName: "Cane Crushed - During the Month (MT)",
    inputValue: "100",
    parentItemId: undefined,
    sectionId: sectionCaneCrushed.id!,
    parentSerialNumber: undefined,
}
fieldsInternal.push(caneCrushedField2);

const caneCrushedField3 : FieldResponseItem = {
    id: fieldId++,
    inputValue: undefined,
    fieldName: "Cane Crushed - With Sub Fields",
    parentItemId: undefined,
    sectionId: sectionCaneCrushed.id!,
    parentSerialNumber: undefined,
}
fieldsInternal.push(caneCrushedField3);

const caneCrushedField3SubField1 : FieldResponseItem = {
    id: fieldId++,
    fieldName: "Cane Crushed - During the Month (MT)",
    inputValue: "100",
    parentItemId: caneCrushedField3.id!,
    sectionId: sectionCaneCrushed.id!,
    parentSerialNumber: undefined,
}
fieldsInternal.push(caneCrushedField3SubField1);

const dispatchesField1 : FieldResponseItem = {
    id: fieldId++,
    fieldName: "Select",
    inputValue: "6.1.1 Domestic Dispatch w.r.t. monthly release quantity\",\"6.1.2 Domestic Dispatch w.r.t. additional allotment, if any\"",
    parentItemId: undefined,
    sectionId: sectionDispatches.id!,
    parentSerialNumber: undefined,
}
fieldsInternal.push(dispatchesField1);

const dispatchesField2 : FieldResponseItem = {
    id: fieldId++,
    fieldName: "Select - with sub field",
    inputValue: undefined,
    parentItemId: undefined,
    sectionId: sectionDispatches.id!,
    parentSerialNumber: undefined,
}
fieldsInternal.push(dispatchesField2);

const dispatchedField2SubField1 : FieldResponseItem = {
    id: fieldId++,
    fieldName: "Select",
    inputValue: "Sub field of the parent",
    parentItemId: dispatchesField2.id!,
    sectionId: sectionDispatches.id!,
    parentSerialNumber: undefined,
}
fieldsInternal.push(dispatchedField2SubField1);

const dispatchesField3 : FieldResponseItem = {
    id: fieldId++,
    fieldName: "6.3 Internal transfer of raw sugar within a group",
    parentItemId: undefined,
    inputValue: undefined,
    parentSerialNumber: undefined,
    sectionId: sectionDispatches.id!,
}
fieldsInternal.push(dispatchesField3);

const distachField3SubField1: FieldResponseItem = {
    id: fieldId++,
    fieldName: "Plant code of sugar mill to which sugar transferred",
    parentItemId: dispatchesField3.id!,
    parentSerialNumber: "1",
    sectionId: sectionDispatches.id!,
    inputValue: "101"
}
fieldsInternal.push(distachField3SubField1);

const distachField3SubField2: FieldResponseItem = {
    id: fieldId++,
    fieldName: "Qty Transferred to other mills - During the Month (MT)",
    parentItemId: dispatchesField3.id!,
    parentSerialNumber: "1",
    sectionId: sectionDispatches.id!,
    inputValue: "10"
}
fieldsInternal.push(distachField3SubField2);

const distachField3SubField3: FieldResponseItem = {
    id: fieldId++,
    fieldName: "Plant code of sugar mill to which sugar transferred",
    parentItemId: dispatchesField3.id!,
    parentSerialNumber: "2",
    sectionId: sectionDispatches.id!,
    inputValue: "102"
}
fieldsInternal.push(distachField3SubField3);

const distachField3SubField4: FieldResponseItem = {
    id: fieldId++,
    fieldName: "Qty Transferred to other mills - During the Month (MT)",
    parentItemId: dispatchesField3.id!,
    parentSerialNumber: "2",
    sectionId: sectionDispatches.id!,
    inputValue: "20"
}
fieldsInternal.push(distachField3SubField4);


export const fields =  fieldsInternal;