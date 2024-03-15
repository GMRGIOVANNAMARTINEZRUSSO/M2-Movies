// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
// Definición del objeto CarritoCompra
  
//   // Objeto CarritoCompra
// const CarritoCompra = [];

// // Método para agregar un producto al carrito
// CarritoCompra.agregarProducto = function(producto) {
//   this.push(producto);
// };

// // Método para calcular el total de la compra
// CarritoCompra.calcularTotal = function() {
//   return this.reduce((total, producto) => total + producto.precio, 0);
// };

// // Método para aplicar un descuento al total de la compra
// CarritoCompra.aplicarDescuento = function(porcentaje) {
//   const total = this.calcularTotal();
//   const descuento = (total * porcentaje) / 100;
//   return total - descuento;
// };


class CarritoCompra {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotal() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }

  aplicarDescuento(porcentaje) {
    const total = this.calcularTotal();
    const descuento = (total * porcentaje) / 100;
    return total - descuento;
  }
}

module.exports = CarritoCompra;
