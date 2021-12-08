import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addBirdImages } from "../../store/imagesReducer";
import { getAllCountries } from "../../store/locationReducer";

const AddBird = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [imageTitle, setImageTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [locationId, setLocatioId] = useState('');
  const [imageBody, setImageBody] = useState('');
  const [albumId, setAlbumId] = useState('');
  const [errors, setErrors] = useState([]);

  const countriesObj = useSelector(state => state)
  const fullState = Object.values(countriesObj)[2]
  const countries = Object.values(fullState)

  let countriesArrIdLocation = []
  for (let i = 0; i < countries.length; i++) {
    let obj = {}
    obj['id'] = countries[i].id
    obj['location'] = countries[i].location
    countriesArrIdLocation.push(obj)
  }

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
//HAY QUE PROBAR SI ESTO MANDA LA INFORMACION NECESARIA PARA EL REDUCER
    const newBird = {
      imageTitle,
      imageUrl,
      locationId,
      imageBody,
      userId: sessionUser.id,
      albumId: sessionUser.id
    };


    if (newBird) {
      history.push(`/images`);
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
        <select
          name='locationId'
          onChange={(e) => setLocatioId(e.target.value)}
          value={locationId}
        >
          {countriesArrIdLocation.map(country => (
            <option key={country.id} value={country.id}>
              {country.location}
            </option>
          ))}
        </select>
        <div className=''>
          <button type='submit' className=''>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddBird;