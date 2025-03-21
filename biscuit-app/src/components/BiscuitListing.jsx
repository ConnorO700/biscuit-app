import React from 'react'

function BiscuitListing({biscuit}) {
	return (
		<>
			<div className="bg-white rounded-xl shadow-md relative">
				<div className="p-4">
					<div className="mb-6">
						<h3 className="text-xl font-bold">{biscuit.name} {biscuit.type}</h3>
					</div>

					<div className="mb-5">
						{biscuit.description}
					</div>

					<h3 className="text-amber-500 mb-2">${biscuit.price}</h3>

					<div className="border border-gray-100 mb-5"></div>

					<div className="flex flex-col lg:flex-row justify-between mb-4">
						<div className="text-orange-700 mb-3">
							<i className="fa-solid fa-location-dot text-lg"></i>
							Boston, MA
						</div>
						<a
							href="job.html"
							className="h-[36px] bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-center text-sm"
						>
							Read More
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default BiscuitListing