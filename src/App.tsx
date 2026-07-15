import { makeStyles } from "@fluentui/react-components";

import { IEEEWrapper, NavBar } from "@/ui";

import { xl } from "@/utils";

import type { FC } from "@/types";

const useClasses = makeStyles({
  root: {
    margin: "auto",
    maxWidth: "1280px",
    padding: "0 0.325rem",
    ...xl({ padding: "0" }),
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
