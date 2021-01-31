const winston = require("winston");
const fs = require("fs");

module.exports = ({ config }) => {
  const instance = {};

  instance.logger = (request) => {
    const {
      uuid,
      body,
      hostname,
      url,
      method,
      userAgent,
      ipAddress,
      username,
      service,
    } = request;
    const logsDir = `${process.cwd()}//logs`;
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir);
    }
    const dir = `${process.cwd()}//logs//${service}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    return winston.createLogger({
      defaultMeta: {
        uuid,
        service,
        username,
        body,
        hostname,
        url,
        method,
        userAgent,
        ipAddress,
      },
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      transports: [
        new winston.transports.File({
          filename: `${dir}//${service}-${new Date(Date.now())
            .toLocaleDateString()
            .replace(/\//g, "-")}.log`,
          handleExceptions: true,
        }),
      ],
    });
  };

  return instance;
};
