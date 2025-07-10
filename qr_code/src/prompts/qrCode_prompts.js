import chalk from "chalk";
import prompt from "prompt";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow.italic("Digite o link para gerar o QR CODE"),

    },
    {
        name: "type",
        description: chalk.yellow.bold("Select the QRCode's type: 1-Normal | 2-Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Please, select 1 or 2!"),
        required: true,
    }
];

export default promptQRCode;