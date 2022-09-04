import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkImage } from '../../utils/imageUpload'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { updateProfileUser } from '../../redux/actions/profileAction'

const EditProfile = ({setOnEdit}) => {
    const initState = {
        startupName: '', mobile: '', contactName: '', occupation: '', story: '', solutionArea: '', interest: ''
    }
    const [userData, setUserData] = useState(initState)
    const { startupName, mobile, contactName, occupation, story, solutionArea, interest } = userData

    const [avatar, setAvatar] = useState('')

    const { auth, theme } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        setUserData(auth.user)
    }, [auth.user])


    const changeAvatar = (e) => {
        const file = e.target.files[0]

        const err = checkImage(file)
        if(err) return dispatch({
            type: GLOBALTYPES.ALERT, payload: {error: err}
        })

        setAvatar(file)
    }

    const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]:value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(updateProfileUser({userData, avatar, auth}))
    }

    return (
        <div className="edit_profile">
            <button className="btn btn-danger btn_close"
            onClick={() => setOnEdit(false)}>
                Close
            </button>

            <form onSubmit={handleSubmit}>
                <div className="info_avatar">
                    <img src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar} 
                    alt="avatar" style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />
                    <span>
                        <i className="fas fa-camera" />
                        <p>Change</p>
                        <input type="file" name="file" id="file_up"
                        accept="image/*" onChange={changeAvatar} />
                    </span>
                </div>

                <div className="form-group">
                    <label htmlFor="startup">Nombre startup</label>
                    <div className="position-relative">
                        <input type="text" className="form-control" id="startupName"
                        name="startupName" value={startupName} onChange={handleInput} />
                        <small className="text-danger position-absolute"
                        style={{top: '50%', right: '5px', transform: 'translateY(-50%)'}}>
                            {startupName.length}/25
                        </small>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="mobile">Celular</label>
                    <input type="text" name="mobile" value={mobile}
                    className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="contactName">Contacto</label>
                    <input type="text" name="contactName" value={contactName}
                    className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="occupation">Trabajo</label>
                    <input type="text" name="occupation" value={occupation}
                    className="form-control" onChange={handleInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="story">Descripción</label>
                    <textarea name="story" value={story} cols="30" rows="4"
                    className="form-control" onChange={handleInput} />

                    <small className="text-danger d-block text-right">
                        {story.length}/200
                    </small>
                </div>

                
                <div className="form-group">
                    <label htmlFor="solutionArea">Área de solución</label>
                    <input name="solutionArea" id="solutionArea" value={solutionArea}
                    className="form-control"
                    onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="interest">Interés</label>
                    <input name="interest" id="interest" value={interest}
                    className="form-control"
                    onChange={handleInput}
                    />
                </div>

                <button className="btn btn-info w-100" type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditProfile