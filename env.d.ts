declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWTKEY: string;
      SALT: string;
      MONGODB_URI: string;
    }
  }
}
export {}