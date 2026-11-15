"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Settings,
  Plus,
  Upload,
  GitFork,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  FileText,
  Search,
  Filter,
  RefreshCw,
} from "lucide-react";
import VerificationBadge from "@/components/VerificationBadge";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<
    "words" | "add-word" | "add-root" | "import"
  >("words");

  // Words list state
  const [words, setWords] = useState<any[]>([]);
  const [loadingWords, setLoadingWords] = useState(true);
  const [searchQ, setSearchQ] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  // Roots list for dropdown
  const [roots, setRoots] = useState<any[]>([]);
  const [sources, setSources] = useState<any[]>([]);

  // New Word Form State
  const [wordForm, setWordForm] = useState({
    modernTurkish: "",
    primaryOttoman: "",
    transliteration: "",
    origin: "Arapça",
    partOfSpeech: "İsim",
    verificationStatus: "VERIFIED",
    modernEquivalents: "",
    definition: "",
    rootId: "",
    morphPattern: "",
    morphType: "Masdar",
    morphContrib: "",
    sourceId: "src-kamus",
    citation: "",
  });
  const [savingWord, setSavingWord] = useState(false);
  const [wordSaveSuccess, setWordSaveSuccess] = useState("");

  // New Root Form State
  const [rootForm, setRootForm] = useState({
    rootLettersModern: "",
    rootLettersArabic: "",
    origin: "Arapça",
    primaryMeaning: "",
    description: "",
  });
  const [savingRoot, setSavingRoot] = useState(false);
  const [rootSaveSuccess, setRootSaveSuccess] = useState("");

  // Import State
  const [importFormat, setImportFormat] = useState<"json" | "csv">("json");
  const [importData, setImportData] = useState("");
  const [importing, setImporting] = useState(false);
  const [importMessage, setImportMessage] = useState("");

  const fetchWords = () => {
    setLoadingWords(true);
    fetch(`/api/admin/words?q=${encodeURIComponent(searchQ)}&status=${statusFilter}`)
      .then((res) => res.json())
      .then((data) => {
        setWords(data || []);
        setLoadingWords(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingWords(false);
      });
  };

  useEffect(() => {
    fetchWords();
  }, [searchQ, statusFilter]);

  useEffect(() => {
    // Fetch roots for dropdown
    fetch("/api/roots")
      .then((res) => res.json())
      .then((data) => setRoots(data || []));
  }, []);

  // Handle create word
  const handleSaveWord = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingWord(true);
    setWordSaveSuccess("");

    try {
      const res = await fetch("/api/admin/words", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...wordForm,
          definitions: [wordForm.definition],
        }),
      });

      if (res.ok) {
        setWordSaveSuccess("Kelime başarıyla lügate eklendi!");
        setWordForm({
          modernTurkish: "",
          primaryOttoman: "",
          transliteration: "",
          origin: "Arapça",
          partOfSpeech: "İsim",
          verificationStatus: "VERIFIED",
          modernEquivalents: "",
          definition: "",
          rootId: "",
          morphPattern: "",
          morphType: "Masdar",
          morphContrib: "",
          sourceId: "src-kamus",
          citation: "",
        });
        fetchWords();
      } else {
        const err = await res.json();
        alert(err.error || "Kelime kaydedilemedi.");
      }
    } catch (err) {
      console.error(err);
      alert("Sunucu hatası.");
    } finally {
      setSavingWord(false);
    }
  };

  // Handle create root
  const handleSaveRoot = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingRoot(true);
    setRootSaveSuccess("");

    try {
      const res = await fetch("/api/admin/roots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rootForm),
      });

      if (res.ok) {
        setRootSaveSuccess("Etimolojik kök başarıyla oluşturuldu!");
        setRootForm({
          rootLettersModern: "",
          rootLettersArabic: "",
          origin: "Arapça",
          primaryMeaning: "",
          description: "",
        });
        // refresh roots
        fetch("/api/roots")
          .then((r) => r.json())
          .then((data) => setRoots(data || []));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSavingRoot(false);
    }
  };

  // Handle batch import
  const handleImport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!importData.trim()) return;

    setImporting(true);
    setImportMessage("");

    try {
      const res = await fetch("/api/admin/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          format: importFormat,
          data: importData,
        }),
      });

      const json = await res.json();
      if (res.ok) {
        setImportMessage(json.message);
        setImportData("");
        fetchWords();
      } else {
        setImportMessage(`Hata: ${json.error}`);
      }
    } catch (err) {
      setImportMessage("İçe aktarma hatası oluştu.");
    } finally {
      setImporting(false);
    }
  };

  // Update verification status directly
  const handleStatusChange = async (wordId: string, newStatus: string) => {
    try {
      const word = words.find((w) => w.id === wordId);
      if (!word) return;

      const res = await fetch("/api/admin/words", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: wordId,
          ...word,
          verificationStatus: newStatus,
        }),
      });

      if (res.ok) {
        setWords((prev) =>
          prev.map((w) =>
            w.id === wordId ? { ...w, verificationStatus: newStatus } : w
          )
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E1D5]">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-burgundy-700 text-xs font-semibold uppercase tracking-wider">
            <Settings className="w-4 h-4" />
            <span>Sözlük İdare Masası</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-ink-900">
            LÜGAT Yönetim Paneli
          </h1>
          <p className="text-xs text-ink-600">
            Kod yazmadan lügate yeni kelimeler, Osmanlıca imlalar, kökler ve
            müştaklar ekleyin; doğrulama statülerini güncelleyin.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/sozluk"
            className="px-4 py-2 rounded-xl bg-white border border-[#DFD5C4] hover:bg-[#F2ECE1] text-xs font-semibold text-ink-800 transition-colors"
          >
            Sözlüğü Önizle
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center p-1 bg-[#F0EAE1] rounded-xl border border-[#DFD5C4] max-w-xl">
        <button
          onClick={() => setActiveTab("words")}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
            activeTab === "words"
              ? "bg-white text-burgundy-800 shadow-sm"
              : "text-ink-600 hover:text-ink-900"
          }`}
        >
          Kelimeler ({words.length})
        </button>
        <button
          onClick={() => setActiveTab("add-word")}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
            activeTab === "add-word"
              ? "bg-white text-burgundy-800 shadow-sm"
              : "text-ink-600 hover:text-ink-900"
          }`}
        >
          + Yeni Kelime Ekle
        </button>
        <button
          onClick={() => setActiveTab("add-root")}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
            activeTab === "add-root"
              ? "bg-white text-burgundy-800 shadow-sm"
              : "text-ink-600 hover:text-ink-900"
          }`}
        >
          + Yeni Kök Ekle
        </button>
        <button
          onClick={() => setActiveTab("import")}
          className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
            activeTab === "import"
              ? "bg-white text-burgundy-800 shadow-sm"
              : "text-ink-600 hover:text-ink-900"
          }`}
        >
          Toplu İçe Aktar
        </button>
      </div>

      {/* Tab 1: Words Table & Review */}
      {activeTab === "words" && (
        <div className="space-y-4">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-xl bg-white border border-[#DFD5C4]">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-ink-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQ}
                onChange={(e) => setSearchQ(e.target.value)}
                placeholder="Kelime, imla veya kök ara..."
                className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-[#DFD5C4] text-xs font-medium focus:outline-none focus:border-burgundy-600"
              />
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-ink-500 font-medium">Doğrulama:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-[#DFD5C4] bg-white text-ink-700 font-medium"
              >
                <option value="ALL">Tüm Durumlar</option>
                <option value="VERIFIED">Kaynakla Doğrulanmış</option>
                <option value="EDITORIAL">Editoryal Açıklama</option>
                <option value="APPROXIMATE">Yaklaşık Karşılık</option>
                <option value="PENDING">Doğrulama Bekliyor</option>
              </select>
            </div>
          </div>

          {/* Table */}
          {loadingWords ? (
            <div className="py-16 text-center text-xs text-ink-500">
              Yükleniyor...
            </div>
          ) : (
            <div className="manuscript-panel overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#D8CEBC] bg-[#F2EDE2] text-ink-800">
                    <th className="py-3 px-4 font-serif font-semibold">Osmanlıca</th>
                    <th className="py-3 px-4 font-serif font-semibold">Modern Türkçe</th>
                    <th className="py-3 px-4 font-serif font-semibold">Transkripsiyon</th>
                    <th className="py-3 px-4 font-serif font-semibold">Köken / Tür</th>
                    <th className="py-3 px-4 font-serif font-semibold">Kökü</th>
                    <th className="py-3 px-4 font-serif font-semibold">Doğrulama Statüsü</th>
                    <th className="py-3 px-4 font-serif font-semibold text-right">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE8DD]">
                  {words.map((w) => (
                    <tr key={w.id} className="hover:bg-[#F8F5EE] transition-colors">
                      <td
                        dir="rtl"
                        className="py-3 px-4 font-arabic text-xl font-bold text-burgundy-800"
                      >
                        {w.primaryOttoman}
                      </td>
                      <td className="py-3 px-4 font-bold text-ink-900">
                        {w.modernTurkish}
                      </td>
                      <td className="py-3 px-4 font-serif italic text-ink-600">
                        {w.transliteration}
                      </td>
                      <td className="py-3 px-4 text-ink-600">
                        {w.origin} / {w.partOfSpeech}
                      </td>
                      <td className="py-3 px-4 text-gold-800 font-medium">
                        {w.rootRelations && w.rootRelations.length > 0
                          ? `${w.rootRelations[0].root.rootLettersModern} (${w.rootRelations[0].root.rootLettersArabic})`
                          : "—"}
                      </td>
                      <td className="py-3 px-4">
                        <select
                          value={w.verificationStatus}
                          onChange={(e) => handleStatusChange(w.id, e.target.value)}
                          className="px-2 py-1 rounded border border-[#DFD5C4] text-[11px] font-semibold bg-white"
                        >
                          <option value="VERIFIED">Kaynakla doğrulanmış</option>
                          <option value="EDITORIAL">Editoryal açıklama</option>
                          <option value="APPROXIMATE">Yaklaşık karşılık</option>
                          <option value="PENDING">Doğrulama bekliyor</option>
                        </select>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Link
                          href={`/kelime/${w.slug}`}
                          className="text-burgundy-700 hover:underline font-bold"
                        >
                          Görüntüle →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Add Word */}
      {activeTab === "add-word" && (
        <div className="manuscript-panel p-6 sm:p-8 max-w-2xl mx-auto space-y-6">
          <div className="border-b border-[#EAE3D6] pb-4">
            <h3 className="font-serif text-xl font-bold text-ink-900">
              Yeni Kelime ve İmla Maddesi Ekle
            </h3>
            <p className="text-xs text-ink-600 mt-1">
              Doğrulanmış sözlük kaynaklarına dayalı olarak kelimeyi sisteme
              kaydedin.
            </p>
          </div>

          {wordSaveSuccess && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>{wordSaveSuccess}</span>
            </div>
          )}

          <form onSubmit={handleSaveWord} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-ink-800 block">
                  Modern Türkçe Kelime: *
                </label>
                <input
                  type="text"
                  required
                  value={wordForm.modernTurkish}
                  onChange={(e) =>
                    setWordForm({ ...wordForm, modernTurkish: e.target.value })
                  }
                  placeholder="Örn: Müzakere"
                  className="w-full px-3 py-2 rounded-xl border border-[#DFD5C4] text-sm focus:outline-none focus:border-burgundy-600"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-ink-800 block">
                  Osmanlıca İmla (Arap Harfli): *
                </label>
                <input
                  type="text"
                  dir="rtl"
                  required
                  value={wordForm.primaryOttoman}
                  onChange={(e) =>
                    setWordForm({ ...wordForm, primaryOttoman: e.target.value })
                  }
                  placeholder="مذاكره"
                  className="w-full px-3 py-2 rounded-xl border border-[#DFD5C4] font-arabic text-xl font-bold text-burgundy-800 focus:outline-none focus:border-burgundy-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-ink-800 block">
                  Transkripsiyon / Telaffuz:
                </label>
                <input
                  type="text"
                  value={wordForm.transliteration}
                  onChange={(e) =>
                    setWordForm({ ...wordForm, transliteration: e.target.value })
                  }
                  placeholder="Müẕâkere"
                  className="w-full px-3 py-2 rounded-xl border border-[#DFD5C4] font-serif italic text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-ink-800 block">Menşei:</label>
                <select
                  value={wordForm.origin}
                  onChange={(e) =>
                    setWordForm({ ...wordForm, origin: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#DFD5C4] text-sm bg-white"
                >
                  <option value="Arapça">Arapça</option>
                  <option value="Farsça">Farsça</option>
                  <option value="Türkçe">Türkçe</option>
                  <option value="İtalyanca">İtalyanca</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-ink-800 block">Tür:</label>
                <select
                  value={wordForm.partOfSpeech}
                  onChange={(e) =>
                    setWordForm({ ...wordForm, partOfSpeech: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-[#DFD5C4] text-sm bg-white"
                >
                  <option value="İsim">İsim</option>
                  <option value="Sıfat">Sıfat</option>
                  <option value="Fiil">Fiil</option>
                  <option value="Zarf">Zarf</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-ink-800 block">
                Doğrulama Statüsü:
              </label>
              <select
                value={wordForm.verificationStatus}
                onChange={(e) =>
                  setWordForm({
                    ...wordForm,
                    verificationStatus: e.target.value,
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-[#DFD5C4] text-sm bg-white"
              >
                <option value="VERIFIED">Kaynakla doğrulanmış (Muteber)</option>
                <option value="EDITORIAL">Editoryal açıklama</option>
                <option value="APPROXIMATE">Yaklaşık karşılık</option>
                <option value="PENDING">Doğrulama bekliyor</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-ink-800 block">
                Lügat Tanımı ve Anlamı: *
              </label>
              <textarea
                required
                rows={3}
                value={wordForm.definition}
                onChange={(e) =>
                  setWordForm({ ...wordForm, definition: e.target.value })
                }
                placeholder="Kelimenin sözlükteki sarih manası..."
                className="w-full px-3 py-2 rounded-xl border border-[#DFD5C4] text-sm focus:outline-none focus:border-burgundy-600"
              />
            </div>

            {/* Root Assignment */}
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5] space-y-3">
              <span className="font-bold text-ink-900 block font-serif">
                İştikak ve Kök Bağlantısı (Opsiyonel):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-ink-600 block mb-1">Bağlı Kök:</label>
                  <select
                    value={wordForm.rootId}
                    onChange={(e) =>
                      setWordForm({ ...wordForm, rootId: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-[#DFD5C4] bg-white text-xs"
                  >
                    <option value="">(Müstakil / Köksüz)</option>
                    {roots.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.rootLettersModern} ({r.rootLettersArabic}) —{" "}
                        {r.primaryMeaning}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-ink-600 block mb-1">Vezin / Bâb:</label>
                  <input
                    type="text"
                    value={wordForm.morphPattern}
                    onChange={(e) =>
                      setWordForm({ ...wordForm, morphPattern: e.target.value })
                    }
                    placeholder="Mufâ'ale bâbı (مُفَاعَلَة)"
                    className="w-full px-3 py-2 rounded-lg border border-[#DFD5C4] bg-white text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={savingWord}
                className="px-6 py-2.5 rounded-xl bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs shadow-sm"
              >
                {savingWord ? "Kaydediliyor..." : "Kelimeyi Sisteme Ekle"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tab 3: Add Root */}
      {activeTab === "add-root" && (
        <div className="manuscript-panel p-6 sm:p-8 max-w-xl mx-auto space-y-6">
          <div className="border-b border-[#EAE3D6] pb-4">
            <h3 className="font-serif text-xl font-bold text-ink-900">
              Yeni İştikak Kökü Tanımla
            </h3>
            <p className="text-xs text-ink-600 mt-1">
              Üç harfli veya dört harfli asli kökü oluşturarak türevleri bu köke
              bağlayın.
            </p>
          </div>

          {rootSaveSuccess && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>{rootSaveSuccess}</span>
            </div>
          )}

          <form onSubmit={handleSaveRoot} className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-ink-800 block">
                  Kök Harfleri (Latin): *
                </label>
                <input
                  type="text"
                  required
                  value={rootForm.rootLettersModern}
                  onChange={(e) =>
                    setRootForm({
                      ...rootForm,
                      rootLettersModern: e.target.value.toUpperCase(),
                    })
                  }
                  placeholder="Örn: F-T-H"
                  className="w-full px-3 py-2 rounded-xl border border-[#DFD5C4] font-serif font-bold text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-ink-800 block">
                  Kök Harfleri (Arapça): *
                </label>
                <input
                  type="text"
                  dir="rtl"
                  required
                  value={rootForm.rootLettersArabic}
                  onChange={(e) =>
                    setRootForm({
                      ...rootForm,
                      rootLettersArabic: e.target.value,
                    })
                  }
                  placeholder="ف-ت-ح"
                  className="w-full px-3 py-2 rounded-xl border border-[#DFD5C4] font-arabic font-bold text-xl text-burgundy-800"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-ink-800 block">
                Asıl Semantik Kök Manası: *
              </label>
              <input
                type="text"
                required
                value={rootForm.primaryMeaning}
                onChange={(e) =>
                  setRootForm({ ...rootForm, primaryMeaning: e.target.value })
                }
                placeholder="Örn: Açma, fethetme, engeli kaldırma"
                className="w-full px-3 py-2 rounded-xl border border-[#DFD5C4] text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-ink-800 block">
                Etimolojik ve Morfolojik Açıklama:
              </label>
              <textarea
                rows={3}
                value={rootForm.description}
                onChange={(e) =>
                  setRootForm({ ...rootForm, description: e.target.value })
                }
                placeholder="Kökün asıl menbaı, lügatlerdeki yeri..."
                className="w-full px-3 py-2 rounded-xl border border-[#DFD5C4] text-sm"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={savingRoot}
                className="px-6 py-2.5 rounded-xl bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs shadow-sm"
              >
                {savingRoot ? "Oluşturuluyor..." : "Kökü Kaydet"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tab 4: Batch Import (JSON / CSV) */}
      {activeTab === "import" && (
        <div className="manuscript-panel p-6 sm:p-8 max-w-2xl mx-auto space-y-6">
          <div className="border-b border-[#EAE3D6] pb-4">
            <h3 className="font-serif text-xl font-bold text-ink-900">
              Toplu Kelime İçe Aktarımı (Batch Import)
            </h3>
            <p className="text-xs text-ink-600 mt-1">
              JSON veya CSV formatındaki kelime listelerini tek seferde veri
              tabanına aktarın.
            </p>
          </div>

          {importMessage && (
            <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-300 text-ink-800 text-xs font-semibold">
              {importMessage}
            </div>
          )}

          <form onSubmit={handleImport} className="space-y-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-bold text-ink-800">Veri Formatı:</span>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="format"
                  checked={importFormat === "json"}
                  onChange={() => setImportFormat("json")}
                />
                <span>JSON Dizisi</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="format"
                  checked={importFormat === "csv"}
                  onChange={() => setImportFormat("csv")}
                />
                <span>CSV (Virgülle Ayrılmış)</span>
              </label>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-ink-800 block">
                {importFormat === "json"
                  ? "JSON Verisi (Array of objects):"
                  : "CSV Başlık Sırası: modernTurkish,primaryOttoman,transliteration,origin,partOfSpeech,meaning"}
              </label>
              <textarea
                rows={8}
                required
                value={importData}
                onChange={(e) => setImportData(e.target.value)}
                placeholder={
                  importFormat === "json"
                    ? '[\n  {\n    "modernTurkish": "Tefekkür",\n    "primaryOttoman": "تفكر",\n    "transliteration": "Tefekkür",\n    "origin": "Arapça",\n    "definition": "Derin düşünüş"\n  }\n]'
                    : "modernTurkish,primaryOttoman,transliteration,origin,partOfSpeech,meaning\nTefekkür,تفكر,Tefekkür,Arapça,İsim,Derin düşünüş"
                }
                className="w-full px-3 py-2 rounded-xl border border-[#DFD5C4] font-mono text-xs focus:outline-none focus:border-burgundy-600"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={importing}
                className="px-6 py-2.5 rounded-xl bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs shadow-sm flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                <span>{importing ? "Aktarılıyor..." : "Toplu İçe Aktar"}</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
