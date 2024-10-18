import { Details } from './component/Details';

import { PatientFullDetails } from './component/PatientFullDetails';
import { DetailsOutlet } from './Layout/DetailsOutlet';

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import { PatientHome } from './Pages/PatientHome';
import { OverviewPage } from './Pages/OverviewPage';
import { MainOutlet } from './Layout/MainOutlet';
import ErrorPage from './component/ErrorPage';

function App() {
     const router = createBrowserRouter(
          createRoutesFromElements(

                    <Route path='/' element={<MainOutlet />}>
                         <Route path='/' element={<PatientHome />}>
                             
                         </Route>
                         <Route path='/patients/:id' element={<DetailsOutlet />}>
                                   <Route path='/patients/:id' element={<PatientFullDetails />} />
                              </Route>
                         <Route path='/overview' element={<OverviewPage />} />
                         <Route path='*' element={<ErrorPage/>}/>
                    </Route>
       
          )
     );

     return <RouterProvider router={router} />;
}

export default App;
