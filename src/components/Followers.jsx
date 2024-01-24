import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Followers = () => {
  const location = useLocation();
  const userData = location.state?.followersData;
  const [followersDatas, setFollowersDatas] = useState(null);

  useEffect(() => {
    fetch(`${userData.followers_url}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Not Found") {
          console.log(data.message);
        } else {
          console.log(data);
          setFollowersDatas(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, [userData.followers_url]);
  if (!followersDatas) {
    return <div>followers not found.</div>;
  } else {
    return (
      <div className="followers-container">
      
        <h5>Totol numbers of followers :{followersDatas.length}</h5>
        <Link to="/"><button>Go Back</button></Link>
        <div className="card-container">
          {followersDatas.map((data) => {
            return (
              <Link to={data.html_url} key={data.id}>
                <div className="card">
                  <img src={data.avatar_url} alt="avtar" />
                  <div>
                    <h2>{data.login}</h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Followers;
