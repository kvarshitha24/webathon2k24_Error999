import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Upload from './components/Upload'
import Profile from './components/Profile';
import Login from './components/Login';
import Test from './components/Test';
import Analysis from './components/Analysis';
import TestScoresChart from './components/TestScoresChart';
function App() {
  const router=createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children:
        [
          { 
            path:"/",
            element:<Home/>
          },
          {
            path:"/Upload",
            element:<Upload/>
          },
          {
            path:"/Profile",
            element:<Profile/>
          },
          {
            path:"/Login",
            element:<Login/>
          },
          
          {
            path:"/Test",
            element:<Test/>
          },
          
          {
            path:"/Analysis",
            element:<Analysis/>
          },
          
          {
            path:"/TestScoresChart",
            element:<TestScoresChart/>
          }
        ]
    }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
