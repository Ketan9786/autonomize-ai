import React from "react";
import { Link, useLocation } from "react-router-dom";

const RepositoryDetailsPage = () => {
  const location = useLocation();
  const repositoryData = location.state?.repositoryData;

  if (!repositoryData) {
    return <div>Repository not found.</div>;
  }
else{
    console.log(repositoryData)
    return (
        <div className="reop-det-container">
          <div className="reop-det-container-sub1">
            <img src={repositoryData.owner.avatar_url} className="avtar" alt="avtar"/>
            <div className="reop-det-container-sub1-flex1">
              <img src="/verified.png" alt="Verified" />
              <h5>Verified by GitHub</h5>
            </div>
    
            <p style={{ width: "50%" }}>
              GitHub confirms that this app meets the{" "}
              <span style={{ color: "blue", fontWeight: "700" }}>
                requirements for verification.
              </span>
            </p>
    
            <div className="reop-det-container-sub1-flex2">
              <h2>Categories</h2>
              <div className="reop-det-container-sub1-flex2-btn">
                <button>Code Review</button>
                <button>IDEs</button>
                <button>Free</button>
                <button>Paid</button>
              </div>
            </div>
          </div>
    
          <div className="reop-det-container-sub2">
            <h1>{repositoryData.name}</h1>
            <Link to={"/"}><button style={{cursor:"pointer"}}>Set up a plan</button></Link>
            <p>
              <span style={{ color: "blue" }}>{repositoryData.name}</span> is the online IDE for
              GitHub.
            </p>
            <p>
              It launches a complete dev environment for any GitHub project, by
              simply prefixing the GitHub URL with <span style={{fontWeight:"700"}}><a href={repositoryData.html_url} target="blank">{repositoryData.name}</a></span>
            </p>
            <p>Install this app and get your project prebuilt, so you don't have to wait for build downloading 
                the internet when starting a {repositoryData.name} Workspace.
            </p>
            <p>{repositoryData.name} is <span>the first IDE that builds your project before you even open it.</span></p>
          </div>
        </div>
      );
}
  
};

export default RepositoryDetailsPage;
