import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<Cart />} />
            </Routes>
        </div>
    );

}

export default App;
