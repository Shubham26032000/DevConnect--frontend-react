import { Link } from "react-router-dom";

function Post({ post, user }) {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="">
            <div className="card shadow">
              <div className="card-body">
                <h5>
                  <Link className="card-link" to={`/user/${user.id}`}>
                    {user.username}
                  </Link>
                </h5>
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
