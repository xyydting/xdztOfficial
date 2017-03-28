
window.onload = function(){
    commonlist();
    //窗口改变重新加载
    $(window).on("resize", function () {
       location.reload();
    });

    //综合行业动态公司新闻样式及锚链接效果
    $('.xs_news_left_List').children('ul').children('li').on('click',function(){
        $(this).parent('ul').find('a').removeClass('active');
        $(this).children('a').addClass('active');
    });
    //右侧新闻列表样式切换
    $(".xd_news_right_t").children('ul').children('li').on('click',function(){
        $(this).parent('ul').find('a').removeClass('active');
        $(this).children('a').addClass('active');
    });
    var tab_right_new = $(".tab_right_new");
    $.each(tab_right_new,function(index,item){
        $(item).on('click',function(){
            $.each($('.tab_right_new_content'),function(index,item){
               $(this).hide();
            });
            $($(".tab_right_new_content")[index]).show();
        })
    });
    //左侧滚动固定
    var scrollh = $('.carousel').height() - 80;
    var scrollboxw = $(".scrollbox").width();
    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();
        if(scrollTop >= scrollh){
            $('.xs_news_left').addClass('xs_news_left_fixed').css({
                'position':'fixed',
                'top':'80px',
                'width':scrollboxw+'px'
            })
        }else{
            $('.xs_news_left').removeClass('xs_news_left_fixed').css('position','static');
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