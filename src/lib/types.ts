
export type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";

export interface EncodingPayload {
  input: string;
  correctionLevel: ErrorCorrectionLevel;
}

