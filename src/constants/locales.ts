export const SUPPORTED_LOCALES = [
  // order as they appear in the language dropdown
  'en-US',
  'af-ZA',
  'ar-SA',
  'ca-ES',
  'cs-CZ',
  'da-DK',
  'de-DE',
  'el-GR',
  'es-ES',
  'fi-FI',
  'fr-FR',
  'he-IL',
  'hu-HU',
  'id-ID',
  'it-IT',
  'ja-JP',
  'ko-KR',
  'nl-NL',
  'no-NO',
  'pl-PL',
  'pt-BR',
  'pt-PT',
  'ro-RO',
  'ru-RU',
  'sr-SP',
  'sv-SE',
  'sw-TZ',
  'tr-TR',
  'uk-UA',
  'vi-VN',
  'zh-CN',
  'zh-TW',
  'zh-HK',
]
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

export const DEFAULT_LOCALE: SupportedLocale = 'en-US'
export { messages as DEFAULT_MESSAGES } from 'locales/en-US'

export const LOCALE_LABEL: { [locale in SupportedLocale]: string } = {
  'af-ZA': 'Afrikaans',
  'ar-SA': 'العربية',
  'ca-ES': 'Català',
  'cs-CZ': 'čeština',
  'da-DK': 'dansk',
  'de-DE': 'Deutsch',
  'el-GR': 'ελληνικά',
  'en-US': 'English',
  'es-ES': 'Español',
  'fi-FI': 'suomi',
  'fr-FR': 'français',
  'he-IL': 'עִברִית',
  'hu-HU': 'Magyar',
  'id-ID': 'bahasa Indonesia',
  'it-IT': 'Italiano',
  'ja-JP': '日本語',
  'ko-KR': '한국어',
  'nl-NL': 'Nederlands',
  'no-NO': 'norsk',
  'pl-PL': 'Polskie',
  'pt-BR': 'português',
  'pt-PT': 'português',
  'ro-RO': 'Română',
  'ru-RU': 'русский',
  'sr-SP': 'Српски',
  'sv-SE': 'svenska',
  'sw-TZ': 'Kiswahili',
  'tr-TR': 'Türkçe',
  'uk-UA': 'Український',
  'vi-VN': 'Tiếng Việt',
  'zh-CN': '简体中文',
  'zh-TW': '繁体中文',
  'zh-HK': '繁体中文',
  'vi-VI': 'Tiếng Việt'
}


export const LANGS_MAP = {
  'en-US': 'en',
  'ru-RU': 'ru_RU',
  'tr-TR': 'tr',
  'zh-HK': 'zh_HK',
  'zh-CN': 'zh_CN',
  'ko-KR': 'ko',
  'ja-JP': 'ja',
  'es-ES': 'es_ES',
  'pt-PT': 'pt_PT',
  'de-DE': 'de_DE',
  'fr-FR': 'fr',
  'vi-VN': 'vi',

  // en: 'en-US',
  // ru_RU: 'ru-RU',
  // tr: 'tr-TR',
  // zh_HK: 'zh-HK',
  // zh_CN: 'zh-CN',
  // ko: 'ko-KR',
  // ja: 'ja-JP',
  // // hi: 'hi',
  // es_ES: 'es-ES',
  // pt_PT: 'pt-PT',
  // de_DE: 'de-DE',
  // fr: 'fr-FR',
  // vi: 'vi-VI'

}

export const getXDOGELang = (from: string) => {
  const lngs = Object.entries(LANGS_MAP);
  return lngs.filter(v => {
    if(v[1] === from){
      return true;
    }
    return false;
  })[0];
}