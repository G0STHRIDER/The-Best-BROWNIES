// Función para calcular el total
function calcularTotal() {
    // Obtener cantidades de brownies
    const cantidadClasico = parseInt(document.getElementById('cantidad_clasico').value) || 0;
    const cantidadNutella = parseInt(document.getElementById('cantidad_nutella').value) || 0;
    const cantidadCacahuate = parseInt(document.getElementById('cantidad_cacahuate').value) || 0;

    // Precios
    const precioClasico = 15;
    const precioNutella = 20;
    const precioCacahuate = 20;
    const precioTopping = 5;
    const costoEnvio = document.getElementById('envio').checked ? 20 : 0;

    // Calcular subtotal de brownies
    const subtotal = (cantidadClasico * precioClasico) + (cantidadNutella * precioNutella) + (cantidadCacahuate * precioCacahuate);
    
    // Calcular total de toppings
    let totalToppings = 0;
    
    // Sumar toppings para Nutella
    const toppingsNutella = document.querySelectorAll('.topping_nutella:checked');
    totalToppings += toppingsNutella.length * precioTopping;

    // Sumar toppings para Crema de Cacahuate
    const toppingsCacahuate = document.querySelectorAll('.topping_cacahuate:checked');
    totalToppings += toppingsCacahuate.length * precioTopping;

    // Calcular total
    const total = subtotal + totalToppings + costoEnvio;

    // Actualizar total en el HTML
    document.getElementById('total').innerText = total;
}

// Función para enviar pedido por WhatsApp
function enviarPedido() {
    const cantidadClasico = document.getElementById('cantidad_clasico').value;
    const cantidadNutella = document.getElementById('cantidad_nutella').value;
    const cantidadCacahuate = document.getElementById('cantidad_cacahuate').value;
    const direccion = document.getElementById('direccion').value;
    const envio = document.getElementById('envio').checked ? "Sí" : "No";
    const metodoPago = document.querySelector('input[name="pago"]:checked').value;

    const mensaje = `Hola, quiero hacer un pedido:\n\n` +
                    `Brownie Clásico: ${cantidadClasico}\n` +
                    `Brownie Nutella: ${cantidadNutella}\n` +
                    `Brownie Crema de Cacahuate: ${cantidadCacahuate}\n` +
                    `Dirección: ${direccion}\n` +
                    `Envío a domicilio: ${envio}\n` +
                    `Método de pago: ${metodoPago}\n` +
                    `Total: $${document.getElementById('total').innerText}`;

    const numeroWhatsApp = "528641003379"; // Tu número de WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Abrir enlace de WhatsApp
    window.open(linkWhatsApp, '_blank');
}

// Event listeners para calcular el total automáticamente
document.querySelectorAll('input[type="number"], .topping_nutella, .topping_cacahuate, #envio')
    .forEach(input => {
        input.addEventListener('change', calcularTotal);
    });

// Event listener para el botón de enviar pedido
document.getElementById('pedido').addEventListener('click', enviarPedido);
