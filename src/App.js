import Login from './screens/login/index';

import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

function App() {
  return (
    <div>
     <Router>
       <Switch>
         <Route exact path='/' element={<Login />} />
         <Route exact path='/register' element={<Login />} />
         <Route exact path='/dashboard' element={<Login />} />
         <Route exact path='/my-movie-list' element={<Login />} />
       </Switch>
     </Router>
     
    </div>
  );
}

export default App;
