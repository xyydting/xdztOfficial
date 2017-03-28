window.onload=function(){
    commonlist();
    $('#myCarousel').carousel({
        //设置自动播放秒
        interval : 5000,
    });
    //    移动端手势
    var startX = 0;
    var moveX =0;
    var distanceX = 0;
    var isMove = false;
    $('.carousel-inner').on('touchstart',function(e){
        startX = e.originalEvent.touches[0].clientX;
    });
    $('.carousel-inner').on('touchmove',function(e){
        moveX = e.originalEvent.touches[0].clientX;
        distanceX = moveX-startX;
        isMove = true;
    });
    $('.carousel-inner').on('touchend',function(e){
        if( Math.abs(distanceX) > 50 && isMove){
            if(distanceX > 0){
                $('.carousel').carousel('prev');
            }else{
                $('.carousel').carousel('next');
            }
        }
        startX = 0;
        moveX =0;
        distanceX = 0;
        isMove = false;
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
    setprobucturl(tab_btn_arr,'./html/product.html');
    setprobucturl(mobile_tab_btn_arr,'./html/product.html');
};