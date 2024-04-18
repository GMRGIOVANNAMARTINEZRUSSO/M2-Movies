// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
// Definición del objeto CarritoCompra

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
