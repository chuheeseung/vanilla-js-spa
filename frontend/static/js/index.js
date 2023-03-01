const router = async () => {
	const routes = [
		{ path: '/', view: () => console.log('Dashboard') },
		{ path: '/posts', view: () => console.log('Posts') },
		{ path: '/settings', view: () => console.log('Settings') },
	];

	// 현재 route와 현재 페이지 URL이 일치하는지 확인할 수 있는 함수
	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			isMatch: location.pathname === route.path,
		};
	});

	let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

	console.log(match);
};

// DOM이 렌더링되면 router 함수 실행
document.addEventListener('DOMContentLoaded', () => {
	router();
});
