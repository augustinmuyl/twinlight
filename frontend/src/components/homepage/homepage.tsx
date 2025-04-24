import Hero from "../hero/hero.tsx";
import Navbar from "../navbar/navbar.tsx";

export default function HomePage() {
	return (
		<div className="bg-[url('/assets/earth.png')] bg-cover bg-center w-full h-screen">
			<Navbar/>
			<Hero/>
		</div>
	)
}

