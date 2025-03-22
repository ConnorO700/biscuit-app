import React from 'react'
import Logo from '../assets/Biscuit-logo.svg'
import { NavLink } from 'react-router-dom'

function NavBar() {
	const navHeight = 'h-20'
	const linkClass = ({isActive}) =>
		isActive 
		? 'text-white bg-black hover:bg-amber-700 hover:text-white rounded-md px-3 py-2 border-1 border-amber-500 border-solid'
		: 'text-white bg-amber-600 hover:bg-amber-700 hover:text-white rounded-md px-3 py-2 border-1 border-amber-500 border-solid'

	return (
		<>
			<nav className="bg-amber-400 border-b border-amber-500">
				<NavLink className="flex flex-shrink-0 mr-4"
					to="/">
					<img
						className={`absolute left-0 ${navHeight} w-auto`}
						src={Logo}
						alt="Biscuits"
					/>
					<span className="hidden md:block text-white text-2xl font-bold ml-2">
					</span>
				</NavLink>
				<div className={`${navHeight} border-1 border-amber-500 border-solid`}>
					<div className="flex justify-end h-10 gap-2 mt-5 mr-4">
						<NavLink
							to="/"
							className={linkClass}
						>Home
						</NavLink>
						<NavLink
							to="/biscuit"
							className={linkClass}
						>Biscuits
						</NavLink>
						<NavLink
							to="/add-biscuit"
							className={linkClass}
						>Add Biscuits
						</NavLink>
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavBar