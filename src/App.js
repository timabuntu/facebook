import Header from "./components/Header";
import PostList from "./components/PostList";
function App() {
	return (
		<>
			<main className=' bg-gray-100 min-h-screen'>
				<Header />
				<PostList />
			</main>
		</>
	);
}

export default App;
