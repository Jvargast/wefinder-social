import React from "react";
/* import { useDispatch, useSelector } from "react-redux"; */
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
} from "./styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReactPlayer from "react-player";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
/* import AddComment from "../AddComment";
import ViewComments from "../ViewComments"; */
import moment from "moment";
import Carousel from "../Carousel";



const Post = ({ data, loading,id }) => {
  
  return (
    <Container>
      <Body>
          <Avatar alt={"data.startupName"} src={data.user.avatar}></Avatar>
        <Content>
          <Header>
            <strong style={{ color: "black" }}>
              {data.user.startupName}
            </strong>
            <span>@{data.user.username}</span>
            <Dot />
            <time>{moment(data.createdAt).fromNow()}</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>{data.content}</Description>

          <ImageContent>
            {data.images.length > 0 ? (
              <Carousel images={data.images}/>
            ) : data.video ? (
              <>
                <ReactPlayer width={"100%"} url={data.video} />
              </>
            ) : (
              <></>
            )}
          </ImageContent> 

          <Icons>
            <Status>
              <CommentIcon />
              {data.comments.length}
            </Status>
            {/* <Status>
              <RetweetIcon />
              18
            </Status> */}
            <Status /* onClick={handleLike} */>
              {false ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              {data.likes.length}
            </Status>
          </Icons>
        </Content>
      </Body>
      {/* <AddComment  commentInput={commmentInput}  postId={data._id} setComments={setComments}/> */}
     {/* {!true ? null:<ViewComments comments={comments} />} */}
    </Container>
  );
};

export default Post;
