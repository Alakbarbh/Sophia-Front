$(document).ready(function(){
    let usdBtn = $(".item1");
    let eurBtn = $(".item2");

    $(document).on("click",".item1",function(){
        let usdText =$(".item1").children().eq(0).text();
        $(".drop").children().eq(0).text(usdText)
    })

    $(document).on("click",".item2",function(){
        let eurText =$(".item2").children().eq(0).text();
        $(".drop").children().eq(0).text(eurText)
    })


})