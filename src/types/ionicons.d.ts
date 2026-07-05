import type { JSX } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": {
        name?: string;
        class?: string;
        [key: string]: unknown;
      };
    }
  }
}
