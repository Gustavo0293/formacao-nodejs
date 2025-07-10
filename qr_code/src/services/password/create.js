import chalk from "chalk"
import handle from "./handle.js";

async function createPassword() {
    const password = await handle();
    console.log(chalk.yellow("Password"));
    console.log(chalk.green(password));
}

export default createPassword;