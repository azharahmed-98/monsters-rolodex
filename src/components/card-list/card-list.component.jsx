import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((element) => (
      <Card key={element.id} name={element.name} />
    ))}
  </div>
);
