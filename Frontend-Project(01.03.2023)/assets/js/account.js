$(document).ready(function(){
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

})