import { LanguageRegion } from "@/utils";

/**
 * Default language if client's language is not supported
 */
export const defaultLng = LanguageRegion.EN_GB;

/**
 * All supported languages
 *
 * Edit this list manually every time you add/remove language in locales directory
 */
export const supportedLngs = [LanguageRegion.EN_GB, LanguageRegion.RU_RU] as const;
