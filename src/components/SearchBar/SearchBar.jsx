import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { SearchForm, SearchFormBtn, SearchFormInput } from './SearchBar.styles';

export const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      toast.info('Type something to find', {
        position: 'top-center',
        theme: 'colored',
      });
      return;
    }
    onSubmit(value.trim());
    setValue('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter a movie title"
        value={value}
        onChange={handleChange}
      />
      <SearchFormBtn type="submit" aria-label="Search">
        <BsSearch size={20} />
      </SearchFormBtn>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export default { SearchBar };
