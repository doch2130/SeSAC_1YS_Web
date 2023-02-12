window.addEventListener('DOMContentLoaded', function() {
  let roomsText = document.getElementById('managerRoom');
  // url을 지정해서 특정 네임스페이스를 들어갈 수 있다.
  let debug = io.connect('http://localhost:8080/debug');
  debug.emit('getRooms');  // getRooms 이벤트 호출
  debug.on('rooms', (rooms) => { // rooms 이벤트 발생
    // 룸 목록 업데이트
    console.log('rooms', rooms);
    roomsText.textContent = "";
    for (let room in rooms) {
      roomsText.innerHTML += room + "<br>";
    }
  });
});
