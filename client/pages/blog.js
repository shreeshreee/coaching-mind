import styled from "styled-components";
import * as s from "../styles/variables";
import Head from "next/head";
import BlogCard from "../components/BlogCard";

const Main = styled.main`
	padding: 1vh ${s.wPadding};
	background: ${s.grey};
`;

const Wrapper = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;
	color: ${s.blue};
	grid-template-columns: auto;
	@media (min-width: ${s.desktop}) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export default function Blog({ posts }) {
	return (
		<div>
			<Head>
				<title>Blog</title>
			</Head>
			<Main>
				<h1>Blog</h1>
				<Wrapper>
					{posts.length > 1 ? (
						posts.map((post) => (
							<BlogCard key={post.id} item={post}>
								{post.id}
							</BlogCard>
						))
					) : (
						<Error>No posts found. Please refresh to try again</Error>
					)}
				</Wrapper>
			</Main>
		</div>
	);
}

Blog.getInitialProps = async () => {
	const res = await fetch("http://localhost:1337/posts"); //TODO: edit this to .env
	const posts = await res.json();
	return { posts };
};
