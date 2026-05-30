export const locales = [
  'ko', // 한국어
  'en', // 영어
  'es', // 스페인어
  'zh', // 중국어
  'fr', // 프랑스어
  'ru', // 러시아어
  'ja', // 일본어
  'hi', // 인도어
  'pt-br', // 포르투갈어 (브라질)
  'ar', // 아랍어
  'tr', // 터키어
  'cs', // 체코어
  'ro', // 루마니아어
  'ms', // 말레이어
  'vi', // 베트남어
  'kk', // 카자흐어
  'mn', // 몽골어
  'uz', // 우즈베키스탄어
  'de', // 독일어
  'tl', // 필리핀어
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ko';

export const localeNames: Record<Locale, string> = {
  ko: '한국어',
  en: 'English',
  es: 'Español',
  zh: '中文',
  fr: 'Français',
  ru: 'Русский',
  ja: '日本語',
  hi: 'हिन्दी',
  'pt-br': 'Português (Brasil)',
  ar: 'العربية',
  tr: 'Türkçe',
  cs: 'Čeština',
  ro: 'Română',
  ms: 'Bahasa Melayu',
  vi: 'Tiếng Việt',
  kk: 'Қазақ',
  mn: 'Монгол',
  uz: 'Ўзбек',
  de: 'Deutsch',
  tl: 'Filipino',
};

export const localeFlags: Record<Locale, string> = {
  ko: '🇰🇷',
  en: '🇬🇧',
  es: '🇪🇸',
  zh: '🇨🇳',
  fr: '🇫🇷',
  ru: '🇷🇺',
  ja: '🇯🇵',
  hi: '🇮🇳',
  'pt-br': '🇧🇷',
  ar: '🇸🇦',
  tr: '🇹🇷',
  cs: '🇨🇿',
  ro: '🇷🇴',
  ms: '🇲🇾',
  vi: '🇻🇳',
  kk: '🇰🇿',
  mn: '🇲🇳',
  uz: '🇺🇿',
  de: '🇩🇪',
  tl: '🇵🇭',
};
