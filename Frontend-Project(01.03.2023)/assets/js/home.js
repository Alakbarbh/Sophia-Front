$(document).ready(function () {


    $(document).on("click", ".item1", function () {
        let usdText = $(".item1").children().eq(0).text();
        $(".drop").children().eq(0).text(usdText)
    })

    $(document).on("click", ".item2", function () {
        let eurText = $(".item2").children().eq(0).text();
        $(".drop").children().eq(0).text(eurText)
    })

    $(document).on("click", "#down-menu .basketicon", function (e) {
        e.preventDefault()
        $(".spCard-dropdown").toggleClass("d-none");
    });

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });





    $(document).on("click", ".item3", function () {
        let btnText = $(this).html();
        $(".drop1").children().eq(0).html(btnText);
    })

    $(document).on("click", ".item4", function () {
        let btnText = $(this).html();
        $(".drop1").children().eq(0).html(btnText);
    })

    $(document).on("click", ".item5", function () {
        let btnText = $(this).html();
        $(".drop1").children().eq(0).html(btnText);
    })

    $(document).on("click", ".item6", function () {
        let btnText = $(this).html();
        $(".drop1").children().eq(0).html(btnText);
    })

    $(document).on("click", ".item7", function () {
        let btnText = $(this).html();
        $(".drop1").children().eq(0).html(btnText);
    })




    






    let icon1 = document.querySelector(".card1 .icon1 .two");
    icon1.addEventListener("click", function () {
        document.querySelector(".moddal1").style.display="block"
        document.querySelector(".modal1").classList.remove("d-none")
        document.querySelector(".moddal1").classList.remove("d-none")
        document.querySelector("#overlay").style.display="block";
        document.body.style.overflow="hidden"
    })


    window.addEventListener("click",function(e){
        if(e.target == document.querySelector(".moddal1")){
            document.querySelector(".moddal1").classList.add("d-none")
            document.querySelector(".modal1").classList.add("d-none");
            document.querySelector("#overlay").style.display="none";
            this.document.body.style.overflow = "unset"
        }
    })
    

    let iconDelete1 = document.querySelector(".modal1 .iconca a i");
    iconDelete1.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".moddal1").classList.add("d-none")
        document.querySelector(".modal1").classList.add("d-none")
        document.querySelector("#overlay").style.display="none";
        document.body.style.overflow = "unset"
    })







    let icon2 = document.querySelector(".card2 .icon1 .two");

    icon2.addEventListener("click", function () {
        document.querySelector(".moddal2").style.display="block"
        document.querySelector(".modal2").classList.remove("d-none")
        document.querySelector(".moddal2").classList.remove("d-none")
        document.querySelector("#overlay").style.display="block";
        document.body.style.overflow="hidden"
    })

    window.addEventListener("click",function(e){
        if(e.target == document.querySelector(".moddal2")){
            document.querySelector(".moddal2").classList.add("d-none")
            document.querySelector(".modal2").classList.add("d-none");
            document.querySelector("#overlay").style.display="none";
            this.document.body.style.overflow = "unset"
        }
    })
    

    let iconDelete2 = document.querySelector(".modal2 .iconca a i");
    iconDelete2.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".moddal2").classList.add("d-none")
        document.querySelector("#overlay").style.display="none";
        document.body.style.overflow = "unset"
    })







    let icon3 = document.querySelector(".card3 .icon1 .two");
    icon3.addEventListener("click", function () {
        document.querySelector(".moddal3").style.display="block"
        document.querySelector(".modal3").classList.remove("d-none")
        document.querySelector(".moddal3").classList.remove("d-none")
        document.querySelector("#overlay").style.display="block";
        document.body.style.overflow="hidden"
    })

    window.addEventListener("click",function(e){
        if(e.target == document.querySelector(".moddal3")){
            document.querySelector(".moddal3").classList.add("d-none")
            document.querySelector(".modal3").classList.add("d-none");
            document.querySelector("#overlay").style.display="none";
            this.document.body.style.overflow = "unset"
        }
    })
    

    let iconDelete3 = document.querySelector(".modal3 .iconca a i");
    iconDelete3.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".moddal3").classList.add("d-none")
        document.querySelector(".modal3").classList.add("d-none")
        document.querySelector("#overlay").style.display="none";
        document.body.style.overflow = "unset"
    })







    let icon4 = document.querySelector(".card4 .icon1 .two");
    icon4.addEventListener("click", function () {
        document.querySelector(".moddal4").style.display="block"
        document.querySelector(".modal4").classList.remove("d-none")
        document.querySelector(".moddal4").classList.remove("d-none")
        document.querySelector("#overlay").style.display="block";
        document.body.style.overflow="hidden"
    })

    window.addEventListener("click",function(e){
        if(e.target == document.querySelector(".moddal4")){
            document.querySelector(".moddal4").classList.add("d-none")
            document.querySelector(".modal4").classList.add("d-none");
            document.querySelector("#overlay").style.display="none";
            this.document.body.style.overflow = "unset"
        }
    })

    let iconDelete4 = document.querySelector(".modal4 .iconca a i");
    iconDelete4.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".moddal4").classList.add("d-none")
        document.querySelector(".modal4").classList.add("d-none")
        document.querySelector("#overlay").style.display="none";
        document.body.style.overflow = "unset"
    })






    let icon5 = document.querySelector(".card5 .icon1 .two");
    icon5.addEventListener("click", function () {
        document.querySelector(".moddal5").style.display="block"
        document.querySelector(".modal5").classList.remove("d-none")
        document.querySelector(".moddal5").classList.remove("d-none")
        document.querySelector("#overlay").style.display="block";
        document.body.style.overflow="hidden"
    })

    window.addEventListener("click",function(e){
        if(e.target == document.querySelector(".moddal5")){
            document.querySelector(".moddal5").classList.add("d-none")
            document.querySelector(".modal5").classList.add("d-none");
            document.querySelector("#overlay").style.display="none";
            this.document.body.style.overflow = "unset"
        }
    })


    let iconDelete5 = document.querySelector(".modal5 .iconca a i");
    iconDelete5.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".moddal5").classList.add("d-none")
        document.querySelector(".modal5").classList.add("d-none")
        document.querySelector("#overlay").style.display="none";
        document.body.style.overflow = "unset"
    })





    let icon6 = document.querySelector(".card6 .icon1 .two");
    icon6.addEventListener("click", function () {
        document.querySelector(".moddal6").style.display="block"
        document.querySelector(".modal6").classList.remove("d-none")
        document.querySelector(".moddal6").classList.remove("d-none")
        document.querySelector("#overlay").style.display="block";
        document.body.style.overflow="hidden"
    })

    window.addEventListener("click",function(e){
        if(e.target == document.querySelector(".moddal6")){
            document.querySelector(".moddal6").classList.add("d-none")
            document.querySelector(".modal6").classList.add("d-none");
            document.querySelector("#overlay").style.display="none";
            this.document.body.style.overflow = "unset"
        }
    })

    let iconDelete6 = document.querySelector(".modal6 .iconca a i");
    iconDelete6.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".moddal6").classList.add("d-none")
        document.querySelector(".modal6").classList.add("d-none")
        document.querySelector("#overlay").style.display="none";
        document.body.style.overflow = "unset"
    })





    let icon7 = document.querySelector(".card7 .icon1 .two");
    icon7.addEventListener("click", function () {
        document.querySelector(".moddal7").style.display="block"
        document.querySelector(".modal7").classList.remove("d-none")
        document.querySelector(".moddal7").classList.remove("d-none")
        document.querySelector("#overlay").style.display="block";
        document.body.style.overflow="hidden"
    })

    window.addEventListener("click",function(e){
        if(e.target == document.querySelector(".moddal7")){
            document.querySelector(".moddal7").classList.add("d-none")
            document.querySelector(".modal7").classList.add("d-none");
            document.querySelector("#overlay").style.display="none";
            this.document.body.style.overflow = "unset"
        }
    })

    let iconDelete7 = document.querySelector(".modal7 .iconca a i");
    iconDelete7.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".moddal7").classList.add("d-none")
        document.querySelector(".modal7").classList.add("d-none")
        document.querySelector("#overlay").style.display="none";
        document.body.style.overflow = "unset"
    })





    let icon8 = document.querySelector(".card8 .icon1 .two");
    icon8.addEventListener("click", function () {
        document.querySelector(".moddal8").style.display="block"
        document.querySelector(".modal8").classList.remove("d-none")
        document.querySelector(".moddal8").classList.remove("d-none")
        document.querySelector("#overlay").style.display="block";
        document.body.style.overflow="hidden"
    })

    window.addEventListener("click",function(e){
        if(e.target == document.querySelector(".moddal8")){
            document.querySelector(".moddal8").classList.add("d-none")
            document.querySelector(".modal8").classList.add("d-none");
            document.querySelector("#overlay").style.display="none";
            this.document.body.style.overflow = "unset"
        }
    })

    let iconDelete8 = document.querySelector(".modal8 .iconca a i");
    iconDelete8.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".moddal8").classList.add("d-none")
        document.querySelector(".modal8").classList.add("d-none")
        document.querySelector("#overlay").style.display="none";
        document.body.style.overflow = "unset"
    })


    
})