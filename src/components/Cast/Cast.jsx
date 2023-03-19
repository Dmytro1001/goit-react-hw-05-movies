import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCastFetch } from '../../services/api';
import noPhoto from '../../images/no_profile_picture.jpg';
import { List, Img, Wrapper } from './Cast.styles';

const Cast = () => {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    movieCastFetch(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  console.log(cast);

  if (cast !== '') {
    return (
      <>
        <List>
          {cast.map(actor => (
            <li key={actor.id}>
              <Wrapper>
                {actor.profile_path ? (
                  <Img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <Img src={noPhoto} alt={actor.name} />
                )}
                <h3>{actor.name}</h3>
                {actor.character ? (
                  <h4>"{actor.character}"</h4>
                ) : (
                  <h4>{null}</h4>
                )}
              </Wrapper>
            </li>
          ))}
        </List>
      </>
    );
  }
};

export default Cast;
