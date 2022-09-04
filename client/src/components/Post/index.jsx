import React, {useRef, useState } from "react";
/* import { useDispatch, useSelector } from "react-redux"; */
import { likePost } from "../../api/PostRequest";
import {
  Container,
  Body,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  /* RetweetIcon, */
} from "./styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReactPlayer from "react-player";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import AddComment from "../AddComment";
import ViewComments from "../ViewComments";
import moment from "moment";



const Post = ({ /* data, loading,id */ }) => {
  
  /* const { user } = useSelector((state: any) => state.authReducer.authData); */
  /* const user = JSON.parse(localStorage.getItem('profile') || '{}');
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const [comments, setComments] = useState<any>(data.comments);
  */
  const commmentInput = useRef(null);
  
  const handleFocus = () => commmentInput.current.focus();
  /* const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev: any) => !prev);
    liked
      ? setLikes((prev: any) => prev - 1)
      : setLikes((prev: any) => prev + 1);
  };  */


  return (
    <Container>
      {/* <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted> */}

      <Body>
          <Avatar alt={"data.startupName"} src={""}></Avatar>
        <Content>
          <Header>
            <strong style={{ color: "black" }}>
              {/* data.startupName */}
            </strong>
            <span>@{/* data.createdBy */}</span>
            <Dot />
            <time>{moment(/* data.createdAt */).fromNow()}</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>{/* data.desc */}</Description>

          <ImageContent>
            {true ? (
              <img
                src={
                  true ? "http://localhost:4200/images/"  : ""
                }
                alt="img"
              />
            ) : false ? (
              <>
                <ReactPlayer width={"100%"} url={""} />
              </>
            ) : (
              <></>
            )}
          </ImageContent>

          <Icons>
            <Status
              onClick={handleFocus}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleFocus();
                }
              }}
            >
              <CommentIcon />
              {/* data.comments.length */}
            </Status>
            {/* <Status>
              <RetweetIcon />
              18
            </Status> */}
            <Status /* onClick={handleLike} */>
              {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              {/* likes */}
            </Status>
          </Icons>
        </Content>
      </Body>
      <AddComment  commentInput={commmentInput} /* postId={data._id} setComments={setComments} *//>
     {!true ? null:<ViewComments /* comments={comments} *//>}
    </Container>
  );
};

export default Post;
