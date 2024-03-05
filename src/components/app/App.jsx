import RegisterForm from '../registerForm/RegisterForm';
import LoginForm from 'components/loginForm/LoginForm';
import Layout from 'components/layout/Layout';
import Home from 'components/home/Home';
import Phonebook from 'components/phonebook/Phonebook';
import PrivateRoute from 'components/privateRoute/PrivateRoute';
import ProtectedRoute from 'components/protectedRoute/ProtectedRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from 'hooks/useAuth';
import { refreshUser } from '../../redux/auth/operations';

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>loading...</p>;
  }

  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <PrivateRoute
                Component={<RegisterForm />}
                redirecTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <PrivateRoute Component={<LoginForm />} redirecTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={<ProtectedRoute Component={<Phonebook />} redirecTo="/" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// import ContactForm from '../contactForm/ContactForm';
// import Filter from '../filter/Filter';
// import ContactList from '../contactList/ContactList';
// import RegisterForm from '../registerForm/RegisterForm';
// import LoginForm from 'components/loginForm/LoginForm';
// import UserMenu from 'components/userMenu/UserMenu';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFilter } from '../../redux/reducers';
// import { AppContainer, AppWrapper } from './AppStyles';
// import { getContacts, addContact, deleteContact } from '../../redux/operations';
// import {
//   selectContacts,
//   selectIsLoading,
//   selectError,
//   selectFilter,
//   selectFilteredContacts,
// } from '../../redux/selectors';
// import useAuth from 'hooks/useAuth';
// import { refreshUser } from '../../redux/auth/operations';

// export default function App() {
//   const dispatch = useDispatch();
//   const { isRefreshing, isLoggedIn, token } = useAuth();

//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const filteredContacts = useSelector(selectFilteredContacts);

//   const handleAddContact = ({ name, number }) => {
//     const checkContactExist = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (checkContactExist) {
//       alert(`${name} is already in contacts`);
//     } else {
//       dispatch(addContact({ name, number }));
//     }
//   };

//   const HandleDeleteContact = contactId => {
//     dispatch(deleteContact(contactId));
//   };

//   const handleChangeFilter = evt => {
//     dispatch(setFilter(evt.target.value));
//   };

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   useEffect(() => {
//     if (token) dispatch(getContacts());
//   }, []);

//   if (isRefreshing) {
//     return <p>loading...</p>;
//   }

//   return (
//     <AppContainer>
//       <AppWrapper>
//         {isLoggedIn && <UserMenu />}
//         <RegisterForm />
//         <LoginForm />
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={handleAddContact} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={handleChangeFilter} />
//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={HandleDeleteContact}
//         />
//         {isLoading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//       </AppWrapper>
//     </AppContainer>
//   );
// }
