import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Employment from './pages/Employment'
import Projects from './pages/Projects'

//This is multer code for uploading files, please ignore for now.
// const Main = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('profilePic', file);

//       const response = await fetch('http://localhost:3001/upload-profile-pic', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         const responseData = await response.json();
//         console.log(responseData); // Handle the response as needed
//       } else {
//         console.error('Error uploading profile picture:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error uploading profile picture:', error.message);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload Profile Picture</button>
//     </div>
//   );
// };


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/employment',
        element: <Employment />
      },
      {
        path: '/projects',
        element: <Projects />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
