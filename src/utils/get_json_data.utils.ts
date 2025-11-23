import riwayatRaw from '../data/riwayat.json';
import HistoryStatus from '../enums/historyStatus.enum';

const historyList = riwayatRaw.map((item) => ({
  ...item,
  status: HistoryStatus[item.status as keyof typeof HistoryStatus]
}));

export const getHistoryDatas = () => {
  return historyList;
}

export const getHistorydata = (id: number) => {
  return historyList.find((item) => item.id === id);
}