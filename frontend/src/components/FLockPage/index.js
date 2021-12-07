import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { getAllImages } from "../../store/imagesReducer";

const FlockPage = () => {
  const dispatch = useDispatch();
  const imagesObj = useSelector(state => state.imagesReducer);
  const images = Object.values(imagesObj);
  
  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch])

  console.log("HERE", images[0])

  return (
    <div>
      <h1>All Birds from a specific Region</h1>
      <div>
        {images.map(image => (
          <img
            key={image.id}
            src={image.imageUrl}
            alt={image.imageTitle}
          />
        ))}
      </div>
    </div>
  )
}

export default FlockPage;