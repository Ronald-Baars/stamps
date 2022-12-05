import { CSSProperties } from "react";

export interface Props {
  fontFamily: allowedFonts;
  fontSize: number;
  paddingTop: number;
  paddingLeft: number;
  paddingBottom: number;
  paddingRight: number;
  borderRadius: number;
  backgroundColor: CSSProperties["backgroundColor"];
  color: CSSProperties["color"];
}

export interface SvgProps extends Partial<Props> {
  text?: string | string[];
}

export type allowedFonts =
  | "helvetica"
  | "andale mono"
  | "arial"
  | "avenir"
  | "avenir next"
  | "comic sans ms"
  | "courier new"
  | "georgia"
  | "impact"
  | "open sans"
  | "quantify"
  | "tahoma"
  | "times new roman"
  | "trebuchet ms"
  | "verdana"
  | "webdings"
  | undefined;
