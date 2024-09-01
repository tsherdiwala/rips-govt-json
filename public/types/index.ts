
export type FieldResponseItem = {
    id: number | undefined;
    fieldName: string;
    inputValue: string | undefined;
    parentSerialNumber: string | undefined; // will need a separate handling when generating the response
    parentItemId: number | undefined;
    sectionId: number;
}

export type Section = {
    id: number | undefined;
    sectionName: string;
    formId: number;
}

export type Form = {
    id: number | undefined;
    name: string;
    submissionItemId: number;
}

export type SubmissionItem = {
    id: number  | undefined;
    approvalId: string;
    swsId: string;
    projectNumber: string;
    submissionId: number;
}

export type Submission = {
    id: number | undefined;
    status: string;
}