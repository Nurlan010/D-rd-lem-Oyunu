 //Degisenler bildirilir
 var Number1,Number2,Operator,result,answer,True=0,False=0;
 Number1=document.getElementById('Number1');
 Number2=document.getElementById('Number2');
 Operator=document.getElementById('Operator');
 result=document.getElementById('result');
 answer=document.getElementById('answer');
 True=document.getElementById('True');
 False=document.getElementById('False');
 
 // Random reqem verme funksiyasi
 function RandomNumber(min,max){
     var number=Math.floor(Math.random()*(max-min))+min;
     return number;
 }
 
 // Oyunun baslangicinda ve ya sual texmini sonrasi yeni sual yaratma funksiyasi
 function newQuestion(){
     var operation=["+","-","*","/"];
     Operator.textContent=operation[RandomNumber(0,4)];
     Number1.textContent=RandomNumber(0,50);
     Number2.textContent=RandomNumber(0,50);
 
 
 // Qaliqsiz bolme isi gorecek sert
 if(Operator.textContent="/"){
     while(true){
         Number2.textContent=RandomNumber(0,50);
         if(Number1.textContent % Number2.textContent==0){
             break;
         }
     }
 }
 
 }
 
 // Sehife yuklenende yeni sual soruwan funksiyani (newQuestion) islet
 window.onload=function(){
     newQuestion();
 }
 // Cavab ver butonuna basanda deyerlendirme isi 
 answer.onclick=function(){
     var ans,n1,n2;
     n1=Number(Number1.textContent);
     n2=Number(Number2.textContent);
     switch(Operator.textContent){
         case "+":ans=n1+n2;break;
         case "-":ans=n1-n2;break;
         case "*":ans=n1*n2;break;
         case "/":ans=n1/n2;break;
         default:break;
     }
     if(result.value==ans){
         True.textContent=Number(True.textContent)+1;
     }else{
         False.textContent=Number(False.textContent)+1;
     }
     newQuestion();
 }