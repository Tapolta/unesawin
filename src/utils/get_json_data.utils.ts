import historyRaw from '../data/history.json';
import HistoryStatus from '../enums/historyStatus.enum';
import type { RecorderStruct } from '../structures/recorder.struct';

const API_URL = 'https://6923654a3ad095fb84706fd2.mockapi.io/api/unesawin/history-record';

export const getHistoryDatas = () => {
  const historyList = historyRaw.map((item) => ({
    ...item,
    status: HistoryStatus[item.status as keyof typeof HistoryStatus]
  }));

  return historyList;
}

export const getHistoryData = (id: number) => {
  return getHistoryDatas().find((item) => item.id === id);
}

export const getRecHistoryDatas = async () => {
  const res = await fetch(API_URL);
  const historyRecordRaw = await res.json();

  const map = new Map<
    string,
    { date: string; history_record: RecorderStruct[] }
  >();

  for (const item of historyRecordRaw) {
    const record: RecorderStruct = { ...item, date: new Date(item.date) };
    const dateKey = new Date(item.date).toISOString().split('T')[0]

    if (!map.has(dateKey)) {
      map.set(dateKey, {
        date: new Date(item.date).toLocaleDateString('id-ID', {
          weekday: 'long',
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        }),
        history_record: [],
      });
    }

    map.get(dateKey)!.history_record.push(record);
  }

  return Array.from(map.values());
};

export const getRecHistoryData = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`);

  if (!res.ok) return undefined;

  const item = await res.json();

  return {
    ...item,
    date: new Date(item.date),
  };
};