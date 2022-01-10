function Comment({ comment }) {
	return (
		<section className='flex h-auto py-3 mt-2'>
			<div className='flex -mb-4'>
				<img
					className='h-10 rounded-full'
					src={comment.author.avatar}
					alt={comment.author.name}
				/>
				<p className='p-3 ml-3 text-gray-900 bg-gray-200 rounded-3xl'>
					<strong className='mr-1'>{comment.author.name}</strong>
					{comment.content}
				</p>
			</div>
		</section>
	);
}

export default Comment;
