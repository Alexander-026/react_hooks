import React, { Fragment, useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GithubContext } from "../../context/github/githubContext";
import { Repos } from "../Repos/Repos";

export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    
    getRepos(urlName);
    console.log("work");
  }, []);

  if (loading) {
    return <p className="text-center">...Loading</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <Fragment>
      <h1>Profile</h1>
      <Link to={"/"} className="btn btn-link">
        To Homepage
      </Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{width: '150px'}} rel='noopener noreferrer'/>
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a className="btn btn-dark" target="_blank" href={html_url}>
                Open profile
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username: </strong>
                    {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company: </strong>
                    {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website: </strong>
                    {blog}
                  </li>
                )}
              </ul>
              <div className="badge bg-primary">Follower: {followers}</div>
              <div className="badge bg-success">Following: {following}</div>
              <div className="badge bg-info">
                Repositories: {public_repos}
              </div>
              <div className="badge bg-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos}/>
    </Fragment>
  );
};
