import React from "react";

import { useTranslation } from "react-i18next";

import {
  Button,
  type ButtonProps,
  Divider,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerHeaderTitle,
  makeStyles,
  mergeClasses,
  OverlayDrawer,
  useRestoreFocusSource,
  useRestoreFocusTarget,
} from "@fluentui/react-components";

import { IconButtonClose } from "@/components/IconButtonClose";

import { About, Help, SelectLanguage, Theme } from "@/ui";

import type { FC } from "@/types";

import GithubSVG from "@/assets/icons/github.svg?react";
import IEEE754SVG from "@/assets/icons/ieee754.svg?react";
import QuestionSVG from "@/assets/icons/question.svg?react";

const useClasses = makeStyles({
  buttonBase: {
    display: "flex",
    justifyContent: "flex-start",
    maxWidth: "100%",
    minWidth: "auto",
    padding: "0",
    width: "max-content",
    wordWrap: "break-word",
  },
  divider: {
    margin: "1rem 0",
  },
  flexEnd: {
    justifyContent: "end",
  },
  mb: {
    marginBottom: "0.75rem",
  },
});

export const Settings: FC<ButtonProps> = (props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { t } = useTranslation("common");
  const className = useClasses();

  // all Drawers need manual focus restoration attributes
  // unless (as in the case of some inline drawers, you do not want automatic focus restoration)
  const restoreFocusTargetAttributes = useRestoreFocusTarget();
  const restoreFocusSourceAttributes = useRestoreFocusSource();

  return (
    <>
      <Button onClick={() => setOpen(true)} {...props} />
      <OverlayDrawer
        {...restoreFocusSourceAttributes}
        onOpenChange={(_, data) => setOpen(data.open)}
        open={open}
        position="end"
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={<IconButtonClose {...restoreFocusTargetAttributes} onClick={() => setOpen(false)} />}
          >
            {t("settings.title")}
          </DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody>
          <Divider className={className.divider} />

          <Theme />

          <Divider className={className.divider} />

          <SelectLanguage />

          <Divider className={className.divider} />

          <Help
            appearance="transparent"
            className={className.buttonBase}
            icon={<QuestionSVG />}
            title={t("settings.help")}
          >
            {t("settings.help")}
          </Help>

          <Divider className={className.divider} />

          <About
            appearance="transparent"
            className={mergeClasses(className.buttonBase, className.mb)}
            icon={<IEEE754SVG />}
            title={t("about.title")}
          >
            {t("about.title")}
          </About>

          <Button
            appearance="transparent"
            as="a"
            className={mergeClasses(className.buttonBase, className.mb)}
            href="https://github.com/phenomenonus/ieee-754-viewer"
            icon={<GithubSVG />}
            target="_blank"
          >
            GitHub
          </Button>
        </DrawerBody>

        <DrawerFooter className={className.flexEnd}>
          <Button
            {...restoreFocusTargetAttributes}
            appearance="secondary"
            onClick={() => setOpen(false)}
            title={t("common.close")}
          >
            {t("common.close")}
          </Button>
        </DrawerFooter>
      </OverlayDrawer>
    </>
  );
};
