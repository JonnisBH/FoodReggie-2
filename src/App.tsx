import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './home/HomePage';
import FoodListPage from './food/FoodListPage';
import FoodCreatePage from './food/FoodCreatePage';
import FoodUpdatePage from "./food/FoodUpdatePage";
import RegistrationListPage from './registrate/RegistrationListPage';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/foods">Food</a></li>
          <li><a href="/registrations">Registrations</a></li>
        </ul>
      </nav>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/foods" element={<FoodListPage/>}/>
            <Route path='/foodcreate' element={<FoodCreatePage/>}/>
            <Route path='/foodupdate/:foodId' element={<FoodUpdatePage/>}></Route>
            <Route path="*" element={<Navigate to="/" replace/>}/>
            <Route path='/registrations' element={<RegistrationListPage/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
