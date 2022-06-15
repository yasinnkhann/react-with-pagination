import React from 'react';
import '../styles/Pagination.css';

export default function Pagination({
	postsPerPage,
	totalPosts,
	paginate,
	currentPage,
}) {
	const pageNumbersArr = [];
	const pageNumbers = Math.ceil(totalPosts / postsPerPage);

	for (let i = 1; i <= pageNumbers; i++) {
		pageNumbersArr.push(i);
	}

	return (
		<div className='pagination'>
			{pageNumbersArr.map(number => (
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
