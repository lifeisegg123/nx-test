import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { sampleAtom } from '../atoms';

const Shop = React.lazy(() => import('shop/Module'));

const Cart = React.lazy(() => import('cart/Module'));
const Test = React.lazy(() => import('cart/Test'));

export function App() {
  const [state, setState] = useRecoilState(sampleAtom);
  return (
    <React.Suspense fallback={null}>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <React.Suspense fallback={<div>test</div>}>
          <Test />
        </React.Suspense>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
