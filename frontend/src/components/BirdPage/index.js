import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { getAllImages, removeBirdImage } from "../../store/imagesReducer";
import { getComments } from "../../store/commentsReducer";
import './BirdPage.css';

const BirdPage = () => {
  const params = useParams();
  const { imageId } = params;
  const history = useHistory();
  const dispatch = useDispatch();

  const imagesObj = useSelector(state => state.imagesReducer);
  const images = Object.values(imagesObj);

  const birdById = images.find(bird => +bird.id === +imageId);

  const commentsObj = useSelector(state => state.commentsReducer);
  const comments = Object.values(commentsObj)
  const commentsForThisImage = comments.filter((comment) => +comment.id === +imageId)
  console.log('*************', commentsForThisImage);

  // const birdById = comments
  //USAR FIND PARA TENER SOLO LOS COMENTARIOS ASOCIADOS A ESTA IMAGEN.

  useEffect(() => {
    dispatch(getAllImages());
    dispatch(getComments());
  }, [dispatch])

  const handleRemove = (id) => {
    dispatch(removeBirdImage(id))
      .then(() => { history.push('/images') })
  }


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
          <p className='location'>{birdById?.Location.location}</p>
          <p className='body'>{birdById?.imageBody}</p>
        </div>
      </div>
      <div className='commentsDiv'>
        {commentsForThisImage.map(comment =>
          <div>
            <p key={comment?.id} className=''>{comment?.commentHeader}</p>
            <p key={comment?.id} className=''>{comment?.commentBody}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BirdPage;