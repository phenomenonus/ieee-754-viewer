import { useTranslation } from "react-i18next";

import { Title1 } from "@fluentui/react-components";

import type { FC } from "@/types";

export const Header: FC = () => {
  const { t } = useTranslation();

  return <Title1>{t("app.header")}</Title1>;
};
