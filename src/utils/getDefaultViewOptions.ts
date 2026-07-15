export const BitAppearance = {
  Colored: "colored",
  Outline: "outline",
  Subtle: "subtle",
} as const;

export type BitAppearance = (typeof BitAppearance)[keyof typeof BitAppearance];

export const BitSize = {
  Large: "large",
  Medium: "medium",
  Small: "small",
} as const;

export type BitSize = (typeof BitSize)[keyof typeof BitSize];

export const BitLabel = {
  Index: "index",
  IndexInByte: "indexInByte",
  None: "none",
  Ordinal: "ordinal",
  OrdinalInByte: "ordinalInByte",
} as const;

export type BitLabel = (typeof BitLabel)[keyof typeof BitLabel];

export const BitsView = {
  BytesInColumn: "bytesInColumn",
  BytesInRow: "bytesInRow",
  SplittedBytesInRow: "splittedBytesInRow",
} as const;

export type BitsView = (typeof BitsView)[keyof typeof BitsView];

export const ByteLabel = {
  Index: "index",
  None: "none",
  Ordinal: "ordinal",
} as const;

export type ByteLabel = (typeof ByteLabel)[keyof typeof ByteLabel];

export const ViewOption = {
  Appearance: "appearance",
  BitLabel: "bitLabel",
  ByteLabel: "byteLabel",
  Size: "size",
  View: "view",
} as const;

export type ViewOption = (typeof ViewOption)[keyof typeof ViewOption];

export type ViewOptions = {
  [ViewOption.Appearance]: BitAppearance[];
  [ViewOption.BitLabel]: BitLabel[];
  [ViewOption.ByteLabel]: ByteLabel[];
  [ViewOption.Size]: BitSize[];
  [ViewOption.View]: BitsView[];
};

export const getDefaultViewOptions = () => ({
  [ViewOption.Appearance]: [BitAppearance.Colored],
  [ViewOption.BitLabel]: [BitLabel.Index],
  [ViewOption.ByteLabel]: [ByteLabel.Index],
  [ViewOption.Size]: [BitSize.Small],
  [ViewOption.View]: [BitsView.BytesInRow],
});
