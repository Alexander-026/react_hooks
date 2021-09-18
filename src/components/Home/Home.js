import React, { Fragment } from "react";
import { Card } from "../Card/Card";
import { Search } from "../Search/Search";

const cards = new Array(15).fill("").map((_, i) => i);

export const Home = () => (
  <Fragment>
    <Search />
    <div className="row mt-4">
      {cards.map((card) => {
        return (
          <div className="col-sm-4 mb-4">
            <Card key={card.i} />
          </div>
        );
      })}
    </div>
  </Fragment>
);
