var img=document.getElementById("image");

var imgs=["img2.jpg","img7.jpg","img8.jpg","img4.jpg"];
var counter=0;
function next(){
    if(counter==imgs.length-1){
        counter=-1;
    }
    counter++;
    img.src=imgs[counter];
}
  
function previous(){
    if(counter==0)
    {
        counter=imgs.length;
    }
    counter--;
    img.src=imgs[counter];
}
