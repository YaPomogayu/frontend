import classNames from "classnames";
import { Informer } from "../informer";
import styles from "./dialog.module.css";
import { SquareButton } from "../square-buttons";
import { Button } from "../button";

interface IDialogProps {
  title?: string;
  isExitButton?: boolean;
  isAlertDialog?: boolean;
  isConfirmDialog?: boolean;
  extClassName?: string;
}

export const Dialog = ({
  title,
  isExitButton = false,
  isAlertDialog = false,
  isConfirmDialog = false,
  extClassName,
}: IDialogProps) => (
  <div className={classNames(styles.container, extClassName)}>
    {isExitButton && (
      <div className={styles.exitButtonWrapper}>
        <SquareButton buttonType="close" />
      </div>
    )}
    <p
      className={classNames(
        "text",
        "text_size_medium",
        "text_type_bold ",
        styles.headerText
      )}
    >
      {title}
    </p>
    <div className={classNames(styles.headerWrapper)} />
    {isAlertDialog ? (
      <Informer extClassName={styles.informer} />
    ) : (
      <div className={styles.buttonWrapper}>
        <Button
          label="Хочу"
          buttonType="primary"
          extClassName={styles.confirmButton}
        />
      </div>
    )}
  </div>
);
