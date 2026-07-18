import type { ViewOptions } from "@/utils";

import type { BasicFormat } from "./BasicFormat";
import type { FormatParams } from "./BasicFormatParams";
import type { ByteLength } from "./Byte";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Endianness } from "./Endianness";
import type { FloatClass } from "./FloatClass";
import type { Representation } from "./Representation";

export type Data<R extends Representation = Representation> = {
  /**
   * {@link ByteLength}.
   */
  byteLength: ByteLength;
  /**
   * Allows to output special values: qNaN, sNaN, -0.
   *
   * @default true
   */
  enableSpecialValues: boolean;
  /**
   * {@link FloatClass}.
   */
  floatClass: FloatClass;
  /**
   * Is the format little-endian? By default is used system {@link Endianness}.
   */
  isLittleEndian: boolean;
  /**
   * {@link Representation}.
   */
  representation: R;
  /**
   * Value depending on {@link ByteLength} and {@link Representation}
   */
  value: string;
};

export type FormatItem = {
  /**
   * Value data in Hex representation.
   */
  data: Data<typeof Representation.BitString>;
  /**
   * Current {@link BasicFormat}.
   */
  format: BasicFormat;
  /**
   * Unique id.
   */
  id: string;
  /**
   * Position in array.
   */
  idx: number;
  /**
   * {@link FormatParams}.
   */
  params: FormatParams;
  /**
   * View options.
   */
  viewOptions: ViewOptions;
};
