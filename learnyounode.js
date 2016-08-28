//challenge 1
// console.log("HELLO WORLD");

//challenge 2
// var sum = 0;

// for(var i = 2; i < process.argv.length; i++){
// 	sum += Number(process.argv[i]);

// }
// console.log(sum);

//challenge 3
// var fs = require('fs');
// var buf = fs.readFileSync(process.argv[2]);
// var str = buf.toString();
// var num = str.split('\n').length - 1;
// console.log(num);

//console.log(fs.readFileSync(process.argv[2].toString().split('\n').length -1));


//challenge 4
// var fs = require('fs');

// fs.readFile(process.argv[2], function (err, buffer){
// 	if(err){
// 		throw err;
// 	}
// 	console.log(buffer.toString().split('\n').length - 1);
// })

//challenge 5
// var fs = require('fs');
// var path = require('path');

// fs.readdir(process.argv[2], function (err, list){
// 	if(err){
// 		throw err;
// 	}
// 	for(var i = 0; i < list.length; i++){
// 		if(path.extname(list[i]) === '.' + process.argv[3]){
// 			console.log(list[i]);
// 		}
// 	}
// });

//  var fs = require('fs')  
//      var path = require('path')  
       
//      var folder = process.argv[2]  
//      var ext = '.' + process.argv[3]  
       
//      fs.readdir(folder, function (err, files) {  
//        if (err) return console.error(err)  
//        files.forEach(function(file) {  
//            if (path.extname(file) === ext) {  
//                console.log(file)  
//            }  
//        })  
//      }) 


