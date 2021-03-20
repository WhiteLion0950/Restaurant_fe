
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

function App() {
  return (
    <>      
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
        <Route/>

        <Route exact path = '/everyItem'>
         <AuthWrapper key={'category'}>
            <Wrapper>
              <EveryItem/>
            </Wrapper>
          </AuthWrapper>       
        </Route>

        <Route exact path ="/login">
        <Login />
        </Route>
   </Switch>
     </HashRouter>
    <FooterCustom />
   </>
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

