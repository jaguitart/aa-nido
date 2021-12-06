import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const BirdPage = () => {
  const params = useParams()
  const history = useHistory()


  return (
    <h1>Single Bird</h1>
  )
}

export default BirdPage;