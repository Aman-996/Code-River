//本篇主要完成入门版需求(需求：A.获得配方次数；B.获得最高配方得分；)
let scores = [60, 50, 60, 58, 54, 54, 
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

let highScore = 0;//存储最高得分的变量
let output;//存储要输出的字符串
for(let i =0;i < scores.length;i++){
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    if (scores[i] > highScore){
        highScore = scores[i];
    }
}
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);