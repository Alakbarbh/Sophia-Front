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






    //tab-menu //Tabs Action


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





    //tab-menu slider
    $('.cards').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
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








    //modal


    let icons = document.querySelectorAll(".tab-bar .cards .product-card .icons .eye-icon");

    let cards = document.querySelectorAll(".tab-bar .cards .product-card");

    let modal = document.querySelector(".tab-bar .moddal .modall");

    for (const card of cards) {
        for (const icon of icons) {
            icon.addEventListener("click", function () {

                document.querySelector(".moddal").style.display = "block"
                document.querySelector(".modall").classList.remove("d-none")
                document.querySelector(".moddal").classList.remove("d-none")
                document.querySelector("#overlay").style.display = "block";
                document.body.style.overflow = "hidden"

                let prodImg = icon.parentNode.previousElementSibling.firstElementChild.firstElementChild.getAttribute("src");

                let prodName = icon.parentNode.nextElementSibling.lastElementChild.innerText;
                let prodPrice = icon.parentNode.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.innerText;
                modal.querySelector(".img img").setAttribute("src", prodImg);
                modal.querySelector(".text1 h2").innerText = prodName;
                modal.querySelector(".texts .price1 del").innerText = prodPrice * 2;
                modal.querySelector(".text2 p").innerText = "$" + prodPrice;

            })
        }

    }



    window.addEventListener("click", function (e) {
        if (e.target == document.querySelector(".moddal")) {
            document.querySelector(".moddal").classList.add("d-none")
            document.querySelector(".modall").classList.add("d-none");
            document.querySelector("#overlay").style.display = "none";
            this.document.body.style.overflow = "unset"
        }
    })


    let iconDelete = document.querySelector(".modall .iconca a i");
    iconDelete.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".moddal").classList.add("d-none")
        document.querySelector(".modall").classList.add("d-none")
        document.querySelector("#overlay").style.display = "none";
        document.body.style.overflow = "unset"
    })



    // let icon1 = document.querySelector(".card1 .icon1 .two");
    // icon1.addEventListener("click", function () {
    //     document.querySelector(".moddal1").style.display="block"
    //     document.querySelector(".modal1").classList.remove("d-none")
    //     document.querySelector(".moddal1").classList.remove("d-none")
    //     document.querySelector("#overlay").style.display="block";
    //     document.body.style.overflow="hidden"
    // })


    // window.addEventListener("click",function(e){
    //     if(e.target == document.querySelector(".moddal1")){
    //         document.querySelector(".moddal1").classList.add("d-none")
    //         document.querySelector(".modal1").classList.add("d-none");
    //         document.querySelector("#overlay").style.display="none";
    //         this.document.body.style.overflow = "unset"
    //     }
    // })
    

    // let iconDelete1 = document.querySelector(".modal1 .iconca a i");
    // iconDelete1.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     document.querySelector(".moddal1").classList.add("d-none")
    //     document.querySelector(".modal1").classList.add("d-none")
    //     document.querySelector("#overlay").style.display="none";
    //     document.body.style.overflow = "unset"
    // })







    // let icon2 = document.querySelector(".card2 .icon1 .two");

    // icon2.addEventListener("click", function () {
    //     document.querySelector(".moddal2").style.display="block"
    //     document.querySelector(".modal2").classList.remove("d-none")
    //     document.querySelector(".moddal2").classList.remove("d-none")
    //     document.querySelector("#overlay").style.display="block";
    //     document.body.style.overflow="hidden"
    // })

    // window.addEventListener("click",function(e){
    //     if(e.target == document.querySelector(".moddal2")){
    //         document.querySelector(".moddal2").classList.add("d-none")
    //         document.querySelector(".modal2").classList.add("d-none");
    //         document.querySelector("#overlay").style.display="none";
    //         this.document.body.style.overflow = "unset"
    //     }
    // })
    

    // let iconDelete2 = document.querySelector(".modal2 .iconca a i");
    // iconDelete2.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     document.querySelector(".moddal2").classList.add("d-none")
    //     document.querySelector("#overlay").style.display="none";
    //     document.body.style.overflow = "unset"
    // })







    // let icon3 = document.querySelector(".card3 .icon1 .two");
    // icon3.addEventListener("click", function () {
    //     document.querySelector(".moddal3").style.display="block"
    //     document.querySelector(".modal3").classList.remove("d-none")
    //     document.querySelector(".moddal3").classList.remove("d-none")
    //     document.querySelector("#overlay").style.display="block";
    //     document.body.style.overflow="hidden"
    // })

    // window.addEventListener("click",function(e){
    //     if(e.target == document.querySelector(".moddal3")){
    //         document.querySelector(".moddal3").classList.add("d-none")
    //         document.querySelector(".modal3").classList.add("d-none");
    //         document.querySelector("#overlay").style.display="none";
    //         this.document.body.style.overflow = "unset"
    //     }
    // })
    

    // let iconDelete3 = document.querySelector(".modal3 .iconca a i");
    // iconDelete3.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     document.querySelector(".moddal3").classList.add("d-none")
    //     document.querySelector(".modal3").classList.add("d-none")
    //     document.querySelector("#overlay").style.display="none";
    //     document.body.style.overflow = "unset"
    // })







    // let icon4 = document.querySelector(".card4 .icon1 .two");
    // icon4.addEventListener("click", function () {
    //     document.querySelector(".moddal4").style.display="block"
    //     document.querySelector(".modal4").classList.remove("d-none")
    //     document.querySelector(".moddal4").classList.remove("d-none")
    //     document.querySelector("#overlay").style.display="block";
    //     document.body.style.overflow="hidden"
    // })

    // window.addEventListener("click",function(e){
    //     if(e.target == document.querySelector(".moddal4")){
    //         document.querySelector(".moddal4").classList.add("d-none")
    //         document.querySelector(".modal4").classList.add("d-none");
    //         document.querySelector("#overlay").style.display="none";
    //         this.document.body.style.overflow = "unset"
    //     }
    // })

    // let iconDelete4 = document.querySelector(".modal4 .iconca a i");
    // iconDelete4.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     document.querySelector(".moddal4").classList.add("d-none")
    //     document.querySelector(".modal4").classList.add("d-none")
    //     document.querySelector("#overlay").style.display="none";
    //     document.body.style.overflow = "unset"
    // })






    // let icon5 = document.querySelector(".card5 .icon1 .two");
    // icon5.addEventListener("click", function () {
    //     document.querySelector(".moddal5").style.display="block"
    //     document.querySelector(".modal5").classList.remove("d-none")
    //     document.querySelector(".moddal5").classList.remove("d-none")
    //     document.querySelector("#overlay").style.display="block";
    //     document.body.style.overflow="hidden"
    // })

    // window.addEventListener("click",function(e){
    //     if(e.target == document.querySelector(".moddal5")){
    //         document.querySelector(".moddal5").classList.add("d-none")
    //         document.querySelector(".modal5").classList.add("d-none");
    //         document.querySelector("#overlay").style.display="none";
    //         this.document.body.style.overflow = "unset"
    //     }
    // })


    // let iconDelete5 = document.querySelector(".modal5 .iconca a i");
    // iconDelete5.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     document.querySelector(".moddal5").classList.add("d-none")
    //     document.querySelector(".modal5").classList.add("d-none")
    //     document.querySelector("#overlay").style.display="none";
    //     document.body.style.overflow = "unset"
    // })





    // let icon6 = document.querySelector(".card6 .icon1 .two");
    // icon6.addEventListener("click", function () {
    //     document.querySelector(".moddal6").style.display="block"
    //     document.querySelector(".modal6").classList.remove("d-none")
    //     document.querySelector(".moddal6").classList.remove("d-none")
    //     document.querySelector("#overlay").style.display="block";
    //     document.body.style.overflow="hidden"
    // })

    // window.addEventListener("click",function(e){
    //     if(e.target == document.querySelector(".moddal6")){
    //         document.querySelector(".moddal6").classList.add("d-none")
    //         document.querySelector(".modal6").classList.add("d-none");
    //         document.querySelector("#overlay").style.display="none";
    //         this.document.body.style.overflow = "unset"
    //     }
    // })

    // let iconDelete6 = document.querySelector(".modal6 .iconca a i");
    // iconDelete6.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     document.querySelector(".moddal6").classList.add("d-none")
    //     document.querySelector(".modal6").classList.add("d-none")
    //     document.querySelector("#overlay").style.display="none";
    //     document.body.style.overflow = "unset"
    // })





    // let icon7 = document.querySelector(".card7 .icon1 .two");
    // icon7.addEventListener("click", function () {
    //     document.querySelector(".moddal7").style.display="block"
    //     document.querySelector(".modal7").classList.remove("d-none")
    //     document.querySelector(".moddal7").classList.remove("d-none")
    //     document.querySelector("#overlay").style.display="block";
    //     document.body.style.overflow="hidden"
    // })

    // window.addEventListener("click",function(e){
    //     if(e.target == document.querySelector(".moddal7")){
    //         document.querySelector(".moddal7").classList.add("d-none")
    //         document.querySelector(".modal7").classList.add("d-none");
    //         document.querySelector("#overlay").style.display="none";
    //         this.document.body.style.overflow = "unset"
    //     }
    // })

    // let iconDelete7 = document.querySelector(".modal7 .iconca a i");
    // iconDelete7.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     document.querySelector(".moddal7").classList.add("d-none")
    //     document.querySelector(".modal7").classList.add("d-none")
    //     document.querySelector("#overlay").style.display="none";
    //     document.body.style.overflow = "unset"
    // })





    // let icon8 = document.querySelector(".card8 .icon1 .two");
    // icon8.addEventListener("click", function () {
    //     document.querySelector(".moddal8").style.display="block"
    //     document.querySelector(".modal8").classList.remove("d-none")
    //     document.querySelector(".moddal8").classList.remove("d-none")
    //     document.querySelector("#overlay").style.display="block";
    //     document.body.style.overflow="hidden"
    // })

    // window.addEventListener("click",function(e){
    //     if(e.target == document.querySelector(".moddal8")){
    //         document.querySelector(".moddal8").classList.add("d-none")
    //         document.querySelector(".modal8").classList.add("d-none");
    //         document.querySelector("#overlay").style.display="none";
    //         this.document.body.style.overflow = "unset"
    //     }
    // })

    // let iconDelete8 = document.querySelector(".modal8 .iconca a i");
    // iconDelete8.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     document.querySelector(".moddal8").classList.add("d-none")
    //     document.querySelector(".modal8").classList.add("d-none")
    //     document.querySelector("#overlay").style.display="none";
    //     document.body.style.overflow = "unset"
    // })







    //basket





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


    //basket icon 

    $(document).on("click", "#down-menu .cart", function (e) {
        e.preventDefault()

        $(".chek-card-box").toggleClass("d-none");


    });





    //Check-card

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


    //checkCard totalcheck

    function subTotal() {
        let sum = 0;
        for (const product of products) {
            sum += product.price;
        }
        document.querySelector(".subtotal span").innerText = `$${sum}.00`;
        document.querySelector("#down-menu .dmenu .basket .basketicon .price p  ").innerText = `$${sum}.00`;
    }

    subTotal();




    //delete from check card

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
                // this.parentNode.parentNode.previousElementSibling.classList.add("d-none");
                // document.querySelector(".border").classList.add("d-none");


                if (products.length == 0) {
                    localStorage.removeItem("basket")
                    document.querySelector("#down-menu .chek-card-box .alert").classList.remove("d-none")
                    document.querySelector("#down-menu .chek-card-box .subtotal").classList.add("d-none")
                }

            })
        });
    }

    deleteIcons();

    
})