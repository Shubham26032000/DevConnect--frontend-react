import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfilePic } from "../services/UserApi";

function Post({ post, user }) {
  const [profileImage, setProfileImage] = useState();
  useEffect(() => {
    getProfilePic(user.id)
      .then((response) => setProfileImage(URL.createObjectURL(response.data)))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="">
            <div className="card shadow">
              <div className="card-body">
                <div className="d-flex">
                  <img
                    className=" img-fluid rounded-circle p-1 m-2"
                    src={profileImage}
                    alt="profile-image"
                    width={"50px"}
                    height={"50px"}
                  />
                  <h5 className="">
                    <Link className="card-link" to={`/user/${user.id}`}>
                      {user.username}
                    </Link>
                  </h5>
                </div>

                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
