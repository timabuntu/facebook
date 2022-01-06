import Post from "./Post";

function PostList() {
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-100 '>
			<div className='max-w-3xl p-6 bg-white rounded-md shadow-md '>
				<Post />
			</div>
		</div>
	);
}

export default PostList;
