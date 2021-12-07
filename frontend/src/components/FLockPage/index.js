import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { getAllImages } from "../../store/imagesReducer";
import { NavLink } from "react-router-dom";
import './FlockPage.css';

const FlockPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const imagesObj = useSelector(state => state.imagesReducer);
  const images = Object.values(imagesObj);

  useEffect(() => {
    dispatch(getAllImages());
  }, [])

  return (
    <div>
      <h1>All Birds from a specific Region</h1>
      { sessionUser && 
        <NavLink exact to="/images/add" className="">Add a Bird</NavLink>
      }
      <div className='imgsContainer'>
        {images.map(image => (
          <NavLink to={`images/${image.id}`} key={image?.id}>
            <div className='imgContainer'>
              <img className='img' key={image.id} src={image.imageUrl} alt={image.imageTitle} />
              <p className='imgTitle'>{image.imageTitle}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default FlockPage;