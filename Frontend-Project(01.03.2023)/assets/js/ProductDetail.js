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


    const tabLink = document.querySelectorAll(".tab-menu-link");
const tabContent = document.querySelectorAll(".tab-bar-content");

tabLink.forEach((item) => {
  item.addEventListener("click", activeTab);
});

function activeTab(item) {
  const btnTarget = item.currentTarget;
  const content = btnTarget.dataset.content;

  tabContent.forEach((item) => {
    item.classList.remove("is-active");
  });

  tabLink.forEach((item) => {
    item.classList.remove("is-active");
  });

  document.querySelector("#" + content).classList.add("is-active");
  btnTarget.classList.add("is-active");
}




$('.swiper-wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });








$('.cards').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
      


let icon =document.querySelector("#product-details .photo-product .icon")

$(icon).click(function(){
  $(".modls .open").click()

})

$(document).on("click", "#product-details .mat-card", function(){
 let photo= $(this).children().eq(0).attr("src")
  $("#product-details .photo-product img").attr("src",photo)
     
})

$(document).on("click", "#product-details .photo-product .icon", function(){

 let photo = $("#product-details .photo-product img").attr("src")
    $(".modls .modal-body img").attr("src",photo)
      
 })


    

})