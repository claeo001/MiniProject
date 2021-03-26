import React from "react";

/**
 * - 채팅 기능
  - 채팅을 할 수 있다.
  - 소켓을 이용하여 실시간으로 메시지를 주고 받는다.
  - 새로고침이나 재접속을 하여도 채팅 내역은 남는다.
  - 귓속말을 통해 1:1 메시지 교환도 가능한다.
    - (서버) 귓속말 구현 시, 내용을 모든 상대에게 보내면 안됩다.
    - 반드시 <받는 사람>만 내용을 받아야 한다.
 */
const Chatting = () => {
  return (
    <div>
      <div>chatting</div>
    </div>
  );
};

export default Chatting;
