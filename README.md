### Docker로 올리기

1. 이미지 생성
`docker build -t homepage .`

2. 컨테이너 올리기
`docker run -d -p 9008:9008 --name homepage homepage`
