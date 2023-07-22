import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoutingPostLogin from './pages/routing/RoutingPostLogin';
import LogIn from './pages/logIn/LogIn';
import Project from './pages/project/Project'

function App() {
  const isLogin = false
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/logIn"
            element={<LogIn />}
          />
          <Route
            path='/*'
            element={<RoutingPostLogin />}
          />
           <Route
            path='/*'
            element={<Project />}
          />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}





export default App;
