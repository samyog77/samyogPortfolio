import { RouterProvider,createBrowserRouter } from 'react-router-dom'


import Root from './pages/Root';
import Home from './pages/Home'
import MyProjects from './pages/MyProjects';
import Contact from './pages/Contact';
import './App.css'



function App() {

  const router = createBrowserRouter([
    {
      path:'/',element:<Root/>, 
      children:[
        {path: '/', element: <Home/>},
        {path:'/myProjects',element:<MyProjects/>},
        {path:'/contact',element:<Contact/>},
      ]
    },

  ]);

  return (
     <>
        <RouterProvider router = {router}/>
        
     </> 
      
 
  );
}

export default App

