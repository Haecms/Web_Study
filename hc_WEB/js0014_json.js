// javascript의 object type
const object_car = {name:"Sonata", color: "red"};
console.log(object_car['name'])

// 표준 JSON
// {"name":"Sonata", "color":"red"}

const car_from_json = JSON.parse('{"name":"Sonata", "color":"red"}')
console.log(car_from_json)

const string_car = JSON.stringify(object_car)
console.log(string_car)
console.log(string_car["name"])

// JSON.parse는 JSON 형식의 문자열을 JavaScript 객체로 변환하는 데 사용
// 예를 들어, 웹 서버에서 JSON 형식으로 데이터를 받아와서 JavaScript 객체로 변환하여 사용할 때 사용할 수 있습니다.

// JSON.stringify는 JavaScript 객체를 JSON 형식의 문자열로 변환하는 데 사용
// 서버에 데이터를 보낼 때나 데이터를 로컬 저장소에 저장할 때 사용할 수 있습니다.