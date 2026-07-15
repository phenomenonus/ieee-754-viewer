import React from "react";

import {
  type InfoButtonSlots,
  InfoLabel,
  Input,
  type InputProps,
  Label,
  makeStyles,
  mergeClasses,
} from "@fluentui/react-components";

import type { FC } from "@/types";

const useClasses = makeStyles({
  flexRow: {
    alignItems: "center",
    columnGap: "0.5rem",
    display: "flex",
  },
  input: {
    flexGrow: 1,
    maxWidth: "400px",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
});

export type InputFieldWithLabelProps = {
  label: React.ReactNode;
  infoLabel: InfoButtonSlots["info"];
  onSubmit?: (e: React.SubmitEvent<HTMLFormElement>, data: HTMLInputElement) => void;
} & Omit<InputProps, "onSubmit">;

export const InputFieldWithLabel: FC<InputFieldWithLabelProps> = ({
  className,
  infoLabel,
  label,
  onSubmit,
  size,
  ...rest
}) => {
  const labelId = React.useId();
  const defaultClassName = useClasses();

  return (
    <form
      className={mergeClasses(defaultClassName.root, className)}
      onSubmit={onSubmit ? (e) => onSubmit(e, e.target[0] as HTMLInputElement) : undefined}
    >
      <Label htmlFor={labelId} size={size}>
        {label}
      </Label>
      <div className={defaultClassName.flexRow}>
        <Input className={defaultClassName.input} id={labelId} size={size} {...rest} />
        <InfoLabel htmlFor={labelId} info={infoLabel} size="large" />
      </div>
    </form>
  );
};
