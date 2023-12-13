import './App.css';
import { BrowserRouter } from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes';
import AdminRoutes from './routes/AdminRoutes';
import { BlogContextProvider } from './context/BlogContext';

function App() {
  const role = 'aaaa'
  return (
    <div className="App">
      <BrowserRouter>
        <BlogContextProvider>
         {
          role === 'admin' ? <AdminRoutes /> : <PublicRoutes />
         }
        </BlogContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
