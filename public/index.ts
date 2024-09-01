import { doConvert } from "./convertor";
import {
  fields,
  form,
  sections,
  submission,
  submissionItem,
} from "./mock-data";

console.log("Hello World")

document.getElementById("status")!.innerHTML = "READY";

const result = doConvert({
    fields,
    sections,
    submissionItem
});

