import noPoster from '../../images/no_poster.png';
import {
  MovieContainer,
  Poster,
  Title,
  About,
  Text,
  Item,
  Vote,
} from './AboutMovie.styles';
const AboutMovie = ({ movies }) => {
  const {
    poster_path: poster,
    title,
    release_date: date,
    original_title: originalTitle,
    vote_average: vote,
    vote_count: votes,
    popularity,
    overview: about,
    genres,
  } = movies;
  return (
    <MovieContainer>
      <Poster
        src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noPoster}
        alt={title}
      />
      <ul>
        <Item>
          <Title>
            {title} ({date.slice(0, 4)})
          </Title>
        </Item>
        <Item>
          <Text>
            Vote/Votes: <Vote>{vote.toFixed(1)}</Vote>/<span>{votes}</span>
          </Text>
        </Item>
        <Item>
          <Text>
            Original Title: <span>{originalTitle}</span>
          </Text>
        </Item>
        <Item>
          <Text>
            Popularity: <span>{popularity.toFixed(1)}</span>
          </Text>
        </Item>
        <Item>
          <Text>
            Genre: <span>{genres.map(genre => genre.name).join(', ')}</span>
          </Text>
        </Item>
        <Item>
          <About>ABOUT</About>
          <Text>
            <span>{about}</span>
          </Text>
        </Item>
      </ul>
    </MovieContainer>
  );
};

export default AboutMovie;
