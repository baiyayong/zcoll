/**
 * Created by Administrator on 2017/11/19 0019.
 */
$(function () {
  //内容区的高度应该是动态设置的，应该是视口高度 - 头部高度
  var $head=$('#wrap .header')
  var $content=$("#wrap .content").height(document.documentElement.clientHeight - $head.outerHeight() + "px") ;
  var $lis=$("#wrap .content .contentList>li")
   $.each($lis,function (index) {
     $($lis[index]).height=$content+'px'
  })


  var $nvList=$('#wrap .header .headerContent nav ul li')
  var $pList=$('#wrap .content .sideNav li')
  var $cList = $("#wrap .content .contentList");
  var $content=$('#wrap .content')
  var now=0
  var preIndex=0
  var timer=0

  var secondLi1=$("#wrap .content .contentList .secondLi .second .left .photoList li:nth-of-type(1)")
  var secondLi2=$("#wrap .content .contentList .secondLi .second .left .photoList li:nth-of-type(2)")
  var secondLi3=$("#wrap .content .contentList .secondLi .second .left .photoList li:nth-of-type(3)")
  var secondRight=$("#wrap .content .contentList .secondLi .second .right ")

  var thirdLi2=$("#wrap .content .contentList .thirdLi .third .left .photoList li:nth-of-type(2)")
  var thirdLi3=$("#wrap .content .contentList .thirdLi .third .left .photoList li:nth-of-type(3)")
  var thirdRight=$("#wrap .content .contentList .thirdLi .third .right ")

  var fourLi1=$("#wrap .content .contentList .fourLi .four .left .photoList li:nth-of-type(1)")
  var fourLi2=$("#wrap .content .contentList .fourLi .four .left .photoList li:nth-of-type(2)")
  var fourLi3=$("#wrap .content .contentList .fourLi .four .left .photoList li:nth-of-type(3)")
  var fourRight=$("#wrap .content .contentList .fourLi .four .right ")

  var fiveLi1=$("#wrap .content .contentList .fiveLi .five .left .photoList li:nth-of-type(1)")
  var fiveLi2=$("#wrap .content .contentList .fiveLi .five .left .photoList li:nth-of-type(2)")
  var fiveLi3=$("#wrap .content .contentList .fiveLi .five .left .photoList li:nth-of-type(3)")
  var fiveRight=$("#wrap .content .contentList .fiveLi .five .right ")

  var anmiations = [
    {
      in: function () {
        // 设置我们的入场动画逻辑
        var img=$('#wrap .content .contentList firstLi img')
        setTimeout(function () {
          $(img).css({
            opacity:1
          })
        },1000)
      },
      out: function () {
        // 设置我们的出场动画逻辑
        var img=$('#wrap .content .contentList firstLi img')
        setTimeout(function () {
          $(img).css({
            opacity:0
          })
        },1000)
      }
    },
    {
      in: function () {
        // 设置我们的入场动画逻辑
        setTimeout(function () {
          $(secondLi1).css({
            transform:'translateY(0px)'
          })
        },800);
        setTimeout(function () {
          $(secondLi2).css({
            transform:'translateY(0px)'
          })
        },1000);
        setTimeout(function () {
          $(secondLi3).css({
            transform:'translateY(0px)'
          })
          $(secondRight).css(
            {transform : "translateY(0px)"}
          );
        },1200)
      },
      out: function () {
        // 设置我们的出场动画逻辑
        setTimeout(function () {
          $(secondLi1).css({
            transform:'translateY(800px)'
          })
        },800)
        setTimeout(function () {
          $(secondLi2).css({
            transform:'translateY(800px)'
          })
        },800)
        setTimeout(function () {
          $(secondLi3).css({
            transform:'translateY(800px)'
          })
          $(secondRight).css(
            {transform : "translateY(-800px)"}
          );
        },800)
      }

    },
    {
      in:function(){
        setTimeout(function(){
          $(thirdLi2).css({transform : "translateX(0px)"});
          $(thirdLi3).css({transform : "translateX(0px)"});
          $(thirdRight).css({transform : "translateX(0px)"});
        },1000);
      },
      out:function(){
        setTimeout(function(){
          $(thirdLi2).css({transform : "translateX(-279px)"});
          $(thirdLi3).css({transform : "translateX(-558px)"});
          $(thirdRight).css({transform : "translateX(300px)"});
        },1000);
      }
    },
    {
      in: function () {
        // 设置我们的入场动画逻辑
        $(fourLi1).css({display:'initial'});
        $(fourLi2).css({display:'initial'});
        $(fourLi3).css({display:'initial'});

        $(fourLi1).css({animation:'move1 2s 0.8'});
        $(fourLi2).css({animation:'move2 2s 0.8'});
        $(fourLi3).css({animation:'move3 2s 0.8'});
        setTimeout(function () {
          $(fourLi1).css({transform:'translate(0px,0px)'})
          $(fourLi2).css({transform:'translate(0px,0px)'})
          $(fourLi3).css({transform:'translate(0px,0px)'})
          $(fourRight).css({opacity:1})
        },1000)
      },
      out: function () {
        // 设置我们的出场动画逻辑
        $(fourLi1).css({display:'none'});
        $(fourLi2).css({display:'none'});
        $(fourLi3).css({display:'none'});
        $(fourLi1).css({transform:'translate(330px,-1000px)'})
        $(fourLi2).css({transform:'translate(0px,-1000px)'})
        $(fourLi3).css({transform:'translate(-330px,-1000px)'})
        $(fourRight).css({opacity:0})
      }
    },
    {
      in: function () {
        // 设置我们的入场动画逻辑
        setTimeout(function(){
          $(fiveLi1).css({transform : "translate3d(0,0,0) rotateX(0deg)"});
        },800)
        setTimeout(function(){
          $(fiveLi2).css({transform : "translate3d(0,0,0) rotateX(0deg)"});
        },1000)
        setTimeout(function(){
          $(fiveLi3).css({transform : "translate3d(0,0,0) rotateX(0deg)"});
          $(fiveRight).css({opacity:1});
        },1200)
      },
      out: function () {
        // 设置我们的出场动画逻辑
        setTimeout(function(){
          $(fiveLi1).css({transform : "translate3d(-1000px,-800px,-500px) rotateX(145deg)"});
        },800)
        setTimeout(function(){
          $(fiveLi2).css({transform : "translate3d(-1000px,-800px,-500px) rotateX(145deg)"});
        },1000)
        setTimeout(function(){
          $(fiveLi3).css({transform : "translate3d(-1000px,-800px,-500px) rotateX(145deg)"});
          $(fiveRight).css({opacity:0});
        },1200)
      }
    }
  ]
  //循环遍历animations数组，依次调用out方法
  $.each(anmiations,function (i) {
    anmiations[i]['out']();
  })
  //滚轮
  $content.on('mousewheel DOMMouseScroll',function (e) {
    e=e||event;
    var delta=(e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta>0 ? 1 :-1))//chrome/ie
    ||(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));//firefox
    clearTimeout(timer)
    timer=setTimeout(function () {
      if (delta > 0) {//滚轮向上
        if (now > 0) {
          now--
        }
        move(now)
      } else if (delta < 0) {//滚轮向下
        if (now < $lis.length - 1) {
          now++;
          if ((now == 0 && delta > 0 || now == $lis.length && delta < 0)) {
            return
          }
          move(now)
        }
      }
      // preIndex 为 前一个索引
      preIndex=now
    },200)
    //取消滚轮默认行为
    window.event? window.event.returnValue = false : e.preventDefault()
  })
  hander();
  function hander() {
    $.each($nvList,function (i) {//头部导航
      $nvList[i].index=i
      $($nvList[i]).on('click',function () {
        preIndex=now
        move(this.index)
        now=this.index
      })
    });
    $.each($pList,function (i) {//右侧导航
      $pList[i].index=i
      $($pList[i]).on('click',function () {
        preIndex=now
        move(this.index)
        now=this.index
      })
    })
  }
  function move(index) {
    $.each($nvList,function (i) {
      $($nvList[i]).attr('class','')//设置头部导航样式
    });
    $($nvList[index]).addClass('active')

    $.each($pList,function (i) {
      $($pList[i]).attr('class','')//设置右部导航样式
    })
    $($pList[index]).addClass('active')
    //设置内容区的移动
    $($cList).css({
      top:-index*(document.documentElement.clientHeight - $head.outerHeight())
    })
    // 根据传过来的now 值 调用当前li对应的入场动画
    if(anmiations[index]&&anmiations[index]['in']){
      anmiations[index]['in']()
    }
    // 前一个li调用出场动画
    if(anmiations[preIndex]&&anmiations[preIndex]['out']){
      anmiations[preIndex]['out']();
    }
  }

})