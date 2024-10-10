document.addEventListener('DOMContentLoaded', function () {
    // Variables
    const cantidadClasico = document.getElementById('cantidad_clasico');
    const cantidadNutella = document.getElementById('cantidad_nutella');
    const cantidadCacahuate = document.getElementById('cantidad_cacahuate');
    const envioCheckbox = document.getElementById('envio');
    const totalSpan = document.getElementById('total');
    const numeroCuentaDiv = document.getElementById('numero_cuenta');
    const pagoTarjeta = document.getElementById('pago_tarjeta');

    // Función para calcular el total
    function calcularTotal() {
        const precioClasico = 15;
        const precioNutella = 20;
        const precioCacahuate = 20;
        let total = 0;

        total += precioClasico * (cantidadClasico.value || 0);
        total += precioNutella * (cantidadNutella.value || 0);
        total += precioCacahuate * (cantidadCacahuate.value || 0);

        if (envioCheckbox.checked) {
            total += 20; // Costo de envío
        }

        totalSpan.textContent = total;
    }

    // Eventos para inputs
    cantidadClasico.addEventListener('input', calcularTotal);
    cantidadNutella.addEventListener('input', calcularTotal);
    cantidadCacahuate.addEventListener('input', calcularTotal);
    envioCheckbox.addEventListener('change', calcularTotal);

    // Evento para el método de pago
    const radiosPago = document.querySelectorAll('input[name="pago"]');
    radiosPago.forEach(radio => {
        radio.addEventListener('change', function () {
            if (pagoTarjeta.checked) {
                numeroCuentaDiv.style.display = 'block'; // Mostrar número de cuenta
            } else {
                numeroCuentaDiv.style.display = 'none'; // Ocultar número de cuenta
            }
        });
    });

    // Evento para enviar el pedido por WhatsApp
    document.getElementById('pedido').addEventListener('click', function () {
        const direccion = document.getElementById('direccion').value;
        const metodoPago = document.querySelector('input[name="pago"]:checked').value;
        const cantidadClasicoVal = cantidadClasico.value;
        const cantidadNutellaVal = cantidadNutella.value;
        const cantidadCacahuateVal = cantidadCacahuate.value;

        let mensaje = `¡Hola! Quiero hacer un pedido de:\n`;
        mensaje += `- Brownie Clásico: ${cantidadClasicoVal}\n`;
        mensaje += `- Brownie Nutella: ${cantidadNutellaVal}\n`;
        mensaje += `- Brownie Crema de Cacahuate: ${cantidadCacahuateVal}\n`;
        mensaje += `Dirección: ${direccion}\n`;
        mensaje += `Método de Pago: ${metodoPago}\n`;
        mensaje += `Total: $${totalSpan.textContent}`;

        const numeroWhatsApp = '528641003379';
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    });
});
