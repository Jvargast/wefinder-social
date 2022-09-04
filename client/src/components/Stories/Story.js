import React, { useState } from 'react'
import StoryForm from './StoryForm';
import { Avatar } from './styles'

const Story = ({story, theme, auth}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Avatar onClick={handleOpen}>
            <img src={story.images[0].url} alt="story" style={{objectFit:"fill", width:"max(45px, min(115px, 22vw))", height:"max(45px, min(115px, 22vw))", borderRadius:"999px", border:"3.75px solid #a8a6af", filter: theme ? "invert(1)" : "invert(0)"}}/>
        </Avatar>
        <StoryForm open={open} handleClose={handleClose} story={story} auth={auth}/>
    </div>
  )
}

export default Story