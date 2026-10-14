import React from "react";
import Heading from "@/Pages/Admin/Components/Heading";
import Button from "@/Pages/Admin/Components/Button";
import Card from "@/Pages/Admin/Components/Card";

const AdminLayout = () => {
  const handleEdit = (nama) => {
    alert(`Edit data ${nama}`);
  };

  const handleDelete = (nama) => {
    const confirmDelete = confirm(`Yakin ingin hapus ${nama}?`);
    if (confirmDelete) {
      alert("Data berhasil dihapus!");
    }
  };

  const toggleProfileMenu = () => {
    const menu = document.getElementById("profileMenu");
    if (menu) menu.classList.toggle("hidden");
  };

  return (

    <div className="min-h-screen bg-gray-100">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="bg-blue-800 text-white min-h-screen transition-all duration-300 w-20 lg:w-64">
          <div className="flex justify-between items-center p-4 border-b border-blue-700">
            <span className="text-2xl font-bold hidden lg:block">Admin</span>
          </div>
          <nav className="p-4 space-y-2">
            <a
              href="#"
              className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-700"
            >
              <span className="text-lg">🏠</span>
              <span className="menu-text hidden lg:inline">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 px-4 py-2 rounded bg-blue-700"
            >
              <span className="text-lg">🎓</span>
              <span className="menu-text hidden lg:inline">Mahasiswa</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex flex-col flex-1">

          {/* Header */}
          <header className="bg-white shadow-md">
            <div className="flex justify-between items-center px-6 py-4">
              <h1 className="text-2xl font-semibold text-gray-800">Mahasiswa</h1>
              <div className="relative">
                <Button
                  onClick={toggleProfileMenu}
                  className="w-8 h-8 rounded-full bg-gray-300 focus:outline-none"
                ></Button>
                <div
                  id="profileMenu"
                  className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 hidden"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <button
                    onClick={() => alert("Logout berhasil!")}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 p-6 overflow-x-auto">
            <Card>
              <div className="flex justify-between items-center mb-4">
                <Heading as="h2" className="mb-0 text-left">
                  Daftar Mahasiswa
                </Heading>
                <Button onClick={() => alert("Buka modal tambah")}>
                  + Tambah Mahasiswa
                </Button>
              </div>

              <table className="w-full text-sm text-gray-700">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-2 px-4 text-left">NIM</th>
                    <th className="py-2 px-4 text-left">Nama</th>
                    <th className="py-2 px-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-100">
                    <td className="py-2 px-4">20211001</td>
                    <td className="py-2 px-4">Budi Santoso</td>
                    <td className="py-2 px-4 text-center space-x-2">
                      <Button
                        size="sm"
                        className="bg-yellow-500 hover:bg-yellow-600"
                        onClick={() => handleEdit("Budi Santoso")}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        className="bg-red-500 hover:bg-red-600"
                        onClick={() => handleDelete("Budi Santoso")}
                      >
                        Hapus
                      </Button>
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-100">
                    <td className="py-2 px-4">20211002</td>
                    <td className="py-2 px-4">Siti Aminah</td>
                    <td className="py-2 px-4 text-center space-x-2">
                      <Button
                        size="sm"
                        className="bg-yellow-500 hover:bg-yellow-600"
                        onClick={() => handleEdit("Siti Aminah")}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        className="bg-red-500 hover:bg-red-600"
                        onClick={() => handleDelete("Siti Aminah")}
                      >
                        Hapus
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>

            </Card>
          </main>

          {/* Footer */}
          <footer className="bg-white text-center py-4 shadow-inner">
            <p className="text-sm text-gray-600">
              © 2025 Admin Dashboard. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;