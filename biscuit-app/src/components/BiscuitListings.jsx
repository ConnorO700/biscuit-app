import React from 'react'
import BiscuitListing from './BiscuitListing'
import biscuits from '../biscuits.json'

function BiscuitListings() {
	return (
		<>

			<section className="bg-amber-50 px-4 py-10">
				<div className="container-xl lg:container m-auto">
					<h2 className="text-3xl font-bold text-amber-500 mb-6 text-center">
						Browse Biscuits
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{
							biscuits.map((biscuit) => (
								<BiscuitListing biscuit={biscuit} />
							))
						}
					</div>
				</div>
			</section>
		</>
	)
}

export default BiscuitListings