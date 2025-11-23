import type HistoryStatus from "../enums/historyStatus.enum";

export interface HistoryStruct {
  id: number,
  name: string,
  address: string,
  day: string,
  date: string,
  time: string,
  status: HistoryStatus,
  url: string,
  doctor: {
    id: number,
    name: string,
    ratting: number,
    photo: string
  },
  result: {
    chief_complaint: string,
    physical_examination: string,
    images: string[],
    desc: string
  }
}