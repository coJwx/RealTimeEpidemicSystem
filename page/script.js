document.body.style.width = (window.screen.availWidth - 20) + "px";

// 点击收缩动画效果
layui.use('jquery', function() {
    var $ = layui.jquery;
    //演示动画开始
    //可以在这里修改触发动画的事件
    $('.site-doc-icon .layui-anim').click(function() {
        var othis = $(this),
            anim = othis.data('anim');
        //停止循环
        if (othis.hasClass('layui-anim-loop')) {
            return othis.removeClass(anim);
        }
        othis.removeClass(anim);
        setTimeout(function() {
            othis.addClass(anim);
        });
        //恢复渐隐
        if (anim === 'layui-anim-fadeout') {
            setTimeout(function() {
                othis.removeClass(anim);
            }, 1300);
        }
    });
    //演示动画结束
})


//导航栏悬停效果
layui.use('element', function() {
    var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
    //监听导航点击
    element.on('nav(demo)', function(elem) {
        //console.log(elem)
        layer.msg(elem.text());
    });
});


//弹窗、公告台模块
layui.use('layer', function() { //独立版的layer无需执行这一句
    var $ = layui.jquery,
        layer = layui.layer; //独立版的layer无需执行这一句
    //触发事件
    var active = {
        notice1: function() {
            //示范一个公告层
            layer.open({
                type: 1,
                title: false //不显示标题栏
                    ,
                closeBtn: false,
                area: '800px;',
                shade: 0.8,
                id: 'LAY_layuipro' //设定一个id，防止重复弹出
                    ,
                btn: ['知道了'],
                btnAlign: 'c',
                moveType: 1 //拖拽模式，0或者1
                    ,
                content: `<div style="padding: 35px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">
                                <div style="font-weight: 600;font-size: 20px;">什么是“现有确诊”？</div><br>
                                <br>1、“现有确诊”一词取至国家卫健委每日公布的“现有确证病例数”，该数值反应了当前正在治疗中的确诊人数。<br>
                                <br>2、实时更新时，一般使用“现有确诊人数=累计确诊人数-累计治愈人数-累计死亡人数”计算得到。
                            </div>`
            });
        },
        notice2: function() {
            //示范一个公告层
            layer.open({
                type: 1,
                title: false //不显示标题栏
                    ,
                closeBtn: false,
                area: '800px;',
                shade: 0.8,
                id: 'LAY_layuipro' //设定一个id，防止重复弹出
                    ,
                btn: ['知道了'],
                btnAlign: 'c',
                moveType: 1 //拖拽模式，0或者1
                    ,
                content: `<div style="padding: 35px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">
                                <div style="font-weight: 600;font-size: 20px;">什么是“无症状”？</div><br>
                                <br>1、“无症状”全称新型冠状无症状感染者，是指无相关临床症状，如咳嗽、发热、咽痛等可自我感知或可临床识别的症状与体征，但呼吸道等标本新型冠状病毒病原学检测阳性者。<br>
                                <br>2、“无症状”相关数据取至天行数据最新发布的“无症状感染者”数据。
                            </div>`
            });
        },
        notice3: function() {
            //示范一个公告层
            layer.open({
                type: 1,
                title: false //不显示标题栏
                    ,
                closeBtn: false,
                area: '800px;',
                shade: 0.8,
                id: 'LAY_layuipro' //设定一个id，防止重复弹出
                    ,
                btn: ['知道了'],
                btnAlign: 'c',
                moveType: 1 //拖拽模式，0或者1
                    ,
                content: `<div style="padding: 35px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">
                                    <div style="font-weight: 600;font-size: 20px;">数据说明</div><br>
                                    <br>开篇声明：本网数据可能与官方数据略有偏差，均属数据来源不同，与官方发布的时间相比，存在一定的时间延迟。<br>
                                    <br>1、数据来源：
                                    <br>来自天行数据、国家卫健委、各省市区卫健委、港澳台官方渠道公开数据。<br>
                                    <br>2、数据统计原则：
                                    <br>（a）每日上午全国数据会优先使用天行数据网提供的数据（此时各省市数据尚未及时更新，可能会出现全国数据大于各省份合计数的情况）。
                                    <br>（b）当各省公布数据总和大于国家卫健委公布数据时，则全国数据切换为各省合计数，保持实时更新。
                                    <br>（c）全国数据包含着港澳台地区的数据。<br>
                                    <br>3、数据更新时间：
                                    <br>实时更新全国、各省市的数据。因借助API数据网站，与官方发布的时间相比，将有一定的时间延迟。<br>
                                    <br>4、全国疫情统计中【较昨日】的数据来源于天行数据提供的相对于上一日新增病例数，其含义是上一天24小时内新增的病例数。<br>
                                    <br>5、此网站是中国矿业大学在读学生江卫星参考了百度APP《疫情实时大数据报告》网站，通过自己设计并自寻数据而做的，如有数据错误、代码不足之处或一些难以发现的漏洞，欢迎通过“制作者”模块提供的QQ二维码联系我。
                                </div>`
            });
        },
        notice4: function() {
            //示范一个公告层
            layer.open({
                type: 1,
                title: false //不显示标题栏
                    ,
                closeBtn: false,
                area: '800px;',
                shade: 0.8,
                id: 'LAY_layuipro' //设定一个id，防止重复弹出
                    ,
                btn: ['知道了'],
                btnAlign: 'c',
                moveType: 1 //拖拽模式，0或者1
                    ,
                content: `<div style="padding: 35px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">
                                    <div style="font-weight: 600;font-size: 20px;">数据说明</div><br>
                                    <br>开篇声明：本网国外数据可能与官方数据略有偏差，均属数据来源不同，存在一定的时间延迟。<br>
                                    <br>1、数据来源：
                                    <br>国外数据来自天行数据公开数据接口。<br>
                                    <br>3、数据更新时间：
                                    <br>因借助API数据网站，与官方发布的时间相比，将有一定的时间延迟。国外数据因为需要跟踪、核实、在数据方面可能有较大偏差，数据以官网为主。<br>
                                    <br>5、此网站是中国矿业大学在读学生参考了百度APP《疫情实时大数据报告》网站，通过自己设计并自寻数据而做的，如有数据错误、代码不足之处或一些难以发现的漏洞，欢迎通过“制作者”模块提供的QQ二维码联系我。
                                </div>`
            });
        }
    };
    $('#layerDemo .layui-btn').on('click', function() {
        var othis = $(this),
            method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';
    });
});


//巡展台模块
layui.use('carousel', function() {
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#test1',
        width: "100%" //设置容器宽度
            ,
        height: 450,
        arrow: 'hover' //始终显示箭头
            //,anim: 'updown' //切换动画方式
            ,
        interval: 4000
    });
});


//国内疫情基本数据与实时战报数据的获取
//创建Ajax对象
var xhr = new XMLHttpRequest();
//open打开连接
xhr.open('GET', 'http://api.tianapi.com/txapi/ncov/index?key=1ebfbacaefe5dfc4e61094ff1e34c5b9');
//send发送连接
xhr.send();
//响应成功        
//解析时间函数
function ConvertJSONDateToJSDateObject(JSONDateString) {
    var date = new Date(parseInt(JSONDateString.replace("/Date(", "").replace(")/", ""), 10));
    var year = date.getFullYear();
    var month = date.getMonth + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var datastr = year + "年" + month + "月" + currentDate + "日&nbsp&nbsp" + hour + "点" + minute + "分" + seconds + "秒";
    return datastr;
}

xhr.onload = function() {
    var text = xhr.responseText;
    var arr = JSON.parse(text);

    console.log("国内疫情");
    console.log(arr);

    var descData = arr.newslist[0].desc;
    console.log(descData);
    var desc_id = new Array;
    for (var i = 1; i <= 16; i++) {
        desc_id[i] = 'layui-card-body-item-' + i;
    }
    var dom = document.getElementById(desc_id[1]);
    dom.innerHTML = descData.currentConfirmedCount;
    dom = document.getElementById(desc_id[2]);
    if (descData.currentConfirmedIncr < 0) {
        dom.innerHTML = descData.currentConfirmedIncr;
    } else {
        dom.innerHTML = '+' + descData.currentConfirmedIncr;
    }
    dom = document.getElementById(desc_id[3]);
    dom.innerHTML = descData.seriousCount;
    dom = document.getElementById(desc_id[4]);
    if (descData.seriousIncr < 0) {
        dom.innerHTML = descData.seriousIncr;
    } else {
        dom.innerHTML = '+' + descData.seriousIncr;
    }
    dom = document.getElementById(desc_id[9]);
    dom.innerHTML = descData.confirmedCount;
    dom = document.getElementById(desc_id[10]);
    if (descData.confirmedIncr < 0) {
        dom.innerHTML = +descData.confirmedIncr;
    } else {
        dom.innerHTML = '+' + descData.confirmedIncr;
    }

    dom = document.getElementById(desc_id[11]);
    dom.innerHTML = descData.suspectedCount;
    dom = document.getElementById(desc_id[12]);
    dom.innerHTML = '+' + descData.suspectedIncr;

    dom = document.getElementById(desc_id[13]);
    dom.innerHTML = descData.curedCount;
    dom = document.getElementById(desc_id[14]);
    dom.innerHTML = '+' + descData.curedIncr;

    dom = document.getElementById(desc_id[15]);
    dom.innerHTML = descData.deadCount;
    dom = document.getElementById(desc_id[16]);
    dom.innerHTML = '+' + descData.deadIncr;

    dom = document.getElementById('dataTime1');
    dom.innerHTML = '当前数据更新时间：' + ConvertJSONDateToJSDateObject(descData.modifyTime + '');
    dom = document.getElementById('dataTime2');
    dom.innerHTML = '当前数据更新时间：' + ConvertJSONDateToJSDateObject(descData.modifyTime + '');


    var newsData = arr.newslist[0].news;
    var news_id = new Array;

    var oUl = document.querySelector(".layui-timeline");
    var oList = oUl.querySelectorAll("li");

    for (var i = 1; i <= 5; i++) {
        if (newsData[i - 1]) {
            console.log(newsData[i - 1])
            news_id[i] = 'layui-timeline-title-' + i;
            var newsDom1 = document.getElementById(news_id[i] + 'a');
            var newsDom2 = document.getElementById(news_id[i] + 'b');
            var newsDom3 = document.getElementById(news_id[i] + 'c');

            newsDom1.innerHTML = ConvertJSONDateToJSDateObject(newsData[i - 1].pubDate + '');
            newsDom2.innerHTML = newsData[i - 1].title;
            newsDom2.setAttribute("href", newsData[i - 1].sourceUrl);
            newsDom3.innerHTML = newsData[i - 1].summary;
        } else {
            oList[i - 1].remove();
        }


    }
}


//国内疫情各地区统计的数据表格
var xhr1 = new XMLHttpRequest();
xhr1.open('GET', 'https://lab.isaaclin.cn/nCoV/api/area?country=%E4%B8%AD%E5%9B%BD&countryEng=China&latest=true');
xhr1.send();
var data1;
xhr1.onload = function() {
    var text = xhr1.responseText;
    var arr = JSON.parse(text);
    data1 = arr.results;
    console.log("国内");
    console.log(arr);
    console.log(data1);

    layui.use('table', function() {
        var table = layui.table;
        table.render({
            elem: '#demo',
            cellMinWidth: 100,
            cols: [
                [ //标题栏
                    { field: 'provinceShortName', title: '疫情地区', width: '20%' },
                    { field: 'currentConfirmedCount', title: '现有', width: '20%', sort: true },
                    { field: 'confirmedCount', title: '累计', width: '20%', sort: true },
                    { field: 'curedCount', title: '治愈', width: '20%', sort: true },
                    { field: 'deadCount', title: '死亡', sort: true }
                ]
            ],
            data: data1,
            page: true //是否显示分页
                ,
            limits: [6, 10, 14],
            limit: 10 //每页默认显示的数量
        });
    });
}



// 国外疫情数据获取
var xhr3 = new XMLHttpRequest();
xhr3.open('GET', 'http://api.tianapi.com/txapi/ncov/index?key=1ebfbacaefe5dfc4e61094ff1e34c5b9');
xhr3.send();
xhr3.onload = function() {
    var text = xhr3.responseText;
    var arr = JSON.parse(text);
    var data3 = arr.newslist[0].desc.foreignStatistics;

    //console.log(arr);
    //console.log(data3);

    var dom = document.getElementById("layui-card-body-item-a1");
    dom.innerHTML = data3.currentConfirmedCount;
    dom = document.getElementById("layui-card-body-item-b1");
    if (data3.currentConfirmedIncr < 0) {
        dom.innerHTML = data3.currentConfirmedIncr;
    } else {
        dom.innerHTML = '+' + data3.currentConfirmedIncr;
    }

    dom = document.getElementById("layui-card-body-item-a2");
    dom.innerHTML = data3.confirmedCount;
    dom = document.getElementById("layui-card-body-item-b2");
    dom.innerHTML = '+' + data3.confirmedIncr;

    dom = document.getElementById("layui-card-body-item-a3");
    dom.innerHTML = data3.curedCount;
    dom = document.getElementById("layui-card-body-item-b3");
    dom.innerHTML = '+' + data3.curedIncr;

    dom = document.getElementById("layui-card-body-item-a4");
    dom.innerHTML = data3.deadCount;
    dom = document.getElementById("layui-card-body-item-b4");
    dom.innerHTML = '+' + data3.deadIncr;
}


//国外各国家数据表格
var xhr4 = new XMLHttpRequest();
xhr4.open('GET', 'http://api.tianapi.com/txapi/ncovabroad/index?key=1ebfbacaefe5dfc4e61094ff1e34c5b9');
xhr4.send();
var data4;
xhr4.onload = function() {
    var text = xhr4.responseText;
    var arr = JSON.parse(text);
    data4 = arr.newslist;
    console.log('国外各国家数据表格')
    console.log(arr);
    console.log(data4);

    layui.use('table', function() {
        var table = layui.table;
        table.render({
            elem: '#demo1',
            cellMinWidth: 100,
            cols: [
                [ //标题栏
                    { field: 'provinceName', title: '疫情国家', width: '20%' }, { field: 'currentConfirmedCount', title: '现有', width: '20%', sort: true }, { field: 'confirmedCount', title: '累计', width: '20%', sort: true }, { field: 'curedCount', title: '治愈', width: '20%', sort: true }, { field: 'deadCount', title: '死亡', sort: true }
                ]
            ],
            data: data4,
            page: true //是否显示分页
                ,
            limits: [10, 15, 20],
            limit: 15 //每页默认显示的数量
        });
    });
}



//谣言鉴别数据的获取
var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'http://api.tianapi.com/txapi/rumour/index?key=1ebfbacaefe5dfc4e61094ff1e34c5b9');
xhr2.send();
xhr2.onload = function() {
    var text = xhr2.responseText;
    var arr = JSON.parse(text);
    var date2 = arr.newslist;
    //console.log('谣言');
    //console.log(date2);

    var dom = document.getElementsByClassName("layui-colla-title");
    var dom_explain = document.getElementsByClassName("layui-colla-content-explain");
    var dom_date = document.getElementsByClassName("layui-colla-content-date");
    var dom_desc = document.getElementsByClassName("layui-colla-content-desc");
    var dom_author = document.getElementsByClassName("layui-colla-content-author");
    var dom_imgsrc = document.getElementsByClassName("layui-colla-content-imgsrc");

    for (var i = 0; i < date2.length; i++) {
        dom[i].innerHTML = date2[i].title + '？';
        dom_explain[i].innerHTML = date2[i].explain + '！';
        dom_date[i].innerHTML = '时间：' + date2[i].date;
        dom_desc[i].innerHTML = date2[i].desc;
        dom_author[i].innerHTML = '权威平台：' + date2[i].author;
        if (date2[i].imgsrc[0] === '/') {
            date2[i].imgsrc = 'http:' + date2[i].imgsrc;
        }
        dom_imgsrc[i].src = date2[i].imgsrc;
    }
}

//流星背景
const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8,
    STAR_SIZE = 3,
    STAR_MIN_SCALE = 0.2,
    OVERFLOW_THRESHOLD = 50;

const canvas = document.querySelector('canvas'),
    context = canvas.getContext('2d');

let scale = 1, // device pixel ratio
    width,
    height;

let stars = [];

let pointerX,
    pointerY;

let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

let touchInput = false;

generate();
resize();
step();

window.onresize = resize;
canvas.onmousemove = onMouseMove;
canvas.ontouchmove = onTouchMove;
canvas.ontouchend = onMouseLeave;
document.onmouseleave = onMouseLeave;

function generate() {

    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
            x: 0,
            y: 0,
            z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE)
        });
    }

}

function placeStar(star) {

    star.x = Math.random() * width;
    star.y = Math.random() * height;

}

function recycleStar(star) {

    let direction = 'z';

    let vx = Math.abs(velocity.x),
        vy = Math.abs(velocity.y);

    if (vx > 1 || vy > 1) {
        let axis;

        if (vx > vy) {
            axis = Math.random() < vx / (vx + vy) ? 'h' : 'v';
        } else {
            axis = Math.random() < vy / (vx + vy) ? 'v' : 'h';
        }

        if (axis === 'h') {
            direction = velocity.x > 0 ? 'l' : 'r';
        } else {
            direction = velocity.y > 0 ? 't' : 'b';
        }
    }

    star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

    if (direction === 'z') {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
    } else if (direction === 'l') {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
    } else if (direction === 'r') {
        star.x = width + OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
    } else if (direction === 't') {
        star.x = width * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
    } else if (direction === 'b') {
        star.x = width * Math.random();
        star.y = height + OVERFLOW_THRESHOLD;
    }

}

function resize() {

    scale = window.devicePixelRatio || 1;

    width = window.innerWidth * scale;
    height = window.innerHeight * scale;

    canvas.width = width;
    canvas.height = height;

    stars.forEach(placeStar);

}

function step() {

    context.clearRect(0, 0, width, height);

    update();
    render();

    requestAnimationFrame(step);

}

function update() {

    velocity.tx *= 0.96;
    velocity.ty *= 0.96;

    velocity.x += (velocity.tx - velocity.x) * 0.8;
    velocity.y += (velocity.ty - velocity.y) * 0.8;

    stars.forEach((star) => {

        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;

        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;
        star.z += velocity.z;

        // recycle when out of bounds
        if (star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD) {
            recycleStar(star);
        }

    });

}

function render() {

    stars.forEach((star) => {

        context.beginPath();
        context.lineCap = 'round';
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.strokeStyle = 'rgba(255,255,255,' + (0.5 + 0.5 * Math.random()) + ')';

        context.beginPath();
        context.moveTo(star.x, star.y);

        var tailX = velocity.x * 2,
            tailY = velocity.y * 2;

        // stroke() wont work on an invisible line
        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;

        context.lineTo(star.x + tailX, star.y + tailY);

        context.stroke();

    });

}

function movePointer(x, y) {

    if (typeof pointerX === 'number' && typeof pointerY === 'number') {

        let ox = x - pointerX,
            oy = y - pointerY;

        velocity.tx = velocity.tx + (ox / 8 * scale) * (touchInput ? 1 : -1);
        velocity.ty = velocity.ty + (oy / 8 * scale) * (touchInput ? 1 : -1);

    }

    pointerX = x;
    pointerY = y;

}

function onMouseMove(event) {

    touchInput = false;

    movePointer(event.clientX, event.clientY);

}

function onTouchMove(event) {

    touchInput = true;

    movePointer(event.touches[0].clientX, event.touches[0].clientY, true);

    event.preventDefault();

}

function onMouseLeave() {

    pointerX = null;
    pointerY = null;

}