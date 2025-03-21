import React from 'react'
import Logo from '../assets/Biscuit-logo.svg'
import { Link } from 'react-router-dom'

function NavBar() {
	return (
		<>
			<nav className="bg-amber-400 border-b border-amber-500">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="flex h-20 items-center justify-between">
						<div
							className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
						>
							<Link className="flex flex-shrink-0 items-center mr-4"
								to="/">
								<img
									className="h-10 w-auto"
									src={Logo}
									alt="Biscuits"
								/>
								<span className="hidden md:block text-white text-2xl font-bold ml-2">
								</span>
							</Link>
							<div className="md:ml-auto">
								<div className="flex space-x-2">
									<Link
										to="/"
										className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
									>Home
									</Link>
									<Link
										to="/biscuit"
										className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
									>Biscuits
									</Link>
									<Link
										to="/add-biscuit"
										className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
									>Add Biscuits
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavBar