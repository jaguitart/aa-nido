import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { getAllImages, removeBirdImage } from "../../store/imagesReducer";
import { getComments } from "../../store/commentsReducer";
import { addAComment } from "../../store/commentsReducer";
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

  const birdById = images.find(bird => +bird.id === +imageId);

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

  //comments box function
  const reset =() =>{
    setCommentHeader('')
    setCommentBody('')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { 
      userId: sessionUser.id, 
      imageId,
      commentHeader,
      commentBody,
    };
    dispatch(addAComment(newComment))
    // .then(() => {history.push(`/images/${imageId}`)})
    reset()
  };


  return (
    <div>
      <NavLink to='/images'>
        <p>Back</p>
      </NavLink>
      <NavLink to={`/images/${imageId}/edit`}>
        <p>Edit</p>
      </NavLink>
      <button onClick={() => handleRemove(imageId)}>
        DELETE
      </button>
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
            <p  className=''>{comment?.commentHeader}</p>
            <p className=''>{comment?.commentBody}</p>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className=''>
        {/* <ul className=''>
          {errors.map((error, idx) => <li key={idx} className='loginErrors'>{error}</li>)}
        </ul> */}
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
    </div>
  )
}

export default BirdPage;