import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useParams, useHistory, NavLink } from 'react-router-dom';
import { getAllImages } from "../../store/imagesReducer";
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

  return (
    <div>
      <NavLink to='/images'>
        <p>Back</p>
      </NavLink>
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