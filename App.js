import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import Welcome from './components/Welcome.js';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
import UpdatePassword from './components/UpdatePassword';


function App() {
  return (
    <div >
       
        <Router>
        <Switch>
          
          <Route path='/welcome' component={Welcome} />
          <Route path='/login' component={UserLogin} />
          <Route path='/register' component={UserRegister} />
          <Route path='/resetpassword' component={UpdatePassword} />
         
        </Switch>
        </Router>
       
    </div>
     
  );
}

export default App;