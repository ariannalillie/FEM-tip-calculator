import { FC } from "react";
import { PercentageButton } from "../PercentageButton";

export const LeftContainer: FC = (): JSX.Element => {
  const buttons = [
    { name: "5%", color: "dark" },
    { name: "10%", color: "dark" },
    { name: "15%", color: "medium" },
    { name: "25%", color: "dark" },
    { name: "50%", color: "dark" },
    { name: "Custom", color: "light" },
  ];

  return (
    <div>
      {buttons.map((button) => {
        return <PercentageButton name={button.name} color={button.color} />;
      })}
    </div>
  );
};
