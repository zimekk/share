require("dotenv").config();

export const discover = () => require("@dev/device").discover();
export const scan = () => require("./scan").scan();
