import { STORY_TYPES } from '../actions/storyAction'
import { DeleteData } from '../actions/globalTypes'

const initialState = {
    loading: false,
    stories: [],
    result: 0,
    page: 2
}

const storyReducer = (state = initialState, action) => {
    switch (action.type){
        case STORY_TYPES.CREATE_STORY:
            return {
                ...state,
                stories: [action.payload, ...state.stories]
            };
        case STORY_TYPES.LOADING_STORY:
            return {
                ...state,
                loading: action.payload
            };
        case STORY_TYPES.GET_STORIES:
            
            return {
                ...state,
                stories: action.payload.stories,
                result: action.payload.result,
                page: action.payload.page
            };
        case STORY_TYPES.DELETE_STORY:
            return {
                ...state,
                stories: DeleteData(state.stories, action.payload._id)
            };
        default:
            return state;
    }
}

export default storyReducer