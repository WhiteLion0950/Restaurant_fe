import logo from './logo.svg';
import './App.scss';
import Categories from './views/categories';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  HashRouter,
  Switch,//permetterci di switchare nelle route che definiamo
  Route,  
} from 'react-router-dom'
import Category from "./views/category"
import NavbarCustom from './common/navigation/navbar';
import FooterCustom from './common/footer/footer';

function App() {
  return (
    <div className="app">
      <NavbarCustom />
   <HashRouter>
     <Switch>
       <Route exact path ="/">
         <Categories />
       </Route>

        <Route exact path ="/categories/:id">
        <Category />
        </Route>
     </Switch>
   </HashRouter>
   
   <FooterCustom />
   </div>
  )
}
export default App;

//da fare: aggiungere allert nell file categories
//fare .map per i props e aggiungere le card in 3 colonne