import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addBirdImages } from "../../store/imagesReducer";
import { getAllCountries } from "../../store/locationReducer";
import { Redirect } from "react-router-dom";

const AddBird = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [imageTitle, setImageTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [locationId, setLocatioId] = useState('');
  const [imageBody, setImageBody] = useState('');
  // const [albumId, setAlbumId] = useState('');
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

    const newBird = {
      imageTitle,
      imageUrl,
      locationId,
      imageBody,
      userId: sessionUser.id,
      //hardcoded until feature creation
      albumId: 1
    };

    return dispatch(addBirdImages(newBird))
      .then(res => {
        if (res.ok) {
          setErrors([]);
          history.push(`/images`);
        }
      })
      .catch(async res => {
        const info = await res.json();
        setErrors(info.errors)
      })
  };

  if (!sessionUser) return (
    <Redirect to="/" />
  );

  return (
    <div className="container">
      <div className="card">
        <div className="card-image">
          <h2 class="card-heading">
            Get started
            <h3>Let us create a Bird</h3>
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="card-form">
          <ul className='loginErrorsList'>
            {errors.map((error) => <li key={errors?.indexOf(error)} className='loginErrors'>{error}</li>)}
          </ul>
          <div className="input">
            <input
              className="input-field"
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
            />
            <label htmlFor='imageUrl' className='input-label'>Bird Url</label>
          </div>
          <div className="input">
            <input
              className="input-field"
              onChange={(e) => setImageTitle(e.target.value)}
              value={imageTitle}
            />
            <label htmlFor='imageTitle' className='input-label'>Bird Name</label>
          </div>
          <div className="input">
            <textarea
              className="input-field"
              onChange={(e) => setImageBody(e.target.value)}
              value={imageBody}
            />
            <label htmlFor='imageBody' className='input-label'>Bird comments</label>
          </div>
          <div className="input">
          <select
            className="input-field"
            name='locationId'
            onChange={(e) => setLocatioId(e.target.value)}
            value={locationId}
          >
            <option className="option1">
              ---- select a country ----
            </option>
            {countriesArrIdLocation.map(country => (
              <option key={country?.id} value={country?.id}>
                {country?.location}
              </option>
            ))}
          </select>
          <label htmlFor='locationId' className='input-label'>Bird Location</label>
          </div>
          <div className='action'>
            <button type='submit' className='action-button'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBird;