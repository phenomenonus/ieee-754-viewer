import { useTranslation } from "react-i18next";

import { Button, type ButtonProps } from "@fluentui/react-components";

import type { FC } from "@/types";

import CrossSVG from "@/assets/icons/cross.svg?react";

/**
 * A commonly used component in Drawer and Dialog components for closing.
 */
export const IconButtonClose: FC<ButtonProps> = (props) => {
  const { t } = useTranslation("common");

  return <Button appearance="subtle" icon={<CrossSVG />} title={t("common.close")} {...props} />;
};
