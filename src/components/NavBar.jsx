import sneakersLogo from "../assets/sneakers.svg"
import CartWidget from "./CartWidget"
import NavBarButton from "./NavBarButton"

export default function NavBar() {
	return(
		<header className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 py-6 px-2 sm:py-3 sm:px-8 text-white bg-slate-900">
      <button><img src={sneakersLogo} alt="sneakersLogo" className="h-8"/></button>
      <nav className="flex">
        <ul className="flex sm:gap-4">
					<NavBarButton title='Men'/>
					<NavBarButton title='Women'/>
					<NavBarButton title='Kids'/>
          <NavBarButton title='Sales'/>
        </ul>
      </nav>
      <CartWidget number={2} />
    </header>
	)
}
