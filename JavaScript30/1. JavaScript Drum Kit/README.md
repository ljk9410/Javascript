html data 속성
window.addEventListner('keydown', function(e){});
audio 객체
    audio.play();
    audio.puase();
    audio.currenTime;
querySelector 내에서 태그 속 attribute를 선택하는 방법
    const audio = document.querySelector(`audio[data-keys="${e.keyCode}"]`);
transition end event