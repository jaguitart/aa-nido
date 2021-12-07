import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { getAllImages } from "../../store/imagesReducer";

const FlockPage = () => {
  const dispatch = useDispatch();
  const imagesObj = useSelector((state) => state.images);
  console.log(imagesObj)
  // const images = Object.values(imagesObj);

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch])

  return (
    <div>
      <h1>All Birds from a specific Region</h1>
      <div>
        {/* {images.map(image => (
          <img
            src={image.imageUrl}
            alt={image.imageTitle}
          >

          </img>
        ))} */}
      </div>
    </div>
  )
}

export default FlockPage;