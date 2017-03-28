window.onload = function () {
    commonlist();
    var tab_lis = $(".about_tab_li");
    var tab_content = $(".about_tab_content");
    $(tab_content[0]).siblings('div').hide();
    $.each(tab_lis, function (index, item) {
        $(item).on('click touchstart', function () {
            $(this).children('a').addClass('about_tab_li_active');
            $(this).siblings('li').children('a').removeClass('about_tab_li_active');
            $(tab_content[index]).siblings('div').hide();
            $(tab_content[index]).show();
        })
    });
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

    setprobucturl(tab_btn_arr,'./product.html');
    setprobucturl(mobile_tab_btn_arr,'./product.html');
};
