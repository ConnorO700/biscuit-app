import React from 'react'

function Card({title, description, buttonName}) {
	return (
		<>
			<div className="bg-amber-100 p-6 rounded-lg shadow-md">
				<h2 className="text-2xl font-bold">{title}</h2>
				<p className="mt-2 mb-4">
					{description}
				</p>
				<a
					href="/jobs.html"
					className="inline-block bg-amber-400 text-white rounded-lg px-4 py-2 hover:bg-amber-700"
				>
					{buttonName}
				</a>
			</div>
		</>
	)
}

export default Card