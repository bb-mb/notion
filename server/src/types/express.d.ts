declare namespace Express {
  export interface Request {
    user?: { name: string; firebaseId: string; email: string };
  }
}
