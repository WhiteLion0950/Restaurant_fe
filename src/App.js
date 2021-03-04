import logo from './logo.svg';
import './App.scss';
import Categories from './views/categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardElement from './common/cards/cardElement';
function App() {
  return (
   <Categories />,
   <CardElement />
  );
}

export default App;

//da fare: aggiungere allert nell file categories
//fare .map per i props e aggiungere le card in 3 colonne