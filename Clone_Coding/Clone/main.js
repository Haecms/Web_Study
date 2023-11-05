const target = document.querySelector('#dynamic');
const stringArr = ["Learn to HTMLdjlfksdjflkdasjlkfdsajl;fjdsakl;jfdasl;kjflasdjf;ds","Learn to CSS","Learn to Javascript","Learn to Python","Learn to Ruby",];


// 전달 받은 배열에서 한 글자씩 html에 표시, 배열이 끝나면 다시 받으러 감
function dynamic(randomArr){
  if(randomArr.length > 0){
    target.textContent += randomArr.shift();
    setTimeout(() => dynamic(randomArr), 80)
  } else{
    setTimeout(changeKey, 3000);
  }
}

// stringArr 배열에서 랜덤으로 하나 뽑아서 한글자씩 분리한 뒤 dynamic함수 호출
function changeKey(){
  target.textContent = "";
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");
  dynamic(selectStringArr)
}


// 커서 깜빡임 효과
function blink(){
  target.classList.toggle("active");
}
setInterval(blink, 500);
changeKey();