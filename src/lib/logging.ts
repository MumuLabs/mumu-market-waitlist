import winston from "winston";

interface CustomLevels extends winston.config.AbstractConfigSetLevels {
	error: number;
	warn: number;
	info: number;
	http: number;
	verbose: number;
	debug: number;
}

interface CustomColors extends winston.config.AbstractConfigSetColors {
	error: string;
	warn: string;
	info: string;
	http: string;
	verbose: string;
	debug: string;
}

const levels: CustomLevels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	verbose: 4,
	debug: 5,
};

const colors: CustomColors = {
	error: "red",
	warn: "yellow",
	info: "green",
	http: "magenta",
	verbose: "cyan",
	debug: "white",
};

interface CustomLogger extends winston.Logger {
	error: winston.LeveledLogMethod;
	warn: winston.LeveledLogMethod;
	info: winston.LeveledLogMethod;
	http: winston.LeveledLogMethod;
	verbose: winston.LeveledLogMethod;
	debug: winston.LeveledLogMethod;
}

const { combine, timestamp, printf, colorize } = winston.format;

winston.addColors(colors);

const loggingFormat = printf(({ level, message, timestamp }) => {
	return `${timestamp} [${level}]: ${message}`;
});

const consoleTransport = new winston.transports.Console({
	format: combine(
		colorize({ all: true }),
		timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
		loggingFormat,
	),
});

const logger = winston.createLogger({
	level: (process.env.WINSTON_LOG_LEVEL as string) || "info",
	levels,
	format: loggingFormat,
	transports: [consoleTransport],
	exitOnError: false,
}) as CustomLogger;

interface LogStream {
	write(message: string): void;
}

const stream: LogStream = {
	write: (message: string) => {
		logger.http(message.trim());
	},
};

export { logger, stream };

export type Logger = typeof logger;
