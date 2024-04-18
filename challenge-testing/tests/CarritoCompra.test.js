const CarritoCompra = require("../index.js");

describe('Carrito de compra', () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  it('El Carrito se inicializa como un array vacío', () => {
    expect(carrito.productos).toHaveLength(0);
  });

  it('Agregar un producto al carrito', () => {
    const producto = { nombre: 'Producto1', precio: 10 };
    carrito.agregarProducto(producto);
    expect(carrito.productos).toContainEqual(producto);
  });

  it('Calcular el total de la compra', () => {
    const producto1 = { nombre: 'Producto1', precio: 10 };
    const producto2 = { nombre: 'Producto2', precio: 20 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    expect(carrito.calcularTotal()).toBe(30);
  });

  it('Aplicar descuento al total de la compra', () => {
    const producto1 = { nombre: 'Producto1', precio: 10 };
    const producto2 = { nombre: 'Producto2', precio: 20 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    const totalConDescuento = carrito.aplicarDescuento(10);
    expect(totalConDescuento).toBe(27);
  });
});
