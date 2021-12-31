import { verify } from "jsonwebtoken";

import { JWT } from "@/lib/jwt";

describe("jwt 테스트", () => {
  let jwt: JWT;
  const accessKey = "123123";
  const refreshKey = "234234";
  const user = {
    firebaseId: "123123",
    name: "kim",
    email: "kim@gmail.com",
  };

  beforeAll(() => {
    jwt = new JWT({
      accessKey,
      refreshKey,
    });
  });

  test("access 토큰 생성", () => {
    const accessToken = jwt.getAccessToken(user);
    const payload = verify(accessToken, accessKey) as { name: string };
    expect(payload.name).toEqual(user.name);
  });

  test("refresh 토큰 생성", () => {
    const refreshToken = jwt.getRefreshToken(user);
    const payload = verify(refreshToken, refreshKey) as { name: string };
    expect(payload.name).toEqual(user.name);
  });
});
