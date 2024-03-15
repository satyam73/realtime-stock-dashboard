import { useRef, } from 'react';
import './App.css';
import Layout from './components/common/Layout/Layout';
import Home from '@/src/pages/home';

function App() {
  const searchRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className='h-20'>
      <Layout searchRef={searchRef}>
        <Home searchRef={searchRef} />
      </Layout>
    </div>
  );
}

export default App;
