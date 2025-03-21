import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import BiscuitListings from "../components/BiscuitListings"
import ViewAllBiscuits from '../components/ViewAllBiscuits'

function HomePage() {
	return (
		<>
			<Hero />
			<HomeCards />
			<BiscuitListings />
			<ViewAllBiscuits />
		</>
	)
}

export default HomePage