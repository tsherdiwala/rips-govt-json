import { doConvert } from "./public/convertor";

import {
    fields,
    form,
    sections,
    submission,
    submissionItem,
  } from "./public/mock-data";

  const result = doConvert({fields, sections, submissionItem})

console.log(result);  