import Link from "next/link";
export function SideNavbar() {
  return (
    <div className="flex flex-col h-screen bg-gray-200 w-64">
      <div className="p-4 bg-white border-b">
        <h1 className="text-2xl font-bold">Your App</h1>
      </div>

      <nav className="flex-1">
        <Link href="/dashboard">
          <a className="block p-4 hover:bg-gray-300">Dashboard</a>
        </Link>
        <Link href="/frontpages">
          <a className="block p-4 hover:bg-gray-300">Front Pages</a>
        </Link>
        <Link href="/ui-elements">
          <a className="block p-4 hover:bg-gray-300">UI Elements</a>
        </Link>
        <Link href="/forms-and-table">
          <a className="block p-4 hover:bg-gray-300">Forms and Table</a>
        </Link>
        <Link href="/charts">
          <a className="block p-4 hover:bg-gray-300">Charts</a>
        </Link>
        {/* Add more links as needed */}
      </nav>

      {/* Additional components go here */}
    </div>
  );
}
