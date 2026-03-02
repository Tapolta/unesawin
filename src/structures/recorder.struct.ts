import type { CoughModel } from "./model.struct";

export interface RecorderStruct {
  id: string;
  date: Date;
  audio_path: string;
  duration: number;
  model: CoughModel
}