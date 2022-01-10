import Facebook from "../assets/facebook.png";

function Header() {
	return (
		<header className='sticky top-0 flex items-center w-full h-16 bg-blue-400'>
			<img src={Facebook} alt='facebook' className='h-5 ml-4' />
		</header>
	);
}

export default Header;
