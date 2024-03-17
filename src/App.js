import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/router';
import 'react-day-picker/dist/style.css';

function App() {
  return (
    <div className='p-5 lg:p-0 lg:mx-10 '><RouterProvider router={router}></RouterProvider></div>
  );
}

export default App;
