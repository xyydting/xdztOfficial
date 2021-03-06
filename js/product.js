﻿window.onload = function () {
    commonlist();
    //tab切换
    //获取配件内容盒子
    var tab_content_peij = $(".tab_content_peij");
    //获取设备内容盒子
    var tab_content_sheb = $(".tab_content_sheb");
    //获取维保内容盒子
    var tab_content_weib = $(".tab_content_weib");
    var tab_content_arr = [tab_content_peij, tab_content_sheb, tab_content_weib];

    //获取配件按钮
    var tab_btn_peij = $('.tab_btn_peij').children('ul').children('li');
    //获取设备按钮
    var tab_btn_sheb = $('.tab_btn_sheb').children('ul').children('li');
    //获取维保按钮
    var tab_btn_weib = $('.tab_btn_weib').children('ul').children('li');
    var tab_btn_arr = [tab_btn_peij, tab_btn_sheb, tab_btn_weib];
    tabfun(tab_btn_arr, tab_content_arr);

    //tab切换mobile
    //获取m端配件按钮
    var m_tab_btn_peij = $(".m_tab_btn_peij").children('li');
    //获取m端设备按钮
    var m_tab_btn_sheb = $(".m_tab_btn_sheb").children('li');
    //获取m端维保按钮
    var m_tab_btn_weib = $(".m_tab_btn_weib").children('li');
    m_tab_btn_peij.on('click', function () {
        $('.m_nav_content').slideUp(300);
    });
    m_tab_btn_sheb.on('click', function () {
        $('.m_nav_content').slideUp(300);
    });
    m_tab_btn_weib.on('click', function () {
        $('.m_nav_content').slideUp(300);
    });

    var mobile_tab_btn_arr = [m_tab_btn_peij, m_tab_btn_sheb, m_tab_btn_weib];
    tabfun(mobile_tab_btn_arr, tab_content_arr);

    //设置其他页面跳转过来对应的tab内容
    var num = getUrlParam('num');
    var index = getUrlParam('index');
    var imgboxIndex = getUrlParam('imgboxIndex');
    if (num === null) {
        console.log(0);
        tab_location(0, 0, tab_content_arr);
        tabLoadImg(0);
    } else {
        tab_location(num, index, tab_content_arr);
        tabLoadImg(imgboxIndex);
        console.log(imgboxIndex);
    }
    // console.log(num);

    ////    手机端的点击产品切换信息
    //    $(".xd_pr_con_content").on("click",function(){
    //        $(".xd_pr_con_introduce").slideToggle(".xd_pr_con_introduce2");
    //    });
    // slideToggle(function(){
    //        $(".xd_pr_con_introduce").addClass(".xd_pr_con_introduce2");
    //    });、

    //给导航的tab加点击事件
    $('.xd_pro_List').find('ul').children('li').each(function (index, exm) {
        // console.log($(this));
        $(this).on('click', function () {
            tabLoadImg(index);
        });
    });
    $('.m_nav_content_ul1').find('ul').children('li').each(function (index, exm) {
        // console.log($(this));
        $(this).on('click', function () {
            tabLoadImg(index);
        });
    });
};

var tabfun = function (btnObjsArr, contentObjsArr) {
    $.each(btnObjsArr, function (num, btnObjs) {
        $.each(btnObjs, function (index, item) {
            $(item).on('click', function () {
                // console.log(item);
                $.each(contentObjsArr, function (connum, content) {
                    content.hide();
                    if (connum == num) {
                        $(content[index]).show();
                    }
                })
            })
        })
    })
};


//点击tab加载相应的图片
var tabLoadImg = function (index) {
    console.log($('.xd_pr_content').children('div'));
    var imgbox = $('.xd_pr_content').children('div');
    $(imgbox[index]).find('img').each(function (i, item) {
        var srcstr = $(item).attr('data-src');
        $(item).attr('src', srcstr);
        console.log(item);
    })
}
