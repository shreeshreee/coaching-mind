import styled from "styled-components";
import * as s from "../styles/variables";
import Moment from "react-moment";

const Card = styled.div`
	padding: 2vh 2vw;
	margin: 1vw;
	a:hover {
		opacity: 0.7;
	}
	img {
		max-width: 100%;
	}
	@media (max-width: ${s.desktop}) {
		background: ${s.white};
		border-radius: 15px;
		padding: 3vh 3vw;
		margin: 2vh;
	}
`;

export default function BlogCard({
	post: { title, image, publishedAt, slug, body },
}) {
	const url = `/${slug}`;
	return (
		<Card>
			<img src={`http://localhost:1337${image.url}`} />
			<a href={url}>
				<h4>{title}</h4>
			</a>
			<p>
				<Moment format="MMM Do YYYY">{publishedAt}</Moment>
			</p>
			<a href={url}>Read more →</a>
			
		</Card>
	);
}