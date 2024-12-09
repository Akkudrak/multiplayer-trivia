var br1 = null;
webserial.Danidoble.lang = "es";
dd.number_boardroid_project = 1;

document.addEventListener("DOMContentLoaded", () => {br1 = new webserial.Boardroid();setTimeout(async () => {await br1.initSerial();}, 1e3);setTimeout(async () => {dd.setDeveloperMode(true);}, 2200);
br1.extWaitingForSense = (_type_) => {boardroidWaitingForSense(_type_);};br1.extPercentageTestMatrix = (_porc_) => {console.log("estatus",_porc_);};br1.extSoftReload = () => {boardroidSoftReload();}});


function boardroidSoftReload() {}

function boardroidWaitingForSense(_type_) {
    switch (_type_) {
        case 'undefined': // waiting
        $("#messages").text("Dispensando");
            logger += "{warning: Moviendo Motores, Espere... }";
            break;
        case 'dispensed'://que hacemos si el producto se dispensa?
            productDispensed();

            setTimeout(() => {
                br1.softReload();
            }, 1500);
            break;
        case 'not-dispensed':
            productNotDispensed();

            setTimeout(() => {
                br1.softReload();
            }, 1500);
            break;
    }
}



function productDispensed() {
   // next();
    $(".div-process").hide();
    $("#entregado").show();
    //$("#messages").text("Entregado");
    triv_data_dispense.estatus="DISPENSADO";
    send(formData("dispenseStatus", JSON.stringify({triv_data_dispense})));//enviamos todos los datos a la base de datos para que registre el resultado

    setTimeout(() => {
        cleanToReset();
    }, 4000);
    
}

function productNotDispensed() {
    //next();
    $(".div-process").hide();
    $("#noentregado").show();
    $("#messages").text("No Entregado");

    triv_data_dispense.estatus="NO_DISPENSADO";
    send(formData("dispenseStatus", JSON.stringify({triv_data_dispense})));//enviamos todos los datos a la base de datos para que registre el resultado

    setTimeout(() => {
        cleanToReset()
    }, 4000);
}



function cleanToReset() {//reset todo
    $(".clean").val("")
    initKeyboard("firstName",'spanishMayus');
    stepActual=0;
    breakTimer=false;
    timertoVideo=timertoVideoOriginal;
    //$(".dispenseButton").show();
    //checkStock();

    $(".div-process").hide();
    $("#main").show();
    timeoutEvent = 0;
    listener = false;
    keyCode = "";
    logger = "";
    keyCodeRepeat = 0;
    //$("#messages").text("Standby");
    send(formData('resetCodes'));
    br1.softReload();
    triv_data_dispense.creditos=0;
    resetGame()
    setTimeout(function () {
        resetToNormal();
        //initNormal();
        $("#listenerKey").val("");
    }, 4000);
}


function boardroidWaitingForSenseTest(_type_) {
    switch (_type_) {
        case 'undefined': // waiting
            logger += "{warning: Moviendo Motores Prueba, Espere... }";
            break;
        case 'dispensed':
            console.log("prueba ok");
            setTimeout(() => {
                br1.softReload();
            }, 2e3);
            break;
        case 'not-dispensed':
            console.log("prueba no");

            setTimeout(() => {
                br1.softReload();
            }, 2e3);
            break;
    }
}
