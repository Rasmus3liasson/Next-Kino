declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWTKEY: string;
    }
  }
}
export {}