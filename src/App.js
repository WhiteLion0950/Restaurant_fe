
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
import Login from './views/login/login';
import AuthWrapper from './views/authWrapper';
import {store, persistor} from'./redux/store'
import {Provider} from 'react-redux'
import {PersistGate} from  'redux-persist/integration/react'
import Carrello from './views/cart/carrelloProdotti';
import Details from '../src/views/dettaglioProdotti'
import Ordini from './views/cart/ordini'
import Storico from './views/cart/storico'

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
              <Details/>
            </Wrapper>
          </AuthWrapper>       
        </Route>

        <Route exact path ="/login">
        <Login />        
        </Route>
        <Route extract path='/cart'>
          <AuthWrapper key={'cart'}>
            <Wrapper>
              <Carrello/>
            </Wrapper>
          </AuthWrapper>
        </Route>
        <Route extract path='/storico'>
          <AuthWrapper key={'storico'}>
            <Wrapper>
              <Storico/>
            </Wrapper>
          </AuthWrapper>
        </Route>
        <Route extract path='/ordini'>
          <AuthWrapper key={'ordini'}>
            <Wrapper>
              <Ordini/>
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

