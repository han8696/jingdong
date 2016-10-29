$(function(){
//area
//js
 /* var topleft=$(".topleft")[0];
  var titleT=$(".titleT")[0];
  var area_name=$(".area-name")[0];
  var hengxian=$(".hengxian")[0];
     topleft.onmouseover=function(){
         titleT.style.display="block";
         area_name.style.display="block";
         hengxian.style.display="block";
     }
     topleft.onmouseout=function(){
         titleT.style.display="none";
         area_name.style.display="none";
         hengxian.style.display="none";
     }*/
//jq
     $(".topleft").eq(0).hover(function(){
          $(".titleT").eq(0).css("display","block");
          $(".area-name").eq(0).css("display","block");
          $(".hengxian").eq(0).css("display","block");
     },function(){
          $(".titleT").eq(0).css("display","none");
          $(".area-name").eq(0).css("display","none");
          $(".hengxian").eq(0).css("display","none");
     })  
//area
//left
//js
 /*  var topxialia=$(".topxialia");
   var TT5=$(".TT5");
   var copy=$(".copy");
   var hengR=$(".hengR");
   for(var i=0;i<topxialia.length;i++){
    topxialia[i].index=i;
    topxialia[i].onmouseover=function(){
      for(var i=0;i<TT5.length;i++){
       TT5[i].style.display="none";
         copy[i].style.display="none";
         hengR[i].style.display="none";
      }
       TT5[this.index].style.display="block";
       copy[this.index].style.color="#C81623";
        copy[this.index].style.display="block";
        hengR[this.index].style.display="block";
   }
         topxialia[i].onmouseout=function(){
           TT5[this.index].style.display="none";
           copy[this.index].style.color="#666";
        copy[this.index].style.display="none";
        hengR[this.index].style.display="none";
         }
};*/
//jq
   $(".topxialia").hover(function(){
          $(".TT5",this).eq(0).css("display","block");
          $(".copy",this).eq(0).css({"display":"block","color":"#C81623"});
          $(".hengR",this).eq(0).css("display","block");
     },function(){
        $(".TT5").css("display","none");
         $(".copy").css({"display":"none"});
         $(".hengR").css("display","none");
     })  

//left
//banner轮播
//js
   var tB=setInterval(moveB,3000);
   var now=0;
   var next=0;
   var flagB=true;
   function moveB(){
    next=now+1;
    if(next>=$(".imgs-six").length){
      next=0;
    }
    $(".imgs-six").css({"display":"none",opacity:0.6}).eq(next).css({display:"block"}).animate({opacity:1},500,function(){flagB=true});
    $(".circle").css("background","#3e3e3e").eq(next).css("background","#b61b1f");
    now=next;
   }
   $(".banner").eq(0).hover(function(){
        $(".btnl").eq(0).css({display:"block"});
        $(".btnr").eq(0).css({display:"block"});
        clearInterval(tB);
   },
     function(){
        $(".btnl").eq(0).css({display:"none"});
        $(".btnr").eq(0).css({display:"none"});
        tB=setInterval(moveB,3000);
     }  
   )
    $(".btnr").eq(0).click(function(){
           if(flagB){
            moveB();
           }
           flagB=false;
    })
     $(".btnl").eq(0).click(function(){
           if(flagB){
            next=now-1;
            if(next<0){
              next=$(".imgs-six").length-1;
            }
            $(".imgs-six").css({"display":"none",opacity:0.6}).eq(next).css({display:"block"}).animate({opacity:1},500,function(){flagB=true});
            $(".circle").css("background","#3e3e3e").eq(next).css("background","#b61b1f");
            now=next;
           }
           flagB=false;
    })
     $(".circle").hover(function(){
          var index=$(this).index();
          if(now<index){
               $(".imgs-six").css({"display":"none",opacity:0.6}).eq(index).css({display:"block"}).animate({opacity:1},500,function(){flagB=true});
               $(".circle").css("background","#3e3e3e").eq(index).css("background","#b61b1f");
          }else if(now>index){
               $(".imgs-six").css({"display":"none",opacity:0.6}).eq(index).css({display:"block"}).animate({opacity:1},500,function(){flagB=true});
              $(".circle").css("background","#3e3e3e").eq(index).css("background","#b61b1f");
          }
          now=index;
          next=index;
     })
	/*var imgs=$(".imgs-six");
	var circle=$(".circle"); 
	var imgbox=$(".imgbox")[0];
	var btnl=$(".btnl")[0];
	var btnr=$(".btnr")[0];
	var banner=$(".banner")[0];
	var n=0;   //当前位置
	var t=setInterval(move,3000);

	function move(){
		n++;
		if(n>=imgs.length){
			n=0;
		}
		for(var i=0;i<imgs.length;i++){
             imgs[i].style.display="none";
             circle[i].style.background="#3e3e3e";
             imgs[i].style.opacity="0.6";
		}
			imgs[n].style.display="block";
			circle[n].style.background="#b61b1f";
		animate(imgs[n],{opacity:1},1000);
    }

    imgbox.onmouseover=function(){
    	clearInterval(t);
    }
    imgbox.onmouseout=function(){
    	t=setInterval(move,3000);
    }

    for(var i=0;i<circle.length;i++){
    	  circle[i].index=i;
    	  circle[i].onclick=function(){
    	  	for(var i=0;i<imgs.length;i++){
             imgs[i].style.display="none";
             circle[i].style.background="#3e3e3e";
             imgs[i].style.opacity="0.6";
		}
			imgs[this.index].style.display="block";
			this.style.background="#b61b1f";
			animate(imgs[this.index],{opacity:1},1000)
			 n=this.index;
    	  }
            
    }
    
   //左右按钮
   banner.onmouseover=function(){
      btnl.style.display="block";
      btnr.style.display="block";
   }
   banner.onmouseout=function(){
      btnl.style.display="none";
      btnr.style.display="none";
   }
   btnr.onclick=function(){
   	    move();
   }
   btnl.onclick=function(){
   	    movel();
   }
     function movel(){
		n--;
		if(n<0){
			n=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
            imgs[i].style.display="none";
            circle[i].style.background="#3e3e3e";
            imgs[i].style.opacity="0.6";
		}
			imgs[n].style.display="block";
			circle[n].style.background="#b61b1f";
		    animate(imgs[n],{opacity:1},1000);
    }*/
//jq

//banner，轮播图    
    //banner-left
    //js
   /* var bb13=$(".bb13");
    var bnleft_box=$(".bnleft-box");
    for(var i=0;i<bb13.length;i++){
       bb13[i].index=i;
       bb13[i].onmouseover=function(){
          bnleft_box[this.index].style.display="block";
        }
        bb13[i].onmouseout=function(){
          bnleft_box[this.index].style.display="none";
        }
       }*/
    //jq
       $(".bb13").hover(function(){
         var index=$(this).index();
          $(".bnleft-box").css("display","none").eq(index).css("display","block");
     },function(){
          $(".bnleft-box").css("display","none");
     })  
    //banner-left
    //今日推荐
    //jq
     //function nodeLunbo(imgBox,left,right){
        //var t=setInterval(moveJ,1500);
        var flagJ=true;
        var n=4;
        var width=$(".yundongdapai").outerWidth();
        function moveJ(){
          $(".imgbox16").eq(0).animate({left:-width*n},500,function(){
             $(this).eq(0).append($(".yundongdapai").slice(0,n)).css({left:0});
             flagJ=true;
          })
        }
   // };
    $(".btnr16").eq(0).click(function(){
        if(flagJ){
          moveJ();
        }
        flagJ=false;
    })
    $(".btnl16").eq(0).click(function(){
         $(".imgbox16").eq(0).prepend($(".yundongdapai").slice($(".yundongdapai").length-n+1,$(".yundongdapai").length+1)).css({left:-width*n}).animate(({left:0}))
    })
    $(".gundong4t").eq(0).hover(function(){
      $(".btnl16").eq(0).css("display","block");
      $(".btnr16").eq(0).css("display","block");
    },function(){
      $(".btnl16").eq(0).css("display","none");
      $(".btnr16").eq(0).css("display","none");
    })
    //js
    /*var img16=$(".yundongdapai");
    var imgbox16=$(".imgbox16")[0];
    var btnl16=$(".btnl16")[0];
    var btnr16=$(".btnr16")[0];
    var gundong4t=$(".gundong4t")[0];
    nodeLunbo(imgbox16,btnl16,btnr16)
    function nodeLunbo(imgBox,left,right){
    var lunbo=imgBox.parentNode;
    var imgone=getChilds(imgBox)[0];
    var left=left;
    var right=right;
    var imgBox=imgBox;
    var width=parseInt(getStyle(imgone,"width"))+parseInt(getStyle(imgone,"margin-right"));
    //var t=setInterval(move,1500);
    var n=4;
    var flag=true;
    var flag2=true;
    function move(){
      animate(imgBox,{left:-width*n},600,function(){
        for(var i=1;i<n;i++){
          var imgFirst=getFirst(imgBox);
          imgBox.appendChild(imgFirst);
        }
        imgBox.style.left=0;
        flag=true;
      });
    }
     left.onclick=function(){
      if(flag2){
        for(var i=1;i<=n;i++){
        var last=getLast(imgBox);
        var First=getFirst(imgBox);
        insertBefore(last,First);
      }
      imgBox.style.left=-width*n+"px";
      animate(imgBox,{left:0},600,function(){
        flag2=true;
      })
      }
       flag2=false;
    }
    right.onclick=function(){
       if(flag){
         move();
       }
      flag=false;
    }
  }
    gundong4t.onmouseover=function(){
       btnl16.style.display="block";
       btnr16.style.display="block";
    }
    gundong4t.onmouseout=function(){
       btnl16.style.display="none";
       btnr16.style.display="none";
    }*/

    //今日推荐
    /*F1*/ 
       //选项卡 js
     /*var f1C=$(".create-9",$("ul",$(".top-12-37")[0])[0]);     
     var f1BS=$(".border-select",$("ul",$(".top-12-37")[0])[0]);
     var fi88=$(".p-lists",$(".middle-1210-633")[0]);
     for(var i=0;i<f1C.length;i++){
      f1C[i].index=i;
      f1C[i].onmouseover=function(){
        for(var i=0;i<fi88.length;i++){
          f1BS[i].style.display="none"; 
          f2BS[i].style.color="#666"; 
          fi88[i].style.display="none"
        }
         f1BS[this.index].style.display="block";
         f1BS[this.index].style.color="#c81623";
         fi88[this.index].style.display="block";
    }
  }*/
     //jq

     //jq
       $(".create-9",$("ul",$(".top-12-37").eq(0)).eq(0)).hover(function(){
             var index=$(this).index();
         $(".border-select",$("ul",$(".top-12-37").eq(0)).eq(0)).css({"display":"none","color":"#666"}).eq(index).css({"display":"block","color":"#c81623"});
         $(".p-lists",$(".middle-1210-633").eq(0)).css({"display":"none"}).eq(index).css({"display":"block"});
     })  
      //轮播图
      
   /*   var lbts=$(".imgs",$(".imgbox-four")[0])
      var left=$(".btnl16",$(".bb-316")[0])
      var right=$(".btnr16",$(".bb-316")[0])
      var bottom=$("ul",$(".bb-316")[0])
       lunbo(lbts,left[0],right[0],bottom[0])
       //f2
       var imgsf2=$(".doubleimgsBox",$(".huazhuang-two-340")[0])
       var leftf2=$(".btnl16",$(".huazhuang-two-340")[0])
       var rightf2=$(".btnr16",$(".huazhuang-two-340")[0])
       var bottomf2=$("ul",$(".huazhuang-two-340")[0])
       lunbo(imgsf2,leftf2[0],rightf2[0],bottomf2[0])
       //f3-439
       var imgsf3=$(".pp-one",$(".FF4floor")[0])
       var leftf3=$(".btnl16",$(".FF4floor")[0])
       var rightf3=$(".btnr16",$(".FF4floor")[0])
       var bottomf3=$("ul",$(".FF4floor")[0])
       lunbo(imgsf3,leftf3[0],rightf3[0],bottomf3[0])
       //f4
       var imgsf4=$(".pp-one",$(".FF4floor")[1])
       var leftf4=$(".btnl16",$(".FF4floor")[1])
       var rightf4=$(".btnr16",$(".FF4floor")[1])
       var bottomf4=$("ul",$(".FF4floor")[1])
       lunbo(imgsf4,leftf4[0],rightf4[0],bottomf4[0])
        //f5
       var imgsf5=$(".pp-one",$(".FF4floor")[2])
       var leftf5=$(".btnl16",$(".FF4floor")[2])
       var rightf5=$(".btnr16",$(".FF4floor")[2])
       var bottomf5=$("ul",$(".FF4floor")[2])
       lunbo(imgsf5,leftf5[0],rightf5[0],bottomf5[0])
       //f6
       var imgsf6=$(".imgs69",$(".floor6_9")[0])
       var leftf6=$(".btnl16",$(".floor6_9")[0])
       var rightf6=$(".btnr16",$(".floor6_9")[0])
       var bottomf6=$("ul",$(".floor6_9")[0])
       lunbo(imgsf6,leftf6[0],rightf6[0],bottomf6[0])
       //f7
       var imgsf7=$(".imgs69",$(".floor6_9")[1])
       var leftf7=$(".btnl16",$(".floor6_9")[1])
       var rightf7=$(".btnr16",$(".floor6_9")[1])
       var bottomf7=$("ul",$(".floor6_9")[1])
       lunbo(imgsf7,leftf7[0],rightf7[0],bottomf7[0])
       //f8
       var imgsf8=$(".imgs69",$(".floor6_9")[2])
       var leftf8=$(".btnl16",$(".floor6_9")[2])
       var rightf8=$(".btnr16",$(".floor6_9")[2])
       var bottomf8=$("ul",$(".floor6_9")[2])
       lunbo(imgsf8,leftf8[0],rightf8[0],bottomf8[0])
       //f9
       var imgsf9=$(".imgs69",$(".floor6_9")[3])
       var leftf9=$(".btnl16",$(".floor6_9")[3])
       var rightf9=$(".btnr16",$(".floor6_9")[3])
       var bottomf9=$("ul",$(".floor6_9")[3])
       lunbo(imgsf9,leftf9[0],rightf9[0],bottomf9[0])
       // //f10
       var imgsf10=$(".pp-one",$(".FF4floor")[3])
       var leftf10=$(".btnl16",$(".FF4floor")[3])
       var rightf10=$(".btnr16",$(".FF4floor")[3])
       var bottomf10=$("ul",$(".FF4floor")[3])
       lunbo(imgsf10,leftf10[0],rightf10[0],bottomf10[0])
        //f11
       var imgsf11=$(".pp-one",$(".FF4floor")[4])
       var leftf11=$(".btnl16",$(".FF4floor")[4])
       var rightf11=$(".btnr16",$(".FF4floor")[4])
       var bottomf11=$("ul",$(".FF4floor")[4])
       lunbo(imgsf11,leftf11[0],rightf11[0],bottomf11[0])
       //f12
       var imgsf12=$(".twinImg",$(".img-top-395")[0])
       var leftf12=$(".btnl16",$(".img-top-395")[0])
       var rightf12=$(".btnr16",$(".img-top-395")[0])
       var bottomf12=$("ul",$(".img-top-395")[0])
       lunbo(imgsf12,leftf12[0],rightf12[0],bottomf12[0])

        var imgsf12R=$(".twinImg",$(".img-top-395")[1])
       var leftf12R=$(".btnl16",$(".img-top-395")[1])
       var rightf12R=$(".btnr16",$(".img-top-395")[1])
       var bottomf12R=$("ul",$(".img-top-395")[1])
       lunbo(imgsf12R,leftf12R[0],rightf12R[0],bottomf12R[0])*/
       //jq
        //1
          var imgsO=$(".imgs",$(".imgbox-four").eq(0));
          var left=$(".btnl16",$(".bb-316").eq(0));
          var right=$(".btnr16",$(".bb-316").eq(0));
          var ul=$("ul",$(".bb-316").eq(0));
          var imgbox=$(".bb-316").eq(0);
          lunbo(imgbox,imgsO,left,right,ul)
          //f2
       var imgsf2=$(".doubleimgsBox",$(".huazhuang-two-340").eq(0))
       var leftf2=$(".btnl16",$(".huazhuang-two-340").eq(0))
       var rightf2=$(".btnr16",$(".huazhuang-two-340").eq(0))
       var bottomf2=$("ul",$(".huazhuang-two-340").eq(0))
       var imgbox2=$(".huazhuang-two-340").eq(0)
       lunbo(imgbox2,imgsf2,leftf2,rightf2,bottomf2)
       //f3-439
       var imgsf3=$(".pp-one",$(".FF4floor").eq(0))
       var leftf3=$(".btnl16",$(".FF4floor").eq(0))
       var rightf3=$(".btnr16",$(".FF4floor").eq(0))
       var bottomf3=$("ul",$(".FF4floor").eq(0))
       var imgbox3=$(".FF4floor").eq(0)
       lunbo(imgbox3,imgsf3,leftf3,rightf3,bottomf3)
       //f4
       var imgsf4=$(".pp-one",$(".FF4floor").eq(1))
       var leftf4=$(".btnl16",$(".FF4floor").eq(1))
       var rightf4=$(".btnr16",$(".FF4floor").eq(1))
       var bottomf4=$("ul",$(".FF4floor").eq(1))
       var imgbox4=$(".FF4floor").eq(1)
       lunbo(imgbox4,imgsf4,leftf4,rightf4,bottomf4)
        //f5
       var imgsf5=$(".pp-one",$(".FF4floor").eq(2))
       var leftf5=$(".btnl16",$(".FF4floor").eq(2))
       var rightf5=$(".btnr16",$(".FF4floor").eq(2))
       var bottomf5=$("ul",$(".FF4floor").eq(2))
       var imgbox5=$(".FF4floor").eq(2)
       lunbo(imgbox5,imgsf5,leftf5,rightf5,bottomf5)
       //f6
       var imgsf6=$(".imgs69",$(".floor6_9").eq(0))
       var leftf6=$(".btnl16",$(".floor6_9").eq(0))
       var rightf6=$(".btnr16",$(".floor6_9").eq(0))
       var bottomf6=$("ul",$(".floor6_9").eq(0))
       var imgbox6=$(".floor6_9").eq(0)
       lunbo(imgbox6,imgsf6,leftf6,rightf6,bottomf6)
       //f7
       var imgsf7=$(".imgs69",$(".floor6_9").eq(1))
       var leftf7=$(".btnl16",$(".floor6_9").eq(1))
       var rightf7=$(".btnr16",$(".floor6_9").eq(1))
       var bottomf7=$("ul",$(".floor6_9").eq(1))
       var imgbox7=$(".floor6_9").eq(1)
       lunbo(imgbox7,imgsf7,leftf7,rightf7,bottomf7)
       //f8
       var imgsf8=$(".imgs69",$(".floor6_9").eq(2))
       var leftf8=$(".btnl16",$(".floor6_9").eq(2))
       var rightf8=$(".btnr16",$(".floor6_9").eq(2))
       var bottomf8=$("ul",$(".floor6_9").eq(2))
       var imgbox8=$(".floor6_9").eq(2)
       lunbo(imgbox8,imgsf8,leftf8,rightf8,bottomf8)
       //f9
       var imgsf9=$(".imgs69",$(".floor6_9").eq(3))
       var leftf9=$(".btnl16",$(".floor6_9").eq(3))
       var rightf9=$(".btnr16",$(".floor6_9").eq(3))
       var bottomf9=$("ul",$(".floor6_9").eq(3))
       var imgbox9=$(".floor6_9").eq(3)
       lunbo(imgbox9,imgsf9,leftf9,rightf9,bottomf9)
       // //f10
       var imgsf10=$(".pp-one",$(".FF4floor").eq(3))
       var leftf10=$(".btnl16",$(".FF4floor").eq(3))
       var rightf10=$(".btnr16",$(".FF4floor").eq(3))
       var bottomf10=$("ul",$(".FF4floor").eq(3))
       var imgbox10=$(".FF4floor").eq(3)
       lunbo(imgbox10,imgsf10,leftf10,rightf10,bottomf10)
        //f11
       var imgsf11=$(".pp-one",$(".FF4floor").eq(4))
       var leftf11=$(".btnl16",$(".FF4floor").eq(4))
       var rightf11=$(".btnr16",$(".FF4floor").eq(4))
       var bottomf11=$("ul",$(".FF4floor").eq(4))
       var imgbox11=$(".FF4floor").eq(4)
       lunbo(imgbox11,imgsf11,leftf11,rightf11,bottomf11)
       //f12
       var imgsf12=$(".twinImg",$(".img-top-395").eq(0))
       var leftf12=$(".btnl16",$(".img-top-395").eq(0))
       var rightf12=$(".btnr16",$(".img-top-395").eq(0))
       var bottomf12=$("ul",$(".img-top-395").eq(0))
       var imgbox12=$(".img-top-395").eq(0)
       lunbo(imgbox12,imgsf12,leftf12,rightf12,bottomf12)
       //12r
        var imgsf12R=$(".twinImg",$(".img-top-395").eq(1))
       var leftf12R=$(".btnl16",$(".img-top-395").eq(1))
       var rightf12R=$(".btnr16",$(".img-top-395").eq(1))
       var bottomf12R=$("ul",$(".img-top-395").eq(1))
       var imgbox12R=$(".img-top-395").eq(1)
       lunbo(imgbox12R,imgsf12R,leftf12R,rightf12R,bottomf12R)
       function lunbo(imgbox,imgs,left,right,ul){
        var li=ul.eq(0).children("li");
         var now=0;
        var next=0;
        var time=setInterval(move,2000);
        var flag=true;
        var width=imgs.eq(0).width();
        function move(){
           next=now+1;
           if(next>=imgs.length){
            next=0;
           }
           imgs.eq(next).css({"left":width}).end().eq(now).animate({"left":-width},500).end().eq(next).animate({"left":0},500,function(){flag=true});
           li.css({"background":"#3e3e3e"}).eq(next).css({"background":"#b61b1f"});
           now=next;
        }
        imgbox.hover(function(){
            left.eq(0).css("display","block");
            right.eq(0).css("display","block");
            clearInterval(time);
        },function(){
            left.eq(0).css("display","none");
            right.eq(0).css("display","none");
            time=setInterval(move,2000);
        })
           right.eq(0).click(function(){
             if(flag){
              move();
             }
             flag=false;
           })
           left.eq(0).click(function(){
             if(flag){
              next=now-1;
               if(next<0){
                next=imgs.length-1;
               }
               imgs.eq(next).css({"left":-width}).end().eq(now).animate({"left":width},500).end().eq(next).animate({"left":0},500,function(){flag=true});
               li.css({"background":"#3e3e3e"}).eq(now).css({"background":"#b61b1f"});
               now=next;
                 }
             flag=false;
           })
           li.hover(function(){
              var index=$(this).index();
              if(now<index){
                 if(flag){
                  imgs.eq(index).css({"left":width}).end().eq(now).animate({"left":-width},500).end().eq(index).animate({"left":0},500,function(){flag=true});
                  li.css({"background":"#3e3e3e"}).eq(index).css({"background":"#b61b1f"});
                }
                 flag=false;
              }else if(now>index){
                 if(flag){
                  imgs.eq(index).css({"left":-width}).end().eq(now).animate({"left":width},500).end().eq(index).animate({"left":0},500,function(){flag=true});
                  li.css({"background":"#3e3e3e"}).eq(index).css({"background":"#b61b1f"});
                  }
                 flag=false;
              }
              now=index;
              next=index;
           })
      };
       
  /*    function lunbo(lbts,left,right,bottom){
    //lbts轮播图片集合，
    //left right左右按钮
    //bottom 底部选项
   var fours=getChilds(bottom)
   fours[0].style.background="#b61b1f";
   var lunboParent=lbts[0].parentNode.parentNode
   //获取父元素
   var lw=parseInt(getStyle(lbts[0],"width"))   
   var imga=0;
   var imgb=0
   var time=setInterval(move,3000);
   var flag=true;
   var flag2=true;
   var flag3=true;
   
  left.onclick=function(){
      if(flag){
       movel();
       }
    flag=false;
   }
   
  right.onclick=function(){
      if(flag2){
       move();
     }
     flag2=false;
   }
   lunboParent.onmouseover=function(){
      clearInterval(time);
      left.style.display="block"
      right.style.display="block"
   }
   lunboParent.onmouseout=function(){
      time=setInterval(move,3000);
      left.style.display="none"
      right.style.display="none"
   }
   for (var i = 0; i < fours.length; i++) {
     fours[i].index=i;
     if (flag3) {
       fours[i].onmouseover=function(){
                
       for (var i = 0; i < fours.length; i++) {
           fours[i].style.background="#3e3e3e";
       };
       if(this.index>imga){
         lbts[this.index].style.left=lw+"px";
         animate(lbts[imga],{left:-lw},400);
       }else if(this.index<imga){
         lbts[this.index].style.left=-lw+"px";
         animate(lbts[imga],{left:lw},400);
       }
       animate(lbts[this.index],{left:0},400,function(){
        flag3=true;
       });
       this.style.background="#b61b1f";
       imgb=this.index;
       imga=this.index;
       flag3=false;
     }
      
     }   
   };
   lbts[0].style.left=0;
   for (var i = 0; i < lbts.length; i++) {
      if(i==0){
        continue;
      }
        lbts[i].style.left=parseInt(getStyle(lbts[0],"width"))+"px";
    };
   function move(){
    imgb++;
    if(imgb>=lbts.length){
        imgb=0;
    }
    for (var i = 0; i < fours.length; i++) {
      fours[i].style.background="#3e3e3e";
    };
    fours[imgb].style.background="#b61b1f";
    lbts[imgb].style.left=lw+"px";
    animate(lbts[imga],{left:-lw});
    animate(lbts[imgb],{left:0},function(){
      flag2=true;
    });
    imga=imgb;
   }
  
  function movel(){
    imgb--;
    if(imgb<0){
        imgb=lbts.length-1;
    }
    for (var i = 0; i < fours.length; i++) {
      fours[i].style.background="#3e3e3e";
    };
    fours[imgb].style.background="#b61b1f";
    lbts[imgb].style.left=-lw+"px";
    animate(lbts[imga],{left:lw});
    animate(lbts[imgb],{left:0},function(){
      flag=true;
    });
    imga=imgb;
   }
 }*/

    /*F1*/
    /*F2*/
    /*var f2C=$(".create-9",$("ul",$(".top-12-37")[1])[0]);
     var f2BS=$(".border-select",$("ul",$(".top-12-37")[1])[0]);
     var f288=$(".f2chang",$(".checkItems")[0]);
     for(var i=0;i<f2C.length;i++){
      f2C[i].index=i;
      f2C[i].onmouseover=function(){
        for(var i=0;i<f288.length;i++){
          f2BS[i].style.display="none"; 
          f2BS[i].style.color="#666"; 
          f288[i].style.display="none";
        }
         f2BS[this.index].style.display="block";
         f2BS[this.index].style.color="#c81623";
         f288[this.index].style.display="block";
    }
  }*/
   //jq
       $(".create-9",$("ul",$(".top-12-37").eq(1)).eq(0)).hover(function(){
             var index=$(this).index();
         $(".border-select",$("ul",$(".top-12-37").eq(1)).eq(0)).css({"display":"none","color":"#666"}).eq(index).css({"display":"block","color":"#c81623"});
         $(".f2chang",$(".checkItems").eq(0)).css({"display":"none"}).eq(index).css({"display":"block"});
     })  
     /*F2*/
    /*F3*/
     //选项卡
     /*var create_9=$(".create-9",$("ul",$(".top-12-37")[2])[0]);
     var border_select=$(".border-select",$("ul",$(".top-12-37")[2])[0]);
     var f3_top_880=$(".f3-top-880",$(".bottom-12-474")[0]);
     for(var i=0;i<create_9.length;i++){
      create_9[i].index=i;
      create_9[i].onmouseover=function(){
        for(var i=0;i<f3_top_880.length;i++){
          border_select[i].style.display="none"; 
           border_select[i].style.color="#666"; 
          f3_top_880[i].style.display="none"
        }
         border_select[this.index].style.display="block";
         border_select[this.index].style.color="#c81623";
         f3_top_880[this.index].style.display="block";
    }
  }*/
    //jq
       $(".create-9",$("ul",$(".top-12-37").eq(2)).eq(0)).hover(function(){
             var index=$(this).index();
         $(".border-select",$("ul",$(".top-12-37").eq(2)).eq(0)).css({"display":"none","color":"#666"}).eq(index).css({"display":"block","color":"#c81623"});
         $(".f3-top-880",$(".bottom-12-474").eq(0)).css({"display":"none"}).eq(index).css({"display":"block"});
     })  
    /*F3*/
     /*F4*/
     //选项卡
   /*  var f4C=$(".create-9",$("ul",$(".top-12-37")[3])[0]);
     var f4BS=$(".border-select",$("ul",$(".top-12-37")[3])[0]);
     var f488=$(".f3-top-880",$(".bottom-12-474")[1]);
     for(var i=0;i<f4C.length;i++){
      f4C[i].index=i;
      f4C[i].onmouseover=function(){
        for(var i=0;i<f488.length;i++){
          f4BS[i].style.display="none"; 
          f4BS[i].style.color="#666";
          f488[i].style.display="none"
        }
         f4BS[this.index].style.display="block";
         f4BS[this.index].style.color="#c81623";
         f488[this.index].style.display="block";
    }
  }*/
    //jq
       $(".create-9",$("ul",$(".top-12-37").eq(3)).eq(0)).hover(function(){
             var index=$(this).index();
         $(".border-select",$("ul",$(".top-12-37").eq(3)).eq(0)).css({"display":"none","color":"#666"}).eq(index).css({"display":"block","color":"#c81623"});
         $(".f3-top-880",$(".bottom-12-474").eq(1)).css({"display":"none"}).eq(index).css({"display":"block"});
     })  
    /*F4*/
     /*F5*/
     //选项卡
    /* var f5C=$(".create-9",$("ul",$(".top-12-37")[4])[0]);  
     var f5BS=$(".border-select",$("ul",$(".top-12-37")[4])[0]);
     var f588=$(".f3-top-880",$(".bottom-12-474")[2]);
     for(var i=0;i<f5C.length;i++){
      f5C[i].index=i;
      f5C[i].onmouseover=function(){
        for(var i=0;i<f588.length;i++){
          f5BS[i].style.display="none";  
          f5BS[i].style.color="#666";
          f588[i].style.display="none"
        }
         f5BS[this.index].style.display="block";
         f5BS[this.index].style.color="#c81623";
         f588[this.index].style.display="block";
    }
  }*/
   //jq
       $(".create-9",$("ul",$(".top-12-37").eq(4)).eq(0)).hover(function(){
             var index=$(this).index();
         $(".border-select",$("ul",$(".top-12-37").eq(4)).eq(0)).css({"display":"none","color":"#666"}).eq(index).css({"display":"block","color":"#c81623"});
         $(".f3-top-880",$(".bottom-12-474").eq(2)).css({"display":"none"}).eq(index).css({"display":"block"});
     })  
    /*F5*/
    /*F6*/
   /* var f6C=$(".create-9",$("ul",$(".top-12-37")[5])[0]); 
     var f6BS=$(".border-select",$("ul",$(".top-12-37")[5])[0]);
     var f688=$(".f2chang",$(".bottom-F6-474")[0]);
     for(var i=0;i<f6C.length;i++){
      f6C[i].index=i;
      f6C[i].onmouseover=function(){
        for(var i=0;i<f688.length;i++){
          f6BS[i].style.display="none"; 
          f6BS[i].style.color="#666"; 
          f688[i].style.display="none"
        }
         f6BS[this.index].style.display="block";
         f6BS[this.index].style.color="#c81623";
         f688[this.index].style.display="block";
    }
  }*/
   //jq
       $(".create-9",$("ul",$(".top-12-37").eq(5)).eq(0)).hover(function(){
             var index=$(this).index();
         $(".border-select",$("ul",$(".top-12-37").eq(5)).eq(0)).css({"display":"none","color":"#666"}).eq(index).css({"display":"block","color":"#c81623"});
         $(".f2chang",$(".bottom-F6-474").eq(0)).css({"display":"none"}).eq(index).css({"display":"block"});
     })  
    /*F6*/
    /*F7*/
    /*var f7C=$(".create-9",$("ul",$(".top-12-37")[6])[0]);
     var f7BS=$(".border-select",$("ul",$(".top-12-37")[6])[0]);
     var f788=$(".f2chang",$(".bottom-F6-474")[1]);
     for(var i=0;i<f7C.length;i++){
      f7C[i].index=i;
      f7C[i].onmouseover=function(){
        for(var i=0;i<f788.length;i++){
          f7BS[i].style.display="none"; 
          f7BS[i].style.color="#666";
          f788[i].style.display="none"
        }
         f7BS[this.index].style.display="block";
         f7BS[this.index].style.color="#c81623";
         f788[this.index].style.display="block";
    }
  }*/
     //jq
       $(".create-9",$("ul",$(".top-12-37").eq(6)).eq(0)).hover(function(){
             var index=$(this).index();
         $(".border-select",$("ul",$(".top-12-37").eq(6)).eq(0)).css({"display":"none","color":"#666"}).eq(index).css({"display":"block","color":"#c81623"});
         $(".f2chang",$(".bottom-F6-474").eq(1)).css({"display":"none"}).eq(index).css({"display":"block"});
     })  
    /*F7*/
     /*F8*/
   /* var f8C=$(".create-9",$("ul",$(".top-12-37")[7])[0]);
     var f8BS=$(".border-select",$("ul",$(".top-12-37")[7])[0]);
     var f888=$(".f2chang",$(".bottom-F6-474")[2]);
     for(var i=0;i<f8C.length;i++){
      f8C[i].index=i;
      f8C[i].onmouseover=function(){
        for(var i=0;i<f888.length;i++){
          f8BS[i].style.display="none"; 
          f8BS[i].style.color="#666"; 
          f888[i].style.display="none"
        }
         f8BS[this.index].style.display="block";
         f8BS[this.index].style.color="#c81623";
         f888[this.index].style.display="block";
    }
  }*/
     //jq
       $(".create-9",$("ul",$(".top-12-37").eq(7)).eq(0)).hover(function(){
             var index=$(this).index();
         $(".border-select",$("ul",$(".top-12-37").eq(7)).eq(0)).css({"display":"none","color":"#666"}).eq(index).css({"display":"block","color":"#c81623"});
         $(".f2chang",$(".bottom-F6-474").eq(2)).css({"display":"none"}).eq(index).css({"display":"block"});
     })  
    /*F8*/
     /*F9*/
    /*var f9C=$(".create-9",$("ul",$(".top-12-37")[8])[0]); 
     var f9BS=$(".border-select",$("ul",$(".top-12-37")[8])[0]);
     var f988=$(".f2chang",$(".bottom-F6-474")[3]);
     for(var i=0;i<f9C.length;i++){
      f9C[i].index=i;
      f9C[i].onmouseover=function(){
        for(var i=0;i<f988.length;i++){
          f9BS[i].style.display="none"; 
          f9BS[i].style.color="#666";  
          f988[i].style.display="none"
        }
         f9BS[this.index].style.display="block";
         f9BS[this.index].style.color="#c81623";
         f988[this.index].style.display="block";
    }
  }*/
     //jq
       $(".create-9",$("ul",$(".top-12-37").eq(8)).eq(0)).hover(function(){
             var index=$(this).index();
         $(".border-select",$("ul",$(".top-12-37").eq(8)).eq(0)).css({"display":"none","color":"#666"}).eq(index).css({"display":"block","color":"#c81623"});
         $(".f2chang",$(".bottom-F6-474").eq(3)).css({"display":"none"}).eq(index).css({"display":"block"});
     })  
    /*F9*/
     /*F10*/
    /*var f10C=$(".create-9",$("ul",$(".top-12-37")[9])[0]);
     var f10BS=$(".border-select",$("ul",$(".top-12-37")[9])[0]);
     var f1088=$(".f2chang",$(".bottom-F6-474")[4]);
     for(var i=0;i<f10C.length;i++){
      f10C[i].index=i;
      f10C[i].onmouseover=function(){
        for(var i=0;i<f1088.length;i++){
          f10BS[i].style.display="none";  
          f10BS[i].style.color="#666"; 
          f1088[i].style.display="none"
        }
         f10BS[this.index].style.display="block";
         f10BS[this.index].style.color="#c81623";
         f1088[this.index].style.display="block";
    }
  }*/
     //jq
       $(".create-9",$("ul",$(".top-12-37").eq(9)).eq(0)).hover(function(){
             var index=$(this).index();
         $(".border-select",$("ul",$(".top-12-37").eq(9)).eq(0)).css({"display":"none","color":"#666"}).eq(index).css({"display":"block","color":"#c81623"});
         $(".f2chang",$(".bottom-F6-474").eq(4)).css({"display":"none"}).eq(index).css({"display":"block"});
     })  
    /*F10*/
     /*F11*/
     //选项卡
    /* var f11C=$(".create-9",$("ul",$(".top-12-37")[10])[0]);
     var f11BS=$(".border-select",$("ul",$(".top-12-37")[10])[0]);
     var f1188=$(".f3-top-880",$(".bottom-12-474")[3]);
     for(var i=0;i<f11C.length;i++){
      f11C[i].index=i;
      f11C[i].onmouseover=function(){
        for(var i=0;i<f1188.length;i++){
          f11BS[i].style.display="none"; 
          f11BS[i].style.color="#666"; 
          f1188[i].style.display="none"
        }
         f11BS[this.index].style.display="block";
         f11BS[this.index].style.color="#c81623";
         f1188[this.index].style.display="block";
    }
  }*/
      //jq
       $(".create-9",$("ul",$(".top-12-37").eq(10)).eq(0)).hover(function(){
             var index=$(this).index();
         $(".border-select",$("ul",$(".top-12-37").eq(10)).eq(0)).css({"display":"none","color":"#666"}).eq(index).css({"display":"block","color":"#c81623"});
         $(".f3-top-880",$(".bottom-12-474").eq(3)).css({"display":"none"}).eq(index).css({"display":"block"});
     })  
    /*F11*/
   //3,4,5,11
   // rightleader
   var leadsmall=$(".leadsmall");
   var jingdhuiyuan=$(".jingdhuiyuan");
   var aaaaa=$(".aaaaa",$(".Leadbox")[0]);
    for(var i=0;i<leadsmall.length;i++){
          leadsmall[i].index=i;
          leadsmall[i].onmouseover=function(){
            animate(jingdhuiyuan[this.index],{left:-62},200);
            aaaaa[this.index].style.backgroundColor="#c81623";
          }
          leadsmall[i].onmouseout=function(){
            animate(jingdhuiyuan[this.index],{left:0},200);
            aaaaa[this.index].style.backgroundColor="#7a6e6e";
          }
    }

   var FHHK=$(".FHHK");
   var boub_Hf=$(".boub-Hf");
   var bbb=$(".aaaaa",$(".hui-kui")[0]);
    for(var i=0;i<FHHK.length;i++){
          FHHK[i].index=i;
          FHHK[i].onmouseover=function(){
            animate(boub_Hf[this.index],{left:-62},200);
           bbb[this.index].style.backgroundColor="#c81623";
          }
          FHHK[i].onmouseout=function(){
            animate(boub_Hf[this.index],{left:0},200);
            bbb[this.index].style.backgroundColor="#7a6e6e";
          }
    }

    //楼层跳转
    //jq
        var floorFirst=$(".FLOOR12").eq(0).offset().top;
        $(window).scroll(function(){
            var top=$(document).scrollTop();
            //console.log(top)
            if(top>floorFirst-500){
               $(".left-items").eq(0).css({"display":"block"});
            }else if(top<floorFirst-500){
                $(".left-items").eq(0).css({"display":"none"})
            }
            for(var i=0;i<$(".FLOOR12").length;i++){
               if(top>$(".FLOOR12").eq(i).offset().top-500){
                   $(".redzi").css("display","none").eq(i).css("display","block");
               }
            }
            for(var i=0;i<$(".floor_lis").length;i++){
                $(".floor_lis").hover(function(){
                     $(".wenzi").eq($(this).index()).css("display","block");
                },function(){
                     $(".wenzi").eq($(this).index()).css("display","none");
                })
            } 
          })
              $(".floor_lis").click(function(){
                    var index=$(this).index()
                   $(document.body).animate({scrollTop:$(".FLOOR12").eq(index).offset().top})
                   console.log(index)
              })
       
    //js
   /* var left_items=$(".left-items")[0];
    var FLOOR12=$(".FLOOR12");
    var floor_lis=$(".floor_lis");
    var floor_h=FLOOR12[0].offsetTop;
    var redzi=$(".redzi");
    var wenzi=$(".wenzi");
    var cHeight=document.documentElement.clientHeight; 
    for(var i=0;i<FLOOR12.length;i++){
       FLOOR12[i].h=FLOOR12[i].offsetTop;
    }
    window.onscroll=function(){
      var top=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
      if(top>floor_h-500){
           left_items.style.display="block";
           var Height=left_items.offsetHeight;
           left_items.style.top=(cHeight-Height)/2+"px";
      }
      if(top<floor_h-500){
           left_items.style.display="none";
      }
      for(var i=0;i<FLOOR12.length;i++){
        if(top>FLOOR12[i].h-500){
          for(var j=0;j<redzi.length;j++){
            redzi[j].style.display="none";
          }
          redzi[i].style.display="block";
          now=i;
        }
     }
    }
    for(var i=0;i<floor_lis.length;i++){
             floor_lis[i].index=i;
             floor_lis[i].onmouseover=function(){
              wenzi[this.index].style.display="block";
             }
              floor_lis[i].onmouseout=function(){
              wenzi[this.index].style.display="none";
             }
             floor_lis[i].onclick=function(){
                 animate(document.body,{scrollTop:FLOOR12[this.index].h-100});
                 animate(document.documentElement,{scrollTop:FLOOR12[this.index].h-100});
             }
    }*/
    // every-special
    //js
    /*var special_middle=$(".special-middle")[0];
    var biankuang=$(".biankuang",special_middle);
    for(var i=0;i<biankuang.length;i++){
         biankuang[i].index=i;
         biankuang[i].onmouseover=function(){
          animate(biankuang[this.index],{left:5},200)
         }
         biankuang[i].onmouseout=function(){
          animate(biankuang[this.index],{left:10},200)
         }
    }*/
    //jq
      $(".biankuang",$(".special-middle").eq(0)).hover(function(){
        $(this).animate({left:5},200)
      },function(){
        $(this).animate({left:10},200)
      })
    //
    var flag=true;
    var hengdongxian=$(".hengdongxian")[0];
    hengdongxian.onmouseover=function(){
       animate(hengdongxian,{left:0},10,function(){
         if(flag){
            animate(hengdongxian,{left:845},400)
             flag=false;
         }
       })
       flag=true;
    }
    
   //lazy图片加载
  $("img.lazy").lazyload({
    // event:"sporty",
    effect:"fadeIn",
    // threshold:1000
  })
});
  /* $(window).on("load",function(){
    var timeout=setTimeout(function(){$("img.lazy").trigger("sporty")},5000)
  })*/