import React from 'react';
import '../styles/Pagination.css';

export default function Pagination({
	postsPerPage,
	totalPosts,
	paginate,
	currentPage,
}) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className='pagination'>
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
		</div>
	);
}
