import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { getAllImages, removeBirdImage } from "../../store/imagesReducer";
import { getComments } from "../../store/commentsReducer";
import { addAComment, removeAComment } from "../../store/commentsReducer";
import './BirdPage.css';

const BirdPage = () => {
  const params = useParams();
  const { imageId } = params;
  const history = useHistory();
  const dispatch = useDispatch();

  //need for comments
  const [commentHeader, setCommentHeader] = useState('');
  const [commentBody, setCommentBody] = useState('');
  const sessionUser = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);

  const imagesObj = useSelector(state => state.imagesReducer);
  const images = Object.values(imagesObj);


  const birdById = images.find(bird => +bird?.id === +imageId);

  const commentsObj = useSelector(state => state.commentsReducer);
  const comments = Object.values(commentsObj)
  const commentsForThisImage = comments.filter((comment) => comment.imageId === +imageId)

  useEffect(() => {
    dispatch(getAllImages());
    dispatch(getComments());
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
      <NavLink to='/images'>
        <p>Back</p>
      </NavLink>
      {sessionUser && sessionUser.id === birdById?.userId &&
        <NavLink to={`/images/${imageId}/edit`}>
          <p>Edit</p>
        </NavLink>
      }
      {sessionUser && sessionUser.id === birdById?.userId &&
        <button onClick={() => handleRemove(imageId)}>
          DELETE
        </button>
      }
      <div className='imgSingleDiv'>
        <img className='imgSingleBird' key={birdById?.id} src={birdById?.imageUrl} alt={birdById?.imageTitle} />
        <div className='textDiv'>
          <p className='title'>{birdById?.imageTitle}</p>
          <p className='location'>{birdById?.Location?.location}</p>
          <p className='body'>{birdById?.imageBody}</p>
        </div>
      </div>
      <div className='commentsDiv'>
        {commentsForThisImage.map(comment =>
          <div key={comment?.id}>
            <p className=''>{comment?.commentHeader}</p>
            <p className=''>{comment?.commentBody}</p>
            <p>{sessionUser && sessionUser.id === comment?.userId &&
              <button onClick={() => handleDelete(comment?.id)} className=''>
                Delete
              </button>
            }</p>
          </div>
        )}
      </div>
      {sessionUser &&
        <form onSubmit={handleComment} className=''>
          <ul className=''>
            {errors.map((error) => <li key={errors.indexOf(error)} className='loginErrors'>{error}</li>)}
          </ul>
          <input
            onChange={(e) => setCommentHeader(e.target.value)}
            value={commentHeader}
            placeholder='Header comment here...'
          />
          <input
            onChange={(e) => setCommentBody(e.target.value)}
            value={commentBody}
            placeholder='Body comment here...'
          />
          <div className=''>
            <button type='submit' className=''>Submit</button>
          </div>
        </form>
      }
    </div>
  )
}

export default BirdPage;