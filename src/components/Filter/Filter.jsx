import PropTypes from 'prop-types';

export const Filter = ({filter, changeFilter}) => {

   return(
      <label>
      <span>Find contacts by name</span>
      <input type="text" value={filter} onChange={changeFilter} />
      </label>
   )
}

Filter.propTypes =  {
   filter: PropTypes.string.isRequired,
   changeFilter: PropTypes.func.isRequired,
}

