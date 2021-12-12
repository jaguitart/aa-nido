import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams, Redirect } from "react-router-dom";
import { getAllImages, editBirdImage } from "../../store/imagesReducer";
import { getAllCountries } from "../../store/locationReducer";

const EditBird = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const params = useParams();
  const { imageId } = params

  const sessionUser = useSelector(state => state.session.user);

  const countriesObj = useSelector(state => state)

  const fullState = Object.values(countriesObj)[2]
  const countries = Object.values(fullState)
  
  const imagesObj = useSelector(state => state.imagesReducer);
  const images = Object.values(imagesObj);
  
  const birdByIdToEdit = images.find(bird => +bird?.id === +imageId)



  const [imageTitle, setImageTitle] = useState('');
  const [locationId, setLocatioId] = useState('');
  const [imageBody, setImageBody] = useState('');
  const [errors, setErrors] = useState([]);



  let countriesArrIdLocation = []
  for (let i = 0; i < countries.length; i++) {
    let obj = {}
    obj['id'] = countries[i].id
    obj['location'] = countries[i].location
    countriesArrIdLocation.push(obj)
  }

  useEffect(() => {
    dispatch(getAllCountries());
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
      })
  }

  if (!sessionUser) return (
    <Redirect to="/" />
  );

  return (
    <div className='contanier'>
      <div className="card">
        <div className="card-image">
          <h2 className="card-heading">
            Edit: {birdByIdToEdit?.imageTitle}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="card-form">
          <ul className='formErrors'>
            {errors.map((error) => <li key={errors.indexOf(error)} className='loginErrors'>{error}</li>)}
          </ul>
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
  )
};

export default EditBird;
