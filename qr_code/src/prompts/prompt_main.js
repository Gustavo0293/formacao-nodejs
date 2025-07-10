import chalk from "chalk";

const mainPrompt = [
    {
        name: 'select',
        description: chalk.yellow.bold('Select an option: 1-QR Code | 2-Password | 3-Exit'),
        pattern: /^[1-3]+$/,
        message: chalk.red.bold('Please select a valid option (1, 2, or 3)'),
        required: true,
    }
]

export default mainPrompt;