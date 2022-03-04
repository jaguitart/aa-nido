import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { editAComment } from "../../store/commentsReducer";
import AutosizeInput from 'react-input-autosize';
import './EditComment.css'

const EditCommentForm = ({ comment, editState, sendDataToParent, imageId }) => {
  const dispatch = useDispatch();
  const [editPopUp, setEditPopUp] = useState(editState)
  const [commentBody, setComment] = useState('');
  const oldComment = useSelector(state => state?.commentsReducer[comment.id].commentBody)
  const userId = useSelector(state => {
    if (state.session.user) {
      return state.session.user.id
    }
  })


  useEffect(() => {
    setComment(oldComment)
  }, [])

  const updateComment = e => {
    setComment(e.target.value)
  }

  const onEdit = async e => {
    e.preventDefault()
    if (!commentBody) setComment(oldComment)
    const editComment = {
      id: +comment.id,
      userId,
      postId: +imageId,
      commentBody
    }
    let submitted = await dispatch(editAComment(editComment))
      .catch(async res => {
        const data = await res.json();
      })
    if (submitted) {
      setEditPopUp(!editPopUp)
      sendDataToParent(!editPopUp)
    }
  }

  return (
    <>
      {editPopUp && (
        <form className='edit-your-comment' onSubmit={onEdit}>
            <div id="edit-comment-div">
              <AutosizeInput
                autoFocus
                className="edit-comment-input"
                name='comment'
                type='text'
                placeholder="comment..."
                value={commentBody}
                onChange={updateComment}
              />
          </div>
            <button className="hidden-submit" type='submit'>Update</button>
        </form>
      )}
    </>
  )
}

export default EditCommentForm