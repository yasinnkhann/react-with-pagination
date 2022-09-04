import React from 'react';
import '../styles/Pagination.css';

export default function Pagination({
	postsPerPage,
	totalPosts,
	paginate,
	currentPage,
	goToPrevPage,
	goToNextPage,
	pageNumbers,
}) {
	const numOfPages = Math.ceil(totalPosts / postsPerPage);

	return (
		<div className='pagination'>
			<div className='prev_container' onClick={goToPrevPage}>
				<button
					className='prev_btn'
					disabled={currentPage === 1}
					style={{ color: currentPage === 1 ? 'gray' : undefined }}
				>
					Prev
				</button>
			</div>
			{pageNumbers.map(number => (
				<div
					key={number}
					className='page_item'
					onClick={() => paginate(number)}
				>
					<button
						className='page_btn'
						style={{ color: currentPage === number && 'red' }}
					>
						{number}
					</button>
				</div>
			))}
			<div className='next_container'>
				<button
					className='next_btn'
					onClick={goToNextPage}
					disabled={currentPage === numOfPages}
					style={{ color: currentPage === numOfPages ? 'gray' : undefined }}
				>
					Next
				</button>
			</div>
		</div>
	);
}
