import { JWT } from "./jwt";

const jwt = new JWT({
  accessKey: process.env.JWT_ACCESS_KEY as string,
  refreshKey: process.env.JWT_REFRESH_KEY as string,
});

export { JWT, jwt };
