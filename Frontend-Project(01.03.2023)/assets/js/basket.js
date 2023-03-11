$(document).ready(function(){
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







    $(document).on("click", "#down-menu .basket .basket-icon", function (e) {
        e.preventDefault()

        $(".chek-card-box").toggleClass("d-none");


    });










  


    let tableBody = document.querySelector("#products .basket-products .table tbody");

    let products = JSON.parse(localStorage.getItem("basket"));

    function getBasketDatas() {
        if (products != null) {
            for (const product of products) {
                let nativePrice = product.price / product.count;

                tableBody.innerHTML += `
                    <tr data-id="${product.id}">
                    <td>
                    <img src="${product.img}" alt="">
                    </td>
                    <td>${product.name}</td>
                    <td>$ ${nativePrice}</td>
                    <td>
                        <button class = "minus"><i class="fa-solid fa-minus"></i></button>
                        <input value = "${product.count}" type="text"disabled>
                        <button class = "plus"><i class="fa-solid fa-plus "></i></button>
                    </td>
                    <td class="price"> $ ${nativePrice * product.count}</td>
                    <td><i class="fa-solid fa-x delete-icon"></i></td>
                </tr>`
            }

            getBasketCount();
            showTotalPrice();
            

        } else {

            showAlert()
        }


    }

    getBasketDatas();


  
    function showAlert() {

        document.querySelector(".basket-products .table").classList.add("d-none");
        document.querySelector("#products .show-alert").classList.remove("d-none")

    }


  


    function deleteIdProductFromBasket(id) {
        products = products.filter(m => m.id != id)

        localStorage.setItem("basket", JSON.stringify(products));
        showTotalPrice();
        subTotal();

    }


    function deleteIcon() {
        let deletIcons = document.querySelectorAll("#products .basket-products .table .delete-icon");

        deletIcons.forEach(deletIcon => {

            deletIcon.addEventListener("click", function () {
                let id = parseInt(this.parentNode.parentNode.getAttribute("data-id"))
                let chekCard = document.querySelector("#down-menu .chek-card-item")
                deleteIdProductFromBasket(id);

                this.parentNode.parentNode.remove();
                
                for (const checkCardElement of chekCard.children) {
                    if (checkCardElement.getAttribute("data-id") == id) {
                        checkCardElement.remove();
                        document.querySelector("#down-menu .chek-card-box .alert").classList.remove("d-none")
                        document.querySelector("#down-menu .chek-card-box .subtotal").classList.add("d-none")
                    }
                }

                if (products.length == 0) {
                    localStorage.removeItem("basket")
                    showAlert();
                }
                getBasketCount(products);
                showTotalPrice();

            })
        });
    }

    deleteIcon();

   

    function showTotalPrice() {
        let total = document.querySelector("#products .table tr td:nth-child(5) span");
        let sum = 0;

        for (const product of products) {
            sum += parseInt(product.price)
        }
        total.innerHTML = "Grand total: $" + sum;
    }



    function decreaseProduct() {

        let minusIcons = document.querySelectorAll("tbody tr td  .minus");

        for (const minusIcon of minusIcons) {

            minusIcon.addEventListener("click", function () {

                for (const product of products) {
                    if (product.id == minusIcon.parentNode.parentNode.getAttribute("data-id")) {
                        if (minusIcon.nextElementSibling.value == 1) {
                            return;
                        }
                        else {
                            let nativePrice = parseInt(product.price / product.count)
                            minusIcon.nextElementSibling.value--;

                            product.count--;
                            product.price = nativePrice * product.count

                            minusIcon.parentNode.nextElementSibling.innerText = "$" + (product.price);
                        }

                    }
                }

                localStorage.setItem("basket", JSON.stringify(products))
                showTotalPrice();
                getBasketCount();
                subTotal();
            })

        }
    }
    decreaseProduct();

    function increaseProduct() {
        let plusIcons = document.querySelectorAll("tbody tr td  .plus");

        for (const plusIcon of plusIcons) {
            plusIcon.addEventListener("click", function () {

                for (const product of products) {
                    if (product.id == plusIcon.parentNode.parentNode.getAttribute("data-id")) {
                        let nativePrice = parseInt(product.price / product.count)

                        plusIcon.previousElementSibling.value++;
                        product.count++;
                        product.price = nativePrice * product.count
                        plusIcon.parentNode.nextElementSibling.innerText = "$" + (product.price);
                    }
                }

                localStorage.setItem("basket", JSON.stringify(products))
                showTotalPrice();
                getBasketCount(products);
                subTotal();
            })

        }
    }
    increaseProduct();

    function getBasketCount() {
        let sum = 0;

        for (const item of products) {

            sum += item.count;
        }

        document.querySelector(".count").innerText = sum;
        document.querySelector(".check-card .count").innerText = sum + " ITEM";

    }
    getBasketCount();








    

    function chekCard() {
        let chekCard = document.querySelector("#down-menu .chek-card-item")

        chekCard.innerHTML = "";
        for (const product of products) {
            document.querySelector("#down-menu .chek-card-box .alert").classList.add("d-none")
            document.querySelector("#down-menu .chek-card-box .subtotal").classList.remove("d-none")
            let nativePrice = product.price / product.count;
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
            <div class="border"></div>
        </div>
       `
            deleteIcons();
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
                for (const bodyElement of tableBody.children) {
                    if (bodyElement.getAttribute("data-id") == id) {
                        bodyElement.remove();
                    }
                }
                if (products.length == 0) {
                    localStorage.removeItem("basket")
                    document.querySelector("#down-menu .chek-card-box .alert").classList.remove("d-none")
                    document.querySelector("#down-menu .chek-card-box .subtotal").classList.add("d-none")
                    showAlert();
                }
                getBasketCount(products);
                subTotal();
            
            })
        });
    }

    deleteIcons();


    document.addEventListener("click", function (e) {
        if(!!!e.target.closest(".basketicon")){
            if (!$(".chek-card-box").hasClass("d-none")) {
                $(".chek-card-box").addClass("d-none")
            }
        }
    })
})