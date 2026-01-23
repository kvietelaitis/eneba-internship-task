import { useEffect, useState } from "react";

interface SearchProps {
    onSearch: (searchTerm: string) => void
}

function SearchBox({ onSearch }: SearchProps) {
    const [query, setQuery] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch(query)
        }
    };

    return (
        <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

            <input
                type="text"
                className="block w-full pl-12 pr-3 py-3 border border-white bg-eneba text-white placeholder-white text-lg font-bold transition-all outline-none focus:border-white"
                placeholder="Search for games..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default SearchBox