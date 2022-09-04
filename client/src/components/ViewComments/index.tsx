import React, { useState } from "react";
import { Container, ProfileLink } from "./styles";
import moment from "moment";


const ViewComments = ({comments}:any) => {
  /* const [comments, setComments] = useState<any>(post); */
  const [commentsSlice, setCommentsSlice] = useState(3);
  
  const showNextComments = () => {
    setCommentsSlice(commentsSlice + 3);
  };

  return (
    <Container>
      {comments.length >= 3 && commentsSlice < comments.length && (
        <button
          type="button"
          onClick={showNextComments}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              showNextComments();
            }
          }}
        >
          Ver los {comments.length} comentarios
        </button>
      )}
      {comments.slice(0, commentsSlice).map((item:any,id:any) => (
        <div
          key={id}
          style={{
            marginBottom: "0.25rem",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <img
              src={"http://localhost:4200/images/" + item.userPicture}
              alt="current-user"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "9999px",
              }}
            />
            <ProfileLink to=""/* to={`/p/${item.displayName} `} */>
              <span style={{ fontSize: "14px" }}>{item.username}</span>
            </ProfileLink>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                wordBreak: "break-all",
                width: "300px",
                marginLeft: "20px",
              }}
            >
              <p style={{color:"black"}}>{item.comment}</p>
            </div>
          </div>
          <small style={{color:"black", fontSize:"12px" }}>
             {moment(item.createdAt).fromNow()} 
          </small>
        </div>
      ))}
    </Container>
  );
};

export default ViewComments;
