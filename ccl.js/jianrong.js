// < !--跳转代码开始-->

// {/* <script type="text/javascript"> }

var browser = {

    versions: function () {

        var u = navigator.userAgent, app = navigator.appVersion;

        return {//移动终端浏览器版本信息

            trident: u.indexOf('Trident') > -1, //IE内核

            presto: u.indexOf('Presto') > -1, //opera内核

            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核

            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核

            mobile: !!u.match(/AppleWebKit.*Mobile.*/)

                || !!u.match(/AppleWebKit/), //是否为移动终端

            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端

            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器

            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器

            iPad: u.indexOf('iPad') > -1, //是否iPad

            webApp: u.indexOf('Safari') == -1,

            //是否web应该程序，没有头部与底部

            google: u.indexOf('Chrome') > -1

        };

    }(),

    language: (navigator.browserLanguage || navigator.language).toLowerCase()

}

//document.writeln("当前浏览器语言：" + browser.language); // 正式请注释本行

//document.writeln("当前是否为移动设备：" + browser.versions.mobile); // 正式请注释本行



//平台、设备和操作系统

var system = {

    win: false,

    mac: false,

    xll: false,

    ipad: false

};

//检测平台

var p = navigator.platform;

system.win = p.indexOf("Win") == 0;

system.mac = p.indexOf("Mac") == 0;

system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;

//跳转语句，如果是手机访问就自动跳转到" "里的页面

if (system.win || system.mac || system.xll || system.ipad) {

    //跳转至WEB端,如果显示本页,请为空

} else {

    //跳转至移动端

    window.location.href = "手机网页链接地址";



}

{/* <!--跳转代码结束 */ }