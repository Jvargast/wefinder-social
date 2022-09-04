import React from "react";
import { Box, Modal } from "@mui/material";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteStory } from '../../redux/actions/storyAction'

const StoryForm = ({ open, handleClose, story, auth }) => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
    const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleDeletePost = () => {
    if(window.confirm("Are you sure want to delete this post?")){
        dispatch(deleteStory({story, auth}));
        return navigate("/")
    }
}
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", flexDirection:"row" }}>
            <h1 style={{ fontSize: "40px" }}>Destacado</h1>
            {auth.user.role === 'ADMIN' ? <div className="nav-item dropdown">
                <span className="material-icons" id="moreLink" data-toggle="dropdown">
                    more_horiz
                </span>

                <div className="dropdown-menu">
                        <>
                            <div className="dropdown-item" onClick={handleDeletePost} >
                                <span className="material-icons">delete_outline</span> Remover Post
                            </div>
                        </>
                </div>
            </div>:null}
          </div>

          <p>Descripción: {story.content}</p>
          <small className="text-muted">
            {moment(story.timestamp).fromNow()}
          </small>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img
              src={story.images[0].url}
              alt="story"
              style={{ width: "300px", height: "300px", objectFit: "contain" }}
            />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default StoryForm;
