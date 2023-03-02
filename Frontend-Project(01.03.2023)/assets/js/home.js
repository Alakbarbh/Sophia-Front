$(document).ready(function(){
    

    $(document).on("click",".item1",function(){
        let usdText =$(".item1").children().eq(0).text();
        $(".drop").children().eq(0).text(usdText)
    })

    $(document).on("click",".item2",function(){
        let eurText =$(".item2").children().eq(0).text();
        $(".drop").children().eq(0).text(eurText)
    })

    
 
    $(document).on("click",".item3",function(){
        let btnText = $(this).html();
        $(".drop1").children().eq(0).html(btnText);
    })

    $(document).on("click",".item4",function(){
        let btnText = $(this).html();
        $(".drop1").children().eq(0).html(btnText);
    })

    $(document).on("click",".item5",function(){
        let btnText = $(this).html();
        $(".drop1").children().eq(0).html(btnText);
    })

    $(document).on("click",".item6",function(){
        let btnText = $(this).html();
        $(".drop1").children().eq(0).html(btnText);
    })

    $(document).on("click",".item7",function(){
        let btnText = $(this).html();
        $(".drop1").children().eq(0).html(btnText);
    })
})