import { useState } from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import BiscuitListings from "./components/BiscuitListings"
function App() {

	return (
		<>
			<NavBar />
			<Hero />
			<HomeCards />
			<BiscuitListings />
			

			<section className="m-auto max-w-lg my-10 px-6">
				<a
					href="jobs.html"
					className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
				>View All Jobs</a
				>
			</section>

			<script src="js/main.js"></script>
		</>
	)
}

export default App
