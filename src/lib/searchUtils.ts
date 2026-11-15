// Linguistic search normalization utilities for Ottoman Turkish and Modern Turkish

export function isArabicScript(text: string): boolean {
  return /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text);
}

// Normalizes Arabic/Ottoman script: removes tashkeel, standardizes alef, ya, he, kaf
export function normalizeArabicScript(text: string): string {
  if (!text) return "";
  return text
    // Remove tashkeel (fatha, damma, kasra, sukun, shadda, tanwin)
    .replace(/[\u064B-\u065F\u0670]/g, "")
    // Normalize alef variants (أ, إ, آ, ٱ -> ا)
    .replace(/[أإآٱ]/g, "ا")
    // Normalize ya / alif maqsura (ى -> ي)
    .replace(/ى/g, "ي")
    // Normalize ta marbuta (ة -> ه)
    .replace(/ة/g, "ه")
    // Normalize Persian/Ottoman kaf variants (ك, ک, گ, ڭ -> ك)
    .replace(/[کگڭ]/g, "ك")
    // Normalize Persian pe/che/zhe if desired for fuzzy search
    .replace(/[پ]/g, "ب")
    .replace(/[چ]/g, "ج")
    .replace(/[ژ]/g, "ز")
    .trim();
}

// Normalizes Latin Turkish text, strips accents (â, î, û, ḥ, ḫ, ḳ, ṣ, ṭ, ẓ, ‘, ’)
export function normalizeLatinText(text: string): string {
  if (!text) return "";
  let s = text.toLocaleLowerCase("tr");

  // Replace transliteration special characters
  const charMap: Record<string, string> = {
    "â": "a",
    "î": "i",
    "û": "u",
    "ā": "a",
    "ī": "i",
    "ū": "u",
    "ḥ": "h",
    "ḫ": "h",
    "ḳ": "k",
    "ṣ": "s",
    "ṭ": "t",
    "ẓ": "z",
    "ẕ": "z",
    "ġ": "g",
    "ñ": "n",
    "‘": "",
    "’": "",
    "'": "",
    "`": "",
    "-": "",
  };

  for (const [key, val] of Object.entries(charMap)) {
    s = s.replaceAll(key, val);
  }

  return s
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .trim();
}

export function matchesLinguisticQuery(target: string, query: string): boolean {
  if (!target || !query) return false;

  if (isArabicScript(query)) {
    const normTarget = normalizeArabicScript(target);
    const normQuery = normalizeArabicScript(query);
    return normTarget.includes(normQuery);
  } else {
    const normTarget = normalizeLatinText(target);
    const normQuery = normalizeLatinText(query);
    return normTarget.includes(normQuery);
  }
}
