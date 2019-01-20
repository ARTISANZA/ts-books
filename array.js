/** 
 * autor: ZA
 * date:  2019-01-07
*/
window.onload = function(){
    // var colors = new Array();
    // var count = colors.push("red","blue");
    // alert(count);  
    
    // count = colors.push("black");

    // var item = colors.pop();
    // alert(item);
    // alert(count);  

    // alert(colors.length);

    // var colors = ["red","blue"];
    // colors.push("brown");//添加一项
    // colors[3] = "black";//添加另一项
    // alert(colors.length);

    // var item = colors.pop();
    // alert(item);

    // var colors = new Array();
    // var count = colors.push("red","green");

    // count = colors.push("black");
    // alert(count);

    //队列方法
    // var item = colors.shift();
    // alert(item);
    // alert(colors.length);

    var colors = new Array();
    //推入两项
    var count = colors.unshift("red", "green");
    // alert(count);
    count = colors.unshift("black");
    // alert(count);

    var item = colors.pop();
    // alert(item);

    var values = [0, 1, 5, 10, 15];
    // values.sort(compare);
    // alert(values);
    // values.reverse();
    values.sort(compare1);
    // alert(values);

    var colors = ['red','green','blue','yellow','purple'];
    var colors2 = colors.slice;
    // alert(colors2);

    var numbers = [1,2,3,4,5,4,3,2,1];

    var everyResult = numbers.every(function(){
        return (item > 2);
    });

    alert(everyResult);
}
//比较函数
function compare(value1,value2){
    if(value1 < value2){
        return -1;
    }else if(value1 > value2){
        return 1;
    }else{
        return 0;
    }
}
//比较函数等价函数
function compare1(value1,value2){
    return value1 - value2;
}
