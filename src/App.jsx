import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './pages/Root'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import CareerDevelopmentResources from './components/CareerDevelopmentResources'
import CallForPapers from './components/CallForPapers'
import SubmissionPortal from './components/SubmissionPortal'
import Schedule from './components/Schedule'

const router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'contact-us',
        element:<ContactUs/>
      },
      {
        path:'career-development-resources',
        element:<CareerDevelopmentResources/>
      },
      {
        path:'call-for-papers',
        element:<CallForPapers/>
      },
      {
        path:'call-for-papers/submission-portal',
        element:<SubmissionPortal/>
      },
      {
        path:'schedule',
        element:<Schedule/>
      }
    ]
  }
])
function App() {
  return <RouterProvider router={router}/>
}

export default App
