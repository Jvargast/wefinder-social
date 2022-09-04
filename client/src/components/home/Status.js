import React from 'react'
/* import Avatar from '../Avatar' */
import { useSelector, useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'

const Status = () => {
    const { auth, theme } = useSelector(state => state)
    const dispatch = useDispatch();

    return (
        <div className="status d-flex" style={{marginTop:"20px"}}>
            <img src={auth.user.avatar} alt="big-avatar" style={{height:"60px", width:"60px", borderRadius:"999px", filter: theme ? "invert(1)" : "invert(0)"}}/> 
            
            <button className="statusBtn flex-fill"
            onClick={() => dispatch({ type: GLOBALTYPES.STATUS, payload: true })}>
                {auth.user.username}, Que estás pensando?
            </button>
        </div>
    )
}

export default Status