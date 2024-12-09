webserial.Danidoble.lang = 'es';
dd.number_relays_project = 1; // indica cuantos relavadores se van a usar en el proyecto
// se debe seguir un patron de nombres para que el codigo pre-escrito en la libreria funcione correctamente
// si se quiere un Relay la variable debe ser declara como "var relay1" o "window['relay1']" para que se pueda llamar
// dinamicamente desde cualquier parte del codigo cambiando unicamente el numero
var relay1 = null;
document.addEventListener("DOMContentLoaded", () => {
    if (!demo) {
        relay1 = new webserial.Relay();

        

        // relay1._serial_filters = [{usbVendorId: 1027, usbProductId: 24577}];
        setTimeout(async () => {
            await relay1.initSerial(1);
        }, 1e3);
        setTimeout(async () => {
            dd.setDeveloperMode(true);
        }, 1200);



        setTimeout(function () {
            relay1.initSerial();
        }, 1e3);
    }
})
