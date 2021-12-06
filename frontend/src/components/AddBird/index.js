import { useState } from "react";
import { useHistory } from "react-router";

const AddBid = () => {
  const [imageTitle, setImageTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [locationId, setLocatioId] = useState('');
  const [imageBody, setImageBody] = useState('');
  const [userId, setUserId] = useState('')
  const [albumId, setAlbumId] = useState('');
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  
  
  return (
    <div className='add-image'>
      <form>
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
        <div className=''>
          <button type='submit' className=''>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddBid;