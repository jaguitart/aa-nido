import React from "react";
import { BiX, BiEditAlt, BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { getAllImages, removeBirdImage } from "../../store/imagesReducer";
import { getComments } from "../../store/commentsReducer";
import { addAComment, removeAComment } from "../../store/commentsReducer";
import { Modal } from "../context/Modal";
import './BirdPage.css';

const BirdPage = ({ birdImages }) => {
  const params = useParams();
  const { imageId } = params;
  const history = useHistory();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const updateShowModal = () => setShowModal(true)

  //need for comments
  const [commentHeader, setCommentHeader] = useState('');
  const [commentBody, setCommentBody] = useState('');
  const sessionUser = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const birdById = birdImages.find(bird => +bird?.id === +imageId);
  const commentsObj = useSelector(state => state.commentsReducer);
  const comments = Object.values(commentsObj)
  const commentsForThisImage = comments.filter((comment) => comment.imageId === +imageId)

  useEffect(() => {
    dispatch(getComments());
    dispatch(getAllImages());
  }, [dispatch])

  const handleRemove = (id) => {
    dispatch(removeBirdImage(id))
      .then(() => { history.push('/images') })
  }

  const reset = () => {
    setCommentHeader('')
    setCommentBody('')
  }
  const handleComment = (e) => {
    e.preventDefault();
    const newComment = {
      userId: sessionUser.id,
      imageId,
      commentHeader,
      commentBody,
    };
    dispatch(addAComment(newComment))
      .then(res => {
        if (res.ok) {
          dispatch(getComments());
          setErrors([])
          reset()
        }
      })
      .catch(async res => {
        const info = await res.json();
        setErrors(info.errors)
      })
  };

  const handleDelete = (id) => {
    dispatch(removeAComment(id));
    history.push(`/images/${imageId}`);
  }

  return (
    <div>
      <div>
        <div className='imgSingleDiv'>
          <div>
            <NavLink to='/images'>
              <BiArrowBack id="backToBirds" />
            </NavLink>
          </div>
          <div className='imgDiv'>
            {sessionUser && sessionUser.id === birdById?.userId &&
              <>
                <BiX id="deleBirdX" onClick={updateShowModal} />
                {showModal && (
                  <Modal onClose={() => setShowModal(!showModal)}>
                    <div className="delete-modal-div">
                      <h2 id="delete-modal-text">Are you sure to delete this picture?</h2>
                      <div>
                        <button className="delete-action-button" onClick={() => handleRemove(imageId)}>Delete</button>
                        <button className="delete-action-button" onClick={() => setShowModal(!showModal)}>Cancel</button>
                      </div>
                    </div>
                  </Modal>
                )}
              </>
            }
            {sessionUser && sessionUser.id === birdById?.userId &&
              <NavLink to={`/images/${imageId}/edit`}>
                <BiEditAlt id="editBirdX" />
              </NavLink>
            }
            <img className='imgSingleBird' key={birdById?.id} src={birdById?.imageUrl} alt={birdById?.imageTitle} />
          </div>
        </div>

        <div className='textAndCommentsDiv'>
          <div className='textsDiv'>
            <p className='title'>{birdById?.imageTitle}</p>
            <p className='location'>{birdById?.Location?.location}</p>
            <p className='user'>by: {birdById?.User?.username}</p>
            <p className='body'>{birdById?.imageBody}</p>
          </div>

          <div className='commentsDiv'>
            <div className='commentsTextDiv'>
              {commentsForThisImage.map(comment =>
                <div className='textDiv2' key={comment?.id}>
                  <div id='userTitle'>
                    <p className='usuarioComments'>{comment?.User?.username}:</p>
                    <p className='textos' id='textoHeader'>{comment?.commentHeader}</p>
                  </div>
                  <p className='textos' id='textoBody'>{comment?.commentBody}</p>
                  {sessionUser && sessionUser.id === comment?.userId &&
                    <BiX id="delete2" onClick={() => handleDelete(comment?.id)} />
                  }
                </div>
              )}
            </div>

            <div className='commentFormDiv' id='commentFormDiv'>
              {sessionUser &&
                <form onSubmit={handleComment} className='card-form' id='commentsForm'>
                  <div className='errorsDiv'>
                    <ul className='formErrors' >
                      {errors.map((error) => <li key={errors.indexOf(error)} id='erroresComments' className='loginErrors'>{error}</li>)}
                    </ul>
                  </div>
                  <div className="input" id='inputTextComment'>
                    <input
                      className="input-field"
                      id='textComment'
                      onChange={(e) => setCommentHeader(e.target.value)}
                      value={commentHeader}
                      placeholder='Comment title here...'
                    />
                  </div>
                  <div className="input" id='commentsForm'>
                    <textarea
                      id='textCommentArea'
                      className="input-field"
                      onChange={(e) => setCommentBody(e.target.value)}
                      value={commentBody}
                      placeholder='Comment here...'
                    />
                  </div>
                  <div className='commentButtonDiv'>
                    <button type='submit' className='commentButton'>Submit</button>
                  </div>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BirdPage;