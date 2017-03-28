window.onload=function(){
    commonlist();
    $(".re_message_title").click(function(){
        $(this).parent("li").children(".re_message_content").slideToggle();
        $(this).parent("li").siblings("li").children(".re_message_content").hide();
        $(this).parent("li").siblings("li").children(".re_message_title").children("h5").children("img").removeClass("xd_re_img_rotate");
        if($(this).children("h5").children("img").hasClass("xd_re_img_rotate")){
            $(this).children("h5").children("img").removeClass("xd_re_img_rotate");
        }else{
            $(this).children("h5").children("img").addClass("xd_re_img_rotate");
        }
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