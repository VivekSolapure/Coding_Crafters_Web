import { useState, createContext } from "react";
import { database } from "../firebase";
import "./dummy_inbox.css";

const MyContext = createContext();
export default function Dummyinbox({ children }) {
  const [Post_textarea, setPost_textarea] = useState("");
  const TxtChange = (event) => {
    setPost_textarea(event.target.value);
  };

  const [Post_txtTitle, setPost_txtTile] = useState("");
  const TxtTitle = (event) => {
    setPost_txtTile(event.target.value);
  };
  const postData = () => {
    let time= Date.now();

    if((Post_textarea,Post_txtTitle)!==""){
      // database.ref().child("Post").push(Post_textarea);
      // database.ref().child("Post").push(Post_txtTitle);
        database.ref("posts").child(time).set({
          Title: Post_txtTitle,
          Para: Post_textarea
        })
        console.log(time);
    }
    else{
      database.ref("posts").child(time).set({
        Title: "Post_txtTitle",
        Para: "Post_textarea"
      })
    }
  };

  return (
    <MyContext.Provider value={{ Post_textarea, setPost_textarea }}>
      {children}
      <div className="postUpload_body">
        <div className="postUpload_container">
          <textarea
            placeholder="Type Title"
            value={Post_txtTitle}
            onChange={TxtTitle}
            className="postUpload_title"
          ></textarea>
          <textarea
            placeholder="Type here"
            value={Post_textarea}
            onChange={TxtChange}
            className="postUpload_textarea"
          >
            {" "}
          </textarea>
          <div className="postUploadBrowse">
            <img
              className="postUpload_img"
              src="./tabler_photo-up.svg"
              alt=""
            />
            <button className="postUploadbtn" onClick={postData}>
              Post
            </button>
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
}
