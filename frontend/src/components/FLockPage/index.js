import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { getAllImages } from "../../store/imagesReducer";
import { NavLink } from "react-router-dom";
import { RiMapPinUserFill } from "react-icons/ri";
import { Redirect } from "react-router-dom";
import './FlockPage.css';

const FlockPage = ({ birdImages }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const birdsOwned = birdImages.filter(bird => +bird?.userId === sessionUser?.id)
    .map(bird => bird.id)

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch])

  // const handleRemove = (id, e) => {
  //   e.stopPropagation();
  //   dispatch(removeBirdImage(id))
  // }

  if (!sessionUser) return (
    <Redirect to="/" />
  );

  return (
    <>
      <h1 id='flockTitle'>Explore birds from South America</h1>
      <div className='imgsContainer'>
        {birdImages.map(image => (
          <div id='imgContainer' className='imgContainer' key={image.id}>
            <NavLink to={`/images/${image.id}`}>
              <div id='flockpage-img-div'>
                <img className='img' key={image.id} src={image?.imageUrl} alt={`bird ${image.imageTitle}`} />
              </div>
              <div className="textDiv">
                <p className='imgTitle'>{image?.imageTitle}</p>
                <p className='imgLocation'>{image?.Location?.location}</p>
                <p className='userName'>by: {image?.User?.username}</p>
                {birdsOwned.includes(image?.id) &&
                  <RiMapPinUserFill id="edit" />
                }
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
    </ >
  )
}

export default FlockPage;