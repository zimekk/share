require("dotenv").config();

export const discover = () => require("@dev/device").discover();
export const scan = () => require("./scan").scan();
export const scan1 = () => require("./miio").scan1();
export const scan2 = () => require("./miio").scan2();
