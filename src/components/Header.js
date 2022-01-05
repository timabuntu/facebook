import Facebook from "../assets/facebook.png";

function Header() {
	return (
		<header className='flex items-center w-full h-16 bg-blue-400'>
			<img src={Facebook} alt='facebook' className='h-5 ml-10' />
		</header>
	);
}

export default Header;
