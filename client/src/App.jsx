// Bringing in the required import from 'react-router-dom'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Nav from './components/Nav';
import './App.css';
import Modal from './components/Modal/Modal';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/api',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  const [isOpen, setIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('');

  const closeModal = () => {
    setIsOpen(false);
    setCurrentTab('');
  }
  const openSignupModal = () => {
    setIsOpen(true);
    setCurrentTab('Signup');
  }
  const openLoginModal = () => {
    setIsOpen(true);
    setCurrentTab('Login');
  }
  const toggleModal = () => {
    if (currentTab === "Login") {
      openSignupModal();
    } else if (currentTab === "Signup") {
      openLoginModal();
    }
  }

  return (
    <ApolloProvider client={client}>
      <div>
        {isOpen && <Modal isOpen={isOpen} onClose={closeModal} currentTab={currentTab} toggleModal={toggleModal}/>}
        <Nav openLoginModal={openLoginModal} openSignupModal={openSignupModal} toggleModal={toggleModal}/>
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
