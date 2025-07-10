import prompt from "prompt";
import promptQRCode from "../../prompts/qrCode_prompts.js";
import handle from "./handle.js";

async function createQRCode() {
    prompt.get(promptQRCode, handle);
}

export default createQRCode;
prompt.start();