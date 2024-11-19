# Proyecto Básico de React - Curso MERNStack

Este proyecto es una aplicación básica de React correspondiente al curso **MERNStack** del **Polo Tecnológico La Rioja**, módulo de **React**. La aplicación puede gestionar una lista de productos a través de una tabla y un formulario, con la capacidad de agregar nuevos productos.

## Descripción

La aplicación muestra una tabla centrada que carga los productos después de un segundo utilizando un **timeout**. Además, incluye un formulario de carga de nuevos productos y un **spinner** que valida si la aplicación está cargando o no.

### Funcionalidades:
1. **Tabla de Productos**: Muestra los productos después de un segundo, con información sobre su nombre, precio y categoría.
2. **Formulario de Carga de Productos**: Permite agregar nuevos productos a la tabla.
3. **Spinner de Carga**: Muestra un indicador visual mientras la aplicación está cargando.
4. **Persistencia de Estado**: Los nuevos productos se agregan solo a la tabla, no al mock. Si recargas la página, lo agregado se pierde.

## Tecnologías Usadas
- React
- CSS
- JavaScript