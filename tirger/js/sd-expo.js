var len;
var showerObj;
var listObj;
var showerWidth=1000;
var showerHeight=480;
var r;
var cR=0;
var ccR=0;
var timer=0;
window.onload=function(){
 showerObj=document.getElementById("show");//获取当前标签
 listObj=showerObj.getElementsByTagName("div");//获取当前show下的div标签
 var imgnum = showerObj.getElementsByTagName("img");
 var pnum = showerObj.getElementsByTagName("p");
 len=listObj.length;//获取div的长度
 r=Math.PI/180*360/len;
 for(var i=0;i<len;i++){
  var item=listObj[i];
  var imgn=imgnum[i];
  listObj[i].index = i;
  item.style.top=showerHeight/2+Math.sin(r*i)*showerWidth/2-20+"px";
  item.style.left=showerWidth/2+Math.cos(r*i)*showerWidth/2-30+"px";
  item.rotate=(r*i+2*Math.PI)%(2*Math.PI);
  item.onclick=function(){
   cR=Math.PI/2-this.rotate;
   timer || (timer=setInterval(rotate,10));
   for (var i = 0; i < len; i++) {
   	  imgnum[i].style.border = "0";
   	  pnum[i].style.fontSize = "12px";
   	  pnum[i].style.color = "";
   };
   imgnum[this.index].style.border = "5px solid #ec6890";
   pnum[this.index].style.fontSize = "18px";
   pnum[this.index].style.color = "#a82924";
  }
 }
 var rX=showerObj.offsetLeft+showerWidth/2;
 var ry=showerObj.offsetTop+showerHeight/2;
 var rotate=function(){
  ccR=(ccR+2*Math.PI)%(2*Math.PI);
  if(cR-ccR<0) cR=cR+2*Math.PI;
  if(cR-ccR<Math.PI){
   ccR=ccR+(cR-ccR)/19;
  }else{
   ccR=ccR-(2*Math.PI+ccR-cR)/19;
  }
  if(Math.abs((cR+2*Math.PI)%(2*Math.PI)-(ccR+2*Math.PI)%(2*Math.PI))<Math.PI/720){
   ccR=cR;
   clearInterval(timer);
   timer=0;
  }
  for(var i=0;i<len;i++){
   var item=listObj[i];
   var imgn = imgnum[i];
   // console.log(item)
   var w,h;
   var sinR=Math.sin(r*i+ccR);
   var cosR=Math.cos(r*i+ccR);
   w=200+0.5*400*sinR;
   h=(300+0.5*200*sinR);
   item.style.cssText +=";width:"+w+"px;height:"+h+"px;top:"+parseInt(showerHeight/2+sinR*showerWidth/2/3-w/2)+"px;left:"+parseInt(showerWidth/2+cosR*showerWidth/2+10)+"px;z-index:"+parseInt(showerHeight/2+sinR*showerWidth/2/3-w/2)+";";
   // imgn.style.border = "1px solid red";
  }
 }
 rotate();
}