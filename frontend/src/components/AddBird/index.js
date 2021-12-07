import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addBirdImages } from "../../store/imagesReducer";

const AddBird = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const [imageTitle, setImageTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [locationId, setLocatioId] = useState(1);
  const [imageBody, setImageBody] = useState('');
  const [userId, setUserId] = useState('')
  const [albumId, setAlbumId] = useState('');
  const [errors, setErrors] = useState([]);


  //no llega a conectar con el backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBird = {
      imageTitle,
      imageUrl,
      locationId,
      imageBody,
      userId,
      albumId,
    };

    let createdBird;
    console.log(newBird);
    if (createdBird) {
      history.push(`/images/${createdBird.id}`);
    }
    return dispatch(addBirdImages(newBird))
  };

  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <h2 >Add A Bird from ^Country^</h2>
        <label htmlFor='imageUrl' className=''>Bird Url</label>
        <input
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          placeholder='Bird Url'
        />
        <label htmlFor='imageTitle' className=''>Bird Name</label>
        <input
          onChange={(e) => setImageTitle(e.target.value)}
          value={imageTitle}
          placeholder='Bird Name'
        />
        <label htmlFor='imageBody' className=''>Bird comments</label>
        <input
          onChange={(e) => setImageBody(e.target.value)}
          value={imageBody}
          placeholder='Bird Comments'
        />
        <label htmlFor='locationId' className=''>Bird Location</label>
        <select name='locationId'
          onChange={(e) => setLocatioId(e.target.value)}
          value={locationId}
        >
          {/* usar DB de locations para hacer un map y desplegar los paises
          {COLORS.map(color => (
            <option key={color} value={color}>
              {color}
            </option>
          ))} */}
        </select>
        <div className=''>
          <button type='submit' className=''>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddBird;