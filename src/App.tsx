
import './App.css';
import Layout from './components/common/Layout/Layout';
import Home from '@/src/pages/home';

function App() {
  return (
    <div className='h-20'>
      <Layout>
      <Home/>
      </Layout>
    </div>
  );
}

export default App;
