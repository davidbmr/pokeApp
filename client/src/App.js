import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import DetailsPokemonPage from "./pages/DetailsPokemonPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import CreatePokemonPage from "./pages/CreatePokemonPage.jsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/details/:id' element={<DetailsPokemonPage />} />
				<Route path='/create-pokemon/' element={<CreatePokemonPage />} />

				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
