import React from "react";

/**
 * - 파일 매니저 기능
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
 */
const FileManager = () => {
  return (
    <div>
      <div>파일매니저</div>
    </div>
  );
};

export default FileManager;
