document.addEventListener("DOMContentLoaded", () => {
    // Función para calcular el total
    const calcularTotal = () => {
        const precioClasico = 15;
        const precioNutella = 20;
        const precioCacahuate = 20;
        const precioTopping = 5;
        const envioCosto = document.getElementById('envio').checked ? 20 : 0;

        // Obtener cantidades de brownies
        const cantidadClasico = parseInt(document.getElementById('cantidad_clasico').value) || 0;
        const cantidadNutella = parseInt(document.getElementById('cantidad_nutella').value) || 0;
        const cantidadCacahuate = parseInt(document.getElementById('cantidad_cacahuate').value) || 0;

        // Calcular subtotal de brownies
        const subtotalClasico = cantidadClasico * precioClasico;
        const subtotalNutella = cantidadNutella * precioNutella;
        const subtotalCacahuate = cantidadCacahuate * precioCacahuate;

        // Calcular subtotal de toppings
        const toppingsNutella = document.querySelectorAll('.topping_nutella:checked').length * precioTopping;
        const toppingsCacahuate = document.querySelectorAll('.topping_cacahuate:checked').length * precioTopping;

        // Calcular total
        const total = subtotalClasico + subtotalNutella + subtotalCacahuate + toppingsNutella + toppingsCacahuate + envioCosto;

        // Mostrar el total en la página
        document.getElementById('total').innerText = total;
    };

    // Agregar event listeners a los inputs
    document.getElementById('cantidad_clasico').addEventListener('input', calcularTotal);
    document.getElementById('cantidad_nutella').addEventListener('input', calcularTotal);
    document.getElementById('cantidad_cacahuate').addEventListener('input', calcularTotal);
    document.querySelectorAll('.topping_nutella').forEach(topping => topping.addEventListener('change', calcularTotal));
    document.querySelectorAll('.topping_cacahuate').forEach(topping => topping.addEventListener('change', calcularTotal));
    document.getElementById('envio').addEventListener('change', calcularTotal);
});
