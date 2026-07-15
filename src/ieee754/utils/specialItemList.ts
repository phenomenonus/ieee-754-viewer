import { BasicFormat } from "../BasicFormat";

export type SpecialItem = {
  name: string;
  [BasicFormat.Binary32]: number;
  [BasicFormat.Binary64]: bigint;
};

export const specialItemList: SpecialItem[] = [
  {
    [BasicFormat.Binary32]: 0x3f800000,
    [BasicFormat.Binary64]: 0x3ff0000000000000n,
    name: "example1",
  },

  {
    [BasicFormat.Binary32]: 0x3e99999a,
    [BasicFormat.Binary64]: 0x3fd3333333333334n,
    name: "example2",
  },

  {
    [BasicFormat.Binary32]: 0x00000000,
    [BasicFormat.Binary64]: 0x0000000000000000n,
    name: "positiveZero",
  },

  {
    [BasicFormat.Binary32]: 0x80000000,
    [BasicFormat.Binary64]: 0x8000000000000000n,
    name: "negativeZero",
  },

  {
    [BasicFormat.Binary32]: 0x7f800000,
    [BasicFormat.Binary64]: 0x7ff0000000000000n,
    name: "positiveInfinity",
  },

  {
    [BasicFormat.Binary32]: 0xff800000,
    [BasicFormat.Binary64]: 0xfff0000000000000n,
    name: "negativeInfinity",
  },

  {
    [BasicFormat.Binary32]: 0x7fc00000,
    [BasicFormat.Binary64]: 0x7ff8000000000000n,
    name: "qNaN",
  },

  {
    [BasicFormat.Binary32]: 0x7fa00000,
    [BasicFormat.Binary64]: 0x7ff4000000000000n,
    name: "sNaN",
  },

  {
    [BasicFormat.Binary32]: 0x7f7fffff,
    [BasicFormat.Binary64]: 0x7fefffffffffffffn,
    name: "maxNormal",
  },

  {
    [BasicFormat.Binary32]: 0x00800000,
    [BasicFormat.Binary64]: 0x0010000000000000n,
    name: "minPositiveNormal",
  },

  {
    [BasicFormat.Binary32]: 0x007fffff,
    [BasicFormat.Binary64]: 0x000fffffffffffffn,
    name: "maxPositiveSubnormal",
  },

  {
    [BasicFormat.Binary32]: 0x00000001,
    [BasicFormat.Binary64]: 0x0000000000000001n,
    name: "minPositiveSubnormal",
  },

  {
    [BasicFormat.Binary32]: 0xff7fffff,
    [BasicFormat.Binary64]: 0xffefffffffffffffn,
    name: "maxNegativeNormal",
  },

  {
    [BasicFormat.Binary32]: 0x80800000,
    [BasicFormat.Binary64]: 0x8010000000000000n,
    name: "minNegativeNormal",
  },

  {
    [BasicFormat.Binary32]: 0x807fffff,
    [BasicFormat.Binary64]: 0x800fffffffffffffn,
    name: "maxNegativeSubnormal",
  },

  {
    [BasicFormat.Binary32]: 0x80000001,
    [BasicFormat.Binary64]: 0x8000000000000001n,
    name: "minNegativeSubnormal",
  },
];
