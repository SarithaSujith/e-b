import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Main from './pages/Main';
import Register from './pages/Register'
import Login from './pages/Login'
import Footer from './components/Footer'
import Sell from './pages/Sell'
import Contact from './pages/Contact';

import './App.css';


function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/main' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sell' element={<Sell />} />
          <Route path='/contact' element={<Contact />} />
				</Routes>
        <Footer />
			</Router>
		</div>
	);
}

export default App;
