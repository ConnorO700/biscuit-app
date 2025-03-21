
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import MainLayout from './layouts/MainLayout';
import BiscuitPage from './Pages/BiscuitPage'
import NotFoundPage from './Pages/NotFound';
function App() {
	const router = createBrowserRouter(createRoutesFromElements(
		<Route path='/' element={<MainLayout />}>
			<Route index element={<HomePage />} />
			<Route path='/biscuit' element={<BiscuitPage/>}/>
			<Route path='*' element={<NotFoundPage />}/>
		</Route>
	));
	return (
		<>
		<RouterProvider router={router} />
		</>
	)
}

export default App