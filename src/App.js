import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './styles/App.css';

export default function App() {
	const [posts, setPosts] = useState([]);
	const [currPosts, setCurrPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(5);

	const getPosts = async () => {
		setLoading(true);
		try {
			const res = await fetch('https://jsonplaceholder.typicode.com/posts');
			const data = await res.json();
			setPosts(data);
			setCurrPosts(data.slice(0, 5));
		} catch (err) {
			console.error(err);
		}
		setLoading(false);
	};

	useEffect(() => {
		getPosts();
	}, []);

	useEffect(() => {
		const endIdx = currentPage * postsPerPage;
		const startIdx = endIdx - postsPerPage;
		const postsCopy = [...posts];
		setCurrPosts(postsCopy.slice(startIdx, endIdx));
	}, [currentPage, posts, postsPerPage]);

	const goToNextPage = () => {
		setCurrentPage(currPage => currPage + 1);
	};

	const goToPrevPage = () => {
		setCurrentPage(currPage => currPage - 1);
	};

	const getPaginationGroup = () => {
		let start = Math.floor((currentPage - 1) / postsPerPage) * postsPerPage;
		return new Array(postsPerPage).fill(null).map((_, idx) => start + idx + 1);
	};

	return (
		<div className='app'>
			<Posts posts={currPosts} loading={loading} />
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={posts.length}
				paginate={pageNum => setCurrentPage(pageNum)}
				currentPage={currentPage}
				goToPrevPage={goToPrevPage}
				goToNextPage={goToNextPage}
				pageNumbers={getPaginationGroup()}
			/>
		</div>
	);
}
