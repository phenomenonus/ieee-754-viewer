import type { InitOptions } from "i18next";

import { defaultLng, supportedLngs } from "./languages";
import { defaultNS, ns } from "./namespaces";

export const config: InitOptions = {
  // Enables useful output in the browser’s
  // dev console.
  debug: import.meta.env.DEV,

  // Default namespace in languages
  defaultNS,

  detection: {
    caches: ["localStorage"],
    order: ["localStorage", "navigator"],
  },

  // Fallback locale used when a translation is
  // missing in the active locale. Again, use your
  // preferred locale here.
  fallbackLng: defaultLng,
  fallbackNS: defaultNS,

  // Normally, we want `escapeValue: true` as it
  // ensures that i18next escapes any code in
  // translation messages, safeguarding against
  // XSS (cross-site scripting) attacks. However,
  // React does this escaping itself, so we turn
  // it off in i18next.
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },

  // Specifies the default language (locale) used
  // when a user visits our site for the first time.
  // We use English here, but feel free to use
  // whichever locale you want.
  lng: defaultLng,

  load: "currentOnly",

  // Spicifies all supported namespaces in languages
  ns,

  // All supported languages
  supportedLngs,
};
