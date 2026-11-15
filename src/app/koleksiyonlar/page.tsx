"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Library,
  Plus,
  ArrowRight,
  BookOpen,
  Sparkles,
  Layers,
  X,
} from "lucide-react";

export default function KoleksiyonlarPage() {
  const [collections, setCollections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [creating, setCreating] = useState(false);

  const fetchCollections = () => {
    fetch("/api/collections")
      .then((res) => res.json())
      .then((data) => {
        setCollections(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setCreating(true);
    try {
      const res = await fetch("/api/collections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTitle.trim(),
          description: newDesc.trim(),
        }),
      });

      if (res.ok) {
        setNewTitle("");
        setNewDesc("");
        setShowModal(false);
        fetchCollections();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E1D5]">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-800 text-xs font-semibold">
            <Library className="w-3.5 h-3.5 text-gold-600" />
            <span>Muntazam Kelime Koleksiyonları</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900">
            Lügat Koleksiyonları
          </h1>
          <p className="text-sm text-ink-600 max-w-2xl leading-relaxed">
            Hukuk, edebi tenkit, tasavvuf veya bürokrasi gibi hususi sahalara ait
            muntazam ıstılah derlemelerini inceleyin ya da kendi özel kelime
            listenizi oluşturun.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-burgundy-700 hover:bg-burgundy-800 text-white font-semibold text-xs transition-colors shadow-sm self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Yeni Koleksiyon Aç</span>
        </button>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="py-20 text-center space-y-3">
          <div className="w-10 h-10 border-4 border-burgundy-700 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm text-ink-500 font-serif">
            Koleksiyonlar getiriliyor...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link
              key={col.id}
              href={`/koleksiyonlar/${col.slug}`}
              className="manuscript-panel p-6 hover:border-burgundy-600 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {col.isFeatured ? (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gold-100 text-gold-900 border border-gold-300 font-bold uppercase">
                      Seçki Koleksiyonu
                    </span>
                  ) : (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-medium">
                      Özel Liste
                    </span>
                  )}
                  <span className="text-xs text-ink-500 font-bold">
                    {col._count.items} Kelime
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-ink-900 group-hover:text-burgundy-700 transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs text-ink-600 leading-relaxed mt-1.5 line-clamp-2">
                    {col.description}
                  </p>
                </div>

                {/* Sample items */}
                {col.items && col.items.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {col.items.map((item: any) => (
                      <span
                        key={item.word.id}
                        className="px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#EAE2D5] text-xs text-ink-800"
                      >
                        {item.word.modernTurkish}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-[#F2ECE1] text-xs font-semibold text-burgundy-700 flex items-center justify-between">
                <span>Koleksiyonu Aç</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Create Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-ink-950/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl border border-[#DFD5C4] max-w-md w-full p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAE3D6]">
              <h3 className="font-serif text-lg font-bold text-ink-900">
                Yeni Özel Koleksiyon Oluştur
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-ink-400 hover:text-ink-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-ink-800 block">
                  Koleksiyon Başlığı:
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Örn: Tanzimat Dönemi Edebi Terimleri"
                  className="w-full px-3 py-2 rounded-xl border border-[#DFD5C4] focus:outline-none focus:border-burgundy-600 text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-ink-800 block">
                  Açıklama:
                </label>
                <textarea
                  rows={3}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Bu koleksiyonun gayesi ve muhtevası..."
                  className="w-full px-3 py-2 rounded-xl border border-[#DFD5C4] focus:outline-none focus:border-burgundy-600 text-sm"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-ink-700 font-semibold"
                >
                  Vazgeç
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="px-5 py-2 rounded-xl bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold shadow-sm"
                >
                  {creating ? "Oluşturuluyor..." : "Koleksiyonu Kaydet"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
