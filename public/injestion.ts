import { FieldResponseItem, Form, Section, Submission, SubmissionItem } from "./types/index";

const doInjestion = () => {
    const submission : Submission = {
        id: undefined,
        status: "pending"
    }

    // TODO: create submission and get id
    const submissionId = 0;

    const submissionItem: SubmissionItem = {
        id: undefined,
        approvalId: "M009_D001_A076",
        projectNumber: "P_11",
        submissionId: submissionId,
        swsId: "SW3795947361"
    }

    // TODO: create the submissionItem and get the id
    const submissionItemId = 0;

    const form : Form = {
        id: undefined,
        name: "P2 Form (Directorate of Sugar)",
        submissionItemId: submissionItemId
    }

    // TODO: crete the from and get the id
    const formId = 0;

    const sectionCaneCrushed : Section = {
        id: undefined,
        sectionName: "Cane Crushed",
        formId: formId,
    }

    // TODO: insert and get ID
    const sectionCaneCrushedId = 0;

    const caneCrushedField1 : FieldResponseItem = {
        id: undefined,
        fieldName: "Capacity (In TCD for sugar mills/Tons Per Day (TPD) for refineries)",
        inputValue: "100",
        parentItemId: undefined,
        sectionId: sectionCaneCrushedId,
        parentSerialNumber: undefined,
    }

    // TODO: insert

    const caneCrushedField2 : FieldResponseItem = {
        id: undefined,
        fieldName: "Cane Crushed - During the Month (MT)",
        inputValue: "100",
        parentItemId: undefined,
        sectionId: sectionCaneCrushedId,
        parentSerialNumber: undefined,
    }

    // TODO: insert

    const caneCrushedField3 : FieldResponseItem = {
        id: undefined,
        inputValue: undefined,
        fieldName: "Cane Crushed - With Sub Fields",
        parentItemId: undefined,
        sectionId: sectionCaneCrushedId,
        parentSerialNumber: undefined,
    }

    // TODO: insert and get id
    const caneCrushedField3Id = 0;

    const caneCrushedField3SubField1 : FieldResponseItem = {
        id: undefined,
        fieldName: "Cane Crushed - During the Month (MT)",
        inputValue: "100",
        parentItemId: caneCrushedField3Id,
        sectionId: sectionCaneCrushedId,
        parentSerialNumber: undefined,
    }

    // TODO: insert

    const sectionDispatches : Section = {
        id: undefined,
        sectionName: "Dispatches",
        formId: formId,
    }

    // TODO: insert and get the section id
    const sectionDispatchesId = 0;

    const dispatchesField1 : FieldResponseItem = {
        id: undefined,
        fieldName: "Select",
        inputValue: "6.1.1 Domestic Dispatch w.r.t. monthly release quantity\",\"6.1.2 Domestic Dispatch w.r.t. additional allotment, if any\"",
        parentItemId: undefined,
        sectionId: sectionDispatchesId,
        parentSerialNumber: undefined,
    }

    // TODO insert

    const dispatchesField2 : FieldResponseItem = {
        id: undefined,
        fieldName: "Select - with sub field",
        inputValue: undefined,
        parentItemId: undefined,
        sectionId: sectionDispatchesId,
        parentSerialNumber: undefined,
    }

    // TODO insert and get the field id
    const dispatchesField2Id = 0

    const dispatchedField2SubField1 : FieldResponseItem = {
        id: undefined,
        fieldName: "Select",
        inputValue: "Sub field of the parent",
        parentItemId: dispatchesField2Id,
        sectionId: sectionDispatchesId,
        parentSerialNumber: undefined,
    }

    // TODO insert

    const dispatchesField3 : FieldResponseItem = {
        id: undefined,
        fieldName: "6.3 Internal transfer of raw sugar within a group",
        parentItemId: undefined,
        inputValue: undefined,
        parentSerialNumber: undefined,
        sectionId: sectionDispatchesId
    }

    // TODO insert and get the field id
    const dispatchesField3Id = 0;

    const distachField3SubField1: FieldResponseItem = {
        id: undefined,
        fieldName: "Plant code of sugar mill to which sugar transferred",
        parentItemId: dispatchesField3Id,
        parentSerialNumber: "1",
        sectionId: sectionDispatchesId,
        inputValue: "101"
    }

    // TODO insert


    const distachField3SubField2: FieldResponseItem = {
        id: undefined,
        fieldName: "Qty Transferred to other mills - During the Month (MT)",
        parentItemId: dispatchesField3Id,
        parentSerialNumber: "1",
        sectionId: sectionDispatchesId,
        inputValue: "10"
    }

    // TODO insert


    const distachField3SubField3: FieldResponseItem = {
        id: undefined,
        fieldName: "Plant code of sugar mill to which sugar transferred",
        parentItemId: dispatchesField3Id,
        parentSerialNumber: "2",
        sectionId: sectionDispatchesId,
        inputValue: "102"
    }

    // TODO insert

    const distachField3SubField4: FieldResponseItem = {
        id: undefined,
        fieldName: "Qty Transferred to other mills - During the Month (MT)",
        parentItemId: dispatchesField3Id,
        parentSerialNumber: "2",
        sectionId: sectionDispatchesId,
        inputValue: "20"
    }
    // TODO insert

}

