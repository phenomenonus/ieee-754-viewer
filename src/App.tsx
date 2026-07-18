import { makeStyles } from "@fluentui/react-components";

import { IEEEWrapper, NavBar } from "@/ui";

import { lg } from "@/utils";

import type { FC } from "@/types";

const useClasses = makeStyles({
  root: {
    margin: "auto",
    maxWidth: "1280px",
    padding: "0 0.325rem 2rem",
    ...lg({ padding: "0 0 2rem" }),
  },
});

export const App: FC = () => {
  const className = useClasses();

  return (
    <>
      <NavBar />
      <div className={className.root}>
        <IEEEWrapper />
      </div>
    </>
  );
};
