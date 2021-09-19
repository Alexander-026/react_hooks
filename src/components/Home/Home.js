import React, { Fragment, useContext } from "react";
import { GithubContext } from "../../context/github/githubContext";
import { Card } from "../Card/Card";
import { Search } from "../Search/Search";

export const Home = () => {
  const { loading, users } = useContext(GithubContext);
  return (
    <Fragment>
      <Search />
      <div className="row mt-4">
        {loading ? (
          <p className="text-center">Loading</p>
        ) : (
          users.map((user) => (
            <div className="col-sm-4 mb-4" key={user.i}>
              <Card user={user} />
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
};
