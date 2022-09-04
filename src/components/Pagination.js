import React from 'react';
import '../styles/Pagination.css';

export default function Pagination({
	postsPerPage,
	totalPosts,
	paginate,
	currentPage,
}) {
	const pageNumbers = [];

	const numOfPages = Math.ceil(totalPosts / postsPerPage);
	for (let i = 1; i <= numOfPages; i++) {
		pageNumbers.push(i);
	}
	return (
		<div className='pagination'>
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
		</div>
	);
}
