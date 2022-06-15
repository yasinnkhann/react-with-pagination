import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import '../styles/App.css';

export default function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(5);

	const endIdx = currentPage * postsPerPage;
	const startIdx = endIdx - postsPerPage;
	const currentPosts = posts.slice(startIdx, endIdx);

	const getPosts = async () => {
		setLoading(true);
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await res.json();
		setPosts(data);
		setLoading(false);
	};

	useEffect(() => {
		getPosts();
	}, []);

	const goToNextPage = () => {
		setCurrentPage(currPage => currPage + 1);
	};

	const goToPrevPage = () => {
		setCurrentPage(currPage => currPage - 1);
	};

	const handlePagination = pageNum => {
		setCurrentPage(pageNum);
	};

	const getPaginationGroup = () => {
		let start = Math.floor((currentPage - 1) / postsPerPage) * postsPerPage;
		return new Array(postsPerPage).fill().map((_, idx) => start + idx + 1);
	};

	return (
		<div className='app'>
			<Posts posts={currentPosts} loading={loading} />
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={posts.length}
				paginate={handlePagination}
				currentPage={currentPage}
				goToPrevPage={goToPrevPage}
				goToNextPage={goToNextPage}
				pageNumbers={getPaginationGroup()}
			/>
		</div>
	);
}
