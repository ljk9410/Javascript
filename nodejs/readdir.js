let testFolder = "./data/";
let fs = require('fs');

fs.readdir(testFolder, function (err, files) {
    console.log(files); // 파일의 목록을 배열에 담아 보여줌
})