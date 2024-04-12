const hello = [[1,2,3,4],[5,6,7,8]];
const hello2 = [...hello].map((i) => [...i])


hello2[0][1] = 5;

console.log(hello);