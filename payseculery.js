/*Click-Button-Events*/
document.addEventListener("DOMContentLoaded", function () {
    const cashButton = document.getElementById("cash");
    const creditCardButton = document.getElementById("credit-card");
    const cashInfo = document.getElementById("cash-info");
    const creditCardInfo = document.getElementById("credit-card-info");
    const cardnumber = document.getElementById('cardnumber');
    const expirationdate = document.getElementById('expirationdate');
    const securitycode = document.getElementById('securitycode');
    const generatecard = document.getElementById('generatecard');

    cashButton.addEventListener("click", function () {
        cashInfo.classList.add("active");
        creditCardInfo.classList.remove("active");
    });

    creditCardButton.addEventListener("click", function () {
        cashInfo.classList.remove("active");
        creditCardInfo.classList.add("active");
    });

    const creditCardForm = document.getElementById("credit-card-form");

    creditCardForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const cardNumber = document.getElementById("cardnumber").value;
        const expiryDate = document.getElementById("expirationdate").value;
        const cvv = document.getElementById("securitycode").value;

        if (cardNumber && expiryDate && cvv) {
            console.log("Card Number: ", cardNumber);
            console.log("Expiration Date: ", expiryDate);
            console.log("CVV: ", cvv);

            alert("Your payment has been received!Thank you for choosing us. We look forward to seeing you again.");
        } else {
            alert("Please fill in all required fields.");
        }
    });

    const cashPaymentForm = document.getElementById("cash-payment-form");

    cashPaymentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const fullName = document.getElementById("full-name").value;
        const address = document.getElementById("address").value;
        const doorNo = document.getElementById("door-no").value;

        if (fullName && address && doorNo) {
            console.log("Full Name: ", fullName);
            console.log("Address: ", address);
            console.log("Door Number: ", doorNo);

            alert("Your payment has been received!Thank you for choosing us. We look forward to seeing you again.");
        } else {
            alert("Please fill in all required fields.");
        }
    });

    /*----------------------------------------------------------------------------------*/
    /*Card Information*/
    const name = document.getElementById('name');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            document.getElementById('svgname').innerHTML = 'John Doe';
            document.getElementById('svgnameback').innerHTML = 'John Doe';
        } else {
            document.getElementById('svgname').innerHTML = this.value;
            document.getElementById('svgnameback').innerHTML = this.value;
        }
    });


    cardnumber.addEventListener('input', function () {
        if (cardnumber.value == "") {
            document.getElementById('svgnumber').innerHTML = '0123 4567 8910 1112';
        } else {
            let formattedCardNumber = addSpacesToCardNumber(cardnumber.value);
            document.getElementById('svgnumber').innerHTML = formattedCardNumber;
        }
    });

    function addSpacesToCardNumber(cardNumber) {
        let numericCardNumber = cardNumber.replace(/\D/g, '');
        numericCardNumber = numericCardNumber.substring(0, 16); // Limit the card number to 16 characters
        let formattedCardNumber = numericCardNumber.replace(/(\d{4})/g, '$1 ').trim();
        return formattedCardNumber;
    }

    expirationdate.addEventListener('input', function () {
        if (expirationdate.value.length == 0) {
            document.getElementById('svgexpire').innerHTML = '01/24';
        } else {
            document.getElementById('svgexpire').innerHTML = expirationdate.value;
        }
    });

    securitycode.addEventListener('input', function () {
        if (securitycode.value.length == 0) {
            document.getElementById('svgsecurity').innerHTML = '985';
        } else {
            document.getElementById('svgsecurity').innerHTML = securitycode.value;
        }
    });

    //ON FOCUS EVENT
    name.addEventListener('focus', function () {
        document.querySelector('.creditcard').classList.remove('flipped');
    });

    cardnumber.addEventListener('focus', function () {
        document.querySelector('.creditcard').classList.remove('flipped');
    });

    expirationdate.addEventListener('focus', function () {
        document.querySelector('.creditcard').classList.remove('flipped');
    });

    securitycode.addEventListener('focus', function () {
        document.querySelector('.creditcard').classList.add('flipped');
    });

});

/*KART*/

// CREDIT CARD IMAGE JS
document.querySelector('.preload').classList.remove('preload');
document.querySelector('.creditcard').addEventListener('click', function () {
    if (this.classList.contains('flipped')) {
        this.classList.remove('flipped');
    } else {
        this.classList.add('flipped');
    }
});


//On Focus Events
name.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.remove('flipped');
});

cardnumber.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.remove('flipped');
});

expirationdate.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.remove('flipped');
});

securitycode.addEventListener('focus', function () {
    document.querySelector('.creditcard').classList.add('flipped');
});

//Generate random card number from list of known test numbers
const randomCard = function () {
    let testCards = [
        '4000056655665556',
        '5200828282828210',
        '371449635398431',
        '6011000990139424',
        '30569309025904',
        '3566002020360505',
        '6200000000000005',
        '6759649826438453',
    ];
    let randomNumber = Math.floor(Math.random() * testCards.length);
    cardnumber_mask.unmaskedValue = testCards[randomNumber];
}
generatecard.addEventListener('click', function () {
    randomCard();
});