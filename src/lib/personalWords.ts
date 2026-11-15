// Client-side local storage management for personal word collection and spaced repetition

export interface SavedWordItem {
  id: string;
  slug: string;
  modernTurkish: string;
  primaryOttoman: string;
  transliteration: string;
  origin: string;
  firstMeaning?: string;
  savedAt: string;
  learned: boolean;
  reviewCount: number;
  lastReviewedAt?: string;
  nextReviewAt?: string;
}

const STORAGE_KEY = "lugat_saved_words";

export function getSavedWords(): SavedWordItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isWordSaved(slug: string): boolean {
  const words = getSavedWords();
  return words.some((w) => w.slug === slug);
}

export function toggleSaveWord(word: {
  id: string;
  slug: string;
  modernTurkish: string;
  primaryOttoman: string;
  transliteration: string;
  origin: string;
  firstMeaning?: string;
}): boolean {
  const words = getSavedWords();
  const index = words.findIndex((w) => w.slug === word.slug);

  if (index > -1) {
    // Remove
    words.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
    window.dispatchEvent(new Event("lugat_saved_words_changed"));
    return false;
  } else {
    // Add
    const newItem: SavedWordItem = {
      id: word.id,
      slug: word.slug,
      modernTurkish: word.modernTurkish,
      primaryOttoman: word.primaryOttoman,
      transliteration: word.transliteration,
      origin: word.origin,
      firstMeaning: word.firstMeaning,
      savedAt: new Date().toISOString(),
      learned: false,
      reviewCount: 0,
      nextReviewAt: new Date().toISOString(),
    };
    words.unshift(newItem);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
    window.dispatchEvent(new Event("lugat_saved_words_changed"));
    return true;
  }
}

export function updateWordLearnedStatus(slug: string, learned: boolean): void {
  const words = getSavedWords();
  const item = words.find((w) => w.slug === slug);
  if (item) {
    item.learned = learned;
    item.reviewCount = (item.reviewCount || 0) + 1;
    item.lastReviewedAt = new Date().toISOString();
    // Spaced repetition interval: if learned, review in 3 days; if not, tomorrow
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + (learned ? 3 : 1));
    item.nextReviewAt = nextDate.toISOString();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
    window.dispatchEvent(new Event("lugat_saved_words_changed"));
  }
}
