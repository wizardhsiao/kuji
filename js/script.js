new WOW().init(); //wow js效果啟動
//------------------------------------home按鈕
$(".homeAbout , .RWD-homeAbout").click(function(){
    window.location.href='Cube_ContendA.html';
});
$(".homeBarrask , .RWD-homeBarrask").click(function(){
    window.location.href='Cube_ContendB.html';
});
$(".homeBattle , .RWD-homeBattle").click(function(){
    window.location.href='Cube_ContendC.html';
});
$(".googlestore").click(function(){
    window.open('https://play.google.com/store?hl=zh-TW');
});
$(".googleplay").click(function(){
    window.open('https://play.google.com/store?hl=zh-TW');
});
$(".applestore").click(function(){
    window.open('https://www.apple.com/tw/ios/app-store/');
});
$(".fbicon").click(function(){
    window.open('https://www.facebook.com/Cube.Contend/');
});
$(".igicon").click(function(){
    window.open('https://www.instagram.com/?hl=zh-tw');
});
//home按鈕 end
//------------------------------------menu按鈕
$(".menuHome_s").click(function(){
    window.location.href='index.html';
});
$(".menuAbout_s").click(function(){
    window.location.href='Cube_ContendA.html';
});
$(".menuBarrask_s").click(function(){
    window.location.href='Cube_ContendB.html';
});
$(".menuBattle_s").click(function(){
    window.location.href='Cube_ContendC.html';
});//menu按鈕 end
//------------------------------------pageTop按鈕
$(".pageTop, #pageTop").click(function () {
    $("html, body").animate({scrollTop:0});
}); //pageTop按鈕 end
