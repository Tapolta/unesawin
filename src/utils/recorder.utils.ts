export const getAudioDuration = (blob: Blob): Promise<number> => {
  return new Promise((resolve) => {
    const audio = document.createElement("audio");
    audio.src = URL.createObjectURL(blob);

    audio.onloadedmetadata = () => {
      resolve(audio.duration);
      URL.revokeObjectURL(audio.src);
    };
  });
};