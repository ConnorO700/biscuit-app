import React from 'react'
import Card from './Card'

function HomeCards() {
	return (
		<>
			<section className="py-4">
				<div className="container-xl lg:container m-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
						<Card title = 'For Biscuit Enthusiast' description = 'Browse Biscuits' buttonName = 'Browse Biscuits'/>
						<Card title = 'For Biscuit Cooks' description = 'Make Biscuits' buttonName = 'Add Biscuit'/>
					</div>
				</div>
			</section>
		</>
	)
}

export default HomeCards