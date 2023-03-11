$(document).ready(function () {
  $(document).on("click", ".item1", function () {
    let usdText = $(".item1").children().eq(0).text();
    $(".drop").children().eq(0).text(usdText)
  })

  $(document).on("click", ".item2", function () {
    let eurText = $(".item2").children().eq(0).text();
    $(".drop").children().eq(0).text(eurText)
  })

  $(document).on("click", "#down-menu .basket", function (e) {
    e.preventDefault()

    $(".chek-card-box").toggleClass("d-none");


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


  let cardBtns = document.querySelectorAll("#tab-menu .tab .tab-bar .cards .product-card .add-btn button");

    let products = [];


    if (localStorage.getItem("basket") != null) {
        products = JSON.parse(localStorage.getItem("basket"));

    }
    cardBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault()
            document.querySelector("#down-menu .chek-card-box .alert").classList.add("d-none")
            document.querySelector("#down-menu .chek-card-box .subtotal").classList.remove("d-none")

            let productImage = this.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.getAttribute("src");
            let productName = this.parentNode.parentNode.children[2].children[1].innerText;
            let productPrice = parseInt(this.parentNode.parentNode.children[3].children[1].children[0].innerText);
            let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));

            let existProduct = products.find(m => m.id == productId);

            if (existProduct != undefined) {
                existProduct.count += 1;
                existProduct.price = productPrice * existProduct.count;
            }
            else {

                products.push({
                    id: productId,
                    img: productImage,
                    name: productName,
                    price: productPrice,
                    count: 1

                })

            }

            localStorage.setItem("basket", JSON.stringify(products));


            getBasketCount();
            chekCard()
            subTotal();
            deleteIcons()

        })
    });







    function getBasketCount() {
        let sum = 0;

        for (const item of products) {

            sum += item.count;
        }

        document.querySelector(".count").innerText = sum;
        document.querySelector(".check-card .count").innerText = sum + " ITEM";

    }

    getBasketCount();


  

    $(document).on("click", "#down-menu .cart", function (e) {
        e.preventDefault()

        $(".chek-card-box").toggleClass("d-none");


    });





    

    function chekCard() {
        let chekCard = document.querySelector("#down-menu .chek-card-item")

        chekCard.innerHTML = "";
        for (const product of products) {
            let nativePrice = product.price / product.count;
            document.querySelector("#down-menu .chek-card-box .alert").classList.add("d-none")
            document.querySelector("#down-menu .chek-card-box .subtotal").classList.remove("d-none")
            chekCard.classList.remove("d-none")

            chekCard.innerHTML += `
        <div class="chek-card-item" data-id = ${product.id}>
            <div class="border"></div>
            <div class="product-detail">
                <div class="text">
                    <p>${product.name}</p>
                    <span>${product.count} x ${nativePrice}</span>
                </div>
                <div class="icon">
                    <i class="fa-solid fa-trash-can delete-icon"></i>
                </div>
            </div>
        </div>
       `
        }

    }


    chekCard()


    

    function subTotal() {
        let sum = 0;
        for (const product of products) {
            sum += product.price;
        }
        document.querySelector(".subtotal span").innerText = `$${sum}.00`;
        document.querySelector("#down-menu .dmenu .basket .basketicon .price p  ").innerText = `$${sum}.00`;
    }

    subTotal();




 

    function deleteFromChekCard(id) {
        products = products.filter(m => m.id != id)

        localStorage.setItem("basket", JSON.stringify(products));
        subTotal();
        getBasketCount()
    }




    function deleteIcons() {
        let deletIcons = document.querySelectorAll("#down-menu .chek-card-box .chek-card-item .icon .delete-icon");
        deletIcons.forEach(deletIcon => {

            deletIcon.addEventListener("click", function () {
                let id = this.parentNode.parentNode.parentNode.getAttribute("data-id")
                deleteFromChekCard(id);
                this.parentNode.parentNode.remove();
               


                if (products.length == 0) {
                    localStorage.removeItem("basket")
                    document.querySelector("#down-menu .chek-card-box .alert").classList.remove("d-none")
                    document.querySelector("#down-menu .chek-card-box .subtotal").classList.add("d-none")
                }

            })
        });
    }

    deleteIcons();


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
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>'
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
     
    ]
  });



  let icon = document.querySelector("#product-details .photo-product .icon")

  $(icon).click(function () {
    $(".modls .open").click()

  })

  $(document).on("click", "#product-details .mat-card", function () {
    let photo = $(this).children().eq(0).attr("src")
    $("#product-details .photo-product img").attr("src", photo)

  })

  $(document).on("click", "#product-details .photo-product .icon", function () {

    let photo = $("#product-details .photo-product img").attr("src")
    $(".modls .modal-body img").attr("src", photo)

  })



  window.addEventListener("click", function (e) {
    if (e.target == document.querySelector(".modal-dialog")) {
      document.querySelector(".modal-dialog").style.display = "none"
    }
  })



  let icon6 = document.querySelector(".product-card1 .icons .two");
  icon6.addEventListener("click", function () {
    document.querySelector(".moddal6").style.display = "block"
    document.querySelector(".modal6").classList.remove("d-none")
    document.querySelector(".moddal6").classList.remove("d-none")
    document.querySelector("#overlay").style.display = "block";
    document.body.style.overflow = "hidden"
  })

  window.addEventListener("click", function (e) {
    if (e.target == document.querySelector(".moddal6")) {
      document.querySelector(".moddal6").classList.add("d-none")
      document.querySelector(".modal6").classList.add("d-none");
      document.querySelector("#overlay").style.display = "none";
      this.document.body.style.overflow = "unset"
    }
  })

  let iconDelete6 = document.querySelector(".modal6 .iconca a i");
  iconDelete6.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".moddal6").classList.add("d-none")
    document.querySelector(".modal6").classList.add("d-none")
    document.querySelector("#overlay").style.display = "none";
    document.body.style.overflow = "unset"
  })





  let icon1 = document.querySelector(".product-card2 .icons .two");
  icon1.addEventListener("click", function () {
    document.querySelector(".moddal6").style.display = "block"
    document.querySelector(".modal6").classList.remove("d-none")
    document.querySelector(".moddal6").classList.remove("d-none")
    document.querySelector("#overlay").style.display = "block";
    document.body.style.overflow = "hidden"
  })

  window.addEventListener("click", function (e) {
    if (e.target == document.querySelector(".moddal6")) {
      document.querySelector(".moddal6").classList.add("d-none")
      document.querySelector(".modal6").classList.add("d-none");
      document.querySelector("#overlay").style.display = "none";
      this.document.body.style.overflow = "unset"
    }
  })

  let iconDelete1 = document.querySelector(".modal6 .iconca a i");
  iconDelete1.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".moddal6").classList.add("d-none")
    document.querySelector(".modal6").classList.add("d-none")
    document.querySelector("#overlay").style.display = "none";
    document.body.style.overflow = "unset"
  })



  let icon2 = document.querySelector(".product-card3 .icons .two");
  icon2.addEventListener("click", function () {
    document.querySelector(".moddal6").style.display = "block"
    document.querySelector(".modal6").classList.remove("d-none")
    document.querySelector(".moddal6").classList.remove("d-none")
    document.querySelector("#overlay").style.display = "block";
    document.body.style.overflow = "hidden"
  })

  window.addEventListener("click", function (e) {
    if (e.target == document.querySelector(".moddal6")) {
      document.querySelector(".moddal6").classList.add("d-none")
      document.querySelector(".modal6").classList.add("d-none");
      document.querySelector("#overlay").style.display = "none";
      this.document.body.style.overflow = "unset"
    }
  })

  let iconDelete2 = document.querySelector(".modal6 .iconca a i");
  iconDelete2.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".moddal6").classList.add("d-none")
    document.querySelector(".modal6").classList.add("d-none")
    document.querySelector("#overlay").style.display = "none";
    document.body.style.overflow = "unset"
  })



  let icon3 = document.querySelector(".product-card4 .icons .two");
  icon3.addEventListener("click", function () {
    document.querySelector(".moddal6").style.display = "block"
    document.querySelector(".modal6").classList.remove("d-none")
    document.querySelector(".moddal6").classList.remove("d-none")
    document.querySelector("#overlay").style.display = "block";
    document.body.style.overflow = "hidden"
  })

  window.addEventListener("click", function (e) {
    if (e.target == document.querySelector(".moddal6")) {
      document.querySelector(".moddal6").classList.add("d-none")
      document.querySelector(".modal6").classList.add("d-none");
      document.querySelector("#overlay").style.display = "none";
      this.document.body.style.overflow = "unset"
    }
  })

  let iconDelete3 = document.querySelector(".modal6 .iconca a i");
  iconDelete3.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".moddal6").classList.add("d-none")
    document.querySelector(".modal6").classList.add("d-none")
    document.querySelector("#overlay").style.display = "none";
    document.body.style.overflow = "unset"
  })





  let icon4 = document.querySelector(".product-card5 .icons .two");
  icon4.addEventListener("click", function () {
    document.querySelector(".moddal6").style.display = "block"
    document.querySelector(".modal6").classList.remove("d-none")
    document.querySelector(".moddal6").classList.remove("d-none")
    document.querySelector("#overlay").style.display = "block";
    document.body.style.overflow = "hidden"
  })

  window.addEventListener("click", function (e) {
    if (e.target == document.querySelector(".moddal6")) {
      document.querySelector(".moddal6").classList.add("d-none")
      document.querySelector(".modal6").classList.add("d-none");
      document.querySelector("#overlay").style.display = "none";
      this.document.body.style.overflow = "unset"
    }
  })

  let iconDelete4 = document.querySelector(".modal6 .iconca a i");
  iconDelete4.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".moddal6").classList.add("d-none")
    document.querySelector(".modal6").classList.add("d-none")
    document.querySelector("#overlay").style.display = "none";
    document.body.style.overflow = "unset"
  })


  let icon7 = document.querySelector(".product-card6 .icons .two");
  icon7.addEventListener("click", function () {
    document.querySelector(".moddal6").style.display = "block"
    document.querySelector(".modal6").classList.remove("d-none")
    document.querySelector(".moddal6").classList.remove("d-none")
    document.querySelector("#overlay").style.display = "block";
    document.body.style.overflow = "hidden"
  })

  window.addEventListener("click", function (e) {
    if (e.target == document.querySelector(".moddal6")) {
      document.querySelector(".moddal6").classList.add("d-none")
      document.querySelector(".modal6").classList.add("d-none");
      document.querySelector("#overlay").style.display = "none";
      this.document.body.style.overflow = "unset"
    }
  })

  let iconDelete7 = document.querySelector(".modal6 .iconca a i");
  iconDelete7.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".moddal6").classList.add("d-none")
    document.querySelector(".modal6").classList.add("d-none")
    document.querySelector("#overlay").style.display = "none";
    document.body.style.overflow = "unset"
  })

  let eyeBtns = document.querySelectorAll(".two")

  for (const eyeBtn of eyeBtns) {
    eyeBtn.addEventListener("click",function(){
      let prodImg = eyeBtn.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.getAttribute("src")
      document.querySelector(".moddal6 .img img").setAttribute("src",prodImg)
      let prodName = eyeBtn.parentNode.nextElementSibling.lastElementChild.innerText;
      document.querySelector(".moddal6 .text1 h2").innerText = prodName;
      let prodPrice = eyeBtn.parentNode.nextElementSibling.nextElementSibling.children[1].firstElementChild.innerText;
      document.querySelector(".moddal6 .text2 p").innerText = prodPrice
    })
  }

  document.addEventListener("click", function (e) {
    if(!!!e.target.closest(".basketicon")){
        if (!$(".chek-card-box").hasClass("d-none")) {
            $(".chek-card-box").addClass("d-none")
        }
    }
})


})