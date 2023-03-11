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



    function clickIconWishlist() {
        let heartIcons = document.querySelectorAll("#tab-menu .tab-bar .product-card .icons .heart")


        let productsWishlist = [];

        if (localStorage.getItem("wishlist") != null) {
            productsWishlist = JSON.parse(localStorage.getItem("wishlist"));

        }
        heartIcons.forEach(icon => {

            icon.addEventListener("click", function (e) {

                e.preventDefault();
                let productImage = this.parentNode.parentNode.firstElementChild.firstElementChild.firstElementChild.getAttribute("src")

                let productName = this.parentNode.nextElementSibling.children[1].innerText;

                let productPrice = parseInt(this.parentNode.parentNode.children[3].children[1].children[0].innerText);

                let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));

                let existProduct = productsWishlist.find(m => m.id == productId);


                if (existProduct != undefined) {
                    productsWishlist = productsWishlist.filter(m => m.id != productId);
                    icon.classList.add("fa-regular");
                    icon.classList.remove("fa-solid", "added")
                }
                else {
                    productsWishlist.push({
                        id: productId,
                        img: productImage,
                        name: productName,
                        price: productPrice,


                    })
                    icon.classList.remove("fa-regular");
                    icon.classList.add("fa-solid", "added")


                }

                localStorage.setItem("wishlist", JSON.stringify(productsWishlist));


            })



            if (productsWishlist.find(m => m.id == parseInt(icon.parentNode.parentNode.getAttribute("data-id"))) != undefined) {
                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid", "added");

            } else {

                icon.classList.add("fa-regular");
                icon.classList.remove("fa-solid", "added");
            }
        });


    }

    clickIconWishlist();


    document.addEventListener("click", function (e) {
        if(!!!e.target.closest(".basketicon")){
            if (!$(".chek-card-box").hasClass("d-none")) {
                $(".chek-card-box").addClass("d-none")
            }
        }
    })
    
})