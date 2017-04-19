window.onload = function () {
    //设置按钮跳转product页面事件
    //获取配件按钮
    var tab_btn_peij = $('.tab_btn_peij').children('ul').children('li');
    //获取设备按钮
    var tab_btn_sheb = $('.tab_btn_sheb').children('ul').children('li');
    //获取维保按钮
    var tab_btn_weib = $('.tab_btn_weib').children('ul').children('li');
    var tab_btn_arr = [tab_btn_peij,tab_btn_sheb,tab_btn_weib];

    //tab切换mobile
    //获取m端配件按钮
    var m_tab_btn_peij = $(".m_tab_btn_peij").children('li');
    //获取m端设备按钮
    var m_tab_btn_sheb = $(".m_tab_btn_sheb").children('li');
    //获取m端维保按钮
    var m_tab_btn_weib = $(".m_tab_btn_weib").children('li');
    var mobile_tab_btn_arr = [m_tab_btn_peij,m_tab_btn_sheb,m_tab_btn_weib];

    m_tab_btn_peij.on('click', function () {
        $('.m_nav_content').slideUp(300);
    });
    m_tab_btn_sheb.on('click', function () {
        $('.m_nav_content').slideUp(300);
    });
    m_tab_btn_weib.on('click', function () {
        $('.m_nav_content').slideUp(300);
    });
    
    //图片点击加载
    //获取pc端按钮
    var btnLoadImg = $('.xd_pro_List').find('ul').children('li');
    //获取m端按钮
    var m_btnLoadImg = $('.m_nav_content_ul1').find('ul').children('li');
    console.log(btnLoadImg,m_btnLoadImg);

    setprobucturl(tab_btn_arr,btnLoadImg,'../product.html');
    setprobucturl(mobile_tab_btn_arr,m_btnLoadImg,'../product.html');
    commonlist();

    //右侧滚动固定
    var scrollboxw = $(".propelling").width();
    var scrollboxl = $(".propelling").offset().left;
    var scrollboxt = $(".propelling").offset().top;
    console.log(scrollboxt);
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop >= scrollboxt) {
            $('.propelling').addClass('xs_news_left_fixed').css({
                'position': 'fixed',
                'top': 0 + 'px',
                "left": scrollboxl + 'px',
                'width': scrollboxw + 'px'
            })
        } else {
            $('.propelling').removeClass('xs_news_left_fixed').css({
                'position': 'static',
                "margin-top": 0 + 'px'
            });
        }
    });
}

