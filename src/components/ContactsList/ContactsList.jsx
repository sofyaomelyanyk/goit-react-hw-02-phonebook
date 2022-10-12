import PropTypes from 'prop-types';
import s from './ContactsList.module.css'

export const ContactsList = ({ contacts, deleteContact }) => {
   return (
       <ul className={s["contact-list"]}>
           {contacts.map(({ name, id, number }) => (
               <li key={id} className={s["contact-item"]}>
                   <span>{name}: </span>
                   <span>{number}</span>

                   <button type='button' onClick={() => deleteContact(id)} className={s["button"]}>Delete</button>
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