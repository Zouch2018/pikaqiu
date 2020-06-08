!function () {
  var duration = 50
  $('.action').on('click','button',function (e) {
    let $button = $(e.currentTarget)
    let speed =$button.attr('data-speed')
    $button.addClass('active').siblings('.active').removeClass('active')
    switch(speed){
      case 'slow' :
        duration = 80;
        break;
      case 'normal' :
        duration = 40;
        break;
      case 'fast' :
        duration = 10;
        break;
    }
  })
  function writeCode(prefix,code,fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let timer = setTimeout(function run(){
      n+=1
      container.innerText = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
        timer = setTimeout(run,duration)
      }
    },duration)
    fn && fn.call()
  }
  let code= `/* 现在我们要开始画一个皮卡丘啦
  */
  .preview {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #fee433;
}
.wrapper {
    width: 100%;
    height: 165px;
    position: relative;
}
/*
*首先画一个鼻子
*/
.nose {
    width: 0;
    height: 0;
    border: 12px solid;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left:50%;
    top: 28px;
    transform: translate(-50%);
}
/*
*再画一双眼睛
*/
.eye {
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
}
.eye.left {
    right:50%;
    margin-right: 90px;
}
.eye.right {
    left:50%;
    margin-left: 90px;
}
.eye::before {
    content:'';
    display: block;
    width: 24px;
    height: 24px;
    background: #fff;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000;
}
/*
*再画它的腮红
*/
.face {
    width: 68px;
    height: 68px;
    background: #fc0d1c;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}
.face.left {
    right: 50%;
    margin-right: 116px;
}
.face.right {
    left: 50%;
    margin-left: 116px;
}
/*
*然后画它的上嘴唇
*/
.upperLip {
    height: 25px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    background: #fee433;
}
.upperLip.left {
    right: 50%;
    top: 50px;
    border-bottom-left-radius: 40px 25px;
    border-top:none;
    border-right: none;
    transform: rotate(-20deg);
}
.upperLip.right {
    left: 50%;
    top: 50px;
    border-bottom-right-radius: 40px 25px;
    border-top:none;
    border-left: none;
    transform: rotate(20deg);
}
/*
*最后画它的舌头
*/
.lowerLip-wrapper {
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    height: 110px;
    width: 300px;
    overflow: hidden;
}
.lowerLip {
    height: 3500px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border:2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
.lowerLip::after {
    content:'';
    position: absolute;
    left: 50%;
    margin-left: -50px;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #fc4a62;
    border-radius: 50px;
}
/*
*好啦，皮卡丘画完啦，送给你。
*/
`
  writeCode('',code)
}.call()