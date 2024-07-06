import {
    createRoutesFromElements,
    Route,
    createHashRouter,
  } from 'react-router-dom';
import Root from './../components/Layout/Root';
import Page404 from './../pages/Page404';
import Dashboard from './../pages/Dashboard';
import ComingSoon from '../pages/ComingSoon';

const Router = createHashRouter(
    createRoutesFromElements(
        <Route element={<Root/>} errorElement={<Page404/>}>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='dashboard/' element={<Dashboard/>}/>
            <Route path='quizAi/' element={<ComingSoon/>}/>
            <Route path='chat/' element={<ComingSoon/>}/>
            <Route path='agents/' element={<ComingSoon/>}/>
            <Route path='*' element={<Page404/>}/>

        </Route>
    )
);

export {Router}