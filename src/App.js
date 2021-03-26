
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Categories from './views/categories';
import {
  HashRouter,
  Switch,//permetterci di switchare nelle route che definiamo
  Route,  
} from 'react-router-dom'
import Category from "./views/category"
import EveryItem from './views/everyItem'
import NavbarCustom from './common/navigation/navbar';
import FooterCustom from './common/footer/footer';
import Login from './views/login';
import AuthWrapper from './views/authWrapper';
import {store, persistor} from'./redux/store'
import {Provider} from 'react-redux'
import {PersistGate} from  'redux-persist/integration/react'
import Carrello from './common/cards/carrelloProdotti';
import CardDetails from '../src/common/cards/dettaglioProdotti'
function App() {
  return (
    <Provider store={store}>
       <PersistGate persistor={persistor}>
   <HashRouter>
     <Switch>
       <Route exact path ="/">
       <AuthWrapper key={"categories"}>
         <Wrapper>
         <Categories />
         </Wrapper>
         </AuthWrapper>
       </Route>

        <Route exact path ="/categories/:id">
         <AuthWrapper key={"category"}>
           <Wrapper>
           <Category />
           </Wrapper>
         </AuthWrapper>
        </Route>

        <Route exact path = '/everyItem'>
         <AuthWrapper key={'category'}>
            <Wrapper>
              <EveryItem/>
            </Wrapper>
          </AuthWrapper>       
        </Route>

        <Route exact path = '/details/:id'>
         <AuthWrapper key={'dettaglio'}>
            <Wrapper>
              <CardDetails/>
            </Wrapper>
          </AuthWrapper>       
        </Route>

        <Route exact path ="/login">
        <Login />        
        </Route><Route extract path='/cart'>
          <AuthWrapper key={'cart'}>
            <Wrapper>
              <Carrello/>
            </Wrapper>
          </AuthWrapper>
        </Route>
   </Switch>
     </HashRouter>
    <FooterCustom />
    </PersistGate>
   </Provider>
  );
}
const Wrapper = (props) => (
  <>
      <NavbarCustom/>
      <FooterCustom/>
      {props.children}
      
  </>
)
export default App;

