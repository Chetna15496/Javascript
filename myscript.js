//var name=prompt("Enter a name: "); 
//document.write("<h1>Hello "+name+"</h1>");
 function add(){
     var a=parseInt(document.getElementById("t1").value);
     var b=parseInt(document.getElementById("t2").value);
     var sum=a+b;
     document.getElementById("t3").value=sum;
 }