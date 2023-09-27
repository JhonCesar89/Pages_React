import React, { Component } from 'react';

class TodoList extends Component {
  // Otras funciones y lógica aquí
  constructor(props){
    super(props);
    this.state = {
      newTask:'Nueva tarea' //Inicializa newTask con u valor adecuado aquí
      // Otras propiedades de estado
    };
  }
  //manejador de cambios para el campo de entrada
  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ newTask: value });
  };
  

  render() {
    return (
      <div>
        {/* Renderizar la lista de tareas */}
        <ul>
          {this.props.tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.props.deleteTask(index)}>Eliminar</button>
            </li>
          ))}
        </ul>

        {/* Formulario para agregar tareas */}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleInputChange}
          />
          <button type="submit">Agregar</button>
        </form>
      </div>
    );
  }
}

export default TodoList;
