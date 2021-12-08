import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { getAllImages, removeBirdImage } from "../../store/imagesReducer";
import './BirdPage.css';

const BirdPage = () => {
  const params = useParams();
  const { imageId } = params;
  const history = useHistory();
  const dispatch = useDispatch();

  const imagesObj = useSelector(state => state.imagesReducer);
  const images = Object.values(imagesObj);

  const birdById = images.find(bird => +bird.id === +imageId)

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch])


  const handleRemove = (id) => {
    dispatch(removeBirdImage(id))
    .then(() => {history.push('/images')})
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
    </div>
  )
}

export default BirdPage;