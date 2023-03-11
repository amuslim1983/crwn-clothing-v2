import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import NoMatch from './routes/no-match/no-match.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return <div>I am the Shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sing-in' element={<SignIn />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
