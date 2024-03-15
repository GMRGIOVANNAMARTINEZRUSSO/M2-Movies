const CarritoCompra = require("../index.js");

// Inicializa el carrito como un array vacío
// describe('Carrito de compra', () => {
//     it('El Carrito se inicializa como un array vacío', () => {
//       expect(CarritoCompra).toBe([]);
//     });
//     describe('Carrito de compra', () => {
//        it('El Carrito se inicializa como un array vacío', () => {
//         expect(CarritoCompra.productos).toEqual([]);
//       });
//   });
  
//     // Agregar un producto al carrito
//     describe('nuevo producto agregado', ()=> {
//     it('Agregar un producto al carrito', () => {
//       const producto = { nombre: 'Producto1', precio: 10 };
//       CarritoCompra.agregarProducto(producto);
//       expect(CarritoCompra).toContainEqual(producto);
//     })
// });


//     // Calcular el total de la compra
//     describe ('total de la compra', ()=> {
//     it('Calcular el total de la compra', () => {
//       const producto1 = { nombre: 'Producto1', precio: 10 };
//       const producto2 = { nombre: 'Producto2', precio: 20 };
//       CarritoCompra.agregarProducto(producto1);
//       CarritoCompra.agregarProducto(producto2);
//       expect(CarritoCompra.calcularTotal()).toBe(30);
//     })
// });

  
//     // Aplicar descuento al total de la compra
//     describe('Aplicar descuento al total de la compra', () => {
//       it('Aplicar descuento al total de la compra', () => {
//       const producto1 = { nombre: 'Producto1', precio: 10 };
//       const producto2 = { nombre: 'Producto2', precio: 20 };
//       CarritoCompra.agregarProducto(producto1);
//       CarritoCompra.agregarProducto(producto2);
//       // CarritoCompra.aplicarDescuento(10); // Aplicar un descuento del 10%
//       const totalConDescuento = CarritoCompra.aplicarDescuento(10);
//       expect(totalConDescuento).toBe(27);  // Total esperado: 27 (10% de descuento sobre 30)
//     });

//     });

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
    const totalConDescuento = carrito.aplicarDescuento(10); // Aplicar un descuento del 10%
    expect(totalConDescuento).toBe(27); // Total esperado: 27 (10% de descuento sobre 30)
  });
});
