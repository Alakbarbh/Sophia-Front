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


    


    let inputs = document.querySelectorAll("form .inputs input");

    inputs.forEach(input => {
        input.addEventListener("blur", function () {
            if (this.value == "") {
                this.style.borderBottom = "1px solid red";
                this.nextElementSibling.nextElementSibling.style.color = "red";
                this.parentNode.lastElementChild.style.opacity = "1";
                this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
            }
        })

        input.addEventListener("keyup", function () {
            if (this.value == "") {
                this.style.borderBottom = "1px solid red";
                this.parentNode.lastElementChild.style.opacity = "1";
                this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
            }

            else {
                this.style.borderBottom = "1px solid #949494";
                this.parentNode.lastElementChild.style.opacity = "0";
                this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "#ef6c00");
            }
        })

        input.addEventListener("focus", function () {
            this.nextElementSibling.nextElementSibling.style.color = "#ef6c00";
        })
    })

    let textarea = document.querySelector(" form .textarea textarea");

    textarea.addEventListener("blur", function () {
        if (this.value == "") {
            this.style.borderBottom = "1px solid red";
            this.nextElementSibling.nextElementSibling.style.color = "red";
            this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
        }
    })

    textarea.addEventListener("keyup", function () {
        if (this.value == "") {
            this.style.borderBottom = "1px solid red";
            this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");
        }

        else {
            this.style.borderBottom = "1px solid #949494";
            this.nextElementSibling.style.setProperty("--beforeAndAfterBack", "#ef6c00");
        }
    })

    textarea.addEventListener("focus", function () {
        this.nextElementSibling.nextElementSibling.style.color = "#ef6c00";
    })

    let submit = document.querySelector("form button");

    submit.addEventListener("click", function (event) {
        event.preventDefault();

        let checkValidation = false;
        let countOfEmpty = 0;

        for (const input of inputs) {
            if (input.value == "") {
                input.style.borderBottom = "1px solid red";
                input.nextElementSibling.nextElementSibling.style.color = "red";
                input.parentNode.lastElementChild.style.opacity = "1";
                input.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");

                textarea.style.borderBottom = "1px solid red";
                textarea.nextElementSibling.nextElementSibling.style.color = "red";
                textarea.nextElementSibling.style.setProperty("--beforeAndAfterBack", "red");

                countOfEmpty++;
            }
        }

        if (countOfEmpty == 0) {
            checkValidation = true;
        }

        if (!checkValidation) {
            return;
        }

        window.location.reload();
    })


    document.addEventListener("click", function (e) {
        if(!!!e.target.closest(".basketicon")){
            if (!$(".chek-card-box").hasClass("d-none")) {
                $(".chek-card-box").addClass("d-none")
            }
        }
    })

    
})