import TodoPage from '../support/objects/Tareas';

describe('Pruebas Métodos', () => {
  const todoPage = new TodoPage();


  beforeEach(() => {
    todoPage.visitarPagina();
  });



  it('Añadir tarea', () => {
    todoPage.agregarTarea('Hacer la compra')
  })


  it('Borrar tarea', () => {
    todoPage.agregarTarea('Hacer la compra')
    todoPage.borrarTarea('Hacer la compra')
  })


  it('Marcar tarea', () => {
    todoPage.agregarTarea('Hacer la compra')
    todoPage.marcarTarea('Hacer la compra')
  })
})