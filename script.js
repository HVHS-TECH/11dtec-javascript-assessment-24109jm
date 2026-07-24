//variables
let NLMquantity = 0;
let ZBquantity = 0;
let OFquantity = 0;
let RLBquantity = 0;
let NLMprice = 2.36;
let ZBprice = 9.44;
let OFprice = 4.72;
let RLBprice = 2.36;

//arrays
let messages = ["Have a good afternoon", "Enjoy your meal", "Bon Appetit", "Thank you for ordering from us", "We appreciate your support", "Have a great rest of your day", "Savor every bite!", "You made our day", "Come back soon!", "It's a pleasure serving you"]

//const's
const NLMminus = document.getElementById("NLMminus");
const NLMquant = document.getElementById("NLMquant");
const NLMplus = document.getElementById("NLMplus");

const ZBminus = document.getElementById("ZBminus");
const ZBquant = document.getElementById("ZBquant");
const ZBplus = document.getElementById("ZBplus");

const OFminus = document.getElementById("OFminus");
const OFquant = document.getElementById("OFquant");
const OFplus = document.getElementById("OFplus");

const RLBminus = document.getElementById("RLBminus");
const RLBquant = document.getElementById("RLBquant");
const RLBplus = document.getElementById("RLBplus");

const orderID = Math.floor(Math.random() * 1000000000).toString().slice(1);
const messageNum = orderID[0];

//main code
NLMminus.addEventListener("click", function() {
    if (NLMquantity > 0) {
        NLMquantity = NLMquantity - 1;
        NLMquant.value = NLMquantity;
    }
});

NLMplus.addEventListener("click", function() {
    NLMquantity = NLMquantity + 1;
    NLMquant.value = NLMquantity;
});

ZBminus.addEventListener("click", function() {
    if (ZBquantity > 0) {
        ZBquantity = ZBquantity - 1;
        ZBquant.value = ZBquantity;
    }
});

ZBplus.addEventListener("click", function() {
    ZBquantity = ZBquantity + 1;
    ZBquant.value = ZBquantity;
});

OFminus.addEventListener("click", function() {
    if (OFquantity > 0) {
        OFquantity = OFquantity - 1;
        OFquant.value = OFquantity;
    }
});

OFplus.addEventListener("click", function() {
    OFquantity = OFquantity + 1;
    OFquant.value = OFquantity;
});

RLBminus.addEventListener("click", function() {
    if (RLBquantity > 0) {
        RLBquantity = RLBquantity - 1;
        RLBquant.value = RLBquantity;
    }
});

RLBplus.addEventListener("click", function() {
    RLBquantity = RLBquantity + 1;
    RLBquant.value = RLBquantity;
});

NLMquant.addEventListener("change", function() {
    NLMquantity = Number(NLMquant.value);

    if (NLMquantity < 0) {
        NLMquantity = 0;
        NLMquant.value = 0;
    }
});

ZBquant.addEventListener("change", function() {
    ZBquantity = Number(ZBquant.value);

    if (ZBquantity < 0) {
        ZBquantity = 0;
        ZBquant.value = 0;
    }
});

OFquant.addEventListener("change", function() {
    OFquantity = Number(OFquant.value);

    if (OFquantity < 0) {
        OFquantity = 0;
        OFquant.value = 0;
    }
});

RLBquant.addEventListener("change", function() {
    RLBquantity = Number(RLBquant.value);

    if (RLBquantity < 0) {
        RLBquantity = 0;
        RLBquant.value = 0;
    } 
});

//functions
function receipt() {
    const NAME_FIELD = document.getElementById("nameField");
    let name = NAME_FIELD.value;
    const PAID_FIELD = document.getElementById("moneyField");
    let paid = PAID_FIELD.value;
    const OUTPUT = document.getElementById("orderScreen");

    if (paid < (NLMprice*NLMquantity) + (ZBprice*ZBquantity) + (OFprice*OFquantity) + (RLBprice*RLBquantity)) {
        OUTPUT.innerHTML = "<p>You need to add at least $"+ ((NLMprice*NLMquantity) + (ZBprice*ZBquantity) + (OFprice*OFquantity) + (RLBprice*RLBquantity) - paid).toFixed(2) +" or add less to your order to continue</p>"
        return;
    }

    OUTPUT.innerHTML = "<h3>Receipt</h3><p>Order ID: #"+ orderID +"<p>Name: "+ name +"</p><p>Order Total: $"+ ((NLMprice * NLMquantity) + (ZBprice * ZBquantity) + (OFprice * OFquantity) + (RLBprice * RLBquantity)).toFixed(2) +"<p>Total Paid: $"+ paid +"</p><p>Change: $"+ (((((NLMprice * NLMquantity) + (ZBprice * ZBquantity) + (OFprice * OFquantity) + (RLBprice * RLBquantity)).toFixed(2)) - paid).toFixed(2)) * -1 +"</p><p>"+ messages[Number(messageNum)] +"</p>";
}

function buy() {
    const OUTPUT = document.getElementById("orderScreen");
    OUTPUT.innerHTML = "<h3>Please enter your details:</h3>";
    OUTPUT.innerHTML += "<form onsubmit='return false;'><label for='formName'>Name: </label><input type='text' id='nameField' placeholder='Eg. Fred McKenzie'></br><label for='formMoney'>Paying: $</label><input type='number' id='moneyField' placeholder='Eg. 236'></br><input type ='submit' onClick=receipt()></br></form>";
}

function order() {
    const OUTPUT = document.getElementById("orderScreen");
    OUTPUT.innerHTML = "<h3>Ready to buy?</h3>"; 
    if (NLMquantity === 1) {
        OUTPUT.innerHTML += "<p>1x Natural Lime Milkshake ($"+ (NLMprice * NLMquantity).toFixed(2) +")</p>"; 
    } else if (NLMquantity > 1) {
        OUTPUT.innerHTML += "<p>"+ NLMquantity +"x Natural Lime Milkshakes ($"+ (NLMprice * NLMquantity).toFixed(2) +")</p>";
    };
    if (ZBquantity === 1) {
        OUTPUT.innerHTML += "<p>1x Zero Burger ($"+ (ZBprice * ZBquantity).toFixed(2) +")</p>"; 
    } else if (ZBquantity > 1) {
        OUTPUT.innerHTML += "<p>"+ ZBquantity +"x Zero Burgers ($"+ (ZBprice * ZBquantity).toFixed(2) +")</p>";
    };
    if (OFquantity >= 1) {
        OUTPUT.innerHTML += "<p>"+ OFquantity +"x Only Fries ($"+ (OFprice * OFquantity).toFixed(2) +")</p>"; 
    };
    if (RLBquantity === 1) {
        OUTPUT.innerHTML += "<p>1x Real Life Brownie ($"+ (RLBprice * RLBquantity).toFixed(2) +")</p>"; 
    } else if (RLBquantity > 1) {
        OUTPUT.innerHTML += "<p>"+ RLBquantity +"x Real Life Brownies ($"+ (RLBprice * RLBquantity).toFixed(2) +")</p>";
    };
    if (NLMquantity === 0 && ZBquantity === 0 && OFquantity === 0 && RLBquantity === 0) {
        OUTPUT.innerHTML += "<p>Please add to your order before attempting to purchase.</p>";
    } else {
        OUTPUT.innerHTML += "<p>Total: $"+ ((NLMprice * NLMquantity) + (ZBprice * ZBquantity) + (OFprice * OFquantity) + (RLBprice * RLBquantity)).toFixed(2) +"";
        OUTPUT.innerHTML += '<button onClick="buy()">Buy</button>';
    };
}