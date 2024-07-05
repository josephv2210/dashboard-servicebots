import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
    HashRouter,
    createHashRouter,
  } from 'react-router-dom';
import Root from './components/Layout/Root';
import Page404 from './pages/Page404';
import Dashboard from './pages/Dashboard';
function App() {

    const router = createHashRouter(
        createRoutesFromElements(
            <Route element={<Root/>} errorElement={<Page404/>}>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='*' element={<Page404/>}/>

            </Route>
            // <Route path='/' element={}
        )
    );

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App