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
	return (
		<div className='pagination'>
			<div className='prev_container' onClick={goToPrevPage}>
				<button className='prev-btn' disabled={currentPage === 1}>
					Prev
				</button>
			</div>
			{pageNumbers.map(number => (
				<div
					key={number}
					className='page-item'
					onClick={() => paginate(number)}
				>
					<button
						className='page-btn'
						style={{ color: currentPage === number && 'red' }}
					>
						{number}
					</button>
				</div>
			))}
			<div className='next_container'>
				<button
					className='next-btn'
					onClick={goToNextPage}
					disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
				>
					Next
				</button>
			</div>
		</div>
	);
}
