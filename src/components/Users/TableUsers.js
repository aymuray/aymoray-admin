import React from "react";

export const TableUsers = ({users}) => {
  return (
    <div className="table-scroll table-wrapper-scroll-y table-responsive">
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>
              Correo
            </th>
            <th>
              Correo Verificado
            </th>
            <th>
              Nombre
            </th>
            <th>
              Teléfono
            </th>
            <th>
              Rol
            </th>
            <th>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
            <td>
              {user.nombre}
            </td>
            <td>{user.nombre}</td>
            <td>{user.UnidadMedidaPeso}</td>
            <td>{user.deporte}</td>
            <td>{user.edad}</td>
            <td>
            <button type="button" className="btn btn-outline-primary">Editar</button>{" "}
            <button type="button" className="btn btn-outline-danger">Eliminar</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
