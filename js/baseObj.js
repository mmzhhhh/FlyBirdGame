// 创建一个对象并包含两个函数方法
var baseObj={
    //定义随机数生成函数
    randomNum:function (min,max){
        //生成指定范围内的随机整数并返回
        return parseInt(Math.random()*(max-min+1)+min);
    },

    //定义矩形碰撞检测函数
    rectangleCrashExamine:function (obj1,obj2){
        //获取obj1元素的左侧偏移量、宽度、顶部偏移量、高度
        var obj1Left=obj1.offsetLeft;
        //得到元素相对于文档左侧边缘的整体宽度。
        var obj1Width=obj1.offsetLeft+obj1.offsetWidth;
        var obj1Top=obj1.offsetTop;
        var obj1Height=obj1.offsetTop+obj1.offsetHeight;

        //获取obj2元素的左侧偏移量、宽度、顶部偏移量、高度；
        var obj2Left=obj2.offsetLeft;
        var obj2Width=obj2.offsetLeft+obj2.offsetWidth;
        var obj2Top=obj2.offsetTop;
        var obj2Height=obj2.offsetTop+obj2.offsetHeight;

        //判断两个矩形是否相交，如果相交则返回true，否则返回false
        if(!(obj1Left>obj2Width||obj1Width<obj2Left||obj1Top>obj2Height||obj2Top>obj1Height)){
            return true;//碰撞发生
        }
        return false;//碰撞未发生
    }



}