import { supabase } from "../lib/supabase";
import { getAudioDuration } from "./recorder.utils";

export const uploadAudio = async (
  audioBlob: Blob
): Promise<{ url: string; duration: number } | undefined> => {
  const filename = `recordings/${Date.now()}.webm`;

  const { error } = await supabase
    .storage
    .from("audio batuk")
    .upload(filename, audioBlob, {
      contentType: "audio/webm"
    });

  if (error) {
    console.error(error);
    return undefined;
  }

  const { data } = supabase
    .storage
    .from("audio batuk")
    .getPublicUrl(filename);

  const duration = await getAudioDuration(audioBlob);

  return {
    url: data.publicUrl,
    duration
  };
};