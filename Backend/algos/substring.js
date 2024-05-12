
 function SubStr (str_1,str_2){
 var f=0;
var a=0;
var y = false;
var h = true;
var str1 =str_1?.toLowerCase().trim().split(" ").join("");
var str2 =str_2?.toLowerCase().trim().split(" ").join("");
for(var i =0;i<=str1?.length-1;i++){

    for(var j =a;j<=str2?.length-1;j++){
        if(h){

         if(str1[i]==str2[j]){
            a=j+1;
             f+=1;
           y=true; 
        h=false;
        break; }  }

       else if(y){
        if(str1[i]==str2[j]){f+=1;
            a=j+1;
           break;
               }
       else{ y =false;
       break;
               }
            }          
            } 
    
    if(!y){break;}    
}
if(f==str1?.length)
{
    return true;
}
else {
   return false;
}}
module.exports ={SubStr};