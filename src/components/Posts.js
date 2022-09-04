import React from 'react';
import Post from './Post';
import '../styles/Posts.css';

export default function Posts({ posts, loading }) {
	if (loading) return <h2>Loading...</h2>;

	return (
		<div className='posts'>
			{posts.map(post => (
				<Post key={post.id} post={post} />
			))}
		</div>
	);
}
