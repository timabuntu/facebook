import Comment from "./Comment";

function Post({ post }) {
	return (
		<section className='p-8 mt-5 bg-white rounded-md shadow-md'>
			<article>
				<div className='flex'>
					<img
						className='h-12 rounded-full'
						src={post.author.avatar}
						alt={post.author.name}
					/>
					<div className='ml-3'>
						<h3 className='font-semibold text-gray-700'>{post.author.name}</h3>
						<p className='text-sm text-gray-400'>{post.date}</p>
					</div>
				</div>
			</article>
			<div className='divide-y divide-gray-100'>
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
