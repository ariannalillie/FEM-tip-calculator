import { FC } from "react";

export interface InputBarProps {
  /**
   * icon is the symbol that will be displayed on the left side of the input bar
   *
   * @type {String}
   * @memberof InputBarProps
   */
  icon: String;
  /**
   * amount is the value that will be displayed on the right side of in the input bar
   *
   * @type {Number}
   * @memberof InputBarProps
   */
  amount: Number;
}

export const InputBar: FC<InputBarProps> = ({
    icon,
    amount,
}): JSX.Element => {
    return (
        <h1>Input Bar</h1>
    )
}
