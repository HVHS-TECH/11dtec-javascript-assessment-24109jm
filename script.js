let NLMquantity = 0;
let ZBquantity = 0;
let OFquantity = 0;
let RLBquantity = 0;

const NLMminus = document.getElementById("NLMminus");
const NLMquant = document.getElementById("NLMquant");
const NLMplus = document.getElementById("NLMplus");

const ZBminus = document.getElementById("NLMminus");
const ZBquant = document.getElementById("NLMquant");
const ZBplus = document.getElementById("NLMplus");

const OFminus = document.getElementById("NLMminus");
const OFquant = document.getElementById("NLMquant");
const OFplus = document.getElementById("NLMplus");

const RLBminus = document.getElementById("NLMminus");
const RLBquant = document.getElementById("NLMquant");
const RLBplus = document.getElementById("NLMplus");

NLMminus.addEventListener("click", function() {
    if (NLMquantityA > 0) {
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

