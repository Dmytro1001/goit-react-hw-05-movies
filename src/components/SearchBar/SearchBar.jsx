import { PropTypes } from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { SearchForm, SearchFormBtn, SearchFormInput } from './SearchBar.styles';

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter a movie title"
        value={value}
        onChange={onChange}
      />
      <SearchFormBtn type="submit" aria-label="Search">
        <BsSearch size={20} />
      </SearchFormBtn>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
