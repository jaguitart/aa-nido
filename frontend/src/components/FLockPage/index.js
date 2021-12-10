///TRY
import React from "react";
import { BiEditAlt, BiExpand, BiX } from "react-icons/bi";

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

  const birdsOwned = images.filter(bird => +bird?.userId === sessionUser?.id)
    .map(bird => bird.id)

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch])

  //TENGO QUE HACER EL BOTON PARA ELIMINAR DESDE AQUI

  return (
    <div>
      <h1>All Birds from a specific Region</h1>
      {sessionUser &&
        <NavLink exact to="/images/add" className="">Add a Bird</NavLink>
      }
      <div className='imgsContainer'>
        {images.map(image => (
          <div className='imgContainer'>
            <NavLink to={`images/${image?.id}`} key={image?.id}>
              <div>
                <img className='img' key={image?.id} src={image?.imageUrl} alt={image?.imageTitle} />
              </div>
              <div className="textDiv">
                <p className='imgTitle'>{image?.imageTitle}</p>
                <p className='imgLocation'>{image?.Location?.location}</p>
                <BiExpand id="expand" />
                {birdsOwned.includes(image?.id) &&
                  <NavLink to={`images/${image?.id}/edit`} key={image?.id}>
                    <BiEditAlt id="edit" />
                  </NavLink>
                }
                {birdsOwned.includes(image?.id) &&
                  <NavLink to={`images/${image?.id}/delete`} key={image?.id}>
                    <BiX id="delete" />
                  </NavLink>
                }
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div >
  )
}

export default FlockPage;