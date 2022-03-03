import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { getAllImages, removeBirdImage } from "../../store/imagesReducer";
import { NavLink } from "react-router-dom";
import './FlockPage.css';

const FlockPage = ({ birdImages }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const birdsOwned = birdImages.filter(bird => +bird?.userId === sessionUser?.id)
    .map(bird => bird.id)

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch])

  const handleRemove = (id, e) => {
    e.stopPropagation();
    dispatch(removeBirdImage(id))
  }

  return (
    <div>
      <h1 id='flockTitle'>Explore birds from South America</h1>
      <div className='imgsContainer'>
        {birdImages.map(image => (
          <div className='imgContainer' key={image.id}>
            <NavLink to={`/images/${image.id}`}>
              <div>
                <img className='img' key={image.id} src={image?.imageUrl} alt={`bird ${image.imageTitle}`} />
              </div>
              <div className="textDiv">
                <p className='imgTitle'>{image?.imageTitle}</p>
                <p className='imgLocation'>{image?.Location?.location}</p>
                <p className='userName'>by: {image?.User?.username}</p>
                {/* {birdsOwned.includes(image?.id) &&
                  < to={`images/${image?.id}/edit`}>
                    <BiEditAlt id="edit" />
                  </>
                } */}
                {/* {birdsOwned.includes(image?.id) &&
                  <p onClick={() => handleRemove(this.image.id)}>
                    <BiX id="delete" />
                  </p>
                } */}
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div >
  )
}

export default FlockPage;