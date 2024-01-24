
import { useNavigate } from "react-router-dom";
const RepositoryListPage = ({ userData, userId }) => {

  const navigate = useNavigate();
  const handleCardClick = (repositoryId) => {
    navigate(`/repository/${repositoryId}`, {
      state: {
        repositoryData: userData.find((data) => data.id === repositoryId),
      },
    });
  };

  const handelFollowerClick =()=>{
    fetch(`https://api.github.com/users/${userId}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Not Found") {
        console.log(data.message);
      } else {
        console.log(data)
        navigate(`/followers`, {
          state: {
            followersData: data,
          },
        });

      }
    })
    .catch((error) => {
      console.error("Error fetching user details:", error);
    });

  }
  return (
    <div>
      {userData.message === "Not Found" ? (
        <>User not found please check user id.</>
      ) : (
        <div className="container">
          <div className="header-repo">
            <h4>Below are the reopistories of: {userId}</h4>
        <button onClick={() => handelFollowerClick()}>Followers</button>
          </div>

          <div className="card-container">
            {userData.map((data) => {
              return (
                <div
                  className="card"
                  key={data.id}
                  onClick={() => handleCardClick(data.id)}
                >
                  <img src={data.owner.avatar_url} alt="avtar" />
                  <div>
                    <h2>{data.name}</h2>

                    <p>{data.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RepositoryListPage;
