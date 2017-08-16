var N=3;
var i;
var currentPage=0;
var slideWidth=$("#slide_cont").width();

//initialize
$("#slide_wrap").css("width",N+"00%");

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
    slideToPage((currentPage+1)%N);
},3000);

//pagnition click
for(i=0;i<N;i++)
{
    let _i=i;
    $("#slide_pagnition"+i).on("click",function()
    {
        slideToPage(_i);
        clearInterval(slideTimer);
        slideTimer=setInterval(function()
        {
            slideToPage((currentPage+1)%N);
        },3000);
    });
}