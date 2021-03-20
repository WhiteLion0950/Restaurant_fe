
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Categories from './views/categories';
import {
  HashRouter,
  Switch,//permetterci di switchare nelle route che definiamo
  Route,  
} from 'react-router-dom'
import Category from "./views/category"
import NavbarCustom from './common/navigation/navbar';
import FooterCustom from './common/footer/footer';
import Login from './views/login';
import AuthWrapper from './views/authWrapper';

function App() {
  return (
    <div className="app">
      <NavbarCustom />
      
   <HashRouter>
     <Switch>
       <Route exact path ="/">
       <AuthWrapper key={"category"}>
         <Categories />
         </AuthWrapper>
       </Route>

        <Route exact path ="/categories/:id">
          
        <Category />
       
        </Route>

        <Route exact path ="/login">
        <Login />
        </Route>

     </Switch>
   </HashRouter>
   
   <FooterCustom />
   </div>
  )
}
export default App;

