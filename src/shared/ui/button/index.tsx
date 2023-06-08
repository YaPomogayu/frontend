import type { ButtonHTMLAttributes, ReactNode } from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  extClassName?: string;
  buttonType: "primary" | "secondary" | "partial";
  onClick?: () => void;
  label?: string;
  size?: "small" | "medium" | "large" | "extraLarge";
  customIcon?: ReactNode;
}

export const Button = ({
  extClassName,
  buttonType,
  label,
  size = "small",
  customIcon,
  ...props
}: ButtonProps) => {
  const isExtraLarge = size === "extraLarge";
  return (
    <button
      type="button"
      className={classnames(
        styles.button,
        styles[`button--${buttonType}`],
        styles[`button--${size}`],
        styles[`button--${buttonType}--${size}`],
        extClassName,
        "text",
        "text_size_small",
        { text_size_medium: isExtraLarge }
      )}
      {...props}
    >
      <div
        className={classnames(
          styles.buttonContent,
          styles[`buttonContent--${buttonType}`],
          { [styles[`buttonContent--${size}`]]: isExtraLarge },
          { [styles["buttonContent--withoutLabel"]]: !label }
        )}
      >
        {customIcon}
        <span>{label}</span>
      </div>
    </button>
  );
};
