const express = require('express');
const path = require('path');
const app = express();

// middleware 설정
// '/static' 경로로 접속 시 frontend/static이 기본 고정 경로
app.use(
	'/static',
	express.static(path.resolve(__dirname, 'frontend', 'static'))
);

app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});

app.listen(process.env.PORT || 4000, () => {
	console.log('Sever running...');
});
