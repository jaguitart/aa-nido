import React from "react";
import { BiEditAlt, BiExpand, BiX } from "react-icons/bi";

import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { getAllImages, removeBirdImage } from "../../store/imagesReducer";
import { NavLink } from "react-router-dom";
import './FlockPage.css';

const FlockPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const imagesObj = useSelector(state => state.imagesReducer);
  const images = Object.values(imagesObj);

  const birdsOwned = images.filter(bird => +bird?.userId === sessionUser?.id)
    .map(bird => bird.id)

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch])

  const handleRemove = (id) => {
    dispatch(removeBirdImage(id))
  }

  return (
    <div>
      <h1>All Birds from a specific Region</h1>
      {sessionUser &&
        <NavLink exact to="/images/add" className="">Add a Bird</NavLink>
      }
      <div className='imgsContainer'>
        {images.map(image => (
          <div className='imgContainer' key={image?.id}>
            <div>
              <img className='img' key={image?.id} src={image?.imageUrl} alt={image?.imageTitle} />
            </div>
            <div className="textDiv">
              <p className='imgTitle'>{image?.imageTitle}</p>
              <p className='imgLocation'>{image?.Location?.location}</p>
              <NavLink to={`images/${image?.id}`}>
                <BiExpand id="expand" />
              </NavLink>
              {birdsOwned.includes(image?.id) &&
                <NavLink to={`images/${image?.id}/edit`}>
                  <BiEditAlt id="edit" />
                </NavLink>
              }
              {birdsOwned.includes(image?.id) &&
                <p onClick={() => handleRemove(image?.id)}>
                  <BiX id="delete" />
                </p>
              }
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default FlockPage;