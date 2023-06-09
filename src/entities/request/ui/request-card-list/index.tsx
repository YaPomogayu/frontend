import { FC } from "react";
import classnames from "classnames";
import RequestCard from "../request-card";
import { IRequestCard } from "../../types";
import styles from "./styles.module.css";

interface RequestCardListProps {
  cards: IRequestCard[];
}

const RequestCardList: FC<RequestCardListProps> = ({ cards }) => (
  <ul className={classnames(styles.list, "list", "p-0", "m-0")}>
    {cards.map((card) => (
      <li>
        <RequestCard requestCardId={card.requestCardId} user={card.user} />
      </li>
    ))}
  </ul>
);

export default RequestCardList;
