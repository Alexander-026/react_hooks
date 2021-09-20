import React, { Fragment } from "react";

export const Repos = ({ repos }) => (
  <Fragment>
    {repos.map((repo) => {
      return (
        <div className="" key={repo.id}>
          <div className="">
            <h5>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h5>
          </div>
        </div>
      );
    })}
  </Fragment>
);
