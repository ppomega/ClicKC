
 const SubStr = require('./substring');

 function Collt(st1,datas){
 var result=[null];
 var t = 0;
 
 
 while(t<datas.length){
     if(SubStr(st1,datas[t].name)){
 
      result.push(datas[t]);
       
 // console.log(result);
     
     
 };t++}
 
 
 return result;
 }
 
  module.exports = {Collt};

module.exports.Collt = Collt ;