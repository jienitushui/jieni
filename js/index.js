/* !function (){ */
/*     var small = document.querySelector('.nav .navba .nav_top .navtop_ad .ad_small'); */
/*     var big = document.querySelector('.nav .navba .nav_top .navtop_ad .ad_big'); */
/*     var adNum = random(1, 4); */
/*     small.setAttribute('src','./img/ads{ adNum }.jpeg') */
/*     big.setAttribute('src','./img/ads{ adNum } - big.jpeg') */
/* }() */

// 轮播
/* (function () { */
/*     var items = document.querySelectorAll('.item') */
/*     for (var i = 0; i < items.length; i++) { */
/*         var item = items[i]; */
/*         item.onmouseover = function () { */
/*             var brotherAndMe = this.parentElement.children; */
/*             for (var k = 0; k < brotherAndMe.length; k++) { */
/*                 brotherAndMe[k].classList.remove('active'); */
/*             } */
/*             this.classList.add('active') */
/*         } */
/*     } */
/* })(); */

// 图轮播
+function () {
    var s_box = document.querySelector('.main .main_content .lb_new .lbnew_fl .x_box')
    var left = document.querySelector('.main .main_content .lb_new .lbnew_fl')

    //  自动轮播下一个的函数
    function autoPaly() {
        var activeObj = document.querySelector('.main .main_content .lb_new .lbnew_fl .x_box a.active')
        var index = parseInt(activeObj.getAttribute('data-id'))
        var next = index == 4 ? 0 : index + 1;
        var image = document.querySelector('.main .main_content .lb_new  .s_box')
        image.style.left = (-608 * next) + 'px'
        var brotherAndMe = activeObj.parentElement.children;
        for (var k = 0; k < brotherAndMe.length; k++) {
            brotherAndMe[k].classList.remove('active');
        }
        brotherAndMe[next].classList.add('active')
    }

    // 代码执行的时候，自动轮播
    var loop = setInterval(autoPaly, 2000)

    s_box.onmouseover = function (e) {
        var obj = e.target;
        var index = parseInt(obj.getAttribute('data-id'))
        var image = document.querySelector('.main .main_content .lb_new  .s_box')
        image.style.left = (-608 * index) + 'px'

        var brotherAndMe = obj.parentElement.children;
        for (var k = 0; k < brotherAndMe.length; k++) {
            brotherAndMe[k].classList.remove('active');
        }
        obj.classList.add('active')
        // 清除定时器
        clearInterval(loop);
    }

    left.onmouseout = function () {
        //鼠标移走轮播图区域后，轮播继续（重启开启定时器）
        loop = setInterval(autoPaly, 2000);
    }

    left.onmouseover = function () {
        //鼠标移入轮播图区域后，自动播放功能清除
        clearInterval(loop)
    }



    /* var loop = setInterval(function () { */
    /*     var activeObj = document.querySelector('.main .main_content .lb_new .lbnew_fl .x_box a.active') */
    /*     var index = parseInt(activeObj.getAttribute('data-id')) */
    /*     var next = index == 4 ? 0 : index + 1; */
    /*     var image = document.querySelector('.main .main_content .lb_new  .s_box') */
    /*     image.style.left = (-608 * next) + 'px' */

    /*     var brotherAndMe = activeObj.parentElement.children; */
    /*     for (var k = 0; k < brotherAndMe.length; k++) { */
    /*         brotherAndMe[k].classList.remove('active'); */
    /*     } */
    /*     brotherAndMe[next].classList.add('active') */
    /* }, 2000); */
}()

    //文字轮播
    - function () {
        var tb_dh = document.querySelector('.main .main_content .lb_new .lbnew_center .cemter_tb .tb_dh')
        tb_dh.onmouseover = function (e) {
            var obj = e.target;
            var index = parseInt(obj.getAttribute('id'))
            var wz = document.querySelector('.main .main_content .lb_new  .lbnew_center .tb_list')
            wz.style.left = (-359 * index) + 'px'
            var brotherAndMe = obj.parentElement.children;
            for (var k = 0; k < brotherAndMe.length; k++) {
                brotherAndMe[k].classList.remove('active');
            }
            obj.classList.add('active')
        }
    }()


/* //生成指定个区间内的整数 */
/* function random(min, max) { */
/*     return Math.floor(Math.random() * (max - min)) +min; */
/* } */