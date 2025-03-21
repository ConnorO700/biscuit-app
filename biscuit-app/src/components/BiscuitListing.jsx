import React from 'react'
import {Link} from 'react-router-dom'
function BiscuitListing({biscuit}) {
	return (
		<>
		
			<div className="bg-white rounded-xl shadow-md relative border-1 border-amber-500 border-solid">
				<div className="p-4">
					<div className="flex mb-2">
						<h3 className="text-xl font-bold">{biscuit.Name} {biscuit.Type}</h3>
						<h3 className="ml-4 text-xl font-bold text-emerald-500 mr-2">${biscuit.Price}</h3>
					</div>

					<div className="mb-5">
						{biscuit.Description}
					</div>

					<div className="flex flex-col lg:flex-row justify-between mb-4">
						<Link
							to="/biscuit"
							className="absolute bottom-0 left-0 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg text-center text-sm"
						>
							Read More
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default BiscuitListing