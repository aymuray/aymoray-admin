import { useAuth } from "../context/AuthContext";

export function Header({ ContentTitle }) {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
      <header class="bg-white shadow">
        <div class="w-full py-6 px-4 sm:px-6 lg:px-8  flex justify-between">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            {ContentTitle}
          </h1>
          <button
            onClick={handleLogout}
            type="button"
            class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="h-8 w-8 rounded-full"
              src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1206/faysalfarhan120600026/14516146-salir-icono-de-texto-en-el-bot%C3%B3n-redondo-rojo-brillante.jpg"
              alt=""
            />
          </button>
        </div>
      </header>
  );
}

export default Header;
