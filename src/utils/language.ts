/**
 * Two-letter language code (ISO 639-1).
 *
 * @link https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
 */
export const Language = {
  /**
   * Afrikaans
   */
  AF: "af" as const,
  /**
   * Amharic (አማርኛ)
   */
  AM: "am" as const,
  /**
   * Arabic (العربية)
   */
  AR: "ar" as const,
  /**
   * Azerbaijani (Azərbaycanca)
   */
  AZ: "az" as const,
  /**
   * Belarusian (Беларуская)
   */
  BE: "be" as const,
  /**
   * Bulgarian (Български)
   */
  BG: "bg" as const,
  /**
   * Bengali (বাংলা)
   */
  BN: "bn" as const,
  /**
   * Czech (Čeština)
   */
  CS: "cs" as const,
  /**
   * Danish (Dansk)
   */
  DA: "da" as const,
  /**
   * German (Deutsch)
   */
  DE: "de" as const,
  /**
   * Greek (Ελληνικά)
   */
  EL: "el" as const,
  /**
   * English
   */
  EN: "en" as const,
  /**
   * Spanish (Español)
   */
  ES: "es" as const,
  /**
   * Estonian (Eesti)
   */
  ET: "et" as const,
  /**
   * Persian (فارسی)
   */
  FA: "fa" as const,
  /**
   * Finnish (Suomi)
   */
  FI: "fi" as const,
  /**
   * French (Français)
   */
  FR: "fr" as const,
  /**
   * Irish (Gaeilge)
   */
  GA: "ga" as const,
  /**
   * Hebrew (עברית)
   */
  HE: "he" as const,
  /**
   * Hindi (हिन्दी)
   */
  HI: "hi" as const,
  /**
   * Croatian (Hrvatski)
   */
  HR: "hr" as const,
  /**
   * Hungarian (Magyar)
   */
  HU: "hu" as const,
  /**
   * Armenian (Հայերեն)
   */
  HY: "hy" as const,
  /**
   * Indonesian (Bahasa Indonesia)
   */
  ID: "id" as const,
  /**
   * Icelandic (Íslenska)
   */
  IS: "is" as const,
  /**
   * Italian (Italiano)
   */
  IT: "it" as const,
  /**
   * Japanese (日本語)
   */
  JA: "ja" as const,
  /**
   * Georgian (ქართული)
   */
  KA: "ka" as const,
  /**
   * Khmer (ខ្មែរ)
   */
  KM: "km" as const,
  /**
   * Korean (한국어)
   */
  KO: "ko" as const,
  /**
   * Lao (ລາວ)
   */
  LO: "lo" as const,
  /**
   * Lithuanian (Lietuvių)
   */
  LT: "lt" as const,
  /**
   * Latvian (Latviešu)
   */
  LV: "lv" as const,
  /**
   * Mongolian (Монгол)
   */
  MN: "mn" as const,
  /**
   * Malay (Bahasa Melayu)
   */
  MS: "ms" as const,
  /**
   * Maltese (Malti)
   */
  MT: "mt" as const,
  /**
   * Burmese (မြန်မာ)
   */
  MY: "my" as const,
  /**
   * Norwegian Bokmål (Norsk bokmål)
   */
  NB: "nb" as const,
  /**
   * Nepali (नेपाली)
   */
  NE: "ne" as const,
  /**
   * Dutch (Nederlands)
   */
  NL: "nl" as const,
  /**
   * Polish (Polski)
   */
  PL: "pl" as const,
  /**
   * Portuguese (Português)
   */
  PT: "pt" as const,
  /**
   * Romanian (Română)
   */
  RO: "ro" as const,
  /**
   * Russian (Русский)
   */
  RU: "ru" as const,
  /**
   * Sinhala (සිංහල)
   */
  SI: "si" as const,
  /**
   * Slovak (Slovenčina)
   */
  SK: "sk" as const,
  /**
   * Slovenian (Slovenščina)
   */
  SL: "sl" as const,
  /**
   * Albanian (Shqip)
   */
  SQ: "sq" as const,
  /**
   * Serbian (Српски)
   */
  SR: "sr" as const,
  /**
   * Swedish (Svenska)
   */
  SV: "sv" as const,
  /**
   * Tamil (தமிழ்)
   */
  TA: "ta" as const,
  /**
   * Thai (ไทย)
   */
  TH: "th" as const,
  /**
   * Turkish (Türkçe)
   */
  TR: "tr" as const,
  /**
   * Ukrainian (Українська)
   */
  UK: "uk" as const,
  /**
   * Urdu (اردو)
   */
  UR: "ur" as const,
  /**
   * Vietnamese (Tiếng Việt)
   */
  VI: "vi" as const,
  /**
   * Chinese (中文)
   */
  ZH: "zh" as const,
} as const;

export type LanguageKey = keyof typeof Language;
export type LanguageValue = (typeof Language)[LanguageKey];

/**
 * A two-letter language code and a two-letter region code, connected by a hyphen (ISO 639-1 + ISO 3166-1 alpha-2)
 *
 * @link https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
 * @link https://en.wikipedia.org/wiki/ISO_3166-2
 * @link https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
 * @link https://www.rfc-editor.org/rfc/rfc5646
 */
export const LanguageRegion = {
  /**
   * Afrikaans — South Africa
   */
  AF_ZA: "af-ZA" as const,
  /**
   * Amharic — Ethiopia
   */
  AM_ET: "am-ET" as const,
  /**
   * Arabic (Modern Standard) — Saudi Arabia (common default)
   */
  AR_SA: "ar-SA" as const,
  /**
   * Azerbaijani — Azerbaijan (Latin script)
   */
  AZ_AZ: "az-AZ" as const,
  /**
   * Belarusian — Belarus
   */
  BE_BY: "be-BY" as const,
  /**
   * Bulgarian — Bulgaria
   */
  BG_BG: "bg-BG" as const,
  /**
   * Bengali — Bangladesh (common standardized form)
   */
  BN_BD: "bn-BD" as const,
  /**
   * Bengali — India
   */
  BN_IN: "bn-IN" as const,
  /**
   * Czech — Czech Republic
   */
  CS_CZ: "cs-CZ" as const,
  /**
   * Danish — Denmark
   */
  DA_DK: "da-DK" as const,
  /**
   * German — Germany
   */
  DE_DE: "de-DE" as const,
  /**
   * Greek — Greece
   */
  EL_GR: "el-GR" as const,
  /**
   * English — Australia
   */
  EN_AU: "en-AU" as const,
  /**
   * English — United Kingdom (British English)
   */
  EN_GB: "en-GB" as const,
  /**
   * English — United States (common default)
   */
  EN_US: "en-US" as const,
  /**
   * Spanish — Argentina
   */
  ES_AR: "es-AR" as const,
  /**
   * Spanish — Spain (Peninsular)
   */
  ES_ES: "es-ES" as const,
  /**
   * Spanish — Mexico (Latin America variant)
   */
  ES_MX: "es-MX" as const,
  /**
   * Estonian — Estonia
   */
  ET_EE: "et-EE" as const,
  /**
   * Persian (Dari) — Afghanistan
   */
  FA_AF: "fa-AF" as const,
  /**
   * Persian (Farsi) — Iran
   */
  FA_IR: "fa-IR" as const,
  /**
   * Finnish — Finland
   */
  FI_FI: "fi-FI" as const,
  /**
   * French — France
   */
  FR_FR: "fr-FR" as const,
  /**
   * Irish — Ireland
   */
  GA_IE: "ga-IE" as const,
  /**
   * Hebrew — Israel
   */
  HE_IL: "he-IL" as const,
  /**
   * Hindi — India
   */
  HI_IN: "hi-IN" as const,
  /**
   * Croatian — Croatia
   */
  HR_HR: "hr-HR" as const,
  /**
   * Hungarian — Hungary
   */
  HU_HU: "hu-HU" as const,
  /**
   * Armenian — Armenia
   */
  HY_AM: "hy-AM" as const,
  /**
   * Indonesian — Indonesia
   */
  ID_ID: "id-ID" as const,
  /**
   * Icelandic — Iceland
   */
  IS_IS: "is-IS" as const,
  /**
   * Italian — Italy
   */
  IT_IT: "it-IT" as const,
  /**
   * Japanese — Japan
   */
  JA_JP: "ja-JP" as const,
  /**
   * Georgian — Georgia
   */
  KA_GE: "ka-GE" as const,
  /**
   * Khmer — Cambodia
   */
  KM_KH: "km-KH" as const,
  /**
   * Korean — South Korea
   */
  KO_KR: "ko-KR" as const,
  /**
   * Lao — Laos
   */
  LO_LA: "lo-LA" as const,
  /**
   * Lithuanian — Lithuania
   */
  LT_LT: "lt-LT" as const,
  /**
   * Latvian — Latvia
   */
  LV_LV: "lv-LV" as const,
  /**
   * Mongolian — Mongolia
   */
  MN_MN: "mn-MN" as const,
  /**
   * Malay — Brunei
   */
  MS_BN: "ms-BN" as const,
  /**
   * Malay — Malaysia
   */
  MS_MY: "ms-MY" as const,
  /**
   * Malay — Singapore
   */
  MS_SG: "ms-SG" as const,
  /**
   * Maltese — Malta
   */
  MT_MT: "mt-MT" as const,
  /**
   * Burmese — Myanmar
   */
  MY_MM: "my-MM" as const,
  /**
   * Norwegian Bokmål — Norway
   */
  NB_NO: "nb-NO" as const,
  /**
   * Nepali — Nepal
   */
  NE_NP: "ne-NP" as const,
  /**
   * Dutch — Netherlands
   */
  NL_NL: "nl-NL" as const,
  /**
   * Norwegian Nynorsk — Norway
   */
  NN_NO: "nn-NO" as const,
  /**
   * Polish — Poland
   */
  PL_PL: "pl-PL" as const,
  /**
   * Portuguese — Brazil (Brazilian Portuguese)
   */
  PT_BR: "pt-BR" as const,
  /**
   * Portuguese — Portugal
   */
  PT_PT: "pt-PT" as const,
  /**
   * Romanian — Romania
   */
  RO_RO: "ro-RO" as const,
  /**
   * Russian — Russia
   */
  RU_RU: "ru-RU" as const,
  /**
   * Sinhala — Sri Lanka
   */
  SI_LK: "si-LK" as const,
  /**
   * Slovak — Slovakia
   */
  SK_SK: "sk-SK" as const,
  /**
   * Slovenian — Slovenia
   */
  SL_SI: "sl-SI" as const,
  /**
   * Albanian — Albania
   */
  SQ_AL: "sq-AL" as const,
  /**
   * Serbian — Serbia (use script subtags if needed)
   */
  SR_RS: "sr-RS" as const,
  /**
   * Swedish — Sweden
   */
  SV_SE: "sv-SE" as const,
  /**
   * Tamil — India
   */
  TA_IN: "ta-IN" as const,
  /**
   * Tamil — Sri Lanka
   */
  TA_LK: "ta-LK" as const,
  /**
   * Tamil — Singapore
   */
  TA_SG: "ta-SG" as const,
  /**
   * Thai — Thailand
   */
  TH_TH: "th-TH" as const,
  /**
   * Turkish — Turkey
   */
  TR_TR: "tr-TR" as const,
  /**
   * Ukrainian — Ukraine
   */
  UK_UA: "uk-UA" as const,
  /**
   * Urdu — Pakistan
   */
  UR_PK: "ur-PK" as const,
  /**
   * Vietnamese — Vietnam
   */
  VI_VN: "vi-VN" as const,
  /**
   * Chinese — Simplified (Mainland China)
   */
  ZH_CN: "zh-CN" as const,
  /**
   * Chinese — Traditional (Hong Kong; Cantonese use-case)
   */
  ZH_HK: "zh-HK" as const,
  /**
   * Chinese — Traditional (Taiwan)
   */
  ZH_TW: "zh-TW" as const,
} as const;

export type LanguageRegionKey = keyof typeof LanguageRegion;
export type LanguageRegionValue = (typeof LanguageRegion)[LanguageRegionKey];

/**
 * Maps a locale code (BCP 47 language tag) to its human-readable display name
 * written in the locale's own language.
 *
 * Country/region is included only when necessary to distinguish variants
 * of the same language.
 *
 * Examples:
 * - "en-US" → "English (United States)"
 * - "de-DE" → "Deutsch"
 * - "ru-RU" → "Русский"
 * - "ja-JP" → "日本語"
 */
export const localeDisplayNameByCode: Record<LanguageRegionValue, string> = {
  [LanguageRegion.AF_ZA]: "Afrikaans",
  [LanguageRegion.AM_ET]: "አማርኛ",
  [LanguageRegion.AR_SA]: "العربية",
  [LanguageRegion.AZ_AZ]: "azərbaycan dili",
  [LanguageRegion.BE_BY]: "Беларуская",
  [LanguageRegion.BG_BG]: "Български",
  [LanguageRegion.BN_BD]: "বাংলা (বাংলাদেশ)",
  [LanguageRegion.BN_IN]: "বাংলা (ভারত)",
  [LanguageRegion.CS_CZ]: "Čeština",
  [LanguageRegion.DA_DK]: "Dansk",
  [LanguageRegion.DE_DE]: "Deutsch",
  [LanguageRegion.EL_GR]: "Ελληνικά",
  [LanguageRegion.EN_AU]: "English (Australia)",
  [LanguageRegion.EN_GB]: "English (United Kingdom)",
  [LanguageRegion.EN_US]: "English (United States)",
  [LanguageRegion.ES_AR]: "Español (Argentina)",
  [LanguageRegion.ES_ES]: "Español (España)",
  [LanguageRegion.ES_MX]: "Español (México)",
  [LanguageRegion.ET_EE]: "Eesti",
  [LanguageRegion.FA_AF]: "دری",
  [LanguageRegion.FA_IR]: "فارسی",
  [LanguageRegion.FI_FI]: "Suomi",
  [LanguageRegion.FR_FR]: "Français",
  [LanguageRegion.GA_IE]: "Gaeilge",
  [LanguageRegion.HE_IL]: "עברית",
  [LanguageRegion.HI_IN]: "हिन्दी",
  [LanguageRegion.HR_HR]: "Hrvatski",
  [LanguageRegion.HU_HU]: "Magyar",
  [LanguageRegion.HY_AM]: "Հայերեն",
  [LanguageRegion.ID_ID]: "Bahasa Indonesia",
  [LanguageRegion.IS_IS]: "Íslenska",
  [LanguageRegion.IT_IT]: "Italiano",
  [LanguageRegion.JA_JP]: "日本語",
  [LanguageRegion.KA_GE]: "ქართული",
  [LanguageRegion.KM_KH]: "ភាសាខ្មែរ",
  [LanguageRegion.KO_KR]: "한국어",
  [LanguageRegion.LO_LA]: "ລາວ",
  [LanguageRegion.LT_LT]: "Lietuvių",
  [LanguageRegion.LV_LV]: "Latviešu",
  [LanguageRegion.MN_MN]: "Монгол",
  [LanguageRegion.MS_BN]: "Bahasa Melayu (Brunei)",
  [LanguageRegion.MS_MY]: "Bahasa Melayu (Malaysia)",
  [LanguageRegion.MS_SG]: "Bahasa Melayu (Singapore)",
  [LanguageRegion.MT_MT]: "Malti",
  [LanguageRegion.MY_MM]: "မြန်မာစာ",
  [LanguageRegion.NB_NO]: "Norsk Bokmål",
  [LanguageRegion.NE_NP]: "नेपाली",
  [LanguageRegion.NL_NL]: "Nederlands",
  [LanguageRegion.NN_NO]: "Norsk Nynorsk",
  [LanguageRegion.PL_PL]: "Polski",
  [LanguageRegion.PT_BR]: "Português (Brasil)",
  [LanguageRegion.PT_PT]: "Português (Portugal)",
  [LanguageRegion.RO_RO]: "Română",
  [LanguageRegion.RU_RU]: "Русский",
  [LanguageRegion.SI_LK]: "සිංහල",
  [LanguageRegion.SK_SK]: "Slovenčina",
  [LanguageRegion.SL_SI]: "Slovenščina",
  [LanguageRegion.SQ_AL]: "Shqip",
  [LanguageRegion.SR_RS]: "Српски",
  [LanguageRegion.SV_SE]: "Svenska",
  [LanguageRegion.TA_IN]: "தமிழ் (இந்தியா)",
  [LanguageRegion.TA_LK]: "தமிழ் (இலங்கை)",
  [LanguageRegion.TA_SG]: "தமிழ் (சிங்கப்பூர்)",
  [LanguageRegion.TH_TH]: "ไทย",
  [LanguageRegion.TR_TR]: "Türkçe",
  [LanguageRegion.UK_UA]: "Українська",
  [LanguageRegion.UR_PK]: "اردو",
  [LanguageRegion.VI_VN]: "Tiếng Việt",
  [LanguageRegion.ZH_CN]: "中文（简体）",
  [LanguageRegion.ZH_HK]: "中文（繁體，香港）",
  [LanguageRegion.ZH_TW]: "中文（繁體，台灣）",
} as const;
