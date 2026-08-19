'use client'
import { Input } from "@heroui/react";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Search = () => {
    const [searchingInput, setSearchingInput] = useState('');
    const [tiles, setTiles] = useState([]);
    const [loading, setLoading] = useState(true);
      const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                setTiles(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching tiles:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleSearch = () => {
        if (searchingInput.trim() === '') {
            toast.warning("Please enter a Tile Title")
            console.log('Please enter a Tile Title');
            return;
        }else{
          router.push(`/tiles/search?q=${encodeURIComponent(searchingInput.trim())}`); 
          
        }
        
        const expectedTiles = tiles.filter(tile => 
            tile.title.toLowerCase().includes(searchingInput.toLowerCase())
        );
        console.log('Search Results:', expectedTiles);
    };

    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>;
    }

    return (
        <div className="relative flex items-center gap-2">
            <Input 
                value={searchingInput} 
                onChange={e => setSearchingInput(e.target.value)} 
                aria-label="Search tiles"
                className="w-64"
                placeholder="Search For Your Choice"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            
            <button 
                onClick={handleSearch} 
                className="bg-[#d81b99] hover:bg-[#b8167a] text-white p-2.5 rounded-full transition-colors"
                >
                <FaSearch size={16} />
            </button>
                
            
        </div>
    );
};

export default Search;