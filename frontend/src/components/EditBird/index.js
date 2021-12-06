import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditBird = () => {
  const [imageTitle, setImageTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [locationId, setLocatioId] = useState('');
  const [imageBody, setImageBody] = useState('');
  const [albumId, setAlbumId] = useState('');
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const params = useParams();

  return (
    <div className=''>
      <form>
        <h2>Edit specific Bird</h2>
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
        <button type ='submit' className=''>Submit</button>
        </div>
      </form>
    </div>
  )
};

export default EditBird;
