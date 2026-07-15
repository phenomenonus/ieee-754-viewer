import { useTranslation } from "react-i18next";

import {
  makeStyles,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuGroupHeader,
  MenuItemRadio,
  MenuList,
  MenuPopover,
  type MenuProps,
  MenuTrigger,
  Tooltip,
} from "@fluentui/react-components";

import { BitAppearance, BitLabel, BitSize, BitsView, ByteLabel, ViewOption, type ViewOptions } from "@/utils";

import type { FC } from "@/types";

import TuningSVG from "@/assets/icons/tuning.svg?react";

const useClasses = makeStyles({
  flex: {
    columnGap: "4px",
    display: "flex",
    flexWrap: "nowrap",
  },
  option: {
    overflow: "hidden",
    overflowWrap: "break-word",
  },
});

type ViewOptionsButtonProps = {
  id: string;
  changeViewOption: (id: string, optionName: string, value: string[]) => void;
  viewOptions: ViewOptions;
};

export const ViewOptionsButton: FC<ViewOptionsButtonProps> = ({ changeViewOption, id, viewOptions }) => {
  const { t } = useTranslation("common");
  const className = useClasses();

  const onChange: MenuProps["onCheckedValueChange"] = (_e, { checkedItems, name }) => {
    changeViewOption(id, name, checkedItems);
  };

  const viewAppearanceList: BitAppearance[] = [BitAppearance.Colored, BitAppearance.Outline, BitAppearance.Subtle];
  const viewBitLabelOptions: BitLabel[] = [
    BitLabel.Index,
    BitLabel.IndexInByte,
    BitLabel.Ordinal,
    BitLabel.OrdinalInByte,
    BitLabel.None,
  ];
  const viewByteLabelOptions: ByteLabel[] = [ByteLabel.Index, ByteLabel.Ordinal, ByteLabel.None];
  const viewSizeOptions: BitSize[] = [BitSize.Small, BitSize.Medium, BitSize.Large];
  const viewViewOptions: BitsView[] = [BitsView.BytesInRow, BitsView.SplittedBytesInRow, BitsView.BytesInColumn];

  return (
    <Menu checkedValues={viewOptions} onCheckedValueChange={onChange}>
      <MenuTrigger disableButtonEnhancement>
        <Tooltip content={t("viewOptionsButton.title")} relationship="label">
          <MenuButton icon={<TuningSVG />} />
        </Tooltip>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <MenuGroup>
            <MenuGroupHeader>{t("viewOptionsButton.appearance.title")}</MenuGroupHeader>
            {viewAppearanceList.map((val) => (
              <MenuItemRadio key={val} name={ViewOption.Appearance} value={val}>
                <span className={className.option}>{t(`viewOptionsButton.appearance.${val}`)}</span>
              </MenuItemRadio>
            ))}
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuGroupHeader>{t("viewOptionsButton.size.title")}</MenuGroupHeader>
            {viewSizeOptions.map((val) => (
              <MenuItemRadio key={val} name={ViewOption.Size} value={val}>
                <span className={className.option}>{t(`viewOptionsButton.size.${val}`)}</span>
              </MenuItemRadio>
            ))}
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuGroupHeader>{t("viewOptionsButton.bitLabel.title")}</MenuGroupHeader>
            {viewBitLabelOptions.map((val) => (
              <MenuItemRadio key={val} name={ViewOption.BitLabel} value={val}>
                <span className={className.option}>{t(`viewOptionsButton.bitLabel.${val}`)}</span>
              </MenuItemRadio>
            ))}
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuGroupHeader>{t("viewOptionsButton.byteLabel.title")}</MenuGroupHeader>
            {viewByteLabelOptions.map((val) => (
              <MenuItemRadio key={val} name={ViewOption.ByteLabel} value={val}>
                <span className={className.option}>{t(`viewOptionsButton.byteLabel.${val}`)}</span>
              </MenuItemRadio>
            ))}
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuGroupHeader>{t("viewOptionsButton.view.title")}</MenuGroupHeader>
            {viewViewOptions.map((val) => (
              <MenuItemRadio key={val} name={ViewOption.View} value={val}>
                <span className={className.option}>{t(`viewOptionsButton.view.${val}`)}</span>
              </MenuItemRadio>
            ))}
          </MenuGroup>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
