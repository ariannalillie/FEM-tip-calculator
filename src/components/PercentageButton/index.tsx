import clsx from "clsx";
import { FC } from "react";
import styles from "./percentage-button.module.scss";

export interface PercentageButtonProps {
  /**
   * name is the percentage value to display on the button
   *
   * @type {string}
   * @memberof PercentageButtonProps
   */
  name: string;
  /**
   * color is the background color of the button
   *
   * @type {string}
   * @memberof PercentageButtonProps
   */
  color: string;
}

export const PercentageButton: FC<PercentageButtonProps> = ({
  name,
  color,
}): JSX.Element => {
  return (
    <button
      type="button"
      className={clsx(
        { [styles.buttonDark]: color === "dark" },
        { [styles.buttonMedium]: color === "medium" },
        { [styles.buttonLight]: color === "light" }
      )}
      id={color}
    >
      {name}
    </button>
  );
};
