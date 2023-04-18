import { Routes, Route } from 'react-router-dom';
import { DefaultLayouts } from './layouts/DefaultLayouts';
import { Home } from './pages/Home';
import { Postdetail } from './pages/Postdetail';

export function Router() {
  return (

    <Routes>
      <Route path="/" element={<DefaultLayouts/> } >
         <Route path="/" element={<Home />} />
         <Route path="/detail" element={ <Postdetail />} />
      </Route>
    </Routes>
  );
}