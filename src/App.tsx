import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './home/HomePage';
import FoodListPage from './food/FoodListPage';
import FoodCreatePage from './food/FoodCreatePage';

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/foods">Food</a></li>
        </ul>
      </nav>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/foods" element={<FoodListPage/>}/>
            <Route path='/foodcreate' element={<FoodCreatePage/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
