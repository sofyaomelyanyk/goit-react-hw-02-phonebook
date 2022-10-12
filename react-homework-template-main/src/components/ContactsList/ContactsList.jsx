import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, deleteContact }) => {
   return (
       <ul>
           {contacts.map(({ name, id, number }) => (
               <li key={id}>
                   <span>{name}: </span>
                   <span>{number}</span>

                   <button type='button' onClick={() => deleteContact(id)}>Delete</button>
               </li>
           ))}
       </ul>
   )
}

ContactsList.propTypes = {
   contacts: PropTypes.arrayOf(PropTypes.shape({
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   })).isRequired,
   deleteContact:  PropTypes.func.isRequired,


}