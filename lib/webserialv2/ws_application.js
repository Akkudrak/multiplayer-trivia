var jof1 = null;
webserial.Danidoble.lang = "es";
dd.number_jofemar_project = 1;


// se debe seguir un patron de nombres para que el codigo pre-escrito en la libreria funcione correctamente
// si se quiere una boardroid la variable debe ser declara como "var jof1" o "window['jof1']" para que se pueda llamar
// dinamicamente desde cualquier parte del codigo cambiando unicamente el numero


document.addEventListener("DOMContentLoaded", () => {
    jof1 = new Jofemar();
    jof1._serial_filters = [{usbVendorId: 1027, usbProductId: 24577}];
    jof1 = new webserial.Jofemar();
    jof1._serial_filters = [{usbVendorId: 1027, usbProductId: 24577}];
    setTimeout(async () => {
        await jof1.initSerial();
    }, 1e3);
    setTimeout(async () => {
        dd.setDeveloperMode(true);
        // dd.removePermissionOverlay();
    }, 2200);

    /* **************** Jofemar *****************
     *     Jofemar rewrite external functions
     * ******************************************
     */
    jof1.extWaitingForSense = (_type_) => {
        jofemarWaitingForSense(_type_);
    };
    jof1.extSoftReload = () => {
        jofemarSoftReload();
    }
});

function jofemarSoftReload() {
    // reiniciar variables?
}

function jofemarWaitingForSense(_type_) {
    switch (_type_) {
        case 'undefined': // waiting
            logger += "{warning: Moviendo Motores, Espere... }";
            break;
        case 'dispensed':
            productDispensed();

            setTimeout(() => {
                jof1.softReload();
            }, 2e3);
            break;
        case 'not-dispensed':
            productNotDispensed();

            setTimeout(() => {
                jof1.softReload();
            }, 2e3);
            break;
    }
}

function productDispensed() {
    // if (typeof memorama !== "undefined" && memorama === true) {
    $(".div-process").hide();
    $("#retire").show();

    cur_user.movement.dispense = true;
    send(formData("dispenseStatus", JSON.stringify(cur_user)));

    setTimeout(() => {
        // $("#end").show();
        cleanToReset()
    }, 5000);
    // }
}

function productNotDispensed() {
    $(".div-process").hide();
    $("#nodispensed").show();
    cur_user.movement.dispense = false;
    send(formData("dispenseStatus", JSON.stringify(cur_user)));

    setTimeout(() => {
        // $("#end").show();
        cleanToReset()
    }, 5000);
}




var timerClose = 20;
function timerEndProcess(timeset) {
    if (timeset > 0) {
        timerClose = timeset;
    }
    $(".closeVoucher").show();
    $(".timerCloseDiv").text(timerClose);
    timerClose--;
    //console.log(timerClose);
    if (timerClose <= 0) {
        timerClose = 20;
        //console.log("terminado");
        normalState();
    } else {
        setTimeout("timerEndProcess('')", 1000);
    }
}

function cleanToReset() {
    timeoutEvent = 0;
    listener = false;
    keyCode = "";
    logger = "";
    keyCodeRepeat = 0;
    cur_user.clear();
    document.querySelectorAll('.r-opt-1').forEach(x => {
        x.setAttribute('data-step', 'opcional-1');
    })
    $('.memorama-input-sm[data-question]').removeClass('active-inpt');
    $('.trivia-input-sm[data-question]').removeClass('active-inpt');
    $('.interview-process').hide();
    $('#opcional-1').show();
    $('#u_name').val('');
    $('#u_email').val('');
    $('#u_phone').val('');
    $('#chk_policy').prop('checked', false);
    send(formData('resetCodes'));
    jof1.softReload();
    let mix_activation = document.getElementById('content_activation');
    setTimeout(function () {
        $(".div-process").hide();
        $("#main").show();
        $("#listenerKey").val("");
    }, 4000);


    //trivia
    cont = 1;
    input = 1;
    minutos = 0;
    segundos = 0;
    endtime = true;
    $('#trivia').load(location.href + " #triviaContent");
}
