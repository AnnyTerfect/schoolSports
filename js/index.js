var N1=4,N2=3;
var flag1=true;
var i;
var currentPage=0;
var slideWidth;

//initialize
function init()
{
    $(".slide-show").css("width",1.0/N2*100+"%");
    $(".slide-show").css("padding-bottom",1.0/N2/N2*100+"%");
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

//menu
$("#nav_menu_cont").on("click",function()
{
    if(flag1)
    {
        $("#nav_cont").css("height",(N1+1)*40+"px")
        $("#nav_menu1").css("transform","scale(1.15) rotate(45deg)");
        $("#nav_menu2").css("opacity","0");
        $("#nav_menu3").css("transform","scale(1.15) rotate(-45deg)");
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

//slide
function slideToPage(pageNum)
{
    currentPage=pageNum;
    $("#slide_wrap").css("transform","translateX(-"+pageNum*slideWidth+"px)");
    $(".slide-pagnition-active").removeClass("slide-pagnition-active");
    $("#slide_pagnition"+pageNum).addClass("slide-pagnition-active");
}
var slideTimer=setInterval(function()
{
    slideToPage((currentPage+1)%N2);
},3000);

//pagnition click
for(i=0;i<N2;i++)
{
    let _i=i;
    $("#slide_pagnition"+i).on("click",function()
    {
        slideToPage(_i);
        clearInterval(slideTimer);
        slideTimer=setInterval(function()
        {
            slideToPage((currentPage+1)%N2);
        },3000);
    });
}