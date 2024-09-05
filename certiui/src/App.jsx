import React from 'react'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import Homepage from './pages/Homepage'
import Certificatepage from './pages/Certificatepage'
import Issuepage from './pages/Issuepage'
import Mainlayout from './Layout/Mainlayout'
import Notfoundpage from './pages/Notfoundpage'
import Pagelayout from './Layout/Pagelayout'

function App() {

    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={<Mainlayout />}>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/certificate/:id" element={<Certificatepage />} /> */}
            <Route path="/issue" element={<Issuepage />} />
            {/* <Route path="*" element={<Notfoundpage />} /> */}
          </Route>
          <Route path="/" element={<Pagelayout />}>
            <Route path="/certificate/:id" element={<Certificatepage />} />
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </>
      )
    );
    
  return (
    <>


    {/* <Issuepage /> */}
    <RouterProvider router={router} />


   
    </>
  )
}

export default App