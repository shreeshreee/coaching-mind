export default (req, res) => {
	res.statusCode = 200;
	res.json([
		{
			component: "FullImg",
			props: {
				img: ["/virtual-learning.jpg", "/virtual-learning-mob.jpg"],
				text: {
					heading: "Our new virtual coaching platform",
					p:
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae itaque" +
						"quia, expedita officiis nemo vitae modi hic rerum quidem, unde enim ullam," +
						"corporis fugiat deserunt numquam. Explicabo, repellat aut?",
					button: "Become a virtual coach",
				},
			},
		},
		{
			component: "Video",
			props: {
				img: "https://plchldr.co/i/800x400",
				text: {
					heading: "Watch our video to find out more:",
				},
			},
		},
		{
			component: "TwoGrid",
			props: {
				img: "/primary.jpg",
				text: {
					heading: "Coaching in Primary Schools",
					p:
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae itaque" +
						"quia, expedita officiis nemo vitae modi hic rerum quidem, unde enim ullam," +
						"corporis fugiat deserunt numquam. Explicabo, repellat aut?",
					button: "About our Primary programme",
					color: "green",
				},
			},
		},
		{
			component: "TwoGrid",
			props: {
				reverse: true,
				img: "/secondary.jpg",
				text: {
					heading: "Coaching in Secondary Schools",
					p:
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae itaque" +
						"quia, expedita officiis nemo vitae modi hic rerum quidem, unde enim ullam," +
						"corporis fugiat deserunt numquam. Explicabo, repellat aut?",
					button: "About our Secondary programme",
					color: "blue",
				},
			},
		},
		{
			component: "TwoGrid",
			props: {
				img: "/workplace.jpg",
				text: {
					heading: "Coaching in the Workplace",
					p:
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae itaque" +
						"quia, expedita officiis nemo vitae modi hic rerum quidem, unde enim ullam," +
						"corporis fugiat deserunt numquam. Explicabo, repellat aut?",
					button: "About our Workplace programme",
					color: "purple",
				},
			},
		},
	]);
};
