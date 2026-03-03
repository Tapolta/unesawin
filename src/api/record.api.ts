import type { CoughModel } from "../structures/model.struct";
import type { RecorderStruct } from "../structures/recorder.struct";
import { uploadAudio } from "../utils/supabase.utils";

const API_URL = 'https://6923654a3ad095fb84706fd2.mockapi.io/api/unesawin/history-record';

export const sendRecorderData = async (audioBlob: Blob): Promise<string> => {
  try {
    const modelResult = await sendRecordToModel();
    const recorder = await saveRecorder(audioBlob);
    
    if (recorder === undefined) {
      throw new Error("Tidak dapat menyimpan rekaman");
    }

    return await saveData({
      id: generateId(),
      date: new Date(),
      audio_path: recorder.url,
      duration: recorder.duration,
      model: modelResult
    });
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};

export const deleteRecorder = async (ids: string[]): Promise<boolean> => {
  try {
    const requests = ids.map(id => fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        deleted: true
      })
    }));

    const responses = await Promise.all(requests);

    responses.forEach(async (res) => {
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Gagal untuk update ${errText}`);
      }
    });

    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const generateId = (): string => {
  return crypto.randomUUID();
};

const sendRecordToModel = async (): Promise<CoughModel> => {
  return {
    status: true,
    frequency: "Sedang",
    analysis: "Batuk berdahak",
    pattern: ''
  }
};

const saveRecorder = async (audioBlob: Blob): Promise<{
  url: string,
  duration: number
} | undefined> => {
  return await uploadAudio(audioBlob);
};

const saveData = async (payload: RecorderStruct): Promise<string> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: payload.id,
      date: payload.date.toISOString(),
      audio_path: payload.audio_path,
      duration: payload.duration,
      model: payload.model,
      deleted: false
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gagal menyimpan data: ${errorText}`);
  }

  const data = await response.json();

  return data.id;
};