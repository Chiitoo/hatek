$(document).ready(function()
{
    $("#logoLeft img").hover
    (function()
    {
        setTimeout(() =>
        { 
            $("#logoMiddle").css("transform", "translate(0px, 2000px) rotate(3000deg)")
            $("#logoMiddle").css("transition", "2s")
        }, 500)
    },
    function()
    {
        $("#logoMiddle").css("transform", "translate(0px) rotate(0deg)")
        $("#logoMiddle").css("transition", "2s")
    })
})
