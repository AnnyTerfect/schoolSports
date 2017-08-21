var N1=4,N2=3;
var flag1=true;
var i;
var currentPage=0;
var slideWidth;

//initialize
function init()
{
    $(".slide-show").css("width",1.0/N2*100+"%");
    $(".slide-show").css("padding-bottom",1.0/N2/2*100+"%");
    slideWidth=$("#slide_cont").width();
    $("#slide_wrap").css("width",N2+"00%");
}
$(window).on("load",function()
{
    init();
});
$(window).on("resize",function()
{
    slideWidth=$("#slide_cont").width();
})

//menu click
$("#nav_menu_cont").on("click",function()
{
    if(flag1)
    {
        $("#nav_cont").css("height",(N1+1)*40+"px")
        $("#nav_menu1").css("transform","scale(1.07) rotate(45deg)");
        $("#nav_menu2").css("opacity","0");
        $("#nav_menu3").css("transform","scale(1.07) rotate(-45deg)");
        var navBlock=document.getElementsByClassName("nav-block");
        var i;
        for(i=0;i<navBlock.length;i++)
        {
            navBlock[i].style.transition="0s";
            navBlock[i].style.marginLeft=(i+1)*20+"px";
            navBlock[i].style.opacity=0;
            let _i=i;
            setTimeout(function()
            {
                navBlock[_i].style.transition=_i*200+"ms";
                navBlock[_i].style.marginLeft=0;
                navBlock[_i].style.opacity=1;
            }
            ,i*100);
        }
    }
    else
    {
        $("#nav_cont").css("height","40px")
        $("#nav_menu1").css("transform","");
        $("#nav_menu2").css("opacity","1");
        $("#nav_menu3").css("transform","");
    }
    flag1=!flag1;
});

//swiper load
var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay:3000,
        pagination: '.swiper-pagination',
        paginationClickable:true,
		});

//nav click
var navBlock=document.getElementsByClassName("nav-block");
$(navBlock[1]).on("click",function()
{
    location.href="index.html";
});
$(navBlock[2]).on("click",function()
{
    location.href="school.html";
});
$(navBlock[3]).on("click",function()
{
    location.href="sport.html";
});
$(navBlock[4]).on("click",function()
{
    location.href="standard.html";
});