//本篇主要完成C需求——找出得分最高的配方并将其打印出来
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

let bestSolutions = [];//存储得分最高的配方
for(let i =0;i < scores.length;i++){
    if(scores[i] == highScore){
        bestSolutions.push(i);//将得分最高的配方添加到这个数组中
    }
}
console.log("Solutions with the highest score: " + bestSolutions);