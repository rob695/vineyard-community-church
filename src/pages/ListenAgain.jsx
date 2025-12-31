import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Search, Tag, ChevronDown, ChevronUp, Play, Calendar, User } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ListenAgain() {
  const [searchTerm, setSearchTerm] = useState("");
  const [themeFilter, setThemeFilter] = useState("");
  const [expandedSeries, setExpandedSeries] = useState({});

  const { data: teachingsData, isLoading } = useQuery({
    queryKey: ['teachings'],
    queryFn: async () => {
      const response = await base44.functions.invoke('getTeachings');
      return response.data.teachings || [];
    }
  });

  const teachings = teachingsData || [];

  // Group teachings by series
  const groupedTeachings = useMemo(() => {
    const filtered = teachings.filter(teaching => {
      const matchesSearch = !searchTerm || 
        teaching.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teaching.series_title?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTheme = !themeFilter || 
        teaching.theme?.toLowerCase().includes(themeFilter.toLowerCase());
      
      return matchesSearch && matchesTheme;
    });

    const grouped = {};
    filtered.forEach(teaching => {
      const series = teaching.series_title || 'Other Teachings';
      if (!grouped[series]) {
        grouped[series] = [];
      }
      grouped[series].push(teaching);
    });

    // Sort teachings within each series by date (newest first)
    Object.keys(grouped).forEach(series => {
      grouped[series].sort((a, b) => new Date(b.date) - new Date(a.date));
    });

    return grouped;
  }, [teachings, searchTerm, themeFilter]);

  const toggleSeries = (series) => {
    setExpandedSeries(prev => ({
      ...prev,
      [series]: !prev[series]
    }));
  };

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^&\n?#]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <section className="bg-[#1e3a5f] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
              Listen Again
            </h1>
            <p className="text-white/80 text-lg">
              Catch up on previous Sunday teachings
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="max-w-6xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by Title or Series"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Filter by Theme"
                value={themeFilter}
                onChange={(e) => setThemeFilter(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Teachings List */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading teachings...</p>
          </div>
        ) : Object.keys(groupedTeachings).length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No teachings found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {Object.entries(groupedTeachings).map(([series, seriesTeachings], index) => (
              <motion.div
                key={series}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">

                {/* Series Header */}
                <button
                  onClick={() => toggleSeries(series)}
                  className="w-full p-8 flex items-center justify-between bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] hover:from-[#2a4a6f] hover:to-[#1e3a5f] transition-all duration-300 group">
                  <div className="text-left">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#fde1a1] transition-colors">
                      {series}
                    </h2>
                    <div className="flex items-center gap-4 text-white/80">
                      <span className="flex items-center gap-1 text-sm bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                        <Play className="w-3 h-3" />
                        {seriesTeachings.length} teaching{seriesTeachings.length !== 1 ? 's' : ''}
                      </span>
                      <span className="text-sm">
                        Latest: {new Date(seriesTeachings[0].date).toLocaleDateString('en-GB', { 
                          day: 'numeric', 
                          month: 'short', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-[#d4a853] transition-all duration-300">
                    {expandedSeries[series] ? (
                      <ChevronUp className="w-6 h-6 text-white" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-white" />
                    )}
                  </div>
                </button>

                {/* Teachings in Series */}
                {expandedSeries[series] && (
                  <div className="bg-white">
                    {seriesTeachings.map((teaching, idx) => (
                      <div key={teaching.id} className={`p-8 ${idx !== 0 ? 'border-t border-gray-100' : ''}`}>
                        <div className="grid lg:grid-cols-2 gap-6">
                          {/* Video */}
                          <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                            {getYouTubeEmbedUrl(teaching.youtube_url) ? (
                              <iframe
                                src={getYouTubeEmbedUrl(teaching.youtube_url)}
                                title={teaching.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <Play className="w-12 h-12 text-gray-400" />
                              </div>
                            )}
                          </div>

                          {/* Details */}
                          <div className="flex flex-col justify-center">
                            <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                              {teaching.title}
                            </h3>
                            
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Calendar className="w-4 h-4 text-[#d4a853]" />
                                <span>
                                  {new Date(teaching.date).toLocaleDateString('en-GB', { 
                                    weekday: 'long',
                                    day: 'numeric', 
                                    month: 'long', 
                                    year: 'numeric' 
                                  })}
                                </span>
                              </div>
                              
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <User className="w-4 h-4 text-[#d4a853]" />
                                <span>{teaching.speaker}</span>
                              </div>

                              {teaching.theme && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <Tag className="w-4 h-4 text-[#d4a853]" />
                                  <span>{teaching.theme}</span>
                                </div>
                              )}
                            </div>

                            {teaching.description && (
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {teaching.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}