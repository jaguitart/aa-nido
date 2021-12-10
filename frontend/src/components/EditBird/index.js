import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams, Redirect } from "react-router-dom";
import { editBirdImage } from "../../store/imagesReducer";
import { getAllImages } from "../../store/imagesReducer";
import { getAllCountries } from "../../store/locationReducer";

const EditBird = () => {
  const [imageTitle, setImageTitle] = useState('');
  const [locationId, setLocatioId] = useState(1);
  const [imageBody, setImageBody] = useState('');
  // const [albumId, setAlbumId] = useState('');
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch()
  const params = useParams();
  const { imageId } = params

  const sessionUser = useSelector(state => state.session.user);

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

  const imagesObj = useSelector(state => state.imagesReducer);
  const images = Object.values(imagesObj);

  const birdByIdToEdit = images.find(bird => +bird?.id === +imageId)

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    const birdEdited = {
      userId: sessionUser.id,
      albumId: sessionUser.id,
      imageTitle,
      imageBody,
      locationId
    }

    dispatch(editBirdImage(birdByIdToEdit.id, birdEdited))
      .then(res => {
        if (res.ok) {
          setErrors([]);
          history.push(`/images/${birdByIdToEdit.id}`)
        }
      })
      .catch(async res => {
        const info = await res.json();
        setErrors(info.errors)
        console.log(info.errors);
      })
  }

  if (!sessionUser) return (
    <Redirect to="/" />
  );

  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <h2>Edit specific Bird</h2>
        <ul className='loginErrorsList'>
          {errors.map((error) => <li key={errors.indexOf(error)} className='loginErrors'>{error}</li>)}
        </ul>
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
  )
};

export default EditBird;
