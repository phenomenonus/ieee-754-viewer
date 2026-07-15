import { create } from "zustand";
import { persist } from "zustand/middleware";

import { numberToString } from "@/utils";

import {
  BasicFormat,
  changeDataValueBitString,
  changeDataValueEndianness,
  type Data,
  Endianness,
  type FormatItem,
  getDefaultFormatItem,
  getEndianness,
  getFormatItemData,
  Representation,
} from "@/ieee754";

type State = {
  list: FormatItem[];
  /**
   * System {@link Endianness}.
   */
  endianness: Endianness;
};

type Actions = {
  addFormatItem: (format: BasicFormat) => void;
  clearFormatList: () => void;
  changeViewOption: (id: string, optionName: string, value: string[]) => void;
  deleteFormatItem: (id: string) => void;
  resetFormatData: (id: string) => void;
  setFormatItemData: (id: string, newData: Data, targetIsLE?: boolean) => void;
  setFormatItemDataEndianness: (id: string, targetIsLE: boolean) => void;
  getFormatItemDataValue: (id: string, representation: Representation) => string;
};

export type IEEEStore = State & Actions;

export const useIEEE = create<IEEEStore>()(
  persist(
    (set, get) => ({
      addFormatItem: (format) => set((state) => ({ list: [getDefaultFormatItem(format), ...state.list] })),
      changeViewOption: (id, optionName, value) =>
        set((state) => ({
          list: state.list.map((item) =>
            item.id === id ? { ...item, viewOptions: { ...item.viewOptions, [optionName]: value } } : item,
          ),
        })),
      clearFormatList: () => set({ list: [] }),
      deleteFormatItem: (id) => set((state) => ({ list: state.list.filter((item) => item.id !== id) })),
      endianness: getEndianness(),
      getFormatItemDataValue: (id, representation) => {
        const formatItem = get().list.find((item) => item.id === id)!;
        const formatData = getFormatItemData(
          formatItem.data,
          formatItem.params,
          representation ?? formatItem.data.representation,
        );
        return numberToString(formatData);
      },
      list: [getDefaultFormatItem(BasicFormat.Binary64)],
      resetFormatData: (id) =>
        set((state) => ({
          list: state.list.map((item) => (item.id === id ? getDefaultFormatItem(item.format) : item)),
        })),
      setFormatItemData: (id, newData, targetIsLE) =>
        set((state) => ({
          list: state.list.map((item) =>
            item.id === id ? { ...item, data: changeDataValueBitString(newData, item.params, targetIsLE) } : item,
          ),
        })),
      setFormatItemDataEndianness: (id, targetIsLE) =>
        set((state) => ({
          list: state.list.map((item) =>
            item.id === id ? { ...item, data: changeDataValueEndianness(item, targetIsLE) } : item,
          ),
        })),
    }),
    { name: "ieee-storage" },
  ),
);
