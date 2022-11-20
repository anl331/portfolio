// <reference types="./environment" />

// declare namespace NodeJS {
//   interface ProcessEnv {
//     SERVICE_ID: string;
//     TEMPLATE_ID: string;
//     PUBLID_ID: string;
//     SIE_KEY: string;
//   }
// }

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVICE_ID: string;
      TEMPLATE_ID: string;
      PUBLID_ID: string;
      SIE_KEY: string;
      //   NODE_ENV: "development" | "production";
    }
  }
}

export {};
