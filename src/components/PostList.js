import { useState } from "react";

import Post from "./Post";
import data from "../data";

function PostList() {
	const [state] = useState(data);

	return (
		<div className='flex flex-col items-center px-4'>
			<div className='max-w-screen-md pb-16'>
				{state.posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</div>
	);
}

export default PostList;
