/**
 * A utility class for logging messages with customizable colors.
 */
class Logger {
    /**
     * A collection of ANSI color codes for styling console output.
     * @type {Object<string, string>}
     * @property {string} Reset - Resets all styles.
     * @property {string} Bright - Brightens the text.
     * @property {string} Dim - Dims the text.
     * @property {string} Underscore - Underlines the text.
     * @property {string} Blink - Makes the text blink.
     * @property {string} Reverse - Reverses the foreground and background colors.
     * @property {string} Hidden - Hides the text.
     * @property {string} FgBlack - Sets the foreground color to black.
     * @property {string} FgRed - Sets the foreground color to red.
     * @property {string} FgGreen - Sets the foreground color to green.
     * @property {string} FgYellow - Sets the foreground color to yellow.
     * @property {string} FgBlue - Sets the foreground color to blue.
     */
    static colors = {
        Reset: '\x1b[0m',
        Bright: '\x1b[1m',
        Dim: '\x1b[2m',
        Underscore: '\x1b[4m',
        Blink: '\x1b[5m',
        Reverse: '\x1b[7m',
        Hidden: '\x1b[8m',
        FgBlack: '\x1b[30m',
        FgRed: '\x1b[31m',
        FgGreen: '\x1b[32m',
        FgYellow: '\x1b[33m',
        FgBlue: '\x1b[34m'
    }

    /**
     * Logs a debug message to the console with optional metadata.
     * The message and metadata can be arrays, which will be joined into strings.
     *
     * @param {string|string[]} message - The main message to log. Can be a string or an array of strings.
     * @param {string|string[]} [meta] - Optional metadata to include in the log. Can be a string or an array of strings.
     */
    static debug(message, meta) {
        if (message && Array.isArray(message)) message = message.join(' ');
        if (meta && Array.isArray(meta)) meta = meta.join(' - ');
        if (!message) message = '';

        console.log(`${Logger.colors.FgBlue}%s${Logger.colors.Reset}`, `[DEBUG] ${message}`, meta ? meta : '');
    }

    /**
     * Logs a debug message to the console with optional metadata.
     * The message and metadata can be arrays, which will be joined into strings.
     *
     * @param {string|string[]} message - The main message to log. Can be a string or an array of strings.
     * @param {string|string[]} [meta] - Optional metadata to include in the log. Can be a string or an array of strings.
     */
    static info(message, meta) {
        if (message && Array.isArray(message)) message = message.join(' ');
        if (meta && Array.isArray(meta)) meta = meta.join(' - ');
        if (!message) message = '';

        console.log(`${Logger.colors.FgBlue}%s${Logger.colors.Reset}`, `[INFO] ${message}`, meta ? meta : '');
    }

    /**
     * Logs a debug message to the console with optional metadata.
     * The message and metadata can be arrays, which will be joined into strings.
     *
     * @param {string|string[]} message - The main message to log. Can be a string or an array of strings.
     * @param {string|string[]} [meta] - Optional metadata to include in the log. Can be a string or an array of strings.
     */
    static error(message, meta) {
        if (message && Array.isArray(message)) message = message.join(' ');
        if (meta && Array.isArray(meta)) meta = meta.join(' - ');
        if (!message) message = '';

        console.log(`${Logger.colors.FgRed}%s${Logger.colors.Reset}`, `[ERROR] ${message}`, meta ? meta : '');
    }

    /**
     * Logs a debug message to the console with optional metadata.
     * The message and metadata can be arrays, which will be joined into strings.
     *
     * @param {string|string[]} message - The main message to log. Can be a string or an array of strings.
     * @param {string|string[]} [meta] - Optional metadata to include in the log. Can be a string or an array of strings.
     */
    static warn(message, meta) {
        if (message && Array.isArray(message)) message = message.join(' ');
        if (meta && Array.isArray(meta)) meta = meta.join(' - ');
        if (!message) message = '';

        console.log(`${Logger.colors.FgYellow}%s${Logger.colors.Reset}`, `[WARN] ${message}`, meta ? meta : '');
    }
}

export { Logger };