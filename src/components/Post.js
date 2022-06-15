import React from 'react';
import '../styles/Post.css';

export default function Post({ post }) {
	return (
		<div className='post'>
			<h1>{post.id}</h1>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</div>
	);
}
