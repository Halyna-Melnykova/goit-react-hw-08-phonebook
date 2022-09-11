import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

const Navigation = lazy(() => import('./Navigation/Navigatoin'));
// const UserMenu = lazy(() => import('./UserMenu/UserMenu'));
// const ContactForm = lazy(() => import('./ContactForm/ContactForm'));
// const ContactList = lazy(() => import('./ContactList/ContactList'));
// const Filter = lazy(() => import('./Filter/Filter'));

// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Register />} />
        </Routes>
      </Suspense>
    </div>
  );

  // return (
  //   <>
  //     <ContactForm />
  //     <h2>Contacts</h2>
  //     <Filter />
  //     <ContactList />
  //   </>
  // );
};

export default App;
