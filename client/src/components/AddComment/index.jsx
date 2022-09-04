import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addComment } from '../../actions/PostsActions';
import {Form} from './styles'; 

const AddComment = ({commentInput, postId, setComments}) => {
  const [comment, setComment] = useState("");
  /* const { user } = useSelector((state: any) => state.authReducer.authData); */

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile') || '{}');

  const handleSubmitComment = async(event) => {
    event.preventDefault();
    const newComment = {
        id: postId,
        comment: comment,
        username: user.user.username,
        userPicture: user.user.profilePicture,
        createdAt: new Date()
    }
    const newComments = await dispatch(addComment(postId, newComment));
    setComments(newComments.comments);
    setComment("");

  };
  return (
    <div style={{ display: "flex", flexDirection: "row", width:"100%"}}>
      <div style={{ marginLeft: "10px" }}>
        <img
          src={user.user.profilePicture ? "http://localhost:4200/images/" + user.user.profilePicture: ""}
          alt="user"
          style={{ width: "48px", height: "48px", borderRadius: "9999px" }}
        />
      </div>
      <Form
        method="POST"
        onSubmit={(event) => {
          comment.length >= 1
            ? handleSubmitComment(event)
            : event.preventDefault();
        }}
      >
        <input
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          name="add-comment"
          placeholder="Añadir un comentario"
          autoComplete="off"
          ref={commentInput} 
          style={{ padding: "1.2rem 1rem" }}
        />
        <button
          className={`text-sm font-bold text-blue-medium ${
            !comment && "opacity-25"
          }`}
          type="button"
          style={!comment ? { opacity: "0" } : { opacity: "100" }}
          disabled={comment.length < 1}
          onClick={handleSubmitComment}
        >
          Publicar
        </button>
      </Form>
    </div>
  )
}

export default AddComment