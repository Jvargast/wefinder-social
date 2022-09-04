import { GLOBALTYPES } from './globalTypes'
import { imageUpload } from '../../utils/imageUpload'
import { deleteDataAPI, postDataAPI, getStory } from '../../utils/fetchData'
import { createNotify } from './notifyAction'

export const STORY_TYPES = {
    CREATE_STORY: 'CREATE_STORY',
    LOADING_STORY: 'LOADING_STORY',
    GET_STORIES: 'GET_STORIES',
    GET_STORY: 'GET_STORY',
    DELETE_STORY: 'DELETE_STORY'
}

export const createStory = ({content, images,auth, socket}) => async (dispatch) => {
    let media = []
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })
        if(images.length > 0) media = await imageUpload(images)

        const res = await postDataAPI('story', { content, images: media }, auth.token)

        dispatch({ 
            type: STORY_TYPES.CREATE_STORY, 
            payload: {...res.data.newStory, user: auth.user} 
        })

        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: false} })

        // Notify
        const msg = {
            id: res.data.newStory._id,
            text: 'Nuevo post creado',
            recipients: res.data.newStory.user.followers,
            url: `/post/${res.data.newStory._id}`,
            content, 
            image: media[0].url,
        }

        dispatch(createNotify({msg, auth, socket}))

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}
export const getStories = () => async (dispatch) => {
    try {
        dispatch({ type: STORY_TYPES.LOADING_STORY, payload: true })
        const res = await getStory('story')
        dispatch({
            type: STORY_TYPES.GET_STORIES,
            payload: {...res.data, page: 2}
        })

        dispatch({ type: STORY_TYPES.LOADING_STORY, payload: false })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}
export const deleteStory = ({story, auth}) => async (dispatch) => {
    dispatch({ type: STORY_TYPES.DELETE_STORY, payload: story })

    try {
        const res = await deleteDataAPI(`story/${story._id}`, auth.token)
        console.log(res);
        
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {error: err.response.data.msg}
        })
    }
}