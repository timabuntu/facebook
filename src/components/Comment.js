function Comment({ comment }) {
	return (
		<section className='flex py-3 h-auto mt-2'>
			<div className='flex -mb-4'>
				<img className='rounded-full h-10' src={comment.author.avatar} alt='' />
				<p className='bg-gray-200 ml-3 rounded-3xl p-3 text-gray-900'>
					<strong className='mr-1'>{comment.author.name}</strong>
					{comment.content}
				</p>
			</div>
		</section>
	);
}

export default Comment;
