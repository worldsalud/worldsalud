import { Package, ShoppingCart, Users, Boxes, Newspaper, List, X, Ticket, ShieldCheck } from "lucide-react";
interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}
export default function Sidebar({ activeTab, setActiveTab, menuOpen, setMenuOpen }: SidebarProps) {
  const tabsGeneral = [
    { icon: <Ticket />, name: "Lista de descuentos", id: "overview" },
    { icon: <Package />, name: "Productos", id: "products" },
    { icon: <ShoppingCart />, name: "Pedidos", id: "orders" },
    { icon: <Users />, name: "Usuarios", id: "users" },
  ];
  const tabsBusiness = [
    { icon: <Boxes />, name: "Stock", id: "invent" },
    { icon: <Newspaper />, name: "Magazine", id: "forum" },
    { icon: <ShieldCheck />, name: "Seguridad", id: "settings" },
  ];
  return (
    <>
      {/* Botón para abrir/cerrar menú en móviles */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-3 rounded-full shadow-lg transition-transform active:scale-95"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <List size={24} />}
      </button>
      {/* Sidebar fijo en pantalla sin encimarse con el contenido */}
      <nav
        className={`bg-white px-6 border-r border-white transition-transform h-screen w-64 md:w-80 overflow-y-auto z-40 p-4 fixed md:static ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-gray-400 text-sm uppercase mb-2 p-4">General</h2>
        {tabsGeneral.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center px-4 py-3 rounded-lg w-full transition-all 
            ${activeTab === tab.id ? "bg-white text-black border-l-4 border-gray-400" : "bg-white text-gray-300 hover:bg-gray-800"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="mr-3">{tab.icon}</span> {tab.name}
          </button>
        ))}
        <h2 className="text-gray-400 text-sm uppercase mt-6 mb-2">Mi Negocio</h2>
        {tabsBusiness.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center px-4 py-3 rounded-lg w-full transition-all 
            ${activeTab === tab.id ? "bg-white text-black border-l-4 border-gray-400" : "bg-white text-gray-300 hover:bg-gray-800"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="mr-3">{tab.icon}</span> {tab.name}
          </button>
        ))}
      </nav>
    </>
  );
}
