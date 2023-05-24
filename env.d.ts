declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWTKEY: string;
      SALT: number;
      MONGODB_URI: string;
    }
  }
}
export {}