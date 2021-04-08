//需求：A.获得配方次数；B.获得最高配方得分；C.获得最高得分的配方
//入门版为简单版的前身
let scores = [60, 50, 60, 58, 54, 54, 
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];
let output;//存储要输出的字符串
let i = 0;
while (i < scores.length){
    output="Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    i= i + 1 ;
}