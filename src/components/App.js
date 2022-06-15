import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import '../styles/App.css';

export default function App() {
	const [posts, setPosts] = useState([]);
	const [currPosts, setCurrPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(5);

	const getPosts = async () => {
		setLoading(true);
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await res.json();
		setPosts(data);
		setCurrPosts(data.slice(0, 5));
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

	return (
		<div className='app'>
			<Posts posts={currPosts} loading={loading} />
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={posts.length}
				paginate={pageNum => setCurrentPage(pageNum)}
				currentPage={currentPage}
			/>
		</div>
	);
}
