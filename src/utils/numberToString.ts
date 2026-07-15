import { type Data, FloatClass } from "@/ieee754";

const isSimpleValue = (floatClass: FloatClass) =>
  floatClass === FloatClass.pNormal ||
  floatClass === FloatClass.nNormal ||
  floatClass === FloatClass.pSubnormal ||
  floatClass === FloatClass.nSubnormal;

export const numberToString = (data: Data): string => {
  return isSimpleValue(data.floatClass) ? String(data.value) : data.floatClass;
};
