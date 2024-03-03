// 创建一个对象并包含三个方法
var bird={
    flyTimer:null,//存储小鸟飞翔定时器的引用
    wingTimer:null,//存储小鸟翅膀摆动定时器的引用

    div:document.createElement('div'),//创建用于表示小鸟的div元素

    //将小鸟展示在游戏界面中的函数
    showBird:function (parentObj){
        //设置小鸟div的样式
        this.div.style.width="40px";
        this.div.style.height="28px";
        this.div.style.backgroundImage="url(img/bird0.png)";
        this.div.style.backgroundRepeat="no-repeat";
        this.div.style.position="absolute";
        this.div.style.left='50px';
        this.div.style.top='200px';
        this.div.style.zIndex='1';

        //将小鸟DIV插入游戏界面中的父元素中
        parentObj.appendChild(this.div);
    },

    fallSpeed:0,//小鸟下落速度

    //控制小鸟飞翔和下落的函数
    flyBird:function (){
        //每隔一段时间执行一次fly函数
        bird.flyTimer=setInterval(fly,40);
        function fly(){
            //修改小鸟的位置，使其上升或下降
            bird.div.style.top=bird.div.offsetTop+bird.fallSpeed++ +"px";

            //当小鸟到达游戏界面的顶部时，防止小鸟飞出界面
            if(bird.div.offsetTop<0){
                bird.fallSpeed=2;
            }

            //当小鸟到达游戏界面的底部时
            if(bird.div.offsetTop>=395){
                bird.fallSpeed=0;
                //清除飞翔定时器
                clearInterval(bird.flyTimer);
                //清除翅膀摆动定时器
                clearInterval(bird.wingTimer);
            }
            //控制小鸟的最大下落速度
            if(bird.fallSpeed>12){
                bird.fallSpeed=12;
            }
        }
    },

    //控制小鸟煽动翅膀的函数
    wingWave:function (){
        var up=["url(img/up_bird0.png)","url(img/up_bird1.png)"];
        var down=["url(img/down_bird0.png)","url(img/down_bird1.png)"];
        var i=0,j=0;
        //逐帧动画，小鸟煽动翅膀
        bird.wingTimer=setInterval(wing,120);
        function wing(){
            //根据小鸟的下落速度选择不同的煽动翅膀的图片
            if(bird.fallSpeed>0){
                bird.div.style.backgroundImage=down[i++];
                if(i==2){
                    i=0;
                }
            }
            if(bird.fallSpeed<0){
                bird.div.style.backgroundImage=up[j++];
                if(j==2){
                    j=0;
                }
            }
        }
    }


}