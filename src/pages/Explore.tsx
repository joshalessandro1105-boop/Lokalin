import { useState } from "react";
import { Search, MapPin, SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UMKMCard from "@/components/UMKMCard";
import { categories, umkmList } from "@/data/mockData";
import { useSearchParams } from "react-router-dom";

const Explore = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "";

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = umkmList.filter((u) => {
    const matchesQuery = !query || u.name.toLowerCase().includes(query.toLowerCase()) || u.description.toLowerCase().includes(query.toLowerCase()) || u.products.some(p => p.toLowerCase().includes(query.toLowerCase()));
    const matchesCat = !selectedCategory || u.category === selectedCategory;
    return matchesQuery && matchesCat;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Jelajahi UMKM
          </h1>
          <div className="flex gap-2">
            <div className="flex flex-1 items-center gap-2 rounded-xl border border-border bg-card px-4 shadow-card">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari UMKM, produk, atau lokasi..."
                className="w-full bg-transparent py-3 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button onClick={() => setQuery("")}>
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>
            <Button
              variant="outline"
              className="gap-2 rounded-xl font-body"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="h-4 w-4" /> Filter
            </Button>
            <Button variant="outline" className="gap-2 rounded-xl font-body">
              <MapPin className="h-4 w-4" /> Terdekat
            </Button>
          </div>
        </motion.div>

        {/* Category Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mb-6 overflow-hidden"
          >
            <div className="rounded-xl border border-border bg-card p-4 shadow-card">
              <h3 className="mb-3 font-heading text-sm font-semibold text-foreground">Kategori</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`rounded-full px-4 py-1.5 font-body text-sm transition-colors ${
                    !selectedCategory
                      ? "bg-gradient-primary text-primary-foreground"
                      : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  Semua
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(selectedCategory === cat.name ? "" : cat.name)}
                    className={`rounded-full px-4 py-1.5 font-body text-sm transition-colors ${
                      selectedCategory === cat.name
                        ? "bg-gradient-primary text-primary-foreground"
                        : "border border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Results */}
        <div className="mb-4 font-body text-sm text-muted-foreground">
          Menampilkan {filtered.length} UMKM
          {selectedCategory && <span> dalam kategori <strong className="text-foreground">{selectedCategory}</strong></span>}
          {query && <span> untuk "<strong className="text-foreground">{query}</strong>"</span>}
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((umkm, i) => (
              <UMKMCard key={umkm.id} umkm={umkm} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Search className="mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="font-heading text-lg font-semibold text-foreground">Tidak ada hasil</h3>
            <p className="mt-1 font-body text-sm text-muted-foreground">
              Coba ubah kata kunci atau filter pencarian
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Explore;
