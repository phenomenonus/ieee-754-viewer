import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
  BasicFormat,
  type Data,
  Endianness,
  type FormatItem,
  getDefaultFormatItem,
  getEndianness,
  getFormatItemData,
  type TargetDataOptions,
} from "@/ieee754";
import { Representation } from "@/ieee754/Representation";

type State = {
  list: FormatItem[];
  /**
   * System {@link Endianness}.
   */
  endianness: Endianness;
};

type Actions = {
  addFormatItem: (format: BasicFormat) => void;
  changeViewOption: (id: string, optionName: string, value: string[]) => void;
  clearFormatList: () => void;
  deleteFormatItem: (id: string) => void;
  getFormatItemDataValue: (id: string, target: TargetDataOptions) => string;
  resetFormatData: (id: string) => void;
  setEnableSpecialValues: (id: string, enableSpecialValues: boolean) => void;
  setFormatItemData: (id: string, newData: Data, targetIsLE?: boolean) => void;
  setFormatItemDataEndianness: (id: string, targetIsLE: boolean) => void;
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
      getFormatItemDataValue: (id, target) => {
        const formatItem = get().list.find((item) => item.id === id)!;
        return getFormatItemData(formatItem.data, target).value;
      },
      list: [getDefaultFormatItem(BasicFormat.Binary64)],
      resetFormatData: (id) =>
        set((state) => ({
          list: state.list.map((item) => (item.id === id ? getDefaultFormatItem(item.format) : item)),
        })),
      setEnableSpecialValues: (id: string, enableSpecialValues: boolean) =>
        set((state) => ({
          list: state.list.map((item) =>
            item.id === id
              ? {
                  ...item,
                  data: getFormatItemData(item.data, { enableSpecialValues }),
                }
              : item,
          ),
        })),
      setFormatItemData: (id, newData, isLittleEndian) =>
        set((state) => ({
          list: state.list.map((item) =>
            item.id === id
              ? {
                  ...item,
                  data: getFormatItemData(newData, { isLittleEndian, representation: Representation.BitString }),
                }
              : item,
          ),
        })),
      setFormatItemDataEndianness: (id, isLittleEndian) =>
        set((state) => ({
          list: state.list.map((item) =>
            item.id === id ? { ...item, data: getFormatItemData(item.data, { isLittleEndian }) } : item,
          ),
        })),
    }),
    { name: "ieee-storage" },
  ),
);
