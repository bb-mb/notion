import jwt from "jsonwebtoken";

interface IJwtKey {
  accessKey: string;
  refreshKey: string;
}

interface IUser {
  firebaseId: string;
  name: string;
  email: string | undefined;
}

export class JWT {
  accessKey: string;
  refreshKey: string;
  constructor({ accessKey, refreshKey }: IJwtKey) {
    this.accessKey = accessKey;
    this.refreshKey = refreshKey;
  }

  getAccessToken(user: IUser) {
    return jwt.sign(user, this.accessKey, { expiresIn: "1d" });
  }

  getRefreshToken(user: IUser) {
    return jwt.sign(user, this.refreshKey, { expiresIn: "1m" });
  }

  verifyAccessToken(accessToken: string) {
    return jwt.verify(accessToken, this.accessKey);
  }

  verifyRefreshToken(refreshToken: string) {
    return jwt.verify(refreshToken, this.refreshKey);
  }
}
