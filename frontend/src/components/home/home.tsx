import Hero from "../hero/hero.tsx";
import Navbar from "../navbar/navbar.tsx";

export default function Home() {
	return (
		<div className="bg-[url('/assets/earth.png')] bg-cover bg-center">
			<Navbar/>
			<Hero/>
		</div>
	)
}

