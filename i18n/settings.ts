import { APP_LOCALES } from "../app/constants"
import { AppLocale } from "../app/locales"

export const defaultNS = "common"

export function getOptions(locale: AppLocale = "en", ns = defaultNS) {
  return {
    supportedLngs: APP_LOCALES,
    fallbackLng: "en",
    lng: locale,
    fallbackNS: defaultNS,
    defaultNS: defaultNS,
    ns,
  }
}
