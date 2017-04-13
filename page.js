/**
 * Created by liuzheng on 2017/4/5.
 */
(function ($) {
    $.fn.page = function (options ) {

    }

    $.fn.Page.defaults = {
        selectors : {
            sections : ".sections",
            section : ".section",
            page : ".pages",
            active : ".active",
        },
        index : 0,		//页面开始的索引
        easing : "ease",		//动画效果
        duration : 500,		//动画执行时间
        loop : false,		//是否循环切换
        pagination : true,		//是否进行分页
        keyboard : true,		//是否触发键盘事件
        direction : "vertical",		//滑动方向vertical,horizontal
        callback : ""		//回调函数
    };
})(jQuery);