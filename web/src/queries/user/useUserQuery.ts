import { QUERY_KEY } from "lib/constants";
import { useCustomQuery } from "lib/query";
import { api } from "lib/api";

interface IUserResponse {
  msg: string;
  value: {
    firebaseId: string;
    name: string;
    email: string;
    blogs: [string];
    createdAt: Date;
  };
}

export const useUserQuery = (options = {}) =>
  useCustomQuery<IUserResponse>(
    QUERY_KEY.USER,
    () => api.get("/user"),
    options
  );
