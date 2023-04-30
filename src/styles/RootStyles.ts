import { CSSProperties } from "react";
import { colors } from "react-select/dist/declarations/src/theme";
import { ColorStyles } from "./Color";

interface IText {
  readonly def: "H1" | "H2" | "H3" | "S1" | "S2" | "S3";
}

export class RootStyles {
  //   constructor(private readonly colors: ColorStyles) {}

  static Text(params: IText): CSSProperties {
    switch (params.def) {
      case "H1":
        return {
          color: ColorStyles.primaryColor,
          fontSize: "4rem",
        };
      case "H2":
      default:
        return {
          color: ColorStyles.primaryColor,
          fontSize: "2.5rem",
        };
    }
  }
}
