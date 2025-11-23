import historyRaw from '../data/history.json';
import HistoryStatus from '../enums/historyStatus.enum';
import historyRecordRaw from '../data/history_record.json'
import type { RecorderStruct } from '../structures/recorder.struct';

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

export const getRecHistoryDatas = () => {
  const map = new Map<string, { date: string; history_record: RecorderStruct[] }>();

  for (const item of historyRecordRaw) {
    const record: RecorderStruct = { ...item, date: new Date(item.date) };
    const dateKey = item.date;

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

export const getRecHistoryData = (id: string) => {
  const item = historyRecordRaw.find(item => item.id === id);
  if (!item) return undefined;

  return {
    ...item,
    date: new Date(item.date),
  };
};