import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './home/HomePage';
import FoodListPage from './food/FoodListPage';
import FoodCreatePage from './food/FoodCreatePage';
import FoodUpdatePage from "./food/FoodUpdatePage";
import RegistrationListPage from './registrate/RegistrationListPage';
import NavMenu from './nav/NavMenu';

const App: React.FC = () => {
  return (

    <Router>
      <NavMenu />
      <div className='tw-px-48 tw-py-16'>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/foods" element={<FoodListPage />}/>
          <Route path='/foodcreate' element={<FoodCreatePage />}/>
          <Route path='/foodupdate/:foodId' element={<FoodUpdatePage />}></Route>
          <Route path='/registrations' element={<RegistrationListPage/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
