## 템플릿

### 프로젝트 목적

- Node.js, Socket.io, MongoDB, React, Bootstrap 이용해보기

### 프로젝트 주요 기능

아래 기능을 구현하기 위한 템플릿 수정은 자유롭게 한다.

- 파일 매니저 기능
  - 파일/폴더 구조를 가진 프로젝트를 업로드 한다.
    - zip, tar를 지원한다.
  - 업로드 된 프로젝트를 풀어 ul과 li를 이용해 리스트를 만든다.
    - 디렉토리 구조는 [폴더1]/[폴더2]/파일 과 같이 하여 리스트업한다.
      - 폴더1 안에 폴더2가 있고, 그 안에 파일이 있는 구조이다.
    - 예를 들어, abc폴더 안에 def 폴더가 있고, 그 안에 main.c, main.py 파일들이 있다면,
      - abc/def/main.c
      - abc/def/main.py
      - 이렇게 두 파일이 보여야 한다.
  - 해당 디렉토리 밑에 있는 파일에 대해 [읽기/쓰기] 가능하도록 한다.
    - 읽기 - 파일명을 클릭하면 textarea에 파일 내용이 보인다.
    - 쓰기 - textarea에서 내용을 편집하고 저장 버튼을 눌러 저장한다.
- 채팅 기능
  - 채팅을 할 수 있다.
  - 소켓을 이용하여 실시간으로 메시지를 주고 받는다.
  - 새로고침이나 재접속을 하여도 채팅 내역은 남는다.
  - 귓속말을 통해 1:1 메시지 교환도 가능한다.
    - (서버) 귓속말 구현 시, 내용을 모든 상대에게 보내면 안된다.
    - 반드시 <받는 사람>만 내용을 받아야 한다.

### 프로젝트 UI

- 메인 화면
  - 파일매니저, 채팅 기능과 관련하여 알맞는 UI와 기능들이 구현되어 있으면 된다.
  - 구성은 자유로우며 각 화면을 single 페이지 또는 multiple 페이지로 구현하는 것도 자유이다.

### 프로젝트 기술 스택

- Back-end
  - Node.js, Socket.io, MongoDB, Redis, ExpressJs 사용
- Front-end
  - React, Bootstrap, Reactstrap, React-router 사용
  - Redux, MobX 등을 사용하지 않고 state를 관리한다.
- 개발 환경
  - OS: Ubuntu 14.04.5 LTS
  - 브라우저: 크롬
  - Nodejs: 10.15.3

### 템플릿 실행

- 실행 전 작업

  - DB 설치
    - `cd scripts && ./installDb.sh` 명령어로 Mongodb, Redis를 설치한다.
  - npm package 설치
    - `npm install` 명령어로 npm package를 설치한다.

- 실행

  - DB 실행
    - `./scripts/startDb.sh` 명령어로 Mongodb, Redis를 시작한다.
  - App Build
    - `npm run build:prd`로 Production 모드로 빌드한다.
    - 또는 `npm run build:dev`로 Development 모드로 빌드한다.
  - App Start
    - `npm run start:prd`로 Production 모드로 실행한다.
    - 또는 `npm run start:dev`로 Development 모드로 실행한다.

- 실행 결과 확인
  - 상단 메뉴 [프로젝트] -> [실행 URL과 포트]에서 실행되고 있는 Port(기본 포트는 3000)와 관련된 URL를 브라우저 검색창에 입력하면 실행 결과를 확인할 수 있다.
