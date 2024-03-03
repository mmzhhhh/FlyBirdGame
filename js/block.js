//定义一个名为Block的构造函数
function Block(){
    //上方管道的容器元素
    this.upDivWrap=null;
    //下方管道的容器元素
    this.downDivwrap=null;
    //下方管道的高度，随机生成
    this.downHeight=baseObj.randomNum(0,150);
    //上下管道之间的间隙高度，随机生成
    this.gapHeight=baseObj.randomNum(150,160);
    //上方管道的高度，根据总高度和下方管道高度、间隙高度计算得出
    this.upHeight=312-this.downHeight-this.gapHeight;

    //用来生成div元素的方法
    this.createDiv=function (url,height,positionType,left,top){
        //创建div元素
        var newDiv=document.createElement('div');
        //设置div的样式和位置
        newDiv.style.width='62px';
        newDiv.style.height=height;
        newDiv.style.position=positionType;
        newDiv.style.left=left;
        newDiv.style.top=top;
        newDiv.style.backgroundImage=url;//"url(/img/0.jpg)
        return newDiv;
    }

    //创建上方和下方管道及其容器的方法
    this.createBlock=function (){
        //创建上方管道的两部分
        var upDiv1=this.createDiv("url(img/up_mod.png)",this.upHeight+"px");
        var upDiv2=this.createDiv("url(img/up_pipe.png)","60px");
        //创建上方管道的容器并添加两部分管道
        this.upDivWrap=this.createDiv(null,null,"absolute","450px");
        this.upDivWrap.appendChild(upDiv1);
        this.upDivWrap.appendChild(upDiv2);//生成上方管道

        //创建下方管道的两部分
        var downDiv1=this.createDiv("url(img/down_pipe.png)","60px");
        var downDiv2=this.createDiv("url(img/down_mod.png)",this.downHeight+"px");
        //创建下方管道的容器并添加两部分管道
        this.downDivwrap=this.createDiv(null,null,"absolute","450px",363-this.downHeight+"px");
        this.downDivwrap.appendChild(downDiv1);
        this.downDivwrap.appendChild(downDiv2);

        //将上下管道容器添加到页面上的容器中
        jsWrapBg.appendChild(this.upDivWrap);
        jsWrapBg.appendChild(this.downDivwrap);
    };

    //控制管道移动的方法
    this.moveBlock=function (){
        //控制上方和下方管道的左侧位置向左移动
        this.upDivWrap.style.left=this.upDivWrap.offsetLeft-3+"px";
        this.downDivwrap.style.left=this.downDivwrap.offsetLeft-3+"px";
    };
}