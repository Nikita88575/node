/**
 * переша структурна единица - рядок
 * создать большой обьект и заганяй туда маленькие обьекты 
 * массив обьектов "", "", "" 200 рядкив и кожен рудок - масив 5 элементов
 * Задание: числа брать из файла file.txt
 * Series22. Дано целое число N (> 1) и набор из N вещественных чисел. Если
 * данный набор образует убывающую последовательность, то вывести 0;
 * в противном случае вывести номер первого числа, нарушающего
 * закономерность.
 */
 var fs = require('fs');
 const { parse } = require('querystring');
 fs.open("file.txt", 'r', function(err, fd){
     if(!err){
         console.log('file is opening...');
         var options = {encoding:'utf8', flag:'r'};
         fs.readFile('file.txt', options, function(err, data){
             if(err){
                 console.log("Failed to open config file.");
             }else{
                 console.log("Config Loaded.");
                 // Entire file
             //console.log(this.result);
             // By lines
             // var n = 10;
             // console.log(data);
             
             var lines = data.split('\n');
             console.log('There are %d lines.', lines.length);
             console.log(data);
            //  console.log(lines);
             
             for(let i = 0; i < lines.length; i ++){            
             
             }
            
             }
             
         })
         
         fs.close(fd, function(err){
             if(err){
                 console.log(err);
             }
             console.log("File closed successfully");
         });        
     }    
 });
 