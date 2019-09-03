import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';

const initialState = {
  posts: [],
  comments: [],
  loading: false,
  postLoading: false,
  error: null,
  message: '',
  commentLoading: false,
  commentError: null
}

const fetchStart = (state, action) => {
  return updateObject(state, {
    loading: true
  })
}

const fetchFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.payload
  })
}

const fetchSuccess = (state, action) => {
  return updateObject(state, {
    posts: action.payload,
    loading: false,
  })
}

const postContentStart = (state, action) => {
  return updateObject(state, {
    postLoading: true
  })
}
const postContentSuccess = (state, action) => {
  const { message, content } = action.payload
  return updateObject(state, {
    postLoading: false,
    message,
    posts: [content].concat(state.posts)
  })
}

const postContentFail = (state, action) => {
  return updateObject(state, {
    error: action.payload,
    postLoading: false
  })
}

const postCommentStart = (state, action) => {
  return updateObject(state, {
    commentLoading: true
  })
}

const postCommentFail = (state, action) => {
  return updateObject(state, {
    commentLoading: false,
    commentError: action.payload
  })
}

const postCommentSuccess = (state, action) => {
  const { comment, index } = action.payload;
  console.log(comment);
  const postComment = [comment, ...state.posts[index].comments];
  console.log(postComment);
  console.log(
    updateObject(state, {
      commentLoading: false
    })

  )
  return updateObject(state, {
    comments: [comment].concat(state.posts[index].comments),
    commentLoading: false
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS: return fetchSuccess(state, action)
    case actionTypes.FETCH_START: return fetchStart(state, action)
    case actionTypes.FETCH_FAIL: return fetchFail(state, action)

    case actionTypes.POST_COMMENT_SUCCESS:
      return postCommentSuccess(state, action)

    case actionTypes.POST_COMMENT_START:
      return postCommentStart(state, action)

    case actionTypes.POST_COMMENT_FAIL:
      return postCommentFail(state, action)

    case actionTypes.POST_CONTENT_SUCCESS:
      return postContentSuccess(state, action)

    case actionTypes.POST_CONTENT_START:
      return postContentStart(state, action)

    case actionTypes.POST_CONTENT_FAIL:
      return postContentFail(state, action)

    default: return state
  }
}

export default reducer;