import logo from './logo.svg';
import './App.scss';
import Categories from './views/categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardElement from './common/cards/cardElement';
import {
  HashRouter,
  Switch,//permetterci di switchare nelle route che definiamo
  Route,  
} from 'react-router-dom'
import Category from "./views/category"
import NavbarCustom from './common/cards/navbar/navbar';
import FooterCustom from './common/cards/footer/footer';

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
   <CardElement />
   <FooterCustom />
   </div>
  )
}
export default App;

//da fare: aggiungere allert nell file categories
//fare .map per i props e aggiungere le card in 3 colonne