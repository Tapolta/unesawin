export interface RecorderStruct {
  id: string;
  date: Date;
  is_potential: boolean;
  recorder: {
    audio_path: string;
    duration: string;
  },
  details: {
    cough_pattern: string,
    cough_frequency: string
  }
}