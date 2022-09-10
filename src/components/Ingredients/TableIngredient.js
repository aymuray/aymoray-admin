import React from "react";

export const TableIngredient = ({ ingredients }) => {
  return (
      <div class="relative pb-20 h-screen grid gap-4 overflow-x-auto shadow-md sm:rounded-lg pb-5">
        <table class="text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th class="py-3 px-6">
                Nombre
              </th>
              <th class="py-3 px-6">
                Calorías
              </th>
              <th class="py-3 px-6">
                Carbohidratos
              </th>
              <th class="py-3 px-6">
                Grasa
              </th>
              <th class="py-3 px-6">
                Proteinas
              </th>
              <th class="py-3 px-6">
                Tipo
              </th>
              <th class="py-3 px-6">
                Cantidad
              </th>
              <th class="py-3 px-6">
                Costo
              </th>
              <th class="py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((user) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.Nombre}
                </td>
                <td class="py-4 px-6">{user.Cals}</td>
                <td class="py-4 px-6">{user.Carbh}</td>
                <td class="py-4 px-6">{user.Grasa}</td>
                <td class="py-4 px-6">{user.Prot}</td>
                <td class="py-4 px-6">{user.Tipo}</td>
                <td class="py-4 px-6">{user.cantidad}</td>
                <td class="py-4 px-6">{user.Costo}</td>
                <td class="py-4 px-6">
                  <a
                    href="/"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};
