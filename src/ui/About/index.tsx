import React from "react";

import { useTranslation } from "react-i18next";

import {
  Body1,
  Body2,
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
  mt: {
    marginTop: "1rem",
  },
  root: {
    maxWidth: "720px",
  },
});

export const About: FC<ButtonProps> = (props) => {
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
            {t("about.title")}
          </DialogTitle>
          <DialogContent>
            <Body2 block>{t("about.description")}</Body2>
            <Body1 block className={className.mt}>
              {t("about.note")}
            </Body1>
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
