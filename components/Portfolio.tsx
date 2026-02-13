import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BOOKS } from '../constants';

const Portfolio: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  // Extract unique genres from the books list
  const genres = useMemo(() => {
    return ['All', ...Array.from(new Set(BOOKS.map(b => b.genre)))];
  }, []);

  // Filter and sort the books
  const filteredAndSortedBooks = useMemo(() => {
    let result = [...BOOKS];

    // Filter
    if (selectedGenre !== 'All') {
      result = result.filter(book => book.genre === selectedGenre);
    }

    // Sort
    if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'author') {
      result.sort((a, b) => a.author.localeCompare(b.author));
    }

    return result;
  }, [selectedGenre, sortBy]);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-[#181818]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Books</h2>
          <p className="text-gray-light text-lg max-w-2xl mx-auto">
            Explore a selection of our published works, ranging from bestsellers to critically acclaimed masterpieces across various genres.
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            {/* Genre Filters */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {genres.map(genre => (
                    <button
                        key={genre}
                        onClick={() => setSelectedGenre(genre)}
                        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                            selectedGenre === genre
                            ? 'bg-gold text-black border-gold shadow-[0_0_15px_rgba(255,215,0,0.3)]'
                            : 'bg-transparent text-gray-400 border-gray-700 hover:border-gold hover:text-white'
                        }`}
                    >
                        {genre}
                    </button>
                ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 relative group">
                <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">Sort by</span>
                <div className="relative">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="appearance-none bg-[#222] text-white border border-gray-700 hover:border-gold rounded px-4 py-2 pr-8 text-sm cursor-pointer outline-none focus:border-gold transition-colors min-w-[140px]"
                    >
                        <option value="default">Default</option>
                        <option value="title">Title (A-Z)</option>
                        <option value="author">Author (A-Z)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gold">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
        </div>

        {/* Book Grid */}
        <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredAndSortedBooks.map((book) => (
                <motion.div
                layout
                key={book.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[2/3] rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-gold/20 bg-gray-900"
                >
                {/* Image */}
                <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{book.genre}</span>
                    <h3 className="text-white text-lg md:text-xl font-bold leading-tight mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{book.title}</h3>
                    <p className="text-gray-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">by {book.author}</p>
                </div>
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredAndSortedBooks.length === 0 && (
             <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center py-20 text-gray-500"
             >
                 <p>No books found matching this filter.</p>
             </motion.div>
        )}

        <div className="text-center mt-12">
            <button className="px-8 py-3 border border-white/20 text-white rounded hover:bg-gold hover:text-black hover:border-gold transition-colors duration-300">
                View All Publications
            </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;