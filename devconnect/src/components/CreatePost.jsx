import { useContext, useEffect, useState } from "react";
import { createPost } from "../services/PostApi";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function CreatePost() {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const submitCreate = (e) => {
    e.preventDefault();
    createPost(user.id, { title, content })
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        // alert("Error occurs...!");
        console.error(error);
      });

    setTitle("");
    setContent("");
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <form className="card shadow p-4" onSubmit={submitCreate}>
              <h3 className="text-center mb-3">Create Post</h3>
              <div className="mb-3">
                <label htmlFor="titleInput" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="titleInput"
                  placeholder="eg.Fun Movent"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="descriptionInput" className="form-label">
                  content
                </label>
                <textarea
                  className="form-control"
                  id="descriptionInput"
                  rows="8"
                  placeholder="Hey..! it was fun."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>

              <input
                class="btn btn-primary"
                type="submit"
                value="Submit"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
