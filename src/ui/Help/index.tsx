import React from "react";

import { useTranslation } from "react-i18next";

import {
  Button,
  type ButtonProps,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  makeStyles,
} from "@fluentui/react-components";

import { IconButtonClose } from "@/components/IconButtonClose";

import type { FC } from "@/types";

const useClasses = makeStyles({
  root: {
    maxWidth: "720px",
  },
});

export const Help: FC<ButtonProps> = (props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { t } = useTranslation("common");
  const className = useClasses();

  return (
    <Dialog onOpenChange={(_, data) => setOpen(data.open)} open={open}>
      <DialogTrigger action="open" disableButtonEnhancement>
        <Button {...props} />
      </DialogTrigger>
      <DialogSurface className={className.root}>
        <DialogBody>
          <DialogTitle
            action={
              <DialogTrigger action="close" disableButtonEnhancement>
                <IconButtonClose />
              </DialogTrigger>
            }
          >
            {t("help.title")}
          </DialogTitle>
          <DialogContent>
            <ul>
              <li>{t("help.features.0")}</li>
              <li>{t("help.features.1")}</li>
              <li>{t("help.features.2")}</li>
              <li>{t("help.features.3")}</li>
              <li>{t("help.features.4")}</li>
              <li>{t("help.features.5")}</li>
              <li>{t("help.features.6")}</li>
              <li>{t("help.features.7")}</li>
            </ul>
          </DialogContent>
          <DialogActions>
            <DialogTrigger action="close" disableButtonEnhancement>
              <Button appearance="secondary" title={t("common.close")}>
                {t("common.close")}
              </Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
