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




    let icon8 = document.querySelector(".card8 .icon1 .two");
    icon8.addEventListener("click", function () {
        document.querySelector(".modal8").classList.remove("d-none")
    })

    let iconDelete8 = document.querySelector(".modal8 .iconca a i");
    iconDelete8.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".modal8").classList.add("d-none")
    })




    let icon1 = document.querySelector(".card1 .icon1 .two");
    icon1.addEventListener("click", function () {
        document.querySelector(".modal1").classList.remove("d-none")
    })

    let iconDelete1 = document.querySelector(".modal1 .iconca a i");
    iconDelete1.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".modal1").classList.add("d-none")
    })




    let icon2 = document.querySelector(".card2 .icon1 .two");

    icon2.addEventListener("click", function () {
        document.querySelector(".modal2").classList.remove("d-none")
        
    })


    



    let iconDelete2 = document.querySelector(".modal2 .iconca a i");
    iconDelete2.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".modal2").classList.add("d-none")
    })


    let icon3 = document.querySelector(".card3 .icon1 .two");
    icon3.addEventListener("click", function () {
        document.querySelector(".modal3").classList.remove("d-none")
    })

    let iconDelete3 = document.querySelector(".modal3 .iconca a i");
    iconDelete3.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".modal3").classList.add("d-none")
    })





    let icon4 = document.querySelector(".card4 .icon1 .two");
    icon4.addEventListener("click", function () {
        document.querySelector(".modal4").classList.remove("d-none")
    })

    let iconDelete4 = document.querySelector(".modal4 .iconca a i");
    iconDelete4.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".modal4").classList.add("d-none")
    })



    let icon5 = document.querySelector(".card5 .icon1 .two");
    icon5.addEventListener("click", function () {
        document.querySelector(".modal5").classList.remove("d-none")
    })

    let iconDelete5 = document.querySelector(".modal5 .iconca a i");
    iconDelete5.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".modal5").classList.add("d-none")
    })



    let icon6 = document.querySelector(".card6 .icon1 .two");
    icon6.addEventListener("click", function () {
        document.querySelector(".modal6").classList.remove("d-none")
    })

    let iconDelete6 = document.querySelector(".modal6 .iconca a i");
    iconDelete6.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".modal6").classList.add("d-none")
    })


    let icon7 = document.querySelector(".card7 .icon1 .two");
    icon7.addEventListener("click", function () {
        document.querySelector(".modal7").classList.remove("d-none")
    })

    let iconDelete7 = document.querySelector(".modal7 .iconca a i");
    iconDelete7.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".modal7").classList.add("d-none")
    })
})