export const TableIngredient = ({ ingredients }) => {
  return (
    <div className="table-scroll table-wrapper-scroll-y table-responsive">
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Calorías</th>
            <th>Carbohidratos</th>
            <th>Grasa</th>
            <th>Proteinas</th>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Costo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((user, index) => (
            <tr key={index}>
              <td>{user.Nombre}</td>
              <td>{user.Cals}</td>
              <td>{user.Carbh}</td>
              <td>{user.Grasa}</td>
              <td>{user.Prot}</td>
              <td>{user.Tipo}</td>
              <td>{user.cantidad}</td>
              <td>{user.Costo}</td>
              <td>
                <button type="button" className="btn btn-outline-primary">
                  Editar
                </button>{" "}
                <button type="button" className="btn btn-outline-danger">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
