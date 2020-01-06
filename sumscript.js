function add(){
    var a=parseInt(document.getElementById("t1").value);
    var b=parseInt(document.getElementById("t2").value);
    var sum=a+b;
   // var sum=add(a,b);
   document.getElementById("sumpos").innerHTML="Sum="+sum;

  var res=document.getElementById("sumpos");
  res.innerHTML+=sum;
  res.style.backgroundColor="cyan";
}
//function add(x,y){
 //x+y;
//}