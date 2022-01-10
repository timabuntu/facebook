import Header from "./components/Header";
import PostList from "./components/PostList";
function App() {
	return (
		<>
			<main className='min-h-screen bg-gray-100 '>
				<Header />
				<PostList />
			</main>
		</>
	);
}

export default App;
