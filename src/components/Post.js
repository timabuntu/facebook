import Comment from "./Comment";

function Post({ post }) {
	return (
		<section className='bg-white rounded-md shadow-md  mt-5 p-8'>
			<article>
				<div className='flex '>
					<img
						className='rounded-full h-12'
						src={post.author.avatar}
						alt={post.author.name}
					/>
					<div className='ml-3'>
						<h3 className='font-semibold text-gray-700'>{post.author.name}</h3>
						<p className='text-gray-400 text-sm'>{post.date}</p>
					</div>
				</div>
			</article>
			<div className=' divide-y divide-gray-100'>
				<p className='py-4 text-gray-800'>{post.content}</p>

				<div>
					{post.comments.map((comment) => (
						<Comment key={comment.id} comment={comment} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Post;
