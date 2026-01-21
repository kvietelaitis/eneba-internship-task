import { useEffect, useState } from "react";

interface SearchProps {
    onSearch: (searchTerm: string) => void
}

function SearchBox({ onSearch }: SearchProps) {
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            onSearch(query);
        }, 500);
        return () => clearTimeout(timeOutId);
    }, [query, onSearch]);

    return (
        <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-eneba placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 sm:text-sm transition-all"
            placeholder="Search for games..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        </div>
    )
}

export default SearchBox