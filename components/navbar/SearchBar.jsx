export function SearchBar() {
  return (
    <div className="bg-white p-4 border-b flex items-center justify-between">
      {/* Left side icons go here */}

      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 border border-gray-300 focus:outline-none"
        />
        {/* User profile icons go here */}
      </div>
    </div>
  );
}
