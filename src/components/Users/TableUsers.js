import React from "react";

export const TableUsers = ({users}) => {
  return (
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Email
            </th>
            <th scope="col" class="py-3 px-6">
              Email Verified
            </th>
            <th scope="col" class="py-3 px-6">
              Name
            </th>
            <th scope="col" class="py-3 px-6">
              Phone Number
            </th>
            <th scope="col" class="py-3 px-6">
              Role
            </th>
            <th scope="col" class="py-3 px-6">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {user.nombre}
            </th>
            <td class="py-4 px-6">{user.nombre}</td>
            <td class="py-4 px-6">{user.UnidadMedidaPeso}</td>
            <td class="py-4 px-6">{user.deporte}</td>
            <td class="py-4 px-6">{user.edad}</td>
            <td class="py-4 px-6 text-right">
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
