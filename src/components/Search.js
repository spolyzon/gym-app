export default function Search({ searchTerm, setSearchTerm }) {
    return (
        <div className="relative flex-1">
            {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" /> */}
            <input
                type="search"
                placeholder="Search exercises..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}