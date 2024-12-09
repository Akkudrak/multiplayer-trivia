var br1 = null;
var testWorking = false;

webserial.Danidoble.lang = "es";
dd.number_boardroid_project = 1;
// se debe seguir un patron de nombres para que el codigo pre-escrito en la libreria funcione correctamente
// si se quiere una boardroid la variable debe ser declara como "var br1" o "window['br1']" para que se pueda llamar
// dinamicamente desde cualquier parte del codigo cambiando unicamente el numero

document.addEventListener("DOMContentLoaded", () => {
    br1 = new webserial.Boardroid();
    // br1._serial_filters = [{usbVendorId: 1027, usbProductId: 24577}];
    setTimeout(async () => {
        await br1.initSerial();
    }, 1e3);

    setTimeout(async () => {
        dd.setDeveloperMode(true);
        // dd.removePermissionOverlay();
        setTimeout(() => {
            document.querySelector('body').style.overflow = 'auto';
        }, 300);
    }, 2200);

    /* **************** Boardroid *****************
     *     Boardroid rewrite external functions
     * ********************************************
     */
    br1.extWaitingForSenseTest = (_type_) => {
        boardroidWaitingForSenseTest(_type_);
    };

})

function boardroidWaitingForSenseTest(_type_) {
    let $dis = $(".dispensing-process");
    switch (_type_) {
        case 'undefined': // waiting
            $dis.hide();
            $("#div-dispensando").show();
            break;
        case 'dispensed':
            $dis.hide();
            $("#div-entregado").show();

            if (!testWorking) {
                console.log(testWorking);
                setTimeout(function () {
                    controlEndDispensing();
                }, 1000);
            }
            break;
        case 'not-dispensed':
            $dis.hide();
            $("#div-no-entregado").show();
            if (!testWorking) {
                console.log(testWorking);
                setTimeout(function () {
                    controlEndDispensing();
                }, 1000);
            }

            setTimeout(() => {
                br1.softReload();
            }, 2e3);
            break;
    }
}


function dispensingPlanogram($selection) {
    $(".dispensing-process").hide();
    $("#div-preparando").show();

    let str = $selection.toString();
    let tray = dd.hexMaker(dd.decToHex(parseInt(str[0] + '' + str[1]) + 128));
    let channel = dd.hexMaker(dd.decToHex(parseInt(str[2]) + 128));
    //addLog("log",vending,tray,channel);

    br1.waitingForSenseTest();
    br1.dispense(tray, channel);
}

function controlEndDispensing() {
    testWorking = false;
    $('.dispensing-process').hide();
    $('#div-start').hide();
    $("#standby").show();
    $('#editSeleccion').modal("hide");
    $(".btn-controls").show();
    $("#controlsDiv").show();
}

function extReconnectionMessage() {
    dd.log(dd.__("Trying reconnect"))
}
