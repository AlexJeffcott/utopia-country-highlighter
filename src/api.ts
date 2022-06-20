const fetchCountries = async (): Promise<Country[]> => countriesMock

const countriesReducer = (acc: ContinentCountryMap, cur: Country) => {
    if (acc[cur.continent]) 
        return {...acc, [cur.continent]: [...acc[cur.continent], cur.name]}
    return {...acc, [cur.continent]: [cur.name]}
}

export const getContinentCountryMap = async (): Promise<ContinentCountryMap> => fetchCountries().then(countries => countries.reduce(countriesReducer, {}))

export type ContinentCountryMap = Record<Country['continent'], Country['name'][]>

type Country = {
    name: string
    topLevelDomain: string[]
    alpha2Code: string
    alpha3Code: string
    callingCodes: string[]
    capital?: string
    altSpellings: string[]
    region: string
    continent: string
    population: number
    latlng?: [number, number]
    demonym?: string
    area?: number
    gini?: number
    timezones: string[]
    borders?: string[]
    nativeName: string
    numericCode: string
    currencies: Record<string, string>[]
    languages: Record<string, string>[]
    translations: Record<string, string>
    flags: string[]
    regionalBlocs?: Record<string, string|string[]>[]
    cioc?: string
    independent: boolean
  }

  const countriesMock: Country[] = [
    {
      "name": "Afghanistan",
      "topLevelDomain": [
        ".af"
      ],
      "alpha2Code": "AF",
      "alpha3Code": "AFG",
      "callingCodes": [
        "93"
      ],
      "capital": "Kabul",
      "altSpellings": [
        "AF",
        "Afġānistān"
      ],
      "region": "Southern Asia",
      "continent": "Asia",
      "population": 27657145,
      "latlng": [
        33,
        65
      ],
      "demonym": "Afghan",
      "area": 652230,
      "gini": 29.4,
      "timezones": [
        "UTC+04:30"
      ],
      "borders": [
        "IRN",
        "PAK",
        "TKM",
        "UZB",
        "TJK",
        "CHN"
      ],
      "nativeName": "افغانستان",
      "numericCode": "004",
      "currencies": [
        {
          "code": "AFN",
          "name": "Afghan afghani",
          "symbol": "؋"
        }
      ],
      "languages": [
        {
          "iso639_1": "ps",
          "iso639_2": "pus",
          "name": "Pashto",
          "nativeName": "پښتو"
        },
        {
          "iso639_1": "uz",
          "iso639_2": "uzb",
          "name": "Uzbek",
          "nativeName": "Oʻzbek"
        },
        {
          "iso639_1": "tk",
          "iso639_2": "tuk",
          "name": "Turkmen",
          "nativeName": "Türkmen"
        }
      ],
      "translations": {
        "br": "Afeganistão",
        "pt": "Afeganistão",
        "nl": "Afghanistan",
        "hr": "Afganistan",
        "fa": "افغانستان",
        "de": "Afghanistan",
        "es": "Afganistán",
        "fr": "Afghanistan",
        "ja": "アフガニスタン",
        "it": "Afghanistan",
        "hu": "Afganisztán"
      },
      "flags": [
        "https://restcountries.com/data/afg.svg",
        "https://restcountries.com/data/png/afg.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "AFG",
      "independent": true
    },
    {
      "name": "Albania",
      "topLevelDomain": [
        ".al"
      ],
      "alpha2Code": "AL",
      "alpha3Code": "ALB",
      "callingCodes": [
        "355"
      ],
      "capital": "Tirana",
      "altSpellings": [
        "AL",
        "Shqipëri",
        "Shqipëria",
        "Shqipnia"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 2886026,
      "latlng": [
        41,
        20
      ],
      "demonym": "Albanian",
      "area": 28748,
      "gini": 33.2,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "MNE",
        "GRC",
        "MKD",
        "KOS"
      ],
      "nativeName": "Shqipëria",
      "numericCode": "008",
      "currencies": [
        {
          "code": "ALL",
          "name": "Albanian lek",
          "symbol": "L"
        }
      ],
      "languages": [
        {
          "iso639_1": "sq",
          "iso639_2": "sqi",
          "name": "Albanian",
          "nativeName": "Shqip"
        }
      ],
      "translations": {
        "br": "Albânia",
        "pt": "Albânia",
        "nl": "Albanië",
        "hr": "Albanija",
        "fa": "آلبانی",
        "de": "Albanien",
        "es": "Albania",
        "fr": "Albanie",
        "ja": "アルバニア",
        "it": "Albania",
        "hu": "Albánia"
      },
      "flags": [
        "https://restcountries.com/data/alb.svg",
        "https://restcountries.com/data/png/alb.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CEFTA",
          "name": "Central European Free Trade Agreement"
        }
      ],
      "cioc": "ALB",
      "independent": true
    },
    {
      "name": "Algeria",
      "topLevelDomain": [
        ".dz"
      ],
      "alpha2Code": "DZ",
      "alpha3Code": "DZA",
      "callingCodes": [
        "213"
      ],
      "capital": "Algiers",
      "altSpellings": [
        "DZ",
        "Dzayer",
        "Algérie"
      ],
      "region": "Northern Africa",
      "continent": "Africa",
      "population": 40400000,
      "latlng": [
        28,
        3
      ],
      "demonym": "Algerian",
      "area": 2381741,
      "gini": 27.6,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "TUN",
        "LBY",
        "NER",
        "ESH",
        "MRT",
        "MLI",
        "MAR"
      ],
      "nativeName": "الجزائر",
      "numericCode": "012",
      "currencies": [
        {
          "code": "DZD",
          "name": "Algerian dinar",
          "symbol": "د.ج"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Argélia",
        "pt": "Argélia",
        "nl": "Algerije",
        "hr": "Alžir",
        "fa": "الجزایر",
        "de": "Algerien",
        "es": "Argelia",
        "fr": "Algérie",
        "ja": "アルジェリア",
        "it": "Algeria",
        "hu": "Algéria"
      },
      "flags": [
        "https://restcountries.com/data/dza.svg",
        "https://restcountries.com/data/png/dza.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        },
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "ALG",
      "independent": true
    },
    {
      "name": "American Samoa",
      "topLevelDomain": [
        ".as"
      ],
      "alpha2Code": "AS",
      "alpha3Code": "ASM",
      "callingCodes": [
        "1"
      ],
      "capital": "Pago Pago",
      "altSpellings": [
        "AS",
        "Amerika Sāmoa",
        "Amelika Sāmoa",
        "Sāmoa Amelika"
      ],
      "region": "Polynesia",
      "continent": "Oceania",
      "population": 57100,
      "latlng": [
        -14.33333333,
        -170
      ],
      "demonym": "American Samoan",
      "area": 199,
      "timezones": [
        "UTC-11:00"
      ],
      "nativeName": "American Samoa",
      "numericCode": "016",
      "currencies": [
        {
          "code": "USD",
          "name": "United States Dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "sm",
          "iso639_2": "smo",
          "name": "Samoan",
          "nativeName": "gagana fa'a Samoa"
        }
      ],
      "translations": {
        "br": "Samoa Americana",
        "pt": "Samoa Americana",
        "nl": "Amerikaans Samoa",
        "hr": "Američka Samoa",
        "fa": "ساموآی آمریکا",
        "de": "Amerikanisch-Samoa",
        "es": "Samoa Americana",
        "fr": "Samoa américaines",
        "ja": "アメリカ領サモア",
        "it": "Samoa Americane",
        "hu": "Amerikai Szamoa"
      },
      "flags": [
        "https://restcountries.com/data/asm.svg",
        "https://restcountries.com/data/png/asm.png"
      ],
      "cioc": "ASA",
      "independent": false
    },
    {
      "name": "Andorra",
      "topLevelDomain": [
        ".ad"
      ],
      "alpha2Code": "AD",
      "alpha3Code": "AND",
      "callingCodes": [
        "376"
      ],
      "capital": "Andorra la Vella",
      "altSpellings": [
        "AD",
        "Principality of Andorra",
        "Principat d'Andorra"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 78014,
      "latlng": [
        42.5,
        1.5
      ],
      "demonym": "Andorran",
      "area": 468,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "FRA",
        "ESP"
      ],
      "nativeName": "Andorra",
      "numericCode": "020",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "ca",
          "iso639_2": "cat",
          "name": "Catalan",
          "nativeName": "català"
        }
      ],
      "translations": {
        "br": "Andorra",
        "pt": "Andorra",
        "nl": "Andorra",
        "hr": "Andora",
        "fa": "آندورا",
        "de": "Andorra",
        "es": "Andorra",
        "fr": "Andorre",
        "ja": "アンドラ",
        "it": "Andorra",
        "hu": "Andorra"
      },
      "flags": [
        "https://restcountries.com/data/and.svg",
        "https://restcountries.com/data/png/and.png"
      ],
      "cioc": "AND",
      "independent": true
    },
    {
      "name": "Angola",
      "topLevelDomain": [
        ".ao"
      ],
      "alpha2Code": "AO",
      "alpha3Code": "AGO",
      "callingCodes": [
        "244"
      ],
      "capital": "Luanda",
      "altSpellings": [
        "AO",
        "República de Angola",
        "ʁɛpublika de an'ɡɔla"
      ],
      "region": "Middle Africa",
      "continent": "Africa",
      "population": 25868000,
      "latlng": [
        -12.5,
        18.5
      ],
      "demonym": "Angolan",
      "area": 1246700,
      "gini": 51.3,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "COG",
        "COD",
        "ZMB",
        "NAM"
      ],
      "nativeName": "Angola",
      "numericCode": "024",
      "currencies": [
        {
          "code": "AOA",
          "name": "Angolan kwanza",
          "symbol": "Kz"
        }
      ],
      "languages": [
        {
          "iso639_1": "pt",
          "iso639_2": "por",
          "name": "Portuguese",
          "nativeName": "Português"
        }
      ],
      "translations": {
        "br": "Angola",
        "pt": "Angola",
        "nl": "Angola",
        "hr": "Angola",
        "fa": "آنگولا",
        "de": "Angola",
        "es": "Angola",
        "fr": "Angola",
        "ja": "アンゴラ",
        "it": "Angola",
        "hu": "Angola"
      },
      "flags": [
        "https://restcountries.com/data/ago.svg",
        "https://restcountries.com/data/png/ago.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "ANG",
      "independent": true
    },
    {
      "name": "Anguilla",
      "topLevelDomain": [
        ".ai"
      ],
      "alpha2Code": "AI",
      "alpha3Code": "AIA",
      "callingCodes": [
        "1"
      ],
      "capital": "The Valley",
      "altSpellings": [
        "AI"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 13452,
      "latlng": [
        18.25,
        -63.16666666
      ],
      "demonym": "Anguillian",
      "area": 91,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Anguilla",
      "numericCode": "660",
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Anguila",
        "pt": "Anguila",
        "nl": "Anguilla",
        "hr": "Angvila",
        "fa": "آنگویلا",
        "de": "Anguilla",
        "es": "Anguilla",
        "fr": "Anguilla",
        "ja": "アンギラ",
        "it": "Anguilla",
        "hu": "Anguilla"
      },
      "flags": [
        "https://restcountries.com/data/aia.svg",
        "https://restcountries.com/data/png/aia.png"
      ],
      "independent": false
    },
    {
      "name": "Antigua and Barbuda",
      "topLevelDomain": [
        ".ag"
      ],
      "alpha2Code": "AG",
      "alpha3Code": "ATG",
      "callingCodes": [
        "1"
      ],
      "capital": "Saint John's",
      "altSpellings": [
        "AG"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 86295,
      "latlng": [
        17.05,
        -61.8
      ],
      "demonym": "Antiguan, Barbudan",
      "area": 442,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Antigua and Barbuda",
      "numericCode": "028",
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Antígua e Barbuda",
        "pt": "Antígua e Barbuda",
        "nl": "Antigua en Barbuda",
        "hr": "Antigva i Barbuda",
        "fa": "آنتیگوا و باربودا",
        "de": "Antigua und Barbuda",
        "es": "Antigua y Barbuda",
        "fr": "Antigua-et-Barbuda",
        "ja": "アンティグア・バーブーダ",
        "it": "Antigua e Barbuda",
        "hu": "Antigua és Barbuda"
      },
      "flags": [
        "https://restcountries.com/data/atg.svg",
        "https://restcountries.com/data/png/atg.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        }
      ],
      "cioc": "ANT",
      "independent": true
    },
    {
      "name": "Argentina",
      "topLevelDomain": [
        ".ar"
      ],
      "alpha2Code": "AR",
      "alpha3Code": "ARG",
      "callingCodes": [
        "54"
      ],
      "capital": "Buenos Aires",
      "altSpellings": [
        "AR",
        "Argentine Republic",
        "República Argentina"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 43590400,
      "latlng": [
        -34,
        -64
      ],
      "demonym": "Argentinean",
      "area": 2780400,
      "gini": 42.9,
      "timezones": [
        "UTC-03:00"
      ],
      "borders": [
        "BOL",
        "BRA",
        "CHL",
        "PRY",
        "URY"
      ],
      "nativeName": "Argentina",
      "numericCode": "032",
      "currencies": [
        {
          "code": "ARS",
          "name": "Argentine peso",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        },
        {
          "iso639_1": "gn",
          "iso639_2": "grn",
          "name": "Guaraní",
          "nativeName": "Avañe'ẽ"
        }
      ],
      "translations": {
        "br": "Argentina",
        "pt": "Argentina",
        "nl": "Argentinië",
        "hr": "Argentina",
        "fa": "آرژانتین",
        "de": "Argentinien",
        "es": "Argentina",
        "fr": "Argentine",
        "ja": "アルゼンチン",
        "it": "Argentina",
        "hu": "Argentína"
      },
      "flags": [
        "https://restcountries.com/data/arg.svg",
        "https://restcountries.com/data/png/arg.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "cioc": "ARG",
      "independent": true
    },
    {
      "name": "Armenia",
      "topLevelDomain": [
        ".am"
      ],
      "alpha2Code": "AM",
      "alpha3Code": "ARM",
      "callingCodes": [
        "374"
      ],
      "capital": "Yerevan",
      "altSpellings": [
        "AM",
        "Hayastan",
        "Republic of Armenia",
        "Հայաստանի Հանրապետություն"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 2994400,
      "latlng": [
        40,
        45
      ],
      "demonym": "Armenian",
      "area": 29743,
      "gini": 29.9,
      "timezones": [
        "UTC+04:00"
      ],
      "borders": [
        "AZE",
        "GEO",
        "IRN",
        "TUR"
      ],
      "nativeName": "Հայաստան",
      "numericCode": "051",
      "currencies": [
        {
          "code": "AMD",
          "name": "Armenian dram",
          "symbol": "֏"
        }
      ],
      "languages": [
        {
          "iso639_1": "hy",
          "iso639_2": "hye",
          "name": "Armenian",
          "nativeName": "Հայերեն"
        }
      ],
      "translations": {
        "br": "Armênia",
        "pt": "Arménia",
        "nl": "Armenië",
        "hr": "Armenija",
        "fa": "ارمنستان",
        "de": "Armenien",
        "es": "Armenia",
        "fr": "Arménie",
        "ja": "アルメニア",
        "it": "Armenia",
        "hu": "Örményország"
      },
      "flags": [
        "https://restcountries.com/data/arm.svg",
        "https://restcountries.com/data/png/arm.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EEU",
          "name": "Eurasian Economic Union",
          "otherAcronyms": [
            "EAEU"
          ]
        }
      ],
      "cioc": "ARM",
      "independent": true
    },
    {
      "name": "Aruba",
      "topLevelDomain": [
        ".aw"
      ],
      "alpha2Code": "AW",
      "alpha3Code": "ABW",
      "callingCodes": [
        "297"
      ],
      "capital": "Oranjestad",
      "altSpellings": [
        "AW"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 107394,
      "latlng": [
        12.5,
        -69.96666666
      ],
      "demonym": "Aruban",
      "area": 180,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Aruba",
      "numericCode": "533",
      "currencies": [
        {
          "code": "AWG",
          "name": "Aruban florin",
          "symbol": "ƒ"
        }
      ],
      "languages": [
        {
          "iso639_1": "nl",
          "iso639_2": "nld",
          "name": "Dutch",
          "nativeName": "Nederlands"
        },
        {
          "iso639_1": "pa",
          "iso639_2": "pan",
          "name": "(Eastern) Punjabi",
          "nativeName": "ਪੰਜਾਬੀ"
        }
      ],
      "translations": {
        "br": "Aruba",
        "pt": "Aruba",
        "nl": "Aruba",
        "hr": "Aruba",
        "fa": "آروبا",
        "de": "Aruba",
        "es": "Aruba",
        "fr": "Aruba",
        "ja": "アルバ",
        "it": "Aruba",
        "hu": "Aruba"
      },
      "flags": [
        "https://restcountries.com/data/abw.svg",
        "https://restcountries.com/data/png/abw.png"
      ],
      "cioc": "ARU",
      "independent": true
    },
    {
      "name": "Australia",
      "topLevelDomain": [
        ".au"
      ],
      "alpha2Code": "AU",
      "alpha3Code": "AUS",
      "callingCodes": [
        "61"
      ],
      "capital": "Canberra",
      "altSpellings": [
        "AU"
      ],
      "region": "Australia and New Zealand",
      "continent": "Oceania",
      "population": 24117360,
      "latlng": [
        -27,
        133
      ],
      "demonym": "Australian",
      "area": 7692024,
      "gini": 34.4,
      "timezones": [
        "UTC+05:00",
        "UTC+06:30",
        "UTC+07:00",
        "UTC+08:00",
        "UTC+09:30",
        "UTC+10:00",
        "UTC+10:30",
        "UTC+11:30"
      ],
      "nativeName": "Australia",
      "numericCode": "036",
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Austrália",
        "pt": "Austrália",
        "nl": "Australië",
        "hr": "Australija",
        "fa": "استرالیا",
        "de": "Australien",
        "es": "Australia",
        "fr": "Australie",
        "ja": "オーストラリア",
        "it": "Australia",
        "hu": "Ausztrália"
      },
      "flags": [
        "https://restcountries.com/data/aus.svg",
        "https://restcountries.com/data/png/aus.png"
      ],
      "cioc": "AUS",
      "independent": true
    },
    {
      "name": "Austria",
      "topLevelDomain": [
        ".at"
      ],
      "alpha2Code": "AT",
      "alpha3Code": "AUT",
      "callingCodes": [
        "43"
      ],
      "capital": "Vienna",
      "altSpellings": [
        "AT",
        "Österreich",
        "Osterreich",
        "Oesterreich"
      ],
      "region": "Central Europe",
      "continent": "Europe",
      "population": 8725931,
      "latlng": [
        47.33333333,
        13.33333333
      ],
      "demonym": "Austrian",
      "area": 83871,
      "gini": 30.8,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "CZE",
        "DEU",
        "HUN",
        "ITA",
        "LIE",
        "SVK",
        "SVN",
        "CHE"
      ],
      "nativeName": "Österreich",
      "numericCode": "040",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "de",
          "iso639_2": "deu",
          "name": "German",
          "nativeName": "Deutsch"
        }
      ],
      "translations": {
        "br": "Áustria",
        "pt": "Áustria",
        "nl": "Oostenrijk",
        "hr": "Austrija",
        "fa": "اتریش",
        "de": "Österreich",
        "es": "Austria",
        "fr": "Autriche",
        "ja": "オーストリア",
        "it": "Austria",
        "hu": "Ausztria"
      },
      "flags": [
        "https://restcountries.com/data/aut.svg",
        "https://restcountries.com/data/png/aut.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "AUT",
      "independent": true
    },
    {
      "name": "Azerbaijan",
      "topLevelDomain": [
        ".az"
      ],
      "alpha2Code": "AZ",
      "alpha3Code": "AZE",
      "callingCodes": [
        "994"
      ],
      "capital": "Baku",
      "altSpellings": [
        "AZ",
        "Republic of Azerbaijan",
        "Azərbaycan Respublikası"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 9730500,
      "latlng": [
        40.5,
        47.5
      ],
      "demonym": "Azerbaijani",
      "area": 86600,
      "gini": 33.7,
      "timezones": [
        "UTC+04:00"
      ],
      "borders": [
        "ARM",
        "GEO",
        "IRN",
        "RUS",
        "TUR"
      ],
      "nativeName": "Azərbaycan",
      "numericCode": "031",
      "currencies": [
        {
          "code": "AZN",
          "name": "Azerbaijani manat",
          "symbol": "₼"
        }
      ],
      "languages": [
        {
          "iso639_1": "az",
          "iso639_2": "aze",
          "name": "Azerbaijani",
          "nativeName": "azərbaycan dili"
        }
      ],
      "translations": {
        "br": "Azerbaijão",
        "pt": "Azerbaijão",
        "nl": "Azerbeidzjan",
        "hr": "Azerbajdžan",
        "fa": "آذربایجان",
        "de": "Aserbaidschan",
        "es": "Azerbaiyán",
        "fr": "Azerbaïdjan",
        "ja": "アゼルバイジャン",
        "it": "Azerbaijan",
        "hu": "Azerbajdzsán"
      },
      "flags": [
        "https://restcountries.com/data/aze.svg",
        "https://restcountries.com/data/png/aze.png"
      ],
      "cioc": "AZE",
      "independent": false
    },
    {
      "name": "Bahamas",
      "topLevelDomain": [
        ".bs"
      ],
      "alpha2Code": "BS",
      "alpha3Code": "BHS",
      "callingCodes": [
        "1"
      ],
      "capital": "Nassau",
      "altSpellings": [
        "BS",
        "Commonwealth of the Bahamas"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 378040,
      "latlng": [
        24.25,
        -76
      ],
      "demonym": "Bahamian",
      "area": 13943,
      "timezones": [
        "UTC-05:00"
      ],
      "nativeName": "Bahamas",
      "numericCode": "044",
      "currencies": [
        {
          "code": "BSD",
          "name": "Bahamian dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Bahamas",
        "pt": "Baamas",
        "nl": "Bahama’s",
        "hr": "Bahami",
        "fa": "باهاما",
        "de": "Bahamas",
        "es": "Bahamas",
        "fr": "Bahamas",
        "ja": "バハマ",
        "it": "Bahamas",
        "hu": "Bahama-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/bhs.svg",
        "https://restcountries.com/data/png/bhs.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        }
      ],
      "cioc": "BAH",
      "independent": true
    },
    {
      "name": "Bahrain",
      "topLevelDomain": [
        ".bh"
      ],
      "alpha2Code": "BH",
      "alpha3Code": "BHR",
      "callingCodes": [
        "973"
      ],
      "capital": "Manama",
      "altSpellings": [
        "BH",
        "Kingdom of Bahrain",
        "Mamlakat al-Baḥrayn"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 1404900,
      "latlng": [
        26,
        50.55
      ],
      "demonym": "Bahraini",
      "area": 765,
      "timezones": [
        "UTC+03:00"
      ],
      "nativeName": "‏البحرين",
      "numericCode": "048",
      "currencies": [
        {
          "code": "BHD",
          "name": "Bahraini dinar",
          "symbol": ".د.ب"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Bahrein",
        "pt": "Barém",
        "nl": "Bahrein",
        "hr": "Bahrein",
        "fa": "بحرین",
        "de": "Bahrain",
        "es": "Bahrein",
        "fr": "Bahreïn",
        "ja": "バーレーン",
        "it": "Bahrein",
        "hu": "Bahrein"
      },
      "flags": [
        "https://restcountries.com/data/bhr.svg",
        "https://restcountries.com/data/png/bhr.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "BRN",
      "independent": true
    },
    {
      "name": "Bangladesh",
      "topLevelDomain": [
        ".bd"
      ],
      "alpha2Code": "BD",
      "alpha3Code": "BGD",
      "callingCodes": [
        "880"
      ],
      "capital": "Dhaka",
      "altSpellings": [
        "BD",
        "People's Republic of Bangladesh",
        "Gônôprôjatôntri Bangladesh"
      ],
      "region": "Southern Asia",
      "continent": "Asia",
      "population": 161006790,
      "latlng": [
        24,
        90
      ],
      "demonym": "Bangladeshi",
      "area": 147570,
      "gini": 32.4,
      "timezones": [
        "UTC+06:00"
      ],
      "borders": [
        "MMR",
        "IND"
      ],
      "nativeName": "Bangladesh",
      "numericCode": "050",
      "currencies": [
        {
          "code": "BDT",
          "name": "Bangladeshi taka",
          "symbol": "৳"
        }
      ],
      "languages": [
        {
          "iso639_1": "bn",
          "iso639_2": "ben",
          "name": "Bengali",
          "nativeName": "বাংলা"
        }
      ],
      "translations": {
        "br": "Bangladesh",
        "pt": "Bangladeche",
        "nl": "Bangladesh",
        "hr": "Bangladeš",
        "fa": "بنگلادش",
        "de": "Bangladesch",
        "es": "Bangladesh",
        "fr": "Bangladesh",
        "ja": "バングラデシュ",
        "it": "Bangladesh",
        "hu": "Banglades"
      },
      "flags": [
        "https://restcountries.com/data/bgd.svg",
        "https://restcountries.com/data/png/bgd.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "BAN",
      "independent": true
    },
    {
      "name": "Barbados",
      "topLevelDomain": [
        ".bb"
      ],
      "alpha2Code": "BB",
      "alpha3Code": "BRB",
      "callingCodes": [
        "1"
      ],
      "capital": "Bridgetown",
      "altSpellings": [
        "BB"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 285000,
      "latlng": [
        13.16666666,
        -59.53333333
      ],
      "demonym": "Barbadian",
      "area": 430,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Barbados",
      "numericCode": "052",
      "currencies": [
        {
          "code": "BBD",
          "name": "Barbadian dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Barbados",
        "pt": "Barbados",
        "nl": "Barbados",
        "hr": "Barbados",
        "fa": "باربادوس",
        "de": "Barbados",
        "es": "Barbados",
        "fr": "Barbade",
        "ja": "バルバドス",
        "it": "Barbados",
        "hu": "Barbados"
      },
      "flags": [
        "https://restcountries.com/data/brb.svg",
        "https://restcountries.com/data/png/brb.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        }
      ],
      "cioc": "BAR",
      "independent": true
    },
    {
      "name": "Belarus",
      "topLevelDomain": [
        ".by"
      ],
      "alpha2Code": "BY",
      "alpha3Code": "BLR",
      "callingCodes": [
        "375"
      ],
      "capital": "Minsk",
      "altSpellings": [
        "BY",
        "Bielaruś",
        "Republic of Belarus",
        "Белоруссия",
        "Республика Беларусь",
        "Belorussiya",
        "Respublika Belarus’"
      ],
      "region": "Eastern Europe",
      "continent": "Europe",
      "population": 9498700,
      "latlng": [
        53,
        28
      ],
      "demonym": "Belarusian",
      "area": 207600,
      "gini": 25.3,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "LVA",
        "LTU",
        "POL",
        "RUS",
        "UKR"
      ],
      "nativeName": "Белару́сь",
      "numericCode": "112",
      "currencies": [
        {
          "code": "BYN",
          "name": "New Belarusian ruble",
          "symbol": "Br"
        },
        {
          "code": "BYR",
          "name": "Old Belarusian ruble",
          "symbol": "Br"
        }
      ],
      "languages": [
        {
          "iso639_1": "be",
          "iso639_2": "bel",
          "name": "Belarusian",
          "nativeName": "беларуская мова"
        },
        {
          "iso639_1": "ru",
          "iso639_2": "rus",
          "name": "Russian",
          "nativeName": "Русский"
        }
      ],
      "translations": {
        "br": "Bielorrússia",
        "pt": "Bielorrússia",
        "nl": "Wit-Rusland",
        "hr": "Bjelorusija",
        "fa": "بلاروس",
        "de": "Weißrussland",
        "es": "Bielorrusia",
        "fr": "Biélorussie",
        "ja": "ベラルーシ",
        "it": "Bielorussia",
        "hu": "Fehéroroszország"
      },
      "flags": [
        "https://restcountries.com/data/blr.svg",
        "https://restcountries.com/data/png/blr.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EEU",
          "name": "Eurasian Economic Union",
          "otherAcronyms": [
            "EAEU"
          ]
        }
      ],
      "cioc": "BLR",
      "independent": true
    },
    {
      "name": "Belgium",
      "topLevelDomain": [
        ".be"
      ],
      "alpha2Code": "BE",
      "alpha3Code": "BEL",
      "callingCodes": [
        "32"
      ],
      "capital": "Brussels",
      "altSpellings": [
        "BE",
        "België",
        "Belgie",
        "Belgien",
        "Belgique",
        "Kingdom of Belgium",
        "Koninkrijk België",
        "Royaume de Belgique",
        "Königreich Belgien"
      ],
      "region": "Western Europe",
      "continent": "Europe",
      "population": 11319511,
      "latlng": [
        50.83333333,
        4
      ],
      "demonym": "Belgian",
      "area": 30528,
      "gini": 27.2,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "FRA",
        "DEU",
        "LUX",
        "NLD"
      ],
      "nativeName": "België",
      "numericCode": "056",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "nl",
          "iso639_2": "nld",
          "name": "Dutch",
          "nativeName": "Nederlands"
        },
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "de",
          "iso639_2": "deu",
          "name": "German",
          "nativeName": "Deutsch"
        }
      ],
      "translations": {
        "br": "Bélgica",
        "pt": "Bélgica",
        "nl": "België",
        "hr": "Belgija",
        "fa": "بلژیک",
        "de": "Belgien",
        "es": "Bélgica",
        "fr": "Belgique",
        "ja": "ベルギー",
        "it": "Belgio",
        "hu": "Belgium"
      },
      "flags": [
        "https://restcountries.com/data/bel.svg",
        "https://restcountries.com/data/png/bel.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "BEL",
      "independent": true
    },
    {
      "name": "Belize",
      "topLevelDomain": [
        ".bz"
      ],
      "alpha2Code": "BZ",
      "alpha3Code": "BLZ",
      "callingCodes": [
        "501"
      ],
      "capital": "Belmopan",
      "altSpellings": [
        "BZ"
      ],
      "region": "Central America",
      "continent": "Americas",
      "population": 370300,
      "latlng": [
        17.25,
        -88.75
      ],
      "demonym": "Belizean",
      "area": 22966,
      "gini": 53.1,
      "timezones": [
        "UTC-06:00"
      ],
      "borders": [
        "GTM",
        "MEX"
      ],
      "nativeName": "Belize",
      "numericCode": "084",
      "currencies": [
        {
          "code": "BZD",
          "name": "Belize dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Belize",
        "pt": "Belize",
        "nl": "Belize",
        "hr": "Belize",
        "fa": "بلیز",
        "de": "Belize",
        "es": "Belice",
        "fr": "Belize",
        "ja": "ベリーズ",
        "it": "Belize",
        "hu": "Belize"
      },
      "flags": [
        "https://restcountries.com/data/blz.svg",
        "https://restcountries.com/data/png/blz.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        },
        {
          "acronym": "CAIS",
          "name": "Central American Integration System",
          "otherAcronyms": [
            "SICA"
          ],
          "otherNames": [
            "Sistema de la Integración Centroamericana,"
          ]
        }
      ],
      "cioc": "BIZ",
      "independent": true
    },
    {
      "name": "Benin",
      "topLevelDomain": [
        ".bj"
      ],
      "alpha2Code": "BJ",
      "alpha3Code": "BEN",
      "callingCodes": [
        "229"
      ],
      "capital": "Porto-Novo",
      "altSpellings": [
        "BJ",
        "Republic of Benin",
        "République du Bénin"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 10653654,
      "latlng": [
        9.5,
        2.25
      ],
      "demonym": "Beninese",
      "area": 112622,
      "gini": 47.8,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "BFA",
        "NER",
        "NGA",
        "TGO"
      ],
      "nativeName": "Bénin",
      "numericCode": "204",
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Benin",
        "pt": "Benim",
        "nl": "Benin",
        "hr": "Benin",
        "fa": "بنین",
        "de": "Benin",
        "es": "Benín",
        "fr": "Bénin",
        "ja": "ベナン",
        "it": "Benin"
      },
      "flags": [
        "https://restcountries.com/data/ben.svg",
        "https://restcountries.com/data/png/ben.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "BEN",
      "independent": true
    },
    {
      "name": "Bermuda",
      "topLevelDomain": [
        ".bm"
      ],
      "alpha2Code": "BM",
      "alpha3Code": "BMU",
      "callingCodes": [
        "1"
      ],
      "capital": "Hamilton",
      "altSpellings": [
        "BM",
        "The Islands of Bermuda",
        "The Bermudas",
        "Somers Isles"
      ],
      "region": "Northern America",
      "continent": "Americas",
      "population": 61954,
      "latlng": [
        32.33333333,
        -64.75
      ],
      "demonym": "Bermudian",
      "area": 54,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Bermuda",
      "numericCode": "060",
      "currencies": [
        {
          "code": "BMD",
          "name": "Bermudian dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Bermudas",
        "pt": "Bermudas",
        "nl": "Bermuda",
        "hr": "Bermudi",
        "fa": "برمودا",
        "de": "Bermuda",
        "es": "Bermudas",
        "fr": "Bermudes",
        "ja": "バミューダ",
        "it": "Bermuda",
        "hu": "Bermuda"
      },
      "flags": [
        "https://restcountries.com/data/bmu.svg",
        "https://restcountries.com/data/png/bmu.png"
      ],
      "cioc": "BER",
      "independent": false
    },
    {
      "name": "Bhutan",
      "topLevelDomain": [
        ".bt"
      ],
      "alpha2Code": "BT",
      "alpha3Code": "BTN",
      "callingCodes": [
        "975"
      ],
      "capital": "Thimphu",
      "altSpellings": [
        "BT",
        "Kingdom of Bhutan"
      ],
      "region": "Southern Asia",
      "continent": "Asia",
      "population": 775620,
      "latlng": [
        27.5,
        90.5
      ],
      "demonym": "Bhutanese",
      "area": 38394,
      "gini": 37.4,
      "timezones": [
        "UTC+06:00"
      ],
      "borders": [
        "CHN",
        "IND"
      ],
      "nativeName": "ʼbrug-yul",
      "numericCode": "064",
      "currencies": [
        {
          "code": "BTN",
          "name": "Bhutanese ngultrum",
          "symbol": "Nu."
        },
        {
          "code": "INR",
          "name": "Indian rupee",
          "symbol": "₹"
        }
      ],
      "languages": [
        {
          "iso639_1": "dz",
          "iso639_2": "dzo",
          "name": "Dzongkha",
          "nativeName": "རྫོང་ཁ"
        }
      ],
      "translations": {
        "br": "Butão",
        "pt": "Butão",
        "nl": "Bhutan",
        "hr": "Butan",
        "fa": "بوتان",
        "de": "Bhutan",
        "es": "Bután",
        "fr": "Bhoutan",
        "ja": "ブータン",
        "it": "Bhutan",
        "hu": "Bhután"
      },
      "flags": [
        "https://restcountries.com/data/btn.svg",
        "https://restcountries.com/data/png/btn.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "BHU",
      "independent": true
    },
    {
      "name": "Bolivia (Plurinational State of)",
      "topLevelDomain": [
        ".bo"
      ],
      "alpha2Code": "BO",
      "alpha3Code": "BOL",
      "callingCodes": [
        "591"
      ],
      "capital": "Sucre",
      "altSpellings": [
        "BO",
        "Buliwya",
        "Wuliwya",
        "Plurinational State of Bolivia",
        "Estado Plurinacional de Bolivia",
        "Buliwya Mamallaqta",
        "Wuliwya Suyu",
        "Tetã Volívia"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 10985059,
      "latlng": [
        -17,
        -65
      ],
      "demonym": "Bolivian",
      "area": 1098581,
      "gini": 41.6,
      "timezones": [
        "UTC-04:00"
      ],
      "borders": [
        "ARG",
        "BRA",
        "CHL",
        "PRY",
        "PER"
      ],
      "nativeName": "Bolivia",
      "numericCode": "068",
      "currencies": [
        {
          "code": "BOB",
          "name": "Bolivian boliviano",
          "symbol": "Bs."
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        },
        {
          "iso639_1": "ay",
          "iso639_2": "aym",
          "name": "Aymara",
          "nativeName": "aymar aru"
        },
        {
          "iso639_1": "qu",
          "iso639_2": "que",
          "name": "Quechua",
          "nativeName": "Runa Simi"
        }
      ],
      "translations": {
        "br": "Bolívia",
        "pt": "Bolívia",
        "nl": "Bolivia",
        "hr": "Bolivija",
        "fa": "بولیوی",
        "de": "Bolivien",
        "es": "Bolivia",
        "fr": "Bolivie",
        "ja": "ボリビア多民族国",
        "it": "Bolivia",
        "hu": "Bolívia"
      },
      "flags": [
        "https://restcountries.com/data/bol.svg",
        "https://restcountries.com/data/png/bol.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "cioc": "BOL",
      "independent": true
    },
    {
      "name": "Bonaire, Sint Eustatius and Saba",
      "topLevelDomain": [
        ".an",
        ".nl"
      ],
      "alpha2Code": "BQ",
      "alpha3Code": "BES",
      "callingCodes": [
        "599"
      ],
      "capital": "Kralendijk",
      "altSpellings": [
        "BQ",
        "Boneiru"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 17408,
      "latlng": [
        12.15,
        -68.266667
      ],
      "demonym": "Dutch",
      "area": 294,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Bonaire",
      "numericCode": "535",
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "nl",
          "iso639_2": "nld",
          "name": "Dutch",
          "nativeName": "Nederlands"
        }
      ],
      "translations": {
        "br": "Bonaire",
        "pt": "Bonaire",
        "fa": "بونیر",
        "de": "Bonaire, Sint Eustatius und Saba",
        "fr": "Bonaire, Saint-Eustache et Saba",
        "it": "Bonaire, Saint-Eustache e Saba",
        "hu": "Bonaire"
      },
      "flags": [
        "https://restcountries.com/data/bes.svg",
        "https://restcountries.com/data/png/bes.png"
      ],
      "independent": true
    },
    {
      "name": "Bosnia and Herzegovina",
      "topLevelDomain": [
        ".ba"
      ],
      "alpha2Code": "BA",
      "alpha3Code": "BIH",
      "callingCodes": [
        "387"
      ],
      "capital": "Sarajevo",
      "altSpellings": [
        "BA",
        "Bosnia-Herzegovina",
        "Босна и Херцеговина"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 3531159,
      "latlng": [
        44,
        18
      ],
      "demonym": "Bosnian, Herzegovinian",
      "area": 51209,
      "gini": 33,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "HRV",
        "MNE",
        "SRB"
      ],
      "nativeName": "Bosna i Hercegovina",
      "numericCode": "070",
      "currencies": [
        {
          "code": "BAM",
          "name": "Bosnia and Herzegovina convertible mark",
          "symbol": "KM"
        }
      ],
      "languages": [
        {
          "iso639_1": "bs",
          "iso639_2": "bos",
          "name": "Bosnian",
          "nativeName": "bosanski jezik"
        },
        {
          "iso639_1": "hr",
          "iso639_2": "hrv",
          "name": "Croatian",
          "nativeName": "hrvatski jezik"
        },
        {
          "iso639_1": "sr",
          "iso639_2": "srp",
          "name": "Serbian",
          "nativeName": "српски језик"
        }
      ],
      "translations": {
        "br": "Bósnia e Herzegovina",
        "pt": "Bósnia e Herzegovina",
        "nl": "Bosnië en Herzegovina",
        "hr": "Bosna i Hercegovina",
        "fa": "بوسنی و هرزگوین",
        "de": "Bosnien und Herzegowina",
        "es": "Bosnia y Herzegovina",
        "fr": "Bosnie-Herzégovine",
        "ja": "ボスニア・ヘルツェゴビナ",
        "it": "Bosnia ed Erzegovina",
        "hu": "Bosznia-Hercegovina"
      },
      "flags": [
        "https://restcountries.com/data/bih.svg",
        "https://restcountries.com/data/png/bih.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CEFTA",
          "name": "Central European Free Trade Agreement"
        }
      ],
      "cioc": "BIH",
      "independent": true
    },
    {
      "name": "Botswana",
      "topLevelDomain": [
        ".bw"
      ],
      "alpha2Code": "BW",
      "alpha3Code": "BWA",
      "callingCodes": [
        "267"
      ],
      "capital": "Gaborone",
      "altSpellings": [
        "BW",
        "Republic of Botswana",
        "Lefatshe la Botswana"
      ],
      "region": "Southern Africa",
      "continent": "Africa",
      "population": 2141206,
      "latlng": [
        -22,
        24
      ],
      "demonym": "Motswana",
      "area": 582000,
      "gini": 53.3,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "NAM",
        "ZAF",
        "ZMB",
        "ZWE"
      ],
      "nativeName": "Botswana",
      "numericCode": "072",
      "currencies": [
        {
          "code": "BWP",
          "name": "Botswana pula",
          "symbol": "P"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "tn",
          "iso639_2": "tsn",
          "name": "Tswana",
          "nativeName": "Setswana"
        }
      ],
      "translations": {
        "br": "Botsuana",
        "pt": "Botsuana",
        "nl": "Botswana",
        "hr": "Bocvana",
        "fa": "بوتسوانا",
        "de": "Botswana",
        "es": "Botswana",
        "fr": "Botswana",
        "ja": "ボツワナ",
        "it": "Botswana",
        "hu": "Botswana"
      },
      "flags": [
        "https://restcountries.com/data/bwa.svg",
        "https://restcountries.com/data/png/bwa.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "BOT",
      "independent": true
    },
    {
      "name": "Brazil",
      "topLevelDomain": [
        ".br"
      ],
      "alpha2Code": "BR",
      "alpha3Code": "BRA",
      "callingCodes": [
        "55"
      ],
      "capital": "Brasília",
      "altSpellings": [
        "BR",
        "Brasil",
        "Federative Republic of Brazil",
        "República Federativa do Brasil"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 206135893,
      "latlng": [
        -10,
        -55
      ],
      "demonym": "Brazilian",
      "area": 8515767,
      "gini": 53.4,
      "timezones": [
        "UTC-05:00",
        "UTC-04:00",
        "UTC-03:00",
        "UTC-02:00"
      ],
      "borders": [
        "ARG",
        "BOL",
        "COL",
        "FRA",
        "GUF",
        "GUY",
        "PRY",
        "PER",
        "SUR",
        "URY",
        "VEN"
      ],
      "nativeName": "Brasil",
      "numericCode": "076",
      "currencies": [
        {
          "code": "BRL",
          "name": "Brazilian real",
          "symbol": "R$"
        }
      ],
      "languages": [
        {
          "iso639_1": "pt",
          "iso639_2": "por",
          "name": "Portuguese",
          "nativeName": "Português"
        }
      ],
      "translations": {
        "br": "Brasil",
        "pt": "Brasil",
        "nl": "Brazilië",
        "hr": "Brazil",
        "fa": "برزیل",
        "de": "Brasilien",
        "es": "Brasil",
        "fr": "Brésil",
        "ja": "ブラジル",
        "it": "Brasile",
        "hu": "Brazília"
      },
      "flags": [
        "https://restcountries.com/data/bra.svg",
        "https://restcountries.com/data/png/bra.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "cioc": "BRA",
      "independent": true
    },
    {
      "name": "British Indian Ocean Territory",
      "topLevelDomain": [
        ".io"
      ],
      "alpha2Code": "IO",
      "alpha3Code": "IOT",
      "callingCodes": [
        "246"
      ],
      "capital": "Diego Garcia",
      "altSpellings": [
        "IO"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 3000,
      "latlng": [
        -6,
        71.5
      ],
      "demonym": "Indian",
      "area": 60,
      "timezones": [
        "UTC+06:00"
      ],
      "nativeName": "British Indian Ocean Territory",
      "numericCode": "086",
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Território Britânico do Oceano íÍdico",
        "pt": "Território Britânico do Oceano Índico",
        "nl": "Britse Gebieden in de Indische Oceaan",
        "hr": "Britanski Indijskooceanski teritorij",
        "fa": "قلمرو بریتانیا در اقیانوس هند",
        "de": "Britisches Territorium im Indischen Ozean",
        "es": "Territorio Británico del Océano Índico",
        "fr": "Territoire britannique de l'océan Indien",
        "ja": "イギリス領インド洋地域",
        "it": "Territorio britannico dell'oceano indiano",
        "hu": "Brit Indiai-óceáni Terület"
      },
      "flags": [
        "https://restcountries.com/data/iot.svg",
        "https://restcountries.com/data/png/iot.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "independent": true
    },
    {
      "name": "United States Minor Outlying Islands",
      "topLevelDomain": [
        ".us"
      ],
      "alpha2Code": "UM",
      "alpha3Code": "UMI",
      "callingCodes": [
        "246"
      ],
      "altSpellings": [
        "UM"
      ],
      "region": "Northern America",
      "continent": "Americas",
      "population": 300,
      "demonym": "American",
      "timezones": [
        "UTC-11:00",
        "UTC-10:00",
        "UTC+12:00"
      ],
      "nativeName": "United States Minor Outlying Islands",
      "numericCode": "581",
      "currencies": [
        {
          "code": "GBP",
          "name": "British pound",
          "symbol": "£"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Ilhas Menores Distantes dos Estados Unidos",
        "pt": "Ilhas Menores Distantes dos Estados Unidos",
        "nl": "Kleine afgelegen eilanden van de Verenigde Staten",
        "hr": "Mali udaljeni otoci SAD-a",
        "fa": "جزایر کوچک حاشیه‌ای ایالات متحده آمریکا",
        "de": "Kleinere Inselbesitzungen der Vereinigten Staaten",
        "es": "Islas Ultramarinas Menores de Estados Unidos",
        "fr": "Îles mineures éloignées des États-Unis",
        "ja": "合衆国領有小離島",
        "it": "Isole minori esterne degli Stati Uniti d'America",
        "hu": "Amerikai Egyesült Államok lakatlan külbirtokai"
      },
      "flags": [
        "https://restcountries.com/data/umi.svg",
        "https://restcountries.com/data/png/umi.png"
      ],
      "independent": false
    },
    {
      "name": "Virgin Islands (British)",
      "topLevelDomain": [
        ".vg"
      ],
      "alpha2Code": "VG",
      "alpha3Code": "VGB",
      "callingCodes": [
        "1"
      ],
      "capital": "Road Town",
      "altSpellings": [
        "VG"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 28514,
      "latlng": [
        18.431383,
        -64.62305
      ],
      "demonym": "Virgin Islander",
      "area": 151,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "British Virgin Islands",
      "numericCode": "092",
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Ilhas Virgens Britânicas",
        "pt": "Ilhas Virgens Britânicas",
        "nl": "Britse Maagdeneilanden",
        "hr": "Britanski Djevičanski Otoci",
        "fa": "جزایر ویرجین بریتانیا",
        "de": "Britische Jungferninseln",
        "es": "Islas Vírgenes del Reino Unido",
        "fr": "Îles Vierges britanniques",
        "ja": "イギリス領ヴァージン諸島",
        "it": "Isole Vergini Britanniche",
        "hu": "Brit Virgin-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/vgb.svg",
        "https://restcountries.com/data/png/vgb.png"
      ],
      "cioc": "IVB",
      "independent": false
    },
    {
      "name": "Virgin Islands (U.S.)",
      "topLevelDomain": [
        ".vi"
      ],
      "alpha2Code": "VI",
      "alpha3Code": "VIR",
      "callingCodes": [
        "1 340"
      ],
      "capital": "Charlotte Amalie",
      "altSpellings": [
        "VI",
        "USVI",
        "American Virgin Islands",
        "U.S. Virgin Islands"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 114743,
      "latlng": [
        18.34,
        -64.93
      ],
      "demonym": "Virgin Islander",
      "area": 346.36,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Virgin Islands of the United States",
      "numericCode": "850",
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Ilhas Virgens Americanas",
        "pt": "Ilhas Virgens Americanas",
        "nl": "Verenigde Staten Maagdeneilanden",
        "fa": "جزایر ویرجین آمریکا",
        "de": "Amerikanische Jungferninseln",
        "es": "Islas Vírgenes de los Estados Unidos",
        "fr": "Îles Vierges des États-Unis",
        "ja": "アメリカ領ヴァージン諸島",
        "it": "Isole Vergini americane",
        "hu": "Amerikai Virgin-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/vir.svg",
        "https://restcountries.com/data/png/vir.png"
      ],
      "cioc": "ISV",
      "independent": false
    },
    {
      "name": "Brunei Darussalam",
      "topLevelDomain": [
        ".bn"
      ],
      "alpha2Code": "BN",
      "alpha3Code": "BRN",
      "callingCodes": [
        "673"
      ],
      "capital": "Bandar Seri Begawan",
      "altSpellings": [
        "BN",
        "Nation of Brunei",
        " the Abode of Peace"
      ],
      "region": "South-Eastern Asia",
      "continent": "Asia",
      "population": 411900,
      "latlng": [
        4.5,
        114.66666666
      ],
      "demonym": "Bruneian",
      "area": 5765,
      "timezones": [
        "UTC+08:00"
      ],
      "borders": [
        "MYS"
      ],
      "nativeName": "Negara Brunei Darussalam",
      "numericCode": "096",
      "currencies": [
        {
          "code": "BND",
          "name": "Brunei dollar",
          "symbol": "$"
        },
        {
          "code": "SGD",
          "name": "Singapore dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "ms",
          "iso639_2": "msa",
          "name": "Malay",
          "nativeName": "bahasa Melayu"
        }
      ],
      "translations": {
        "br": "Brunei",
        "pt": "Brunei",
        "nl": "Brunei",
        "hr": "Brunej",
        "fa": "برونئی",
        "de": "Brunei",
        "es": "Brunei",
        "fr": "Brunei",
        "ja": "ブルネイ・ダルサラーム",
        "it": "Brunei",
        "hu": "Brunei"
      },
      "flags": [
        "https://restcountries.com/data/brn.svg",
        "https://restcountries.com/data/png/brn.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "ASEAN",
          "name": "Association of Southeast Asian Nations"
        }
      ],
      "cioc": "BRU",
      "independent": true
    },
    {
      "name": "Bulgaria",
      "topLevelDomain": [
        ".bg"
      ],
      "alpha2Code": "BG",
      "alpha3Code": "BGR",
      "callingCodes": [
        "359"
      ],
      "capital": "Sofia",
      "altSpellings": [
        "BG",
        "Republic of Bulgaria",
        "Република България"
      ],
      "region": "Eastern Europe",
      "continent": "Europe",
      "population": 7153784,
      "latlng": [
        43,
        25
      ],
      "demonym": "Bulgarian",
      "area": 110879,
      "gini": 41.3,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "GRC",
        "MKD",
        "ROU",
        "SRB",
        "TUR"
      ],
      "nativeName": "България",
      "numericCode": "100",
      "currencies": [
        {
          "code": "BGN",
          "name": "Bulgarian lev",
          "symbol": "лв"
        }
      ],
      "languages": [
        {
          "iso639_1": "bg",
          "iso639_2": "bul",
          "name": "Bulgarian",
          "nativeName": "български език"
        }
      ],
      "translations": {
        "br": "Bulgária",
        "pt": "Bulgária",
        "nl": "Bulgarije",
        "hr": "Bugarska",
        "fa": "بلغارستان",
        "de": "Bulgarien",
        "es": "Bulgaria",
        "fr": "Bulgarie",
        "ja": "ブルガリア",
        "it": "Bulgaria",
        "hu": "Bulgária"
      },
      "flags": [
        "https://restcountries.com/data/bgr.svg",
        "https://restcountries.com/data/png/bgr.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "BUL",
      "independent": true
    },
    {
      "name": "Burkina Faso",
      "topLevelDomain": [
        ".bf"
      ],
      "alpha2Code": "BF",
      "alpha3Code": "BFA",
      "callingCodes": [
        "226"
      ],
      "capital": "Ouagadougou",
      "altSpellings": [
        "BF"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 19034397,
      "latlng": [
        13,
        -2
      ],
      "demonym": "Burkinabe",
      "area": 272967,
      "gini": 35.3,
      "timezones": [
        "UTC"
      ],
      "borders": [
        "BEN",
        "CIV",
        "GHA",
        "MLI",
        "NER",
        "TGO"
      ],
      "nativeName": "Burkina Faso",
      "numericCode": "854",
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "ff",
          "iso639_2": "ful",
          "name": "Fula",
          "nativeName": "Fulfulde"
        }
      ],
      "translations": {
        "br": "Burkina Faso",
        "pt": "Burquina Faso",
        "nl": "Burkina Faso",
        "hr": "Burkina Faso",
        "fa": "بورکینافاسو",
        "de": "Burkina Faso",
        "es": "Burkina Faso",
        "fr": "Burkina Faso",
        "ja": "ブルキナファソ",
        "it": "Burkina Faso",
        "hu": "Burkina Faso"
      },
      "flags": [
        "https://restcountries.com/data/bfa.svg",
        "https://restcountries.com/data/png/bfa.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "BUR",
      "independent": true
    },
    {
      "name": "Burundi",
      "topLevelDomain": [
        ".bi"
      ],
      "alpha2Code": "BI",
      "alpha3Code": "BDI",
      "callingCodes": [
        "257"
      ],
      "capital": "Bujumbura",
      "altSpellings": [
        "BI",
        "Republic of Burundi",
        "Republika y'Uburundi",
        "République du Burundi"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 10114505,
      "latlng": [
        -3.5,
        30
      ],
      "demonym": "Burundian",
      "area": 27834,
      "gini": 38.6,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "COD",
        "RWA",
        "TZA"
      ],
      "nativeName": "Burundi",
      "numericCode": "108",
      "currencies": [
        {
          "code": "BIF",
          "name": "Burundian franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "rn",
          "iso639_2": "run",
          "name": "Kirundi",
          "nativeName": "Ikirundi"
        }
      ],
      "translations": {
        "br": "Burundi",
        "pt": "Burúndi",
        "nl": "Burundi",
        "hr": "Burundi",
        "fa": "بوروندی",
        "de": "Burundi",
        "es": "Burundi",
        "fr": "Burundi",
        "ja": "ブルンジ",
        "it": "Burundi",
        "hu": "Burundi"
      },
      "flags": [
        "https://restcountries.com/data/bdi.svg",
        "https://restcountries.com/data/png/bdi.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "BDI",
      "independent": true
    },
    {
      "name": "Cambodia",
      "topLevelDomain": [
        ".kh"
      ],
      "alpha2Code": "KH",
      "alpha3Code": "KHM",
      "callingCodes": [
        "855"
      ],
      "capital": "Phnom Penh",
      "altSpellings": [
        "KH",
        "Kingdom of Cambodia"
      ],
      "region": "South-Eastern Asia",
      "continent": "Asia",
      "population": 15626444,
      "latlng": [
        13,
        105
      ],
      "demonym": "Cambodian",
      "area": 181035,
      "gini": 37.9,
      "timezones": [
        "UTC+07:00"
      ],
      "borders": [
        "LAO",
        "THA",
        "VNM"
      ],
      "nativeName": "Kâmpŭchéa",
      "numericCode": "116",
      "currencies": [
        {
          "code": "KHR",
          "name": "Cambodian riel",
          "symbol": "៛"
        },
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "km",
          "iso639_2": "khm",
          "name": "Khmer",
          "nativeName": "ខ្មែរ"
        }
      ],
      "translations": {
        "br": "Camboja",
        "pt": "Camboja",
        "nl": "Cambodja",
        "hr": "Kambodža",
        "fa": "کامبوج",
        "de": "Kambodscha",
        "es": "Camboya",
        "fr": "Cambodge",
        "ja": "カンボジア",
        "it": "Cambogia",
        "hu": "Kambodzsa"
      },
      "flags": [
        "https://restcountries.com/data/khm.svg",
        "https://restcountries.com/data/png/khm.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "ASEAN",
          "name": "Association of Southeast Asian Nations"
        }
      ],
      "cioc": "CAM",
      "independent": true
    },
    {
      "name": "Cameroon",
      "topLevelDomain": [
        ".cm"
      ],
      "alpha2Code": "CM",
      "alpha3Code": "CMR",
      "callingCodes": [
        "237"
      ],
      "capital": "Yaoundé",
      "altSpellings": [
        "CM",
        "Republic of Cameroon",
        "République du Cameroun"
      ],
      "region": "Middle Africa",
      "continent": "Africa",
      "population": 22709892,
      "latlng": [
        6,
        12
      ],
      "demonym": "Cameroonian",
      "area": 475442,
      "gini": 46.6,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "CAF",
        "TCD",
        "COG",
        "GNQ",
        "GAB",
        "NGA"
      ],
      "nativeName": "Cameroon",
      "numericCode": "120",
      "currencies": [
        {
          "code": "XAF",
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Camarões",
        "pt": "Camarões",
        "nl": "Kameroen",
        "hr": "Kamerun",
        "fa": "کامرون",
        "de": "Kamerun",
        "es": "Camerún",
        "fr": "Cameroun",
        "ja": "カメルーン",
        "it": "Camerun",
        "hu": "Kamerun"
      },
      "flags": [
        "https://restcountries.com/data/cmr.svg",
        "https://restcountries.com/data/png/cmr.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "CMR",
      "independent": true
    },
    {
      "name": "Canada",
      "topLevelDomain": [
        ".ca"
      ],
      "alpha2Code": "CA",
      "alpha3Code": "CAN",
      "callingCodes": [
        "1"
      ],
      "capital": "Ottawa",
      "altSpellings": [
        "CA"
      ],
      "region": "Northern America",
      "continent": "Americas",
      "population": 36155487,
      "latlng": [
        60,
        -95
      ],
      "demonym": "Canadian",
      "area": 9984670,
      "gini": 33.3,
      "timezones": [
        "UTC-08:00",
        "UTC-07:00",
        "UTC-06:00",
        "UTC-05:00",
        "UTC-04:00",
        "UTC-03:30"
      ],
      "borders": [
        "USA"
      ],
      "nativeName": "Canada",
      "numericCode": "124",
      "currencies": [
        {
          "code": "CAD",
          "name": "Canadian dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Canadá",
        "pt": "Canadá",
        "nl": "Canada",
        "hr": "Kanada",
        "fa": "کانادا",
        "de": "Kanada",
        "es": "Canadá",
        "fr": "Canada",
        "ja": "カナダ",
        "it": "Canada",
        "hu": "Kanada"
      },
      "flags": [
        "https://restcountries.com/data/can.svg",
        "https://restcountries.com/data/png/can.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "NAFTA",
          "name": "North American Free Trade Agreement",
          "otherNames": [
            "Tratado de Libre Comercio de América del Norte",
            "Accord de Libre-échange Nord-Américain"
          ]
        }
      ],
      "cioc": "CAN",
      "independent": true
    },
    {
      "name": "Cabo Verde",
      "topLevelDomain": [
        ".cv"
      ],
      "alpha2Code": "CV",
      "alpha3Code": "CPV",
      "callingCodes": [
        "238"
      ],
      "capital": "Praia",
      "altSpellings": [
        "CV",
        "Republic of Cabo Verde",
        "República de Cabo Verde"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 531239,
      "latlng": [
        16,
        -24
      ],
      "demonym": "Cape Verdian",
      "area": 4033,
      "gini": 42.4,
      "timezones": [
        "UTC-01:00"
      ],
      "nativeName": "Cabo Verde",
      "numericCode": "132",
      "currencies": [
        {
          "code": "CVE",
          "name": "Cape Verdean escudo",
          "symbol": "Esc"
        }
      ],
      "languages": [
        {
          "iso639_1": "pt",
          "iso639_2": "por",
          "name": "Portuguese",
          "nativeName": "Português"
        }
      ],
      "translations": {
        "br": "Cabo Verde",
        "pt": "Cabo Verde",
        "nl": "Kaapverdië",
        "hr": "Zelenortska Republika",
        "fa": "کیپ ورد",
        "de": "Kap Verde",
        "es": "Cabo Verde",
        "fr": "Cap Vert",
        "ja": "カーボベルデ",
        "it": "Capo Verde",
        "hu": "Zöld-foki Köztársaság"
      },
      "flags": [
        "https://restcountries.com/data/cpv.svg",
        "https://restcountries.com/data/png/cpv.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "CPV",
      "independent": true
    },
    {
      "name": "Cayman Islands",
      "topLevelDomain": [
        ".ky"
      ],
      "alpha2Code": "KY",
      "alpha3Code": "CYM",
      "callingCodes": [
        "1"
      ],
      "capital": "George Town",
      "altSpellings": [
        "KY"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 58238,
      "latlng": [
        19.5,
        -80.5
      ],
      "demonym": "Caymanian",
      "area": 264,
      "timezones": [
        "UTC-05:00"
      ],
      "nativeName": "Cayman Islands",
      "numericCode": "136",
      "currencies": [
        {
          "code": "KYD",
          "name": "Cayman Islands dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Ilhas Cayman",
        "pt": "Ilhas Caimão",
        "nl": "Caymaneilanden",
        "hr": "Kajmanski otoci",
        "fa": "جزایر کیمن",
        "de": "Kaimaninseln",
        "es": "Islas Caimán",
        "fr": "Îles Caïmans",
        "ja": "ケイマン諸島",
        "it": "Isole Cayman",
        "hu": "Kajmán-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/cym.svg",
        "https://restcountries.com/data/png/cym.png"
      ],
      "cioc": "CAY",
      "independent": false
    },
    {
      "name": "Central African Republic",
      "topLevelDomain": [
        ".cf"
      ],
      "alpha2Code": "CF",
      "alpha3Code": "CAF",
      "callingCodes": [
        "236"
      ],
      "capital": "Bangui",
      "altSpellings": [
        "CF",
        "Central African Republic",
        "République centrafricaine"
      ],
      "region": "Middle Africa",
      "continent": "Africa",
      "population": 4998000,
      "latlng": [
        7,
        21
      ],
      "demonym": "Central African",
      "area": 622984,
      "gini": 56.3,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "CMR",
        "TCD",
        "COD",
        "COG",
        "SSD",
        "SDN"
      ],
      "nativeName": "Ködörösêse tî Bêafrîka",
      "numericCode": "140",
      "currencies": [
        {
          "code": "XAF",
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "sg",
          "iso639_2": "sag",
          "name": "Sango",
          "nativeName": "yângâ tî sängö"
        }
      ],
      "translations": {
        "br": "República Centro-Africana",
        "pt": "República Centro-Africana",
        "nl": "Centraal-Afrikaanse Republiek",
        "hr": "Srednjoafrička Republika",
        "fa": "جمهوری آفریقای مرکزی",
        "de": "Zentralafrikanische Republik",
        "es": "República Centroafricana",
        "fr": "République centrafricaine",
        "ja": "中央アフリカ共和国",
        "it": "Repubblica Centrafricana",
        "hu": "Közép-afrikai Köztársaság"
      },
      "flags": [
        "https://restcountries.com/data/caf.svg",
        "https://restcountries.com/data/png/caf.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "CAF",
      "independent": true
    },
    {
      "name": "Chad",
      "topLevelDomain": [
        ".td"
      ],
      "alpha2Code": "TD",
      "alpha3Code": "TCD",
      "callingCodes": [
        "235"
      ],
      "capital": "N'Djamena",
      "altSpellings": [
        "TD",
        "Tchad",
        "Republic of Chad",
        "République du Tchad"
      ],
      "region": "Middle Africa",
      "continent": "Africa",
      "population": 14497000,
      "latlng": [
        15,
        19
      ],
      "demonym": "Chadian",
      "area": 1284000,
      "gini": 43.3,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "CMR",
        "CAF",
        "LBY",
        "NER",
        "NGA",
        "SSD"
      ],
      "nativeName": "Tchad",
      "numericCode": "148",
      "currencies": [
        {
          "code": "XAF",
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Chade",
        "pt": "Chade",
        "nl": "Tsjaad",
        "hr": "Čad",
        "fa": "چاد",
        "de": "Tschad",
        "es": "Chad",
        "fr": "Tchad",
        "ja": "チャド",
        "it": "Ciad",
        "hu": "Csád"
      },
      "flags": [
        "https://restcountries.com/data/tcd.svg",
        "https://restcountries.com/data/png/tcd.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "CHA",
      "independent": true
    },
    {
      "name": "Chile",
      "topLevelDomain": [
        ".cl"
      ],
      "alpha2Code": "CL",
      "alpha3Code": "CHL",
      "callingCodes": [
        "56"
      ],
      "capital": "Santiago",
      "altSpellings": [
        "CL",
        "Republic of Chile",
        "República de Chile"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 18191900,
      "latlng": [
        -30,
        -71
      ],
      "demonym": "Chilean",
      "area": 756102,
      "gini": 44.4,
      "timezones": [
        "UTC-06:00",
        "UTC-04:00"
      ],
      "borders": [
        "ARG",
        "BOL",
        "PER"
      ],
      "nativeName": "Chile",
      "numericCode": "152",
      "currencies": [
        {
          "code": "CLP",
          "name": "Chilean peso",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Chile",
        "pt": "Chile",
        "nl": "Chili",
        "hr": "Čile",
        "fa": "شیلی",
        "de": "Chile",
        "es": "Chile",
        "fr": "Chili",
        "ja": "チリ",
        "it": "Cile",
        "hu": "Chile"
      },
      "flags": [
        "https://restcountries.com/data/chl.svg",
        "https://restcountries.com/data/png/chl.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "PA",
          "name": "Pacific Alliance",
          "otherNames": [
            "Alianza del Pacífico"
          ]
        },
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "cioc": "CHI",
      "independent": true
    },
    {
      "name": "China",
      "topLevelDomain": [
        ".cn"
      ],
      "alpha2Code": "CN",
      "alpha3Code": "CHN",
      "callingCodes": [
        "86"
      ],
      "capital": "Beijing",
      "altSpellings": [
        "CN",
        "Zhōngguó",
        "Zhongguo",
        "Zhonghua",
        "People's Republic of China",
        "中华人民共和国",
        "Zhōnghuá Rénmín Gònghéguó"
      ],
      "region": "Eastern Asia",
      "continent": "Asia",
      "population": 1377422166,
      "latlng": [
        35,
        105
      ],
      "demonym": "Chinese",
      "area": 9640011,
      "gini": 38.5,
      "timezones": [
        "UTC+08:00"
      ],
      "borders": [
        "AFG",
        "BTN",
        "MMR",
        "HKG",
        "IND",
        "KAZ",
        "PRK",
        "KGZ",
        "LAO",
        "MAC",
        "MNG",
        "PAK",
        "RUS",
        "TJK",
        "VNM",
        "NPL"
      ],
      "nativeName": "中国",
      "numericCode": "156",
      "currencies": [
        {
          "code": "CNY",
          "name": "Chinese yuan",
          "symbol": "¥"
        }
      ],
      "languages": [
        {
          "iso639_1": "zh",
          "iso639_2": "zho",
          "name": "Chinese",
          "nativeName": "中文 (Zhōngwén)"
        }
      ],
      "translations": {
        "br": "China",
        "pt": "China",
        "nl": "China",
        "hr": "Kina",
        "fa": "چین",
        "de": "China",
        "es": "China",
        "fr": "Chine",
        "ja": "中国",
        "it": "Cina",
        "hu": "Kína"
      },
      "flags": [
        "https://restcountries.com/data/chn.svg",
        "https://restcountries.com/data/png/chn.png"
      ],
      "cioc": "CHN",
      "independent": true
    },
    {
      "name": "Christmas Island",
      "topLevelDomain": [
        ".cx"
      ],
      "alpha2Code": "CX",
      "alpha3Code": "CXR",
      "callingCodes": [
        "61"
      ],
      "capital": "Flying Fish Cove",
      "altSpellings": [
        "CX",
        "Territory of Christmas Island"
      ],
      "region": "Australia and New Zealand",
      "continent": "Oceania",
      "population": 2072,
      "latlng": [
        -10.5,
        105.66666666
      ],
      "demonym": "Christmas Island",
      "area": 135,
      "timezones": [
        "UTC+07:00"
      ],
      "nativeName": "Christmas Island",
      "numericCode": "162",
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Ilha Christmas",
        "pt": "Ilha do Natal",
        "nl": "Christmaseiland",
        "hr": "Božićni otok",
        "fa": "جزیره کریسمس",
        "de": "Weihnachtsinsel",
        "es": "Isla de Navidad",
        "fr": "Île Christmas",
        "ja": "クリスマス島",
        "it": "Isola di Natale",
        "hu": "Karácsony-sziget"
      },
      "flags": [
        "https://restcountries.com/data/cxr.svg",
        "https://restcountries.com/data/png/cxr.png"
      ],
      "independent": false
    },
    {
      "name": "Cocos (Keeling) Islands",
      "topLevelDomain": [
        ".cc"
      ],
      "alpha2Code": "CC",
      "alpha3Code": "CCK",
      "callingCodes": [
        "61"
      ],
      "capital": "West Island",
      "altSpellings": [
        "CC",
        "Territory of the Cocos (Keeling) Islands",
        "Keeling Islands"
      ],
      "region": "Australia and New Zealand",
      "continent": "Oceania",
      "population": 550,
      "latlng": [
        -12.5,
        96.83333333
      ],
      "demonym": "Cocos Islander",
      "area": 14,
      "timezones": [
        "UTC+06:30"
      ],
      "nativeName": "Cocos (Keeling) Islands",
      "numericCode": "166",
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Ilhas Cocos",
        "pt": "Ilhas dos Cocos",
        "nl": "Cocoseilanden",
        "hr": "Kokosovi Otoci",
        "fa": "جزایر کوکوس",
        "de": "Kokosinseln",
        "es": "Islas Cocos o Islas Keeling",
        "fr": "Îles Cocos",
        "ja": "ココス（キーリング）諸島",
        "it": "Isole Cocos e Keeling",
        "hu": "Kókusz-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/cck.svg",
        "https://restcountries.com/data/png/cck.png"
      ],
      "independent": false
    },
    {
      "name": "Colombia",
      "topLevelDomain": [
        ".co"
      ],
      "alpha2Code": "CO",
      "alpha3Code": "COL",
      "callingCodes": [
        "57"
      ],
      "capital": "Bogotá",
      "altSpellings": [
        "CO",
        "Republic of Colombia",
        "República de Colombia"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 48759958,
      "latlng": [
        4,
        -72
      ],
      "demonym": "Colombian",
      "area": 1141748,
      "gini": 51.3,
      "timezones": [
        "UTC-05:00"
      ],
      "borders": [
        "BRA",
        "ECU",
        "PAN",
        "PER",
        "VEN"
      ],
      "nativeName": "Colombia",
      "numericCode": "170",
      "currencies": [
        {
          "code": "COP",
          "name": "Colombian peso",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Colômbia",
        "pt": "Colômbia",
        "nl": "Colombia",
        "hr": "Kolumbija",
        "fa": "کلمبیا",
        "de": "Kolumbien",
        "es": "Colombia",
        "fr": "Colombie",
        "ja": "コロンビア",
        "it": "Colombia",
        "hu": "Kolumbia"
      },
      "flags": [
        "https://restcountries.com/data/col.svg",
        "https://restcountries.com/data/png/col.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "PA",
          "name": "Pacific Alliance",
          "otherNames": [
            "Alianza del Pacífico"
          ]
        },
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "cioc": "COL",
      "independent": true
    },
    {
      "name": "Comoros",
      "topLevelDomain": [
        ".km"
      ],
      "alpha2Code": "KM",
      "alpha3Code": "COM",
      "callingCodes": [
        "269"
      ],
      "capital": "Moroni",
      "altSpellings": [
        "KM",
        "Union of the Comoros",
        "Union des Comores",
        "Udzima wa Komori",
        "al-Ittiḥād al-Qumurī"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 806153,
      "latlng": [
        -12.16666666,
        44.25
      ],
      "demonym": "Comoran",
      "area": 1862,
      "gini": 45.3,
      "timezones": [
        "UTC+03:00"
      ],
      "nativeName": "Komori",
      "numericCode": "174",
      "currencies": [
        {
          "code": "KMF",
          "name": "Comorian franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        },
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Comores",
        "pt": "Comores",
        "nl": "Comoren",
        "hr": "Komori",
        "fa": "کومور",
        "de": "Union der Komoren",
        "es": "Comoras",
        "fr": "Comores",
        "ja": "コモロ",
        "it": "Comore",
        "hu": "Comore-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/com.svg",
        "https://restcountries.com/data/png/com.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        },
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "COM",
      "independent": true
    },
    {
      "name": "Congo",
      "topLevelDomain": [
        ".cg"
      ],
      "alpha2Code": "CG",
      "alpha3Code": "COG",
      "callingCodes": [
        "242"
      ],
      "capital": "Brazzaville",
      "altSpellings": [
        "CG",
        "Congo-Brazzaville"
      ],
      "region": "Middle Africa",
      "continent": "Africa",
      "population": 4741000,
      "latlng": [
        -1,
        15
      ],
      "demonym": "Congolese",
      "area": 342000,
      "gini": 48.9,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "AGO",
        "CMR",
        "CAF",
        "COD",
        "GAB"
      ],
      "nativeName": "République du Congo",
      "numericCode": "178",
      "currencies": [
        {
          "code": "XAF",
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "ln",
          "iso639_2": "lin",
          "name": "Lingala",
          "nativeName": "Lingála"
        }
      ],
      "translations": {
        "br": "Congo",
        "pt": "Congo",
        "nl": "Congo [Republiek]",
        "hr": "Kongo",
        "fa": "کنگو",
        "de": "Kongo",
        "es": "Congo",
        "fr": "Congo",
        "ja": "コンゴ共和国",
        "it": "Congo",
        "hu": "Kongói Kóztársaság"
      },
      "flags": [
        "https://restcountries.com/data/cog.svg",
        "https://restcountries.com/data/png/cog.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "CGO",
      "independent": true
    },
    {
      "name": "Congo (Democratic Republic of the)",
      "topLevelDomain": [
        ".cd"
      ],
      "alpha2Code": "CD",
      "alpha3Code": "COD",
      "callingCodes": [
        "243"
      ],
      "capital": "Kinshasa",
      "altSpellings": [
        "CD",
        "DR Congo",
        "Congo-Kinshasa",
        "DRC"
      ],
      "region": "Middle Africa",
      "continent": "Africa",
      "population": 85026000,
      "latlng": [
        0,
        25
      ],
      "demonym": "Congolese",
      "area": 2344858,
      "gini": 42.1,
      "timezones": [
        "UTC+01:00",
        "UTC+02:00"
      ],
      "borders": [
        "AGO",
        "BDI",
        "CAF",
        "COG",
        "RWA",
        "SSD",
        "TZA",
        "UGA",
        "ZMB"
      ],
      "nativeName": "République démocratique du Congo",
      "numericCode": "180",
      "currencies": [
        {
          "code": "CDF",
          "name": "Congolese franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "ln",
          "iso639_2": "lin",
          "name": "Lingala",
          "nativeName": "Lingála"
        },
        {
          "iso639_1": "kg",
          "iso639_2": "kon",
          "name": "Kongo",
          "nativeName": "Kikongo"
        },
        {
          "iso639_1": "sw",
          "iso639_2": "swa",
          "name": "Swahili",
          "nativeName": "Kiswahili"
        },
        {
          "iso639_1": "lu",
          "iso639_2": "lub",
          "name": "Luba-Katanga",
          "nativeName": "Tshiluba"
        }
      ],
      "translations": {
        "br": "RD Congo",
        "pt": "RD Congo",
        "nl": "Congo [DRC]",
        "hr": "Kongo, Demokratska Republika",
        "fa": "جمهوری کنگو",
        "de": "Kongo (Dem. Rep.)",
        "es": "Congo (Rep. Dem.)",
        "fr": "Congo (Rép. dém.)",
        "ja": "コンゴ民主共和国",
        "it": "Congo (Rep. Dem.)",
        "hu": "Kongói Demokratikus Köztársaság"
      },
      "flags": [
        "https://restcountries.com/data/cod.svg",
        "https://restcountries.com/data/png/cod.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "COD",
      "independent": true
    },
    {
      "name": "Cook Islands",
      "topLevelDomain": [
        ".ck"
      ],
      "alpha2Code": "CK",
      "alpha3Code": "COK",
      "callingCodes": [
        "682"
      ],
      "capital": "Avarua",
      "altSpellings": [
        "CK",
        "Kūki 'Āirani"
      ],
      "region": "Polynesia",
      "continent": "Oceania",
      "population": 18100,
      "latlng": [
        -21.23333333,
        -159.76666666
      ],
      "demonym": "Cook Islander",
      "area": 236,
      "timezones": [
        "UTC-10:00"
      ],
      "nativeName": "Cook Islands",
      "numericCode": "184",
      "currencies": [
        {
          "code": "NZD",
          "name": "New Zealand dollar",
          "symbol": "$"
        },
        {
          "code": "CKD",
          "name": "Cook Islands dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_2": "rar",
          "name": "Cook Islands Māori",
          "nativeName": "Māori"
        }
      ],
      "translations": {
        "br": "Ilhas Cook",
        "pt": "Ilhas Cook",
        "nl": "Cookeilanden",
        "hr": "Cookovo Otočje",
        "fa": "جزایر کوک",
        "de": "Cookinseln",
        "es": "Islas Cook",
        "fr": "Îles Cook",
        "ja": "クック諸島",
        "it": "Isole Cook",
        "hu": "Cook-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/cok.svg",
        "https://restcountries.com/data/png/cok.png"
      ],
      "cioc": "COK",
      "independent": true
    },
    {
      "name": "Costa Rica",
      "topLevelDomain": [
        ".cr"
      ],
      "alpha2Code": "CR",
      "alpha3Code": "CRI",
      "callingCodes": [
        "506"
      ],
      "capital": "San José",
      "altSpellings": [
        "CR",
        "Republic of Costa Rica",
        "República de Costa Rica"
      ],
      "region": "Central America",
      "continent": "Americas",
      "population": 4890379,
      "latlng": [
        10,
        -84
      ],
      "demonym": "Costa Rican",
      "area": 51100,
      "gini": 48.2,
      "timezones": [
        "UTC-06:00"
      ],
      "borders": [
        "NIC",
        "PAN"
      ],
      "nativeName": "Costa Rica",
      "numericCode": "188",
      "currencies": [
        {
          "code": "CRC",
          "name": "Costa Rican colón",
          "symbol": "₡"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Costa Rica",
        "pt": "Costa Rica",
        "nl": "Costa Rica",
        "hr": "Kostarika",
        "fa": "کاستاریکا",
        "de": "Costa Rica",
        "es": "Costa Rica",
        "fr": "Costa Rica",
        "ja": "コスタリカ",
        "it": "Costa Rica",
        "hu": "Costa Rica"
      },
      "flags": [
        "https://restcountries.com/data/cri.svg",
        "https://restcountries.com/data/png/cri.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CAIS",
          "name": "Central American Integration System",
          "otherAcronyms": [
            "SICA"
          ],
          "otherNames": [
            "Sistema de la Integración Centroamericana,"
          ]
        }
      ],
      "cioc": "CRC",
      "independent": true
    },
    {
      "name": "Croatia",
      "topLevelDomain": [
        ".hr"
      ],
      "alpha2Code": "HR",
      "alpha3Code": "HRV",
      "callingCodes": [
        "385"
      ],
      "capital": "Zagreb",
      "altSpellings": [
        "HR",
        "Hrvatska",
        "Republic of Croatia",
        "Republika Hrvatska"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 4190669,
      "latlng": [
        45.16666666,
        15.5
      ],
      "demonym": "Croatian",
      "area": 56594,
      "gini": 29.7,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "BIH",
        "HUN",
        "MNE",
        "SRB",
        "SVN"
      ],
      "nativeName": "Hrvatska",
      "numericCode": "191",
      "currencies": [
        {
          "code": "HRK",
          "name": "Croatian kuna",
          "symbol": "kn"
        }
      ],
      "languages": [
        {
          "iso639_1": "hr",
          "iso639_2": "hrv",
          "name": "Croatian",
          "nativeName": "hrvatski jezik"
        }
      ],
      "translations": {
        "br": "Croácia",
        "pt": "Croácia",
        "nl": "Kroatië",
        "hr": "Hrvatska",
        "fa": "کرواسی",
        "de": "Kroatien",
        "es": "Croacia",
        "fr": "Croatie",
        "ja": "クロアチア",
        "it": "Croazia",
        "hu": "Horvátország"
      },
      "flags": [
        "https://restcountries.com/data/hrv.svg",
        "https://restcountries.com/data/png/hrv.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "CRO",
      "independent": true
    },
    {
      "name": "Cuba",
      "topLevelDomain": [
        ".cu"
      ],
      "alpha2Code": "CU",
      "alpha3Code": "CUB",
      "callingCodes": [
        "53"
      ],
      "capital": "Havana",
      "altSpellings": [
        "CU",
        "Republic of Cuba",
        "República de Cuba"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 11239004,
      "latlng": [
        21.5,
        -80
      ],
      "demonym": "Cuban",
      "area": 109884,
      "gini": 38,
      "timezones": [
        "UTC-05:00"
      ],
      "nativeName": "Cuba",
      "numericCode": "192",
      "currencies": [
        {
          "code": "CUC",
          "name": "Cuban convertible peso",
          "symbol": "$"
        },
        {
          "code": "CUP",
          "name": "Cuban peso",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Cuba",
        "pt": "Cuba",
        "nl": "Cuba",
        "hr": "Kuba",
        "fa": "کوبا",
        "de": "Kuba",
        "es": "Cuba",
        "fr": "Cuba",
        "ja": "キューバ",
        "it": "Cuba",
        "hu": "Kuba"
      },
      "flags": [
        "https://restcountries.com/data/cub.svg",
        "https://restcountries.com/data/png/cub.png"
      ],
      "cioc": "CUB",
      "independent": true
    },
    {
      "name": "Curaçao",
      "topLevelDomain": [
        ".cw"
      ],
      "alpha2Code": "CW",
      "alpha3Code": "CUW",
      "callingCodes": [
        "599"
      ],
      "capital": "Willemstad",
      "altSpellings": [
        "CW",
        "Curacao",
        "Kòrsou",
        "Country of Curaçao",
        "Land Curaçao",
        "Pais Kòrsou"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 154843,
      "latlng": [
        12.116667,
        -68.933333
      ],
      "demonym": "Dutch",
      "area": 444,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Curaçao",
      "numericCode": "531",
      "currencies": [
        {
          "code": "ANG",
          "name": "Netherlands Antillean guilder",
          "symbol": "ƒ"
        }
      ],
      "languages": [
        {
          "iso639_1": "nl",
          "iso639_2": "nld",
          "name": "Dutch",
          "nativeName": "Nederlands"
        },
        {
          "iso639_1": "pa",
          "iso639_2": "pan",
          "name": "(Eastern) Punjabi",
          "nativeName": "ਪੰਜਾਬੀ"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Curaçao",
        "pt": "Curaçao",
        "nl": "Curaçao",
        "fa": "کوراسائو",
        "de": "Curaçao",
        "fr": "Curaçao",
        "it": "Curaçao",
        "hu": "Cura~ao"
      },
      "flags": [
        "https://restcountries.com/data/cuw.svg",
        "https://restcountries.com/data/png/cuw.png"
      ],
      "independent": false
    },
    {
      "name": "Cyprus",
      "topLevelDomain": [
        ".cy"
      ],
      "alpha2Code": "CY",
      "alpha3Code": "CYP",
      "callingCodes": [
        "357"
      ],
      "capital": "Nicosia",
      "altSpellings": [
        "CY",
        "Kýpros",
        "Kıbrıs",
        "Republic of Cyprus",
        "Κυπριακή Δημοκρατία",
        "Kıbrıs Cumhuriyeti"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 847000,
      "latlng": [
        35,
        33
      ],
      "demonym": "Cypriot",
      "area": 9251,
      "gini": 32.7,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "GBR"
      ],
      "nativeName": "Κύπρος",
      "numericCode": "196",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "el",
          "iso639_2": "ell",
          "name": "Greek (modern)",
          "nativeName": "ελληνικά"
        },
        {
          "iso639_1": "tr",
          "iso639_2": "tur",
          "name": "Turkish",
          "nativeName": "Türkçe"
        },
        {
          "iso639_1": "hy",
          "iso639_2": "hye",
          "name": "Armenian",
          "nativeName": "Հայերեն"
        }
      ],
      "translations": {
        "br": "Chipre",
        "pt": "Chipre",
        "nl": "Cyprus",
        "hr": "Cipar",
        "fa": "قبرس",
        "de": "Zypern",
        "es": "Chipre",
        "fr": "Chypre",
        "ja": "キプロス",
        "it": "Cipro",
        "hu": "Ciprus"
      },
      "flags": [
        "https://restcountries.com/data/cyp.svg",
        "https://restcountries.com/data/png/cyp.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "CYP",
      "independent": true
    },
    {
      "name": "Czech Republic",
      "topLevelDomain": [
        ".cz"
      ],
      "alpha2Code": "CZ",
      "alpha3Code": "CZE",
      "callingCodes": [
        "420"
      ],
      "capital": "Prague",
      "altSpellings": [
        "CZ",
        "Česká republika",
        "Česko"
      ],
      "region": "Central Europe",
      "continent": "Europe",
      "population": 10558524,
      "latlng": [
        49.75,
        15.5
      ],
      "demonym": "Czech",
      "area": 78865,
      "gini": 25,
      "timezones": [
        "UTC+01:00"
      ],
      "nativeName": "Česká republika",
      "numericCode": "203",
      "currencies": [
        {
          "code": "CZK",
          "name": "Czech koruna",
          "symbol": "Kč"
        }
      ],
      "languages": [
        {
          "iso639_1": "cs",
          "iso639_2": "ces",
          "name": "Czech",
          "nativeName": "čeština"
        },
        {
          "iso639_1": "sk",
          "iso639_2": "slk",
          "name": "Slovak",
          "nativeName": "slovenčina"
        }
      ],
      "translations": {
        "br": "República Tcheca",
        "pt": "República Checa",
        "nl": "Tsjechië",
        "hr": "Češka",
        "fa": "جمهوری چک",
        "de": "Tschechische Republik",
        "es": "República Checa",
        "fr": "République tchèque",
        "ja": "チェコ",
        "it": "Repubblica Ceca",
        "hu": "Csehország"
      },
      "flags": [
        "https://restcountries.com/data/cze.svg",
        "https://restcountries.com/data/png/cze.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "CZE",
      "independent": true
    },
    {
      "name": "Denmark",
      "topLevelDomain": [
        ".dk"
      ],
      "alpha2Code": "DK",
      "alpha3Code": "DNK",
      "callingCodes": [
        "45"
      ],
      "capital": "Copenhagen",
      "altSpellings": [
        "DK",
        "Danmark",
        "Kingdom of Denmark",
        "Kongeriget Danmark"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 5717014,
      "latlng": [
        56,
        10
      ],
      "demonym": "Danish",
      "area": 43094,
      "gini": 28.2,
      "timezones": [
        "UTC-04:00",
        "UTC-03:00",
        "UTC-01:00",
        "UTC",
        "UTC+01:00"
      ],
      "borders": [
        "DEU"
      ],
      "nativeName": "Danmark",
      "numericCode": "208",
      "currencies": [
        {
          "code": "DKK",
          "name": "Danish krone",
          "symbol": "kr"
        }
      ],
      "languages": [
        {
          "iso639_1": "da",
          "iso639_2": "dan",
          "name": "Danish",
          "nativeName": "dansk"
        }
      ],
      "translations": {
        "br": "Dinamarca",
        "pt": "Dinamarca",
        "nl": "Denemarken",
        "hr": "Danska",
        "fa": "دانمارک",
        "de": "Dänemark",
        "es": "Dinamarca",
        "fr": "Danemark",
        "ja": "デンマーク",
        "it": "Danimarca",
        "hu": "Dánia"
      },
      "flags": [
        "https://restcountries.com/data/dnk.svg",
        "https://restcountries.com/data/png/dnk.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "DEN",
      "independent": true
    },
    {
      "name": "Djibouti",
      "topLevelDomain": [
        ".dj"
      ],
      "alpha2Code": "DJ",
      "alpha3Code": "DJI",
      "callingCodes": [
        "253"
      ],
      "capital": "Djibouti",
      "altSpellings": [
        "DJ",
        "Jabuuti",
        "Gabuuti",
        "Republic of Djibouti",
        "République de Djibouti",
        "Gabuutih Ummuuno",
        "Jamhuuriyadda Jabuuti"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 900000,
      "latlng": [
        11.5,
        43
      ],
      "demonym": "Djibouti",
      "area": 23200,
      "gini": 41.6,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "ERI",
        "ETH",
        "SOM"
      ],
      "nativeName": "Djibouti",
      "numericCode": "262",
      "currencies": [
        {
          "code": "DJF",
          "name": "Djiboutian franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Djibuti",
        "pt": "Djibuti",
        "nl": "Djibouti",
        "hr": "Džibuti",
        "fa": "جیبوتی",
        "de": "Dschibuti",
        "es": "Yibuti",
        "fr": "Djibouti",
        "ja": "ジブチ",
        "it": "Gibuti",
        "hu": "Dzsibuti"
      },
      "flags": [
        "https://restcountries.com/data/dji.svg",
        "https://restcountries.com/data/png/dji.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        },
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "DJI",
      "independent": true
    },
    {
      "name": "Dominica",
      "topLevelDomain": [
        ".dm"
      ],
      "alpha2Code": "DM",
      "alpha3Code": "DMA",
      "callingCodes": [
        "1"
      ],
      "capital": "Roseau",
      "altSpellings": [
        "DM",
        "Dominique",
        "Wai‘tu kubuli",
        "Commonwealth of Dominica"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 71293,
      "latlng": [
        15.41666666,
        -61.33333333
      ],
      "demonym": "Dominican",
      "area": 751,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Dominica",
      "numericCode": "212",
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Dominica",
        "pt": "Dominica",
        "nl": "Dominica",
        "hr": "Dominika",
        "fa": "دومینیکا",
        "de": "Dominica",
        "es": "Dominica",
        "fr": "Dominique",
        "ja": "ドミニカ国",
        "it": "Dominica",
        "hu": "Dominikai Közösség"
      },
      "flags": [
        "https://restcountries.com/data/dma.svg",
        "https://restcountries.com/data/png/dma.png"
      ],
      "cioc": "DMA",
      "independent": true
    },
    {
      "name": "Dominican Republic",
      "topLevelDomain": [
        ".do"
      ],
      "alpha2Code": "DO",
      "alpha3Code": "DOM",
      "callingCodes": [
        "1"
      ],
      "capital": "Santo Domingo",
      "altSpellings": [
        "DO"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 10075045,
      "latlng": [
        19,
        -70.66666666
      ],
      "demonym": "Dominican",
      "area": 48671,
      "gini": 41.9,
      "timezones": [
        "UTC-04:00"
      ],
      "borders": [
        "HTI"
      ],
      "nativeName": "República Dominicana",
      "numericCode": "214",
      "currencies": [
        {
          "code": "DOP",
          "name": "Dominican peso",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "República Dominicana",
        "pt": "República Dominicana",
        "nl": "Dominicaanse Republiek",
        "hr": "Dominikanska Republika",
        "fa": "جمهوری دومینیکن",
        "de": "Dominikanische Republik",
        "es": "República Dominicana",
        "fr": "République dominicaine",
        "ja": "ドミニカ共和国",
        "it": "Repubblica Dominicana",
        "hu": "Dominikai Köztársaság"
      },
      "flags": [
        "https://restcountries.com/data/dom.svg",
        "https://restcountries.com/data/png/dom.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        },
        {
          "acronym": "CAIS",
          "name": "Central American Integration System",
          "otherAcronyms": [
            "SICA"
          ],
          "otherNames": [
            "Sistema de la Integración Centroamericana,"
          ]
        }
      ],
      "cioc": "DOM",
      "independent": true
    },
    {
      "name": "Ecuador",
      "topLevelDomain": [
        ".ec"
      ],
      "alpha2Code": "EC",
      "alpha3Code": "ECU",
      "callingCodes": [
        "593"
      ],
      "capital": "Quito",
      "altSpellings": [
        "EC",
        "Republic of Ecuador",
        "República del Ecuador"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 16545799,
      "latlng": [
        -2,
        -77.5
      ],
      "demonym": "Ecuadorean",
      "area": 276841,
      "gini": 45.7,
      "timezones": [
        "UTC-06:00",
        "UTC-05:00"
      ],
      "borders": [
        "COL",
        "PER"
      ],
      "nativeName": "Ecuador",
      "numericCode": "218",
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Equador",
        "pt": "Equador",
        "nl": "Ecuador",
        "hr": "Ekvador",
        "fa": "اکوادور",
        "de": "Ecuador",
        "es": "Ecuador",
        "fr": "Équateur",
        "ja": "エクアドル",
        "it": "Ecuador",
        "hu": "Ecuador"
      },
      "flags": [
        "https://restcountries.com/data/ecu.svg",
        "https://restcountries.com/data/png/ecu.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "cioc": "ECU",
      "independent": true
    },
    {
      "name": "Egypt",
      "topLevelDomain": [
        ".eg"
      ],
      "alpha2Code": "EG",
      "alpha3Code": "EGY",
      "callingCodes": [
        "20"
      ],
      "capital": "Cairo",
      "altSpellings": [
        "EG",
        "Arab Republic of Egypt"
      ],
      "region": "Northern Africa",
      "continent": "Africa",
      "population": 91290000,
      "latlng": [
        27,
        30
      ],
      "demonym": "Egyptian",
      "area": 1002450,
      "gini": 31.5,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "ISR",
        "LBY",
        "SDN"
      ],
      "nativeName": "مصر‎",
      "numericCode": "818",
      "currencies": [
        {
          "code": "EGP",
          "name": "Egyptian pound",
          "symbol": "£"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Egito",
        "pt": "Egipto",
        "nl": "Egypte",
        "hr": "Egipat",
        "fa": "مصر",
        "de": "Ägypten",
        "es": "Egipto",
        "fr": "Égypte",
        "ja": "エジプト",
        "it": "Egitto",
        "hu": "Egyiptom"
      },
      "flags": [
        "https://restcountries.com/data/egy.svg",
        "https://restcountries.com/data/png/egy.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        },
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "EGY",
      "independent": true
    },
    {
      "name": "El Salvador",
      "topLevelDomain": [
        ".sv"
      ],
      "alpha2Code": "SV",
      "alpha3Code": "SLV",
      "callingCodes": [
        "503"
      ],
      "capital": "San Salvador",
      "altSpellings": [
        "SV",
        "Republic of El Salvador",
        "República de El Salvador"
      ],
      "region": "Central America",
      "continent": "Americas",
      "population": 6520675,
      "latlng": [
        13.83333333,
        -88.91666666
      ],
      "demonym": "Salvadoran",
      "area": 21041,
      "gini": 38.8,
      "timezones": [
        "UTC-06:00"
      ],
      "borders": [
        "GTM",
        "HND"
      ],
      "nativeName": "El Salvador",
      "numericCode": "222",
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "El Salvador",
        "pt": "El Salvador",
        "nl": "El Salvador",
        "hr": "Salvador",
        "fa": "السالوادور",
        "de": "El Salvador",
        "es": "El Salvador",
        "fr": "Salvador",
        "ja": "エルサルバドル",
        "it": "El Salvador",
        "hu": "Salvador"
      },
      "flags": [
        "https://restcountries.com/data/slv.svg",
        "https://restcountries.com/data/png/slv.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CAIS",
          "name": "Central American Integration System",
          "otherAcronyms": [
            "SICA"
          ],
          "otherNames": [
            "Sistema de la Integración Centroamericana,"
          ]
        }
      ],
      "cioc": "ESA",
      "independent": true
    },
    {
      "name": "Equatorial Guinea",
      "topLevelDomain": [
        ".gq"
      ],
      "alpha2Code": "GQ",
      "alpha3Code": "GNQ",
      "callingCodes": [
        "240"
      ],
      "capital": "Malabo",
      "altSpellings": [
        "GQ",
        "Republic of Equatorial Guinea",
        "República de Guinea Ecuatorial",
        "République de Guinée équatoriale",
        "República da Guiné Equatorial"
      ],
      "region": "Middle Africa",
      "continent": "Africa",
      "population": 1222442,
      "latlng": [
        2,
        10
      ],
      "demonym": "Equatorial Guinean",
      "area": 28051,
      "gini": 39.4,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "CMR",
        "GAB"
      ],
      "nativeName": "Guinea Ecuatorial",
      "numericCode": "226",
      "currencies": [
        {
          "code": "XAF",
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        },
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "pt",
          "iso639_2": "por",
          "name": "Portuguese",
          "nativeName": "Português"
        },
        {
          "iso639_2": "fan",
          "name": "Fang",
          "nativeName": "Fang"
        }
      ],
      "translations": {
        "br": "Guiné Equatorial",
        "pt": "Guiné Equatorial",
        "nl": "Equatoriaal-Guinea",
        "hr": "Ekvatorijalna Gvineja",
        "fa": "گینه استوایی",
        "de": "Äquatorial-Guinea",
        "es": "Guinea Ecuatorial",
        "fr": "Guinée-Équatoriale",
        "ja": "赤道ギニア",
        "it": "Guinea Equatoriale",
        "hu": "Egyenlítői-Guinea"
      },
      "flags": [
        "https://restcountries.com/data/gnq.svg",
        "https://restcountries.com/data/png/gnq.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "GEQ",
      "independent": true
    },
    {
      "name": "Eritrea",
      "topLevelDomain": [
        ".er"
      ],
      "alpha2Code": "ER",
      "alpha3Code": "ERI",
      "callingCodes": [
        "291"
      ],
      "capital": "Asmara",
      "altSpellings": [
        "ER",
        "State of Eritrea",
        "ሃገረ ኤርትራ",
        "Dawlat Iritriyá",
        "ʾErtrā",
        "Iritriyā",
        ""
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 5352000,
      "latlng": [
        15,
        39
      ],
      "demonym": "Eritrean",
      "area": 117600,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "DJI",
        "ETH",
        "SDN"
      ],
      "nativeName": "ኤርትራ",
      "numericCode": "232",
      "currencies": [
        {
          "code": "ERN",
          "name": "Eritrean nakfa",
          "symbol": "Nfk"
        }
      ],
      "languages": [
        {
          "iso639_1": "ti",
          "iso639_2": "tir",
          "name": "Tigrinya",
          "nativeName": "ትግርኛ"
        },
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_2": "tig",
          "name": "Tigre",
          "nativeName": "ትግረ"
        },
        {
          "iso639_2": "kun",
          "name": "Kunama",
          "nativeName": "Kunama"
        },
        {
          "iso639_2": "ssy",
          "name": "Saho",
          "nativeName": "Saho"
        },
        {
          "iso639_2": "byn",
          "name": "Bilen",
          "nativeName": "ብሊና"
        },
        {
          "iso639_2": "nrb",
          "name": "Nara",
          "nativeName": "Nara"
        },
        {
          "iso639_1": "aa",
          "iso639_2": "aar",
          "name": "Afar",
          "nativeName": "Afar"
        }
      ],
      "translations": {
        "br": "Eritreia",
        "pt": "Eritreia",
        "nl": "Eritrea",
        "hr": "Eritreja",
        "fa": "اریتره",
        "de": "Eritrea",
        "es": "Eritrea",
        "fr": "Érythrée",
        "ja": "エリトリア",
        "it": "Eritrea",
        "hu": "Eritrea"
      },
      "flags": [
        "https://restcountries.com/data/eri.svg",
        "https://restcountries.com/data/png/eri.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "ERI",
      "independent": true
    },
    {
      "name": "Estonia",
      "topLevelDomain": [
        ".ee"
      ],
      "alpha2Code": "EE",
      "alpha3Code": "EST",
      "callingCodes": [
        "372"
      ],
      "capital": "Tallinn",
      "altSpellings": [
        "EE",
        "Eesti",
        "Republic of Estonia",
        "Eesti Vabariik"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 1315944,
      "latlng": [
        59,
        26
      ],
      "demonym": "Estonian",
      "area": 45227,
      "gini": 30.3,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "LVA",
        "RUS"
      ],
      "nativeName": "Eesti",
      "numericCode": "233",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "et",
          "iso639_2": "est",
          "name": "Estonian",
          "nativeName": "eesti"
        }
      ],
      "translations": {
        "br": "Estônia",
        "pt": "Estónia",
        "nl": "Estland",
        "hr": "Estonija",
        "fa": "استونی",
        "de": "Estland",
        "es": "Estonia",
        "fr": "Estonie",
        "ja": "エストニア",
        "it": "Estonia",
        "hu": "Észtország"
      },
      "flags": [
        "https://restcountries.com/data/est.svg",
        "https://restcountries.com/data/png/est.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "EST",
      "independent": true
    },
    {
      "name": "Ethiopia",
      "topLevelDomain": [
        ".et"
      ],
      "alpha2Code": "ET",
      "alpha3Code": "ETH",
      "callingCodes": [
        "251"
      ],
      "capital": "Addis Ababa",
      "altSpellings": [
        "ET",
        "ʾĪtyōṗṗyā",
        "Federal Democratic Republic of Ethiopia",
        "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 92206005,
      "latlng": [
        8,
        38
      ],
      "demonym": "Ethiopian",
      "area": 1104300,
      "gini": 35,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "DJI",
        "ERI",
        "KEN",
        "SOM",
        "SSD",
        "SDN"
      ],
      "nativeName": "ኢትዮጵያ",
      "numericCode": "231",
      "currencies": [
        {
          "code": "ETB",
          "name": "Ethiopian birr",
          "symbol": "Br"
        }
      ],
      "languages": [
        {
          "iso639_1": "am",
          "iso639_2": "amh",
          "name": "Amharic",
          "nativeName": "አማርኛ"
        }
      ],
      "translations": {
        "br": "Etiópia",
        "pt": "Etiópia",
        "nl": "Ethiopië",
        "hr": "Etiopija",
        "fa": "اتیوپی",
        "de": "Äthiopien",
        "es": "Etiopía",
        "fr": "Éthiopie",
        "ja": "エチオピア",
        "it": "Etiopia",
        "hu": "Etiópia"
      },
      "flags": [
        "https://restcountries.com/data/eth.svg",
        "https://restcountries.com/data/png/eth.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "ETH",
      "independent": true
    },
    {
      "name": "Falkland Islands (Malvinas)",
      "topLevelDomain": [
        ".fk"
      ],
      "alpha2Code": "FK",
      "alpha3Code": "FLK",
      "callingCodes": [
        "500"
      ],
      "capital": "Stanley",
      "altSpellings": [
        "FK",
        "Islas Malvinas"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 2563,
      "latlng": [
        -51.75,
        -59
      ],
      "demonym": "Falkland Islander",
      "area": 12173,
      "gini": 36,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Falkland Islands",
      "numericCode": "238",
      "currencies": [
        {
          "code": "FKP",
          "name": "Falkland Islands pound",
          "symbol": "£"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Ilhas Malvinas",
        "pt": "Ilhas Falkland",
        "nl": "Falklandeilanden [Islas Malvinas]",
        "hr": "Falklandski Otoci",
        "fa": "جزایر فالکلند",
        "de": "Falklandinseln",
        "es": "Islas Malvinas",
        "fr": "Îles Malouines",
        "ja": "フォークランド（マルビナス）諸島",
        "it": "Isole Falkland o Isole Malvine",
        "hu": "Falkland-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/flk.svg",
        "https://restcountries.com/data/png/flk.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "independent": false
    },
    {
      "name": "Faroe Islands",
      "topLevelDomain": [
        ".fo"
      ],
      "alpha2Code": "FO",
      "alpha3Code": "FRO",
      "callingCodes": [
        "298"
      ],
      "capital": "Tórshavn",
      "altSpellings": [
        "FO",
        "Føroyar",
        "Færøerne"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 49376,
      "latlng": [
        62,
        -7
      ],
      "demonym": "Faroese",
      "area": 1393,
      "gini": 22.7,
      "timezones": [
        "UTC+00:00"
      ],
      "nativeName": "Føroyar",
      "numericCode": "234",
      "currencies": [
        {
          "code": "DKK",
          "name": "Danish krone",
          "symbol": "kr"
        },
        {
          "code": "(none)",
          "name": "Faroese króna",
          "symbol": "kr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fo",
          "iso639_2": "fao",
          "name": "Faroese",
          "nativeName": "føroyskt"
        }
      ],
      "translations": {
        "br": "Ilhas Faroé",
        "pt": "Ilhas Faroé",
        "nl": "Faeröer",
        "hr": "Farski Otoci",
        "fa": "جزایر فارو",
        "de": "Färöer-Inseln",
        "es": "Islas Faroe",
        "fr": "Îles Féroé",
        "ja": "フェロー諸島",
        "it": "Isole Far Oer",
        "hu": "Feröer"
      },
      "flags": [
        "https://restcountries.com/data/fro.svg",
        "https://restcountries.com/data/png/fro.png"
      ],
      "independent": false
    },
    {
      "name": "Fiji",
      "topLevelDomain": [
        ".fj"
      ],
      "alpha2Code": "FJ",
      "alpha3Code": "FJI",
      "callingCodes": [
        "679"
      ],
      "capital": "Suva",
      "altSpellings": [
        "FJ",
        "Viti",
        "Republic of Fiji",
        "Matanitu ko Viti",
        "Fijī Gaṇarājya"
      ],
      "region": "Melanesia",
      "continent": "Oceania",
      "population": 867000,
      "latlng": [
        -18,
        175
      ],
      "demonym": "Fijian",
      "area": 18272,
      "gini": 36.7,
      "timezones": [
        "UTC+12:00"
      ],
      "nativeName": "Fiji",
      "numericCode": "242",
      "currencies": [
        {
          "code": "FJD",
          "name": "Fijian dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "fj",
          "iso639_2": "fij",
          "name": "Fijian",
          "nativeName": "vosa Vakaviti"
        },
        {
          "iso639_2": "hif",
          "name": "Fiji Hindi",
          "nativeName": "फ़िजी बात"
        },
        {
          "iso639_2": "rtm",
          "name": "Rotuman",
          "nativeName": "Fäeag Rotuma"
        }
      ],
      "translations": {
        "br": "Fiji",
        "pt": "Fiji",
        "nl": "Fiji",
        "hr": "Fiđi",
        "fa": "فیجی",
        "de": "Fidschi",
        "es": "Fiyi",
        "fr": "Fidji",
        "ja": "フィジー",
        "it": "Figi",
        "hu": "Fidzsi-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/fji.svg",
        "https://restcountries.com/data/png/fji.png"
      ],
      "cioc": "FIJ",
      "independent": true
    },
    {
      "name": "Finland",
      "topLevelDomain": [
        ".fi"
      ],
      "alpha2Code": "FI",
      "alpha3Code": "FIN",
      "callingCodes": [
        "358"
      ],
      "capital": "Helsinki",
      "altSpellings": [
        "FI",
        "Suomi",
        "Republic of Finland",
        "Suomen tasavalta",
        "Republiken Finland"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 5491817,
      "latlng": [
        64,
        26
      ],
      "demonym": "Finnish",
      "area": 338424,
      "gini": 27.3,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "NOR",
        "SWE",
        "RUS"
      ],
      "nativeName": "Suomi",
      "numericCode": "246",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "fi",
          "iso639_2": "fin",
          "name": "Finnish",
          "nativeName": "suomi"
        },
        {
          "iso639_1": "sv",
          "iso639_2": "swe",
          "name": "Swedish",
          "nativeName": "svenska"
        }
      ],
      "translations": {
        "br": "Finlândia",
        "pt": "Finlândia",
        "nl": "Finland",
        "hr": "Finska",
        "fa": "فنلاند",
        "de": "Finnland",
        "es": "Finlandia",
        "fr": "Finlande",
        "ja": "フィンランド",
        "it": "Finlandia",
        "hu": "Finnország"
      },
      "flags": [
        "https://restcountries.com/data/fin.svg",
        "https://restcountries.com/data/png/fin.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "FIN",
      "independent": true
    },
    {
      "name": "France",
      "topLevelDomain": [
        ".fr"
      ],
      "alpha2Code": "FR",
      "alpha3Code": "FRA",
      "callingCodes": [
        "33"
      ],
      "capital": "Paris",
      "altSpellings": [
        "FR",
        "French Republic",
        "République française"
      ],
      "region": "Western Europe",
      "continent": "Europe",
      "population": 66710000,
      "latlng": [
        46,
        2
      ],
      "demonym": "French",
      "area": 640679,
      "gini": 32.4,
      "timezones": [
        "UTC-10:00",
        "UTC-09:30",
        "UTC-09:00",
        "UTC-08:00",
        "UTC-04:00",
        "UTC-03:00",
        "UTC+01:00",
        "UTC+02:00",
        "UTC+03:00",
        "UTC+04:00",
        "UTC+05:00",
        "UTC+10:00",
        "UTC+11:00",
        "UTC+12:00"
      ],
      "borders": [
        "AND",
        "BEL",
        "DEU",
        "ITA",
        "LUX",
        "MCO",
        "ESP",
        "CHE"
      ],
      "nativeName": "France",
      "numericCode": "250",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "França",
        "pt": "França",
        "nl": "Frankrijk",
        "hr": "Francuska",
        "fa": "فرانسه",
        "de": "Frankreich",
        "es": "Francia",
        "fr": "France",
        "ja": "フランス",
        "it": "Francia",
        "hu": "Franciaország"
      },
      "flags": [
        "https://restcountries.com/data/fra.svg",
        "https://restcountries.com/data/png/fra.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "FRA",
      "independent": true
    },
    {
      "name": "French Guiana",
      "topLevelDomain": [
        ".gf"
      ],
      "alpha2Code": "GF",
      "alpha3Code": "GUF",
      "callingCodes": [
        "594"
      ],
      "capital": "Cayenne",
      "altSpellings": [
        "GF",
        "Guiana",
        "Guyane"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 254541,
      "latlng": [
        4,
        -53
      ],
      "timezones": [
        "UTC-03:00"
      ],
      "borders": [
        "BRA",
        "SUR"
      ],
      "nativeName": "Guyane française",
      "numericCode": "254",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Guiana Francesa",
        "pt": "Guiana Francesa",
        "nl": "Frans-Guyana",
        "hr": "Francuska Gvajana",
        "fa": "گویان فرانسه",
        "de": "Französisch Guyana",
        "es": "Guayana Francesa",
        "fr": "Guayane",
        "ja": "フランス領ギアナ",
        "it": "Guyana francese",
        "hu": "Francia Guyana"
      },
      "flags": [
        "https://restcountries.com/data/guf.svg",
        "https://restcountries.com/data/png/guf.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        },
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "independent": false
    },
    {
      "name": "French Polynesia",
      "topLevelDomain": [
        ".pf"
      ],
      "alpha2Code": "PF",
      "alpha3Code": "PYF",
      "callingCodes": [
        "689"
      ],
      "capital": "Papeetē",
      "altSpellings": [
        "PF",
        "Polynésie française",
        "French Polynesia",
        "Pōrīnetia Farāni"
      ],
      "region": "Polynesia",
      "continent": "Oceania",
      "population": 271800,
      "latlng": [
        -15,
        -140
      ],
      "demonym": "French Polynesian",
      "area": 4167,
      "timezones": [
        "UTC-10:00",
        "UTC-09:30",
        "UTC-09:00"
      ],
      "nativeName": "Polynésie française",
      "numericCode": "258",
      "currencies": [
        {
          "code": "XPF",
          "name": "CFP franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Polinésia Francesa",
        "pt": "Polinésia Francesa",
        "nl": "Frans-Polynesië",
        "hr": "Francuska Polinezija",
        "fa": "پلی‌نزی فرانسه",
        "de": "Französisch-Polynesien",
        "es": "Polinesia Francesa",
        "fr": "Polynésie française",
        "ja": "フランス領ポリネシア",
        "it": "Polinesia Francese",
        "hu": "Francia Polinézia"
      },
      "flags": [
        "https://restcountries.com/data/pyf.svg",
        "https://restcountries.com/data/png/pyf.png"
      ],
      "independent": false
    },
    {
      "name": "French Southern Territories",
      "topLevelDomain": [
        ".tf"
      ],
      "alpha2Code": "TF",
      "alpha3Code": "ATF",
      "callingCodes": [
        "262"
      ],
      "capital": "Port-aux-Français",
      "altSpellings": [
        "TF"
      ],
      "region": "Southern Africa",
      "continent": "Africa",
      "population": 140,
      "latlng": [
        -49.25,
        69.167
      ],
      "demonym": "French",
      "area": 7747,
      "timezones": [
        "UTC+05:00"
      ],
      "nativeName": "Territoire des Terres australes et antarctiques françaises",
      "numericCode": "260",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Terras Austrais e Antárticas Francesas",
        "pt": "Terras Austrais e Antárticas Francesas",
        "nl": "Franse Gebieden in de zuidelijke Indische Oceaan",
        "hr": "Francuski južni i antarktički teritoriji",
        "fa": "سرزمین‌های جنوبی و جنوبگانی فرانسه",
        "de": "Französische Süd- und Antarktisgebiete",
        "es": "Tierras Australes y Antárticas Francesas",
        "fr": "Terres australes et antarctiques françaises",
        "ja": "フランス領南方・南極地域",
        "it": "Territori Francesi del Sud",
        "hu": "Francia déli és antarktiszi területek"
      },
      "flags": [
        "https://restcountries.com/data/atf.svg",
        "https://restcountries.com/data/png/atf.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "independent": false
    },
    {
      "name": "Gabon",
      "topLevelDomain": [
        ".ga"
      ],
      "alpha2Code": "GA",
      "alpha3Code": "GAB",
      "callingCodes": [
        "241"
      ],
      "capital": "Libreville",
      "altSpellings": [
        "GA",
        "Gabonese Republic",
        "République Gabonaise"
      ],
      "region": "Middle Africa",
      "continent": "Africa",
      "population": 1802278,
      "latlng": [
        -1,
        11.75
      ],
      "demonym": "Gabonese",
      "area": 267668,
      "gini": 38,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "CMR",
        "COG",
        "GNQ"
      ],
      "nativeName": "Gabon",
      "numericCode": "266",
      "currencies": [
        {
          "code": "XAF",
          "name": "Central African CFA franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Gabão",
        "pt": "Gabão",
        "nl": "Gabon",
        "hr": "Gabon",
        "fa": "گابن",
        "de": "Gabun",
        "es": "Gabón",
        "fr": "Gabon",
        "ja": "ガボン",
        "it": "Gabon",
        "hu": "Gabon"
      },
      "flags": [
        "https://restcountries.com/data/gab.svg",
        "https://restcountries.com/data/png/gab.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "GAB",
      "independent": true
    },
    {
      "name": "Gambia",
      "topLevelDomain": [
        ".gm"
      ],
      "alpha2Code": "GM",
      "alpha3Code": "GMB",
      "callingCodes": [
        "220"
      ],
      "capital": "Banjul",
      "altSpellings": [
        "GM",
        "Republic of the Gambia"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 1882450,
      "latlng": [
        13.46666666,
        -16.56666666
      ],
      "demonym": "Gambian",
      "area": 11295,
      "gini": 35.9,
      "timezones": [
        "UTC+00:00"
      ],
      "borders": [
        "SEN"
      ],
      "nativeName": "Gambia",
      "numericCode": "270",
      "currencies": [
        {
          "code": "GMD",
          "name": "Gambian dalasi",
          "symbol": "D"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Gâmbia",
        "pt": "Gâmbia",
        "nl": "Gambia",
        "hr": "Gambija",
        "fa": "گامبیا",
        "de": "Gambia",
        "es": "Gambia",
        "fr": "Gambie",
        "ja": "ガンビア",
        "it": "Gambia",
        "hu": "Gambia"
      },
      "flags": [
        "https://restcountries.com/data/gmb.svg",
        "https://restcountries.com/data/png/gmb.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "GAM",
      "independent": true
    },
    {
      "name": "Georgia",
      "topLevelDomain": [
        ".ge"
      ],
      "alpha2Code": "GE",
      "alpha3Code": "GEO",
      "callingCodes": [
        "995"
      ],
      "capital": "Tbilisi",
      "altSpellings": [
        "GE",
        "Sakartvelo"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 3720400,
      "latlng": [
        42,
        43.5
      ],
      "demonym": "Georgian",
      "area": 69700,
      "gini": 35.9,
      "timezones": [
        "UTC-04:00"
      ],
      "borders": [
        "ARM",
        "AZE",
        "RUS",
        "TUR"
      ],
      "nativeName": "საქართველო",
      "numericCode": "268",
      "currencies": [
        {
          "code": "GEL",
          "name": "Georgian Lari",
          "symbol": "ლ"
        }
      ],
      "languages": [
        {
          "iso639_1": "ka",
          "iso639_2": "kat",
          "name": "Georgian",
          "nativeName": "ქართული"
        }
      ],
      "translations": {
        "br": "Geórgia",
        "pt": "Geórgia",
        "nl": "Georgië",
        "hr": "Gruzija",
        "fa": "گرجستان",
        "de": "Georgien",
        "es": "Georgia",
        "fr": "Géorgie",
        "ja": "グルジア",
        "it": "Georgia",
        "hu": "Grúzia"
      },
      "flags": [
        "https://restcountries.com/data/geo.svg",
        "https://restcountries.com/data/png/geo.png"
      ],
      "cioc": "GEO",
      "independent": true
    },
    {
      "name": "Germany",
      "topLevelDomain": [
        ".de"
      ],
      "alpha2Code": "DE",
      "alpha3Code": "DEU",
      "callingCodes": [
        "49"
      ],
      "capital": "Berlin",
      "altSpellings": [
        "DE",
        "Federal Republic of Germany",
        "Bundesrepublik Deutschland"
      ],
      "region": "Central Europe",
      "continent": "Europe",
      "population": 81770900,
      "latlng": [
        51,
        9
      ],
      "demonym": "German",
      "area": 357114,
      "gini": 31.9,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "AUT",
        "BEL",
        "CZE",
        "DNK",
        "FRA",
        "LUX",
        "NLD",
        "POL",
        "CHE"
      ],
      "nativeName": "Deutschland",
      "numericCode": "276",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "de",
          "iso639_2": "deu",
          "name": "German",
          "nativeName": "Deutsch"
        }
      ],
      "translations": {
        "br": "Alemanha",
        "pt": "Alemanha",
        "nl": "Duitsland",
        "hr": "Njemačka",
        "fa": "آلمان",
        "de": "Deutschland",
        "es": "Alemania",
        "fr": "Allemagne",
        "ja": "ドイツ",
        "it": "Germania",
        "hu": "Grúzia"
      },
      "flags": [
        "https://restcountries.com/data/deu.svg",
        "https://restcountries.com/data/png/deu.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "GER",
      "independent": true
    },
    {
      "name": "Ghana",
      "topLevelDomain": [
        ".gh"
      ],
      "alpha2Code": "GH",
      "alpha3Code": "GHA",
      "callingCodes": [
        "233"
      ],
      "capital": "Accra",
      "altSpellings": [
        "GH"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 27670174,
      "latlng": [
        8,
        -2
      ],
      "demonym": "Ghanaian",
      "area": 238533,
      "gini": 43.5,
      "timezones": [
        "UTC"
      ],
      "borders": [
        "BFA",
        "CIV",
        "TGO"
      ],
      "nativeName": "Ghana",
      "numericCode": "288",
      "currencies": [
        {
          "code": "GHS",
          "name": "Ghanaian cedi",
          "symbol": "₵"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Gana",
        "pt": "Gana",
        "nl": "Ghana",
        "hr": "Gana",
        "fa": "غنا",
        "de": "Ghana",
        "es": "Ghana",
        "fr": "Ghana",
        "ja": "ガーナ",
        "it": "Ghana",
        "hu": "Ghána"
      },
      "flags": [
        "https://restcountries.com/data/gha.svg",
        "https://restcountries.com/data/png/gha.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "GHA",
      "independent": true
    },
    {
      "name": "Gibraltar",
      "topLevelDomain": [
        ".gi"
      ],
      "alpha2Code": "GI",
      "alpha3Code": "GIB",
      "callingCodes": [
        "350"
      ],
      "capital": "Gibraltar",
      "altSpellings": [
        "GI"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 33140,
      "latlng": [
        36.13333333,
        -5.35
      ],
      "demonym": "Gibraltar",
      "area": 6,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "ESP"
      ],
      "nativeName": "Gibraltar",
      "numericCode": "292",
      "currencies": [
        {
          "code": "GIP",
          "name": "Gibraltar pound",
          "symbol": "£"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Gibraltar",
        "pt": "Gibraltar",
        "nl": "Gibraltar",
        "hr": "Gibraltar",
        "fa": "جبل‌طارق",
        "de": "Gibraltar",
        "es": "Gibraltar",
        "fr": "Gibraltar",
        "ja": "ジブラルタル",
        "it": "Gibilterra",
        "hu": "Gibraltár"
      },
      "flags": [
        "https://restcountries.com/data/gib.svg",
        "https://restcountries.com/data/png/gib.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "independent": false
    },
    {
      "name": "Greece",
      "topLevelDomain": [
        ".gr"
      ],
      "alpha2Code": "GR",
      "alpha3Code": "GRC",
      "callingCodes": [
        "30"
      ],
      "capital": "Athens",
      "altSpellings": [
        "GR",
        "Elláda",
        "Hellenic Republic",
        "Ελληνική Δημοκρατία"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 10858018,
      "latlng": [
        39,
        22
      ],
      "demonym": "Greek",
      "area": 131990,
      "gini": 32.9,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "ALB",
        "BGR",
        "TUR",
        "MKD"
      ],
      "nativeName": "Ελλάδα",
      "numericCode": "300",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "el",
          "iso639_2": "ell",
          "name": "Greek (modern)",
          "nativeName": "ελληνικά"
        }
      ],
      "translations": {
        "br": "Grécia",
        "pt": "Grécia",
        "nl": "Griekenland",
        "hr": "Grčka",
        "fa": "یونان",
        "de": "Griechenland",
        "es": "Grecia",
        "fr": "Grèce",
        "ja": "ギリシャ",
        "it": "Grecia",
        "hu": "Görögország"
      },
      "flags": [
        "https://restcountries.com/data/grc.svg",
        "https://restcountries.com/data/png/grc.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "GRE",
      "independent": true
    },
    {
      "name": "Greenland",
      "topLevelDomain": [
        ".gl"
      ],
      "alpha2Code": "GL",
      "alpha3Code": "GRL",
      "callingCodes": [
        "299"
      ],
      "capital": "Nuuk",
      "altSpellings": [
        "GL",
        "Grønland"
      ],
      "region": "Northern America",
      "continent": "Americas",
      "population": 55847,
      "latlng": [
        72,
        -40
      ],
      "demonym": "Greenlandic",
      "area": 2166086,
      "gini": 33.9,
      "timezones": [
        "UTC-04:00",
        "UTC-03:00",
        "UTC-01:00",
        "UTC+00:00"
      ],
      "nativeName": "Kalaallit Nunaat",
      "numericCode": "304",
      "currencies": [
        {
          "code": "DKK",
          "name": "Danish krone",
          "symbol": "kr"
        }
      ],
      "languages": [
        {
          "iso639_1": "kl",
          "iso639_2": "kal",
          "name": "Kalaallisut",
          "nativeName": "kalaallisut"
        }
      ],
      "translations": {
        "br": "Groelândia",
        "pt": "Gronelândia",
        "nl": "Groenland",
        "hr": "Grenland",
        "fa": "گرینلند",
        "de": "Grönland",
        "es": "Groenlandia",
        "fr": "Groenland",
        "ja": "グリーンランド",
        "it": "Groenlandia",
        "hu": "Grönland"
      },
      "flags": [
        "https://restcountries.com/data/grl.svg",
        "https://restcountries.com/data/png/grl.png"
      ],
      "independent": false
    },
    {
      "name": "Grenada",
      "topLevelDomain": [
        ".gd"
      ],
      "alpha2Code": "GD",
      "alpha3Code": "GRD",
      "callingCodes": [
        "1"
      ],
      "capital": "St. George's",
      "altSpellings": [
        "GD"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 103328,
      "latlng": [
        12.11666666,
        -61.66666666
      ],
      "demonym": "Grenadian",
      "area": 344,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Grenada",
      "numericCode": "308",
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Granada",
        "pt": "Granada",
        "nl": "Grenada",
        "hr": "Grenada",
        "fa": "گرنادا",
        "de": "Grenada",
        "es": "Grenada",
        "fr": "Grenade",
        "ja": "グレナダ",
        "it": "Grenada",
        "hu": "Grenada"
      },
      "flags": [
        "https://restcountries.com/data/grd.svg",
        "https://restcountries.com/data/png/grd.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        }
      ],
      "cioc": "GRN",
      "independent": true
    },
    {
      "name": "Guadeloupe",
      "topLevelDomain": [
        ".gp"
      ],
      "alpha2Code": "GP",
      "alpha3Code": "GLP",
      "callingCodes": [
        "590"
      ],
      "capital": "Basse-Terre",
      "altSpellings": [
        "GP",
        "Gwadloup"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 400132,
      "latlng": [
        16.25,
        -61.583333
      ],
      "demonym": "Guadeloupian",
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Guadeloupe",
      "numericCode": "312",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Guadalupe",
        "pt": "Guadalupe",
        "nl": "Guadeloupe",
        "hr": "Gvadalupa",
        "fa": "جزیره گوادلوپ",
        "de": "Guadeloupe",
        "es": "Guadalupe",
        "fr": "Guadeloupe",
        "ja": "グアドループ",
        "it": "Guadeloupa",
        "hu": "Guadeloupe"
      },
      "flags": [
        "https://restcountries.com/data/glp.svg",
        "https://restcountries.com/data/png/glp.png"
      ],
      "independent": false
    },
    {
      "name": "Guam",
      "topLevelDomain": [
        ".gu"
      ],
      "alpha2Code": "GU",
      "alpha3Code": "GUM",
      "callingCodes": [
        "1"
      ],
      "capital": "Hagåtña",
      "altSpellings": [
        "GU",
        "Guåhån"
      ],
      "region": "Micronesia",
      "continent": "Oceania",
      "population": 184200,
      "latlng": [
        13.46666666,
        144.78333333
      ],
      "demonym": "Guamanian",
      "area": 549,
      "timezones": [
        "UTC+10:00"
      ],
      "nativeName": "Guam",
      "numericCode": "316",
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "ch",
          "iso639_2": "cha",
          "name": "Chamorro",
          "nativeName": "Chamoru"
        },
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Guam",
        "pt": "Guame",
        "nl": "Guam",
        "hr": "Guam",
        "fa": "گوام",
        "de": "Guam",
        "es": "Guam",
        "fr": "Guam",
        "ja": "グアム",
        "it": "Guam",
        "hu": "Guam"
      },
      "flags": [
        "https://restcountries.com/data/gum.svg",
        "https://restcountries.com/data/png/gum.png"
      ],
      "cioc": "GUM",
      "independent": false
    },
    {
      "name": "Guatemala",
      "topLevelDomain": [
        ".gt"
      ],
      "alpha2Code": "GT",
      "alpha3Code": "GTM",
      "callingCodes": [
        "502"
      ],
      "capital": "Guatemala City",
      "altSpellings": [
        "GT"
      ],
      "region": "Central America",
      "continent": "Americas",
      "population": 16176133,
      "latlng": [
        15.5,
        -90.25
      ],
      "demonym": "Guatemalan",
      "area": 108889,
      "gini": 48.3,
      "timezones": [
        "UTC-06:00"
      ],
      "borders": [
        "BLZ",
        "SLV",
        "HND",
        "MEX"
      ],
      "nativeName": "Guatemala",
      "numericCode": "320",
      "currencies": [
        {
          "code": "GTQ",
          "name": "Guatemalan quetzal",
          "symbol": "Q"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Guatemala",
        "pt": "Guatemala",
        "nl": "Guatemala",
        "hr": "Gvatemala",
        "fa": "گواتمالا",
        "de": "Guatemala",
        "es": "Guatemala",
        "fr": "Guatemala",
        "ja": "グアテマラ",
        "it": "Guatemala",
        "hu": "Guatemala"
      },
      "flags": [
        "https://restcountries.com/data/gtm.svg",
        "https://restcountries.com/data/png/gtm.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CAIS",
          "name": "Central American Integration System",
          "otherAcronyms": [
            "SICA"
          ],
          "otherNames": [
            "Sistema de la Integración Centroamericana,"
          ]
        }
      ],
      "cioc": "GUA",
      "independent": true
    },
    {
      "name": "Guernsey",
      "topLevelDomain": [
        ".gg"
      ],
      "alpha2Code": "GG",
      "alpha3Code": "GGY",
      "callingCodes": [
        "44"
      ],
      "capital": "St. Peter Port",
      "altSpellings": [
        "GG",
        "Bailiwick of Guernsey",
        "Bailliage de Guernesey"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 62999,
      "latlng": [
        49.46666666,
        -2.58333333
      ],
      "demonym": "Channel Islander",
      "area": 78,
      "timezones": [
        "UTC+00:00"
      ],
      "nativeName": "Guernsey",
      "numericCode": "831",
      "currencies": [
        {
          "code": "GBP",
          "name": "British pound",
          "symbol": "£"
        },
        {
          "code": "(none)",
          "name": "Guernsey pound",
          "symbol": "£"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Guernsey",
        "pt": "Guernsey",
        "nl": "Guernsey",
        "hr": "Guernsey",
        "fa": "گرنزی",
        "de": "Guernsey",
        "es": "Guernsey",
        "fr": "Guernesey",
        "ja": "ガーンジー",
        "it": "Guernsey",
        "hu": "Guernsey"
      },
      "flags": [
        "https://restcountries.com/data/ggy.svg",
        "https://restcountries.com/data/png/ggy.png"
      ],
      "independent": false
    },
    {
      "name": "Guinea",
      "topLevelDomain": [
        ".gn"
      ],
      "alpha2Code": "GN",
      "alpha3Code": "GIN",
      "callingCodes": [
        "224"
      ],
      "capital": "Conakry",
      "altSpellings": [
        "GN",
        "Republic of Guinea",
        "République de Guinée"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 12947000,
      "latlng": [
        11,
        -10
      ],
      "demonym": "Guinean",
      "area": 245857,
      "gini": 33.7,
      "timezones": [
        "UTC"
      ],
      "borders": [
        "CIV",
        "GNB",
        "LBR",
        "MLI",
        "SEN",
        "SLE"
      ],
      "nativeName": "Guinée",
      "numericCode": "324",
      "currencies": [
        {
          "code": "GNF",
          "name": "Guinean franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "ff",
          "iso639_2": "ful",
          "name": "Fula",
          "nativeName": "Fulfulde"
        }
      ],
      "translations": {
        "br": "Guiné",
        "pt": "Guiné",
        "nl": "Guinee",
        "hr": "Gvineja",
        "fa": "گینه",
        "de": "Guinea",
        "es": "Guinea",
        "fr": "Guinée",
        "ja": "ギニア",
        "it": "Guinea",
        "hu": "Guinea"
      },
      "flags": [
        "https://restcountries.com/data/gin.svg",
        "https://restcountries.com/data/png/gin.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "GUI",
      "independent": true
    },
    {
      "name": "Guinea-Bissau",
      "topLevelDomain": [
        ".gw"
      ],
      "alpha2Code": "GW",
      "alpha3Code": "GNB",
      "callingCodes": [
        "245"
      ],
      "capital": "Bissau",
      "altSpellings": [
        "GW",
        "Republic of Guinea-Bissau",
        "República da Guiné-Bissau"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 1547777,
      "latlng": [
        12,
        -15
      ],
      "demonym": "Guinea-Bissauan",
      "area": 36125,
      "gini": 50.7,
      "timezones": [
        "UTC"
      ],
      "borders": [
        "GIN",
        "SEN"
      ],
      "nativeName": "Guiné-Bissau",
      "numericCode": "624",
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "pt",
          "iso639_2": "por",
          "name": "Portuguese",
          "nativeName": "Português"
        }
      ],
      "translations": {
        "br": "Guiné-Bissau",
        "pt": "Guiné-Bissau",
        "nl": "Guinee-Bissau",
        "hr": "Gvineja Bisau",
        "fa": "گینه بیسائو",
        "de": "Guinea-Bissau",
        "es": "Guinea-Bisáu",
        "fr": "Guinée-Bissau",
        "ja": "ギニアビサウ",
        "it": "Guinea-Bissau",
        "hu": "Bissau-Guinea"
      },
      "flags": [
        "https://restcountries.com/data/gnb.svg",
        "https://restcountries.com/data/png/gnb.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "GBS",
      "independent": true
    },
    {
      "name": "Guyana",
      "topLevelDomain": [
        ".gy"
      ],
      "alpha2Code": "GY",
      "alpha3Code": "GUY",
      "callingCodes": [
        "592"
      ],
      "capital": "Georgetown",
      "altSpellings": [
        "GY",
        "Co-operative Republic of Guyana"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 746900,
      "latlng": [
        5,
        -59
      ],
      "demonym": "Guyanese",
      "area": 214969,
      "gini": 44.5,
      "timezones": [
        "UTC-04:00"
      ],
      "borders": [
        "BRA",
        "SUR",
        "VEN"
      ],
      "nativeName": "Guyana",
      "numericCode": "328",
      "currencies": [
        {
          "code": "GYD",
          "name": "Guyanese dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Guiana",
        "pt": "Guiana",
        "nl": "Guyana",
        "hr": "Gvajana",
        "fa": "گویان",
        "de": "Guyana",
        "es": "Guyana",
        "fr": "Guyane",
        "ja": "ガイアナ",
        "it": "Guyana",
        "hu": "Guyana"
      },
      "flags": [
        "https://restcountries.com/data/guy.svg",
        "https://restcountries.com/data/png/guy.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        },
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "cioc": "GUY",
      "independent": true
    },
    {
      "name": "Haiti",
      "topLevelDomain": [
        ".ht"
      ],
      "alpha2Code": "HT",
      "alpha3Code": "HTI",
      "callingCodes": [
        "509"
      ],
      "capital": "Port-au-Prince",
      "altSpellings": [
        "HT",
        "Republic of Haiti",
        "République d'Haïti",
        "Repiblik Ayiti"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 11078033,
      "latlng": [
        19,
        -72.41666666
      ],
      "demonym": "Haitian",
      "area": 27750,
      "gini": 41.1,
      "timezones": [
        "UTC-05:00"
      ],
      "borders": [
        "DOM"
      ],
      "nativeName": "Haïti",
      "numericCode": "332",
      "currencies": [
        {
          "code": "HTG",
          "name": "Haitian gourde",
          "symbol": "G"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "ht",
          "iso639_2": "hat",
          "name": "Haitian",
          "nativeName": "Kreyòl ayisyen"
        }
      ],
      "translations": {
        "br": "Haiti",
        "pt": "Haiti",
        "nl": "Haïti",
        "hr": "Haiti",
        "fa": "هائیتی",
        "de": "Haiti",
        "es": "Haiti",
        "fr": "Haïti",
        "ja": "ハイチ",
        "it": "Haiti",
        "hu": "Haiti"
      },
      "flags": [
        "https://restcountries.com/data/hti.svg",
        "https://restcountries.com/data/png/hti.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        }
      ],
      "cioc": "HAI",
      "independent": true
    },
    {
      "name": "Vatican City",
      "topLevelDomain": [
        ".va"
      ],
      "alpha2Code": "VA",
      "alpha3Code": "VAT",
      "callingCodes": [
        "379"
      ],
      "capital": "Rome",
      "altSpellings": [
        "Vatican",
        "The Vatican"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 451,
      "latlng": [
        41.9,
        12.45
      ],
      "demonym": "Vatican",
      "area": 0.44,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "ITA"
      ],
      "nativeName": "Status Civitatis Vaticanae",
      "numericCode": "336",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "la",
          "iso639_2": "lat",
          "name": "Latin",
          "nativeName": "latine"
        },
        {
          "iso639_1": "it",
          "iso639_2": "ita",
          "name": "Italian",
          "nativeName": "Italiano"
        },
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "Français"
        },
        {
          "iso639_1": "de",
          "iso639_2": "deu",
          "name": "German",
          "nativeName": "Deutsch"
        }
      ],
      "translations": {
        "br": "Vaticano",
        "pt": "Vaticano",
        "nl": "Heilige Stoel",
        "hr": "Sveta Stolica",
        "fa": "سریر مقدس",
        "de": "Heiliger Stuhl",
        "es": "Santa Sede",
        "fr": "Saint-Siège",
        "ja": "聖座",
        "it": "Santa Sede",
        "hu": "Vatikán"
      },
      "flags": [
        "https://restcountries.com/data/vat.svg",
        "https://restcountries.com/data/png/vat.png"
      ],
      "independent": true
    },
    {
      "name": "Honduras",
      "topLevelDomain": [
        ".hn"
      ],
      "alpha2Code": "HN",
      "alpha3Code": "HND",
      "callingCodes": [
        "504"
      ],
      "capital": "Tegucigalpa",
      "altSpellings": [
        "HN",
        "Republic of Honduras",
        "República de Honduras"
      ],
      "region": "Central America",
      "continent": "Americas",
      "population": 8576532,
      "latlng": [
        15,
        -86.5
      ],
      "demonym": "Honduran",
      "area": 112492,
      "gini": 48.2,
      "timezones": [
        "UTC-06:00"
      ],
      "borders": [
        "GTM",
        "SLV",
        "NIC"
      ],
      "nativeName": "Honduras",
      "numericCode": "340",
      "currencies": [
        {
          "code": "HNL",
          "name": "Honduran lempira",
          "symbol": "L"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Honduras",
        "pt": "Honduras",
        "nl": "Honduras",
        "hr": "Honduras",
        "fa": "هندوراس",
        "de": "Honduras",
        "es": "Honduras",
        "fr": "Honduras",
        "ja": "ホンジュラス",
        "it": "Honduras",
        "hu": "Honduras"
      },
      "flags": [
        "https://restcountries.com/data/hnd.svg",
        "https://restcountries.com/data/png/hnd.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CAIS",
          "name": "Central American Integration System",
          "otherAcronyms": [
            "SICA"
          ],
          "otherNames": [
            "Sistema de la Integración Centroamericana,"
          ]
        }
      ],
      "cioc": "HON",
      "independent": true
    },
    {
      "name": "Hungary",
      "topLevelDomain": [
        ".hu"
      ],
      "alpha2Code": "HU",
      "alpha3Code": "HUN",
      "callingCodes": [
        "36"
      ],
      "capital": "Budapest",
      "altSpellings": [
        "HU"
      ],
      "region": "Central Europe",
      "continent": "Europe",
      "population": 9823000,
      "latlng": [
        47,
        20
      ],
      "demonym": "Hungarian",
      "area": 93028,
      "gini": 29.6,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "AUT",
        "HRV",
        "ROU",
        "SRB",
        "SVK",
        "SVN",
        "UKR"
      ],
      "nativeName": "Magyarország",
      "numericCode": "348",
      "currencies": [
        {
          "code": "HUF",
          "name": "Hungarian forint",
          "symbol": "Ft"
        }
      ],
      "languages": [
        {
          "iso639_1": "hu",
          "iso639_2": "hun",
          "name": "Hungarian",
          "nativeName": "magyar"
        }
      ],
      "translations": {
        "br": "Hungria",
        "pt": "Hungria",
        "nl": "Hongarije",
        "hr": "Mađarska",
        "fa": "مجارستان",
        "de": "Ungarn",
        "es": "Hungría",
        "fr": "Hongrie",
        "ja": "ハンガリー",
        "it": "Ungheria",
        "hu": "Magyarország"
      },
      "flags": [
        "https://restcountries.com/data/hun.svg",
        "https://restcountries.com/data/png/hun.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "HUN",
      "independent": true
    },
    {
      "name": "Iceland",
      "topLevelDomain": [
        ".is"
      ],
      "alpha2Code": "IS",
      "alpha3Code": "ISL",
      "callingCodes": [
        "354"
      ],
      "capital": "Reykjavík",
      "altSpellings": [
        "IS",
        "Island",
        "Republic of Iceland",
        "Lýðveldið Ísland"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 334300,
      "latlng": [
        65,
        -18
      ],
      "demonym": "Icelander",
      "area": 103000,
      "gini": 26.1,
      "timezones": [
        "UTC"
      ],
      "nativeName": "Ísland",
      "numericCode": "352",
      "currencies": [
        {
          "code": "ISK",
          "name": "Icelandic króna",
          "symbol": "kr"
        }
      ],
      "languages": [
        {
          "iso639_1": "is",
          "iso639_2": "isl",
          "name": "Icelandic",
          "nativeName": "Íslenska"
        }
      ],
      "translations": {
        "br": "Islândia",
        "pt": "Islândia",
        "nl": "IJsland",
        "hr": "Island",
        "fa": "ایسلند",
        "de": "Island",
        "es": "Islandia",
        "fr": "Islande",
        "ja": "アイスランド",
        "it": "Islanda",
        "hu": "Izland"
      },
      "flags": [
        "https://restcountries.com/data/isl.svg",
        "https://restcountries.com/data/png/isl.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EFTA",
          "name": "European Free Trade Association"
        }
      ],
      "cioc": "ISL",
      "independent": true
    },
    {
      "name": "India",
      "topLevelDomain": [
        ".in"
      ],
      "alpha2Code": "IN",
      "alpha3Code": "IND",
      "callingCodes": [
        "91"
      ],
      "capital": "New Delhi",
      "altSpellings": [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya"
      ],
      "region": "Southern Asia",
      "continent": "Asia",
      "population": 1378712489,
      "latlng": [
        20,
        77
      ],
      "demonym": "Indian",
      "area": 3287590,
      "gini": 35.7,
      "timezones": [
        "UTC+05:30"
      ],
      "borders": [
        "AFG",
        "BGD",
        "BTN",
        "MMR",
        "CHN",
        "NPL",
        "PAK",
        "LKA"
      ],
      "nativeName": "भारत",
      "numericCode": "356",
      "currencies": [
        {
          "code": "INR",
          "name": "Indian rupee",
          "symbol": "₹"
        }
      ],
      "languages": [
        {
          "iso639_1": "hi",
          "iso639_2": "hin",
          "name": "Hindi",
          "nativeName": "हिन्दी"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Índia",
        "pt": "Índia",
        "nl": "India",
        "hr": "Indija",
        "fa": "هند",
        "de": "Indien",
        "es": "India",
        "fr": "Inde",
        "ja": "インド",
        "it": "India",
        "hu": "India"
      },
      "flags": [
        "https://restcountries.com/data/ind.svg",
        "https://restcountries.com/data/png/ind.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "IND",
      "independent": true
    },
    {
      "name": "Indonesia",
      "topLevelDomain": [
        ".id"
      ],
      "alpha2Code": "ID",
      "alpha3Code": "IDN",
      "callingCodes": [
        "62"
      ],
      "capital": "Jakarta",
      "altSpellings": [
        "ID",
        "Republic of Indonesia",
        "Republik Indonesia"
      ],
      "region": "South-Eastern Asia",
      "continent": "Asia",
      "population": 258705000,
      "latlng": [
        -5,
        120
      ],
      "demonym": "Indonesian",
      "area": 1904569,
      "gini": 38.2,
      "timezones": [
        "UTC+07:00",
        "UTC+08:00",
        "UTC+09:00"
      ],
      "borders": [
        "TLS",
        "MYS",
        "PNG"
      ],
      "nativeName": "Indonesia",
      "numericCode": "360",
      "currencies": [
        {
          "code": "IDR",
          "name": "Indonesian rupiah",
          "symbol": "Rp"
        }
      ],
      "languages": [
        {
          "iso639_1": "id",
          "iso639_2": "ind",
          "name": "Indonesian",
          "nativeName": "Bahasa Indonesia"
        }
      ],
      "translations": {
        "br": "Indonésia",
        "pt": "Indonésia",
        "nl": "Indonesië",
        "hr": "Indonezija",
        "fa": "اندونزی",
        "de": "Indonesien",
        "es": "Indonesia",
        "fr": "Indonésie",
        "ja": "インドネシア",
        "it": "Indonesia",
        "hu": "Indonézia"
      },
      "flags": [
        "https://restcountries.com/data/idn.svg",
        "https://restcountries.com/data/png/idn.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "ASEAN",
          "name": "Association of Southeast Asian Nations"
        }
      ],
      "cioc": "INA",
      "independent": true
    },
    {
      "name": "Ivory Coast",
      "topLevelDomain": [
        ".ci"
      ],
      "alpha2Code": "CI",
      "alpha3Code": "CIV",
      "callingCodes": [
        "225"
      ],
      "capital": "Yamoussoukro",
      "altSpellings": [
        "CI",
        "Ivory Coast",
        "Republic of Côte d'Ivoire",
        "République de Côte d'Ivoire"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 22671331,
      "latlng": [
        8,
        -5
      ],
      "demonym": "Ivorian",
      "area": 322463,
      "gini": 41.5,
      "timezones": [
        "UTC"
      ],
      "borders": [
        "BFA",
        "GHA",
        "GIN",
        "LBR",
        "MLI"
      ],
      "nativeName": "Côte d'Ivoire",
      "numericCode": "384",
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Costa do Marfim",
        "pt": "Costa do Marfim",
        "nl": "Ivoorkust",
        "hr": "Obala Bjelokosti",
        "fa": "ساحل عاج",
        "de": "Elfenbeinküste",
        "es": "Costa de Marfil",
        "fr": "Côte d'Ivoire",
        "ja": "コートジボワール",
        "it": "Costa D'Avorio",
        "hu": "Elefántcsontpart"
      },
      "flags": [
        "https://restcountries.com/data/civ.svg",
        "https://restcountries.com/data/png/civ.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "CIV",
      "independent": true
    },
    {
      "name": "Iran (Islamic Republic of)",
      "topLevelDomain": [
        ".ir"
      ],
      "alpha2Code": "IR",
      "alpha3Code": "IRN",
      "callingCodes": [
        "98"
      ],
      "capital": "Tehran",
      "altSpellings": [
        "IR",
        "Islamic Republic of Iran",
        "Jomhuri-ye Eslāmi-ye Irān"
      ],
      "region": "Southern Asia",
      "continent": "Asia",
      "population": 79369900,
      "latlng": [
        32,
        53
      ],
      "demonym": "Iranian",
      "area": 1648195,
      "gini": 42,
      "timezones": [
        "UTC+03:30"
      ],
      "borders": [
        "AFG",
        "ARM",
        "AZE",
        "IRQ",
        "PAK",
        "TUR",
        "TKM"
      ],
      "nativeName": "ایران",
      "numericCode": "364",
      "currencies": [
        {
          "code": "IRR",
          "name": "Iranian rial",
          "symbol": "﷼"
        }
      ],
      "languages": [
        {
          "iso639_1": "fa",
          "iso639_2": "fas",
          "name": "Persian (Farsi)",
          "nativeName": "فارسی"
        }
      ],
      "translations": {
        "br": "Irã",
        "pt": "Irão",
        "nl": "Iran",
        "hr": "Iran",
        "fa": "ایران",
        "de": "Iran",
        "es": "Iran",
        "fr": "Iran",
        "ja": "イラン・イスラム共和国",
        "hu": "Irán"
      },
      "flags": [
        "https://restcountries.com/data/irn.svg",
        "https://restcountries.com/data/png/irn.png"
      ],
      "cioc": "IRI",
      "independent": true
    },
    {
      "name": "Iraq",
      "topLevelDomain": [
        ".iq"
      ],
      "alpha2Code": "IQ",
      "alpha3Code": "IRQ",
      "callingCodes": [
        "964"
      ],
      "capital": "Baghdad",
      "altSpellings": [
        "IQ",
        "Republic of Iraq",
        "Jumhūriyyat al-‘Irāq"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 37883543,
      "latlng": [
        33,
        44
      ],
      "demonym": "Iraqi",
      "area": 438317,
      "gini": 29.5,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "IRN",
        "JOR",
        "KWT",
        "SAU",
        "SYR",
        "TUR"
      ],
      "nativeName": "العراق",
      "numericCode": "368",
      "currencies": [
        {
          "code": "IQD",
          "name": "Iraqi dinar",
          "symbol": "ع.د"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        },
        {
          "iso639_1": "ku",
          "iso639_2": "kur",
          "name": "Kurdish",
          "nativeName": "Kurdî"
        }
      ],
      "translations": {
        "br": "Iraque",
        "pt": "Iraque",
        "nl": "Irak",
        "hr": "Irak",
        "fa": "عراق",
        "de": "Irak",
        "es": "Irak",
        "fr": "Irak",
        "ja": "イラク",
        "it": "Iraq",
        "hu": "Irak"
      },
      "flags": [
        "https://restcountries.com/data/irq.svg",
        "https://restcountries.com/data/png/irq.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "IRQ",
      "independent": true
    },
    {
      "name": "Ireland",
      "topLevelDomain": [
        ".ie"
      ],
      "alpha2Code": "IE",
      "alpha3Code": "IRL",
      "callingCodes": [
        "353"
      ],
      "capital": "Dublin",
      "altSpellings": [
        "IE",
        "Éire",
        "Republic of Ireland",
        "Poblacht na hÉireann"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 6378000,
      "latlng": [
        53,
        -8
      ],
      "demonym": "Irish",
      "area": 70273,
      "gini": 31.4,
      "timezones": [
        "UTC"
      ],
      "borders": [
        "GBR"
      ],
      "nativeName": "Éire",
      "numericCode": "372",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "ga",
          "iso639_2": "gle",
          "name": "Irish",
          "nativeName": "Gaeilge"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Irlanda",
        "pt": "Irlanda",
        "nl": "Ierland",
        "hr": "Irska",
        "fa": "ایرلند",
        "de": "Irland",
        "es": "Irlanda",
        "fr": "Irlande",
        "ja": "アイルランド",
        "it": "Irlanda",
        "hu": "Írország"
      },
      "flags": [
        "https://restcountries.com/data/irl.svg",
        "https://restcountries.com/data/png/irl.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "IRL",
      "independent": true
    },
    {
      "name": "Isle of Man",
      "topLevelDomain": [
        ".im"
      ],
      "alpha2Code": "IM",
      "alpha3Code": "IMN",
      "callingCodes": [
        "44"
      ],
      "capital": "Douglas",
      "altSpellings": [
        "IM",
        "Ellan Vannin",
        "Mann",
        "Mannin"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 84497,
      "latlng": [
        54.25,
        -4.5
      ],
      "demonym": "Manx",
      "area": 572,
      "timezones": [
        "UTC+00:00"
      ],
      "nativeName": "Isle of Man",
      "numericCode": "833",
      "currencies": [
        {
          "code": "GBP",
          "name": "British pound",
          "symbol": "£"
        },
        {
          "code": "IMP[G]",
          "name": "Manx pound",
          "symbol": "£"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "gv",
          "iso639_2": "glv",
          "name": "Manx",
          "nativeName": "Gaelg"
        }
      ],
      "translations": {
        "br": "Ilha de Man",
        "pt": "Ilha de Man",
        "nl": "Isle of Man",
        "hr": "Otok Man",
        "fa": "جزیره من",
        "de": "Insel Man",
        "es": "Isla de Man",
        "fr": "Île de Man",
        "ja": "マン島",
        "it": "Isola di Man",
        "hu": "Man"
      },
      "flags": [
        "https://restcountries.com/data/imn.svg",
        "https://restcountries.com/data/png/imn.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "independent": false
    },
    {
      "name": "Israel",
      "topLevelDomain": [
        ".il"
      ],
      "alpha2Code": "IL",
      "alpha3Code": "ISR",
      "callingCodes": [
        "972"
      ],
      "capital": "Jerusalem",
      "altSpellings": [
        "IL",
        "State of Israel",
        "Medīnat Yisrā'el"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 8527400,
      "latlng": [
        31.5,
        34.75
      ],
      "demonym": "Israeli",
      "area": 20770,
      "gini": 39,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "EGY",
        "JOR",
        "LBN",
        "SYR"
      ],
      "nativeName": "יִשְׂרָאֵל",
      "numericCode": "376",
      "currencies": [
        {
          "code": "ILS",
          "name": "Israeli new shekel",
          "symbol": "₪"
        }
      ],
      "languages": [
        {
          "iso639_1": "he",
          "iso639_2": "heb",
          "name": "Hebrew (modern)",
          "nativeName": "עברית"
        },
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Israel",
        "pt": "Israel",
        "nl": "Israël",
        "hr": "Izrael",
        "fa": "اسرائیل",
        "de": "Israel",
        "es": "Israel",
        "fr": "Israël",
        "ja": "イスラエル",
        "it": "Israele",
        "hu": "Izrael"
      },
      "flags": [
        "https://restcountries.com/data/isr.svg",
        "https://restcountries.com/data/png/isr.png"
      ],
      "cioc": "ISR",
      "independent": true
    },
    {
      "name": "Italy",
      "topLevelDomain": [
        ".it"
      ],
      "alpha2Code": "IT",
      "alpha3Code": "ITA",
      "callingCodes": [
        "39"
      ],
      "capital": "Rome",
      "altSpellings": [
        "IT",
        "Italian Republic",
        "Repubblica italiana"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 60665551,
      "latlng": [
        42.83333333,
        12.83333333
      ],
      "demonym": "Italian",
      "area": 301336,
      "gini": 36,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "AUT",
        "FRA",
        "SMR",
        "SVN",
        "CHE",
        "VAT"
      ],
      "nativeName": "Italia",
      "numericCode": "380",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "it",
          "iso639_2": "ita",
          "name": "Italian",
          "nativeName": "Italiano"
        }
      ],
      "translations": {
        "br": "Itália",
        "pt": "Itália",
        "nl": "Italië",
        "hr": "Italija",
        "fa": "ایتالیا",
        "de": "Italien",
        "es": "Italia",
        "fr": "Italie",
        "ja": "イタリア",
        "it": "Italia",
        "hu": "Olaszország"
      },
      "flags": [
        "https://restcountries.com/data/ita.svg",
        "https://restcountries.com/data/png/ita.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "ITA",
      "independent": true
    },
    {
      "name": "Jamaica",
      "topLevelDomain": [
        ".jm"
      ],
      "alpha2Code": "JM",
      "alpha3Code": "JAM",
      "callingCodes": [
        "1"
      ],
      "capital": "Kingston",
      "altSpellings": [
        "JM"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 2723246,
      "latlng": [
        18.25,
        -77.5
      ],
      "demonym": "Jamaican",
      "area": 10991,
      "gini": 35,
      "timezones": [
        "UTC-05:00"
      ],
      "nativeName": "Jamaica",
      "numericCode": "388",
      "currencies": [
        {
          "code": "JMD",
          "name": "Jamaican dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Jamaica",
        "pt": "Jamaica",
        "nl": "Jamaica",
        "hr": "Jamajka",
        "fa": "جامائیکا",
        "de": "Jamaika",
        "es": "Jamaica",
        "fr": "Jamaïque",
        "ja": "ジャマイカ",
        "it": "Giamaica",
        "hu": "Jamaica"
      },
      "flags": [
        "https://restcountries.com/data/jam.svg",
        "https://restcountries.com/data/png/jam.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        }
      ],
      "cioc": "JAM",
      "independent": true
    },
    {
      "name": "Japan",
      "topLevelDomain": [
        ".jp"
      ],
      "alpha2Code": "JP",
      "alpha3Code": "JPN",
      "callingCodes": [
        "81"
      ],
      "capital": "Tokyo",
      "altSpellings": [
        "JP",
        "Nippon",
        "Nihon"
      ],
      "region": "Eastern Asia",
      "continent": "Asia",
      "population": 126960000,
      "latlng": [
        36,
        138
      ],
      "demonym": "Japanese",
      "area": 377930,
      "gini": 32.9,
      "timezones": [
        "UTC+09:00"
      ],
      "nativeName": "日本",
      "numericCode": "392",
      "currencies": [
        {
          "code": "JPY",
          "name": "Japanese yen",
          "symbol": "¥"
        }
      ],
      "languages": [
        {
          "iso639_1": "ja",
          "iso639_2": "jpn",
          "name": "Japanese",
          "nativeName": "日本語 (にほんご)"
        }
      ],
      "translations": {
        "br": "Japão",
        "pt": "Japão",
        "nl": "Japan",
        "hr": "Japan",
        "fa": "ژاپن",
        "de": "Japan",
        "es": "Japón",
        "fr": "Japon",
        "ja": "日本",
        "it": "Giappone",
        "hu": "Japán"
      },
      "flags": [
        "https://restcountries.com/data/jpn.svg",
        "https://restcountries.com/data/png/jpn.png"
      ],
      "cioc": "JPN",
      "independent": true
    },
    {
      "name": "Jersey",
      "topLevelDomain": [
        ".je"
      ],
      "alpha2Code": "JE",
      "alpha3Code": "JEY",
      "callingCodes": [
        "44"
      ],
      "capital": "Saint Helier",
      "altSpellings": [
        "JE",
        "Bailiwick of Jersey",
        "Bailliage de Jersey",
        "Bailliage dé Jèrri"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 100800,
      "latlng": [
        49.25,
        -2.16666666
      ],
      "demonym": "Channel Islander",
      "area": 116,
      "gini": 0.3,
      "timezones": [
        "UTC+01:00"
      ],
      "nativeName": "Jersey",
      "numericCode": "832",
      "currencies": [
        {
          "code": "GBP",
          "name": "British pound",
          "symbol": "£"
        },
        {
          "code": "JEP[G]",
          "name": "Jersey pound",
          "symbol": "£"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Jersey",
        "pt": "Jersey",
        "nl": "Jersey",
        "hr": "Jersey",
        "fa": "جرزی",
        "de": "Jersey",
        "es": "Jersey",
        "fr": "Jersey",
        "ja": "ジャージー",
        "it": "Isola di Jersey",
        "hu": "Jersey"
      },
      "flags": [
        "https://restcountries.com/data/jey.svg",
        "https://restcountries.com/data/png/jey.png"
      ],
      "independent": false
    },
    {
      "name": "Jordan",
      "topLevelDomain": [
        ".jo"
      ],
      "alpha2Code": "JO",
      "alpha3Code": "JOR",
      "callingCodes": [
        "962"
      ],
      "capital": "Amman",
      "altSpellings": [
        "JO",
        "Hashemite Kingdom of Jordan",
        "al-Mamlakah al-Urdunīyah al-Hāshimīyah"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 9531712,
      "latlng": [
        31,
        36
      ],
      "demonym": "Jordanian",
      "area": 89342,
      "gini": 33.7,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "IRQ",
        "ISR",
        "SAU",
        "SYR"
      ],
      "nativeName": "الأردن",
      "numericCode": "400",
      "currencies": [
        {
          "code": "JOD",
          "name": "Jordanian dinar",
          "symbol": "د.ا"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Jordânia",
        "pt": "Jordânia",
        "nl": "Jordanië",
        "hr": "Jordan",
        "fa": "اردن",
        "de": "Jordanien",
        "es": "Jordania",
        "fr": "Jordanie",
        "ja": "ヨルダン",
        "it": "Giordania",
        "hu": "Jordánia"
      },
      "flags": [
        "https://restcountries.com/data/jor.svg",
        "https://restcountries.com/data/png/jor.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "JOR",
      "independent": true
    },
    {
      "name": "Kazakhstan",
      "topLevelDomain": [
        ".kz",
        ".қаз"
      ],
      "alpha2Code": "KZ",
      "alpha3Code": "KAZ",
      "callingCodes": [
        "76",
        "77"
      ],
      "capital": "Nursultan",
      "altSpellings": [
        "KZ",
        "Qazaqstan",
        "Казахстан",
        "Republic of Kazakhstan",
        "Қазақстан Республикасы",
        "Qazaqstan Respublïkası",
        "Республика Казахстан",
        "Respublika Kazakhstan"
      ],
      "region": "Central Asia",
      "continent": "Asia",
      "population": 17753200,
      "latlng": [
        48,
        68
      ],
      "area": 2724900,
      "gini": 27.8,
      "timezones": [
        "UTC+05:00",
        "UTC+06:00"
      ],
      "borders": [
        "CHN",
        "KGZ",
        "RUS",
        "TKM",
        "UZB"
      ],
      "nativeName": "Қазақстан",
      "numericCode": "398",
      "currencies": [
        {
          "code": "KZT",
          "name": "Kazakhstani tenge",
          "symbol": "₸"
        }
      ],
      "languages": [
        {
          "iso639_1": "kk",
          "iso639_2": "kaz",
          "name": "Kazakh",
          "nativeName": "қазақ тілі"
        },
        {
          "iso639_1": "ru",
          "iso639_2": "rus",
          "name": "Russian",
          "nativeName": "Русский"
        }
      ],
      "translations": {
        "br": "Cazaquistão",
        "pt": "Cazaquistão",
        "nl": "Kazachstan",
        "hr": "Kazahstan",
        "fa": "قزاقستان",
        "de": "Kasachstan",
        "es": "Kazajistán",
        "fr": "Kazakhstan",
        "ja": "カザフスタン",
        "it": "Kazakistan",
        "hu": "Kazahsztán"
      },
      "flags": [
        "https://restcountries.com/data/kaz.svg",
        "https://restcountries.com/data/png/kaz.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EEU",
          "name": "Eurasian Economic Union",
          "otherAcronyms": [
            "EAEU"
          ]
        }
      ],
      "cioc": "KAZ",
      "independent": false
    },
    {
      "name": "Kenya",
      "topLevelDomain": [
        ".ke"
      ],
      "alpha2Code": "KE",
      "alpha3Code": "KEN",
      "callingCodes": [
        "254"
      ],
      "capital": "Nairobi",
      "altSpellings": [
        "KE",
        "Republic of Kenya",
        "Jamhuri ya Kenya"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 47251000,
      "latlng": [
        1,
        38
      ],
      "demonym": "Kenyan",
      "area": 580367,
      "gini": 40.8,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "ETH",
        "SOM",
        "SSD",
        "TZA",
        "UGA"
      ],
      "nativeName": "Kenya",
      "numericCode": "404",
      "currencies": [
        {
          "code": "KES",
          "name": "Kenyan shilling",
          "symbol": "Sh"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "sw",
          "iso639_2": "swa",
          "name": "Swahili",
          "nativeName": "Kiswahili"
        }
      ],
      "translations": {
        "br": "Quênia",
        "pt": "Quénia",
        "nl": "Kenia",
        "hr": "Kenija",
        "fa": "کنیا",
        "de": "Kenia",
        "es": "Kenia",
        "fr": "Kenya",
        "ja": "ケニア",
        "it": "Kenya",
        "hu": "Kenya"
      },
      "flags": [
        "https://restcountries.com/data/ken.svg",
        "https://restcountries.com/data/png/ken.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "KEN",
      "independent": true
    },
    {
      "name": "Kiribati",
      "topLevelDomain": [
        ".ki"
      ],
      "alpha2Code": "KI",
      "alpha3Code": "KIR",
      "callingCodes": [
        "686"
      ],
      "capital": "South Tarawa",
      "altSpellings": [
        "KI",
        "Republic of Kiribati",
        "Ribaberiki Kiribati"
      ],
      "region": "Micronesia",
      "continent": "Oceania",
      "population": 113400,
      "latlng": [
        1.41666666,
        173
      ],
      "demonym": "I-Kiribati",
      "area": 811,
      "timezones": [
        "UTC+12:00",
        "UTC+13:00",
        "UTC+14:00"
      ],
      "nativeName": "Kiribati",
      "numericCode": "296",
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        },
        {
          "code": "(none)",
          "name": "Kiribati dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Kiribati",
        "pt": "Quiribáti",
        "nl": "Kiribati",
        "hr": "Kiribati",
        "fa": "کیریباتی",
        "de": "Kiribati",
        "es": "Kiribati",
        "fr": "Kiribati",
        "ja": "キリバス",
        "it": "Kiribati",
        "hu": "Kiribati"
      },
      "flags": [
        "https://restcountries.com/data/kir.svg",
        "https://restcountries.com/data/png/kir.png"
      ],
      "cioc": "KIR",
      "independent": true
    },
    {
      "name": "Kuwait",
      "topLevelDomain": [
        ".kw"
      ],
      "alpha2Code": "KW",
      "alpha3Code": "KWT",
      "callingCodes": [
        "965"
      ],
      "capital": "Kuwait City",
      "altSpellings": [
        "KW",
        "State of Kuwait",
        "Dawlat al-Kuwait"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 4183658,
      "latlng": [
        29.5,
        45.75
      ],
      "demonym": "Kuwaiti",
      "area": 17818,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "IRQ",
        "SAU"
      ],
      "nativeName": "الكويت",
      "numericCode": "414",
      "currencies": [
        {
          "code": "KWD",
          "name": "Kuwaiti dinar",
          "symbol": "د.ك"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Kuwait",
        "pt": "Kuwait",
        "nl": "Koeweit",
        "hr": "Kuvajt",
        "fa": "کویت",
        "de": "Kuwait",
        "es": "Kuwait",
        "fr": "Koweït",
        "ja": "クウェート",
        "it": "Kuwait",
        "hu": "Kuvait"
      },
      "flags": [
        "https://restcountries.com/data/kwt.svg",
        "https://restcountries.com/data/png/kwt.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "KUW",
      "independent": true
    },
    {
      "name": "Kyrgyzstan",
      "topLevelDomain": [
        ".kg"
      ],
      "alpha2Code": "KG",
      "alpha3Code": "KGZ",
      "callingCodes": [
        "996"
      ],
      "capital": "Bishkek",
      "altSpellings": [
        "KG",
        "Киргизия",
        "Kyrgyz Republic",
        "Кыргыз Республикасы",
        "Kyrgyz Respublikasy"
      ],
      "region": "Central Asia",
      "continent": "Asia",
      "population": 6047800,
      "latlng": [
        41,
        75
      ],
      "demonym": "Kirghiz",
      "area": 199951,
      "gini": 29.7,
      "timezones": [
        "UTC+06:00"
      ],
      "borders": [
        "CHN",
        "KAZ",
        "TJK",
        "UZB"
      ],
      "nativeName": "Кыргызстан",
      "numericCode": "417",
      "currencies": [
        {
          "code": "KGS",
          "name": "Kyrgyzstani som",
          "symbol": "с"
        }
      ],
      "languages": [
        {
          "iso639_1": "ky",
          "iso639_2": "kir",
          "name": "Kyrgyz",
          "nativeName": "Кыргызча"
        },
        {
          "iso639_1": "ru",
          "iso639_2": "rus",
          "name": "Russian",
          "nativeName": "Русский"
        }
      ],
      "translations": {
        "br": "Quirguistão",
        "pt": "Quirguizistão",
        "nl": "Kirgizië",
        "hr": "Kirgistan",
        "fa": "قرقیزستان",
        "de": "Kirgisistan",
        "es": "Kirguizistán",
        "fr": "Kirghizistan",
        "ja": "キルギス",
        "it": "Kirghizistan",
        "hu": "Kirgizisztán"
      },
      "flags": [
        "https://restcountries.com/data/kgz.svg",
        "https://restcountries.com/data/png/kgz.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EEU",
          "name": "Eurasian Economic Union",
          "otherAcronyms": [
            "EAEU"
          ]
        }
      ],
      "cioc": "KGZ",
      "independent": true
    },
    {
      "name": "Lao People's Democratic Republic",
      "topLevelDomain": [
        ".la"
      ],
      "alpha2Code": "LA",
      "alpha3Code": "LAO",
      "callingCodes": [
        "856"
      ],
      "capital": "Vientiane",
      "altSpellings": [
        "LA",
        "Lao",
        "Laos",
        "Lao People's Democratic Republic",
        "Sathalanalat Paxathipatai Paxaxon Lao"
      ],
      "region": "South-Eastern Asia",
      "continent": "Asia",
      "population": 6492400,
      "latlng": [
        18,
        105
      ],
      "demonym": "Laotian",
      "area": 236800,
      "gini": 38.8,
      "timezones": [
        "UTC+07:00"
      ],
      "borders": [
        "MMR",
        "KHM",
        "CHN",
        "THA",
        "VNM"
      ],
      "nativeName": "ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ",
      "numericCode": "418",
      "currencies": [
        {
          "code": "LAK",
          "name": "Lao kip",
          "symbol": "₭"
        }
      ],
      "languages": [
        {
          "iso639_1": "lo",
          "iso639_2": "lao",
          "name": "Lao",
          "nativeName": "ພາສາລາວ"
        }
      ],
      "translations": {
        "br": "Laos",
        "pt": "Laos",
        "nl": "Laos",
        "hr": "Laos",
        "fa": "لائوس",
        "de": "Laos",
        "es": "Laos",
        "fr": "Laos",
        "ja": "ラオス人民民主共和国",
        "it": "Laos",
        "hu": "Laosz"
      },
      "flags": [
        "https://restcountries.com/data/lao.svg",
        "https://restcountries.com/data/png/lao.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "ASEAN",
          "name": "Association of Southeast Asian Nations"
        }
      ],
      "cioc": "LAO",
      "independent": true
    },
    {
      "name": "Latvia",
      "topLevelDomain": [
        ".lv"
      ],
      "alpha2Code": "LV",
      "alpha3Code": "LVA",
      "callingCodes": [
        "371"
      ],
      "capital": "Riga",
      "altSpellings": [
        "LV",
        "Republic of Latvia",
        "Latvijas Republika"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 1961600,
      "latlng": [
        57,
        25
      ],
      "demonym": "Latvian",
      "area": 64559,
      "gini": 35.1,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "BLR",
        "EST",
        "LTU",
        "RUS"
      ],
      "nativeName": "Latvija",
      "numericCode": "428",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "lv",
          "iso639_2": "lav",
          "name": "Latvian",
          "nativeName": "latviešu valoda"
        }
      ],
      "translations": {
        "br": "Letônia",
        "pt": "Letónia",
        "nl": "Letland",
        "hr": "Latvija",
        "fa": "لتونی",
        "de": "Lettland",
        "es": "Letonia",
        "fr": "Lettonie",
        "ja": "ラトビア",
        "it": "Lettonia",
        "hu": "Lettország"
      },
      "flags": [
        "https://restcountries.com/data/lva.svg",
        "https://restcountries.com/data/png/lva.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "LAT",
      "independent": true
    },
    {
      "name": "Lebanon",
      "topLevelDomain": [
        ".lb"
      ],
      "alpha2Code": "LB",
      "alpha3Code": "LBN",
      "callingCodes": [
        "961"
      ],
      "capital": "Beirut",
      "altSpellings": [
        "LB",
        "Lebanese Republic",
        "Al-Jumhūrīyah Al-Libnānīyah"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 5988000,
      "latlng": [
        33.83333333,
        35.83333333
      ],
      "demonym": "Lebanese",
      "area": 10452,
      "gini": 31.8,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "ISR",
        "SYR"
      ],
      "nativeName": "لبنان",
      "numericCode": "422",
      "currencies": [
        {
          "code": "LBP",
          "name": "Lebanese pound",
          "symbol": "ل.ل"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        },
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Líbano",
        "pt": "Líbano",
        "nl": "Libanon",
        "hr": "Libanon",
        "fa": "لبنان",
        "de": "Libanon",
        "es": "Líbano",
        "fr": "Liban",
        "ja": "レバノン",
        "it": "Libano",
        "hu": "Libanon"
      },
      "flags": [
        "https://restcountries.com/data/lbn.svg",
        "https://restcountries.com/data/png/lbn.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "LIB",
      "independent": true
    },
    {
      "name": "Lesotho",
      "topLevelDomain": [
        ".ls"
      ],
      "alpha2Code": "LS",
      "alpha3Code": "LSO",
      "callingCodes": [
        "266"
      ],
      "capital": "Maseru",
      "altSpellings": [
        "LS",
        "Kingdom of Lesotho",
        "Muso oa Lesotho"
      ],
      "region": "Southern Africa",
      "continent": "Africa",
      "population": 1894194,
      "latlng": [
        -29.5,
        28.5
      ],
      "demonym": "Mosotho",
      "area": 30355,
      "gini": 44.9,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "ZAF"
      ],
      "nativeName": "Lesotho",
      "numericCode": "426",
      "currencies": [
        {
          "code": "LSL",
          "name": "Lesotho loti",
          "symbol": "L"
        },
        {
          "code": "ZAR",
          "name": "South African rand",
          "symbol": "R"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "st",
          "iso639_2": "sot",
          "name": "Southern Sotho",
          "nativeName": "Sesotho"
        }
      ],
      "translations": {
        "br": "Lesoto",
        "pt": "Lesoto",
        "nl": "Lesotho",
        "hr": "Lesoto",
        "fa": "لسوتو",
        "de": "Lesotho",
        "es": "Lesotho",
        "fr": "Lesotho",
        "ja": "レソト",
        "it": "Lesotho",
        "hu": "Lesotho"
      },
      "flags": [
        "https://restcountries.com/data/lso.svg",
        "https://restcountries.com/data/png/lso.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "LES",
      "independent": true
    },
    {
      "name": "Liberia",
      "topLevelDomain": [
        ".lr"
      ],
      "alpha2Code": "LR",
      "alpha3Code": "LBR",
      "callingCodes": [
        "231"
      ],
      "capital": "Monrovia",
      "altSpellings": [
        "LR",
        "Republic of Liberia"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 4615000,
      "latlng": [
        6.5,
        -9.5
      ],
      "demonym": "Liberian",
      "area": 111369,
      "gini": 35.3,
      "timezones": [
        "UTC"
      ],
      "borders": [
        "GIN",
        "CIV",
        "SLE"
      ],
      "nativeName": "Liberia",
      "numericCode": "430",
      "currencies": [
        {
          "code": "LRD",
          "name": "Liberian dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Libéria",
        "pt": "Libéria",
        "nl": "Liberia",
        "hr": "Liberija",
        "fa": "لیبریا",
        "de": "Liberia",
        "es": "Liberia",
        "fr": "Liberia",
        "ja": "リベリア",
        "it": "Liberia",
        "hu": "Libéria"
      },
      "flags": [
        "https://restcountries.com/data/lbr.svg",
        "https://restcountries.com/data/png/lbr.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "LBR",
      "independent": true
    },
    {
      "name": "Libya",
      "topLevelDomain": [
        ".ly"
      ],
      "alpha2Code": "LY",
      "alpha3Code": "LBY",
      "callingCodes": [
        "218"
      ],
      "capital": "Tripoli",
      "altSpellings": [
        "LY",
        "State of Libya",
        "Dawlat Libya"
      ],
      "region": "Northern Africa",
      "continent": "Africa",
      "population": 6385000,
      "latlng": [
        25,
        17
      ],
      "demonym": "Libyan",
      "area": 1759540,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "DZA",
        "TCD",
        "EGY",
        "NER",
        "SDN",
        "TUN"
      ],
      "nativeName": "‏ليبيا",
      "numericCode": "434",
      "currencies": [
        {
          "code": "LYD",
          "name": "Libyan dinar",
          "symbol": "ل.د"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Líbia",
        "pt": "Líbia",
        "nl": "Libië",
        "hr": "Libija",
        "fa": "لیبی",
        "de": "Libyen",
        "es": "Libia",
        "fr": "Libye",
        "ja": "リビア",
        "it": "Libia",
        "hu": "Líbia"
      },
      "flags": [
        "https://restcountries.com/data/lby.svg",
        "https://restcountries.com/data/png/lby.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        },
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "LBA",
      "independent": true
    },
    {
      "name": "Liechtenstein",
      "topLevelDomain": [
        ".li"
      ],
      "alpha2Code": "LI",
      "alpha3Code": "LIE",
      "callingCodes": [
        "423"
      ],
      "capital": "Vaduz",
      "altSpellings": [
        "LI",
        "Principality of Liechtenstein",
        "Fürstentum Liechtenstein"
      ],
      "region": "Central Europe",
      "continent": "Europe",
      "population": 37623,
      "latlng": [
        47.26666666,
        9.53333333
      ],
      "demonym": "Liechtensteiner",
      "area": 160,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "AUT",
        "CHE"
      ],
      "nativeName": "Liechtenstein",
      "numericCode": "438",
      "currencies": [
        {
          "code": "CHF",
          "name": "Swiss franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "de",
          "iso639_2": "deu",
          "name": "German",
          "nativeName": "Deutsch"
        }
      ],
      "translations": {
        "br": "Liechtenstein",
        "pt": "Listenstaine",
        "nl": "Liechtenstein",
        "hr": "Lihtenštajn",
        "fa": "لیختن‌اشتاین",
        "de": "Liechtenstein",
        "es": "Liechtenstein",
        "fr": "Liechtenstein",
        "ja": "リヒテンシュタイン",
        "it": "Liechtenstein",
        "hu": "Liechtenstein"
      },
      "flags": [
        "https://restcountries.com/data/lie.svg",
        "https://restcountries.com/data/png/lie.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EFTA",
          "name": "European Free Trade Association"
        }
      ],
      "cioc": "LIE",
      "independent": true
    },
    {
      "name": "Lithuania",
      "topLevelDomain": [
        ".lt"
      ],
      "alpha2Code": "LT",
      "alpha3Code": "LTU",
      "callingCodes": [
        "370"
      ],
      "capital": "Vilnius",
      "altSpellings": [
        "LT",
        "Republic of Lithuania",
        "Lietuvos Respublika"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 2872294,
      "latlng": [
        56,
        24
      ],
      "demonym": "Lithuanian",
      "area": 65300,
      "gini": 35.7,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "BLR",
        "LVA",
        "POL",
        "RUS"
      ],
      "nativeName": "Lietuva",
      "numericCode": "440",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "lt",
          "iso639_2": "lit",
          "name": "Lithuanian",
          "nativeName": "lietuvių kalba"
        }
      ],
      "translations": {
        "br": "Lituânia",
        "pt": "Lituânia",
        "nl": "Litouwen",
        "hr": "Litva",
        "fa": "لیتوانی",
        "de": "Litauen",
        "es": "Lituania",
        "fr": "Lituanie",
        "ja": "リトアニア",
        "it": "Lituania",
        "hu": "Litvánia"
      },
      "flags": [
        "https://restcountries.com/data/ltu.svg",
        "https://restcountries.com/data/png/ltu.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "LTU",
      "independent": true
    },
    {
      "name": "Luxembourg",
      "topLevelDomain": [
        ".lu"
      ],
      "alpha2Code": "LU",
      "alpha3Code": "LUX",
      "callingCodes": [
        "352"
      ],
      "capital": "Luxembourg",
      "altSpellings": [
        "LU",
        "Grand Duchy of Luxembourg",
        "Grand-Duché de Luxembourg",
        "Großherzogtum Luxemburg",
        "Groussherzogtum Lëtzebuerg"
      ],
      "region": "Western Europe",
      "continent": "Europe",
      "population": 576200,
      "latlng": [
        49.75,
        6.16666666
      ],
      "demonym": "Luxembourger",
      "area": 2586,
      "gini": 35.4,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "BEL",
        "FRA",
        "DEU"
      ],
      "nativeName": "Lëtzebuerg",
      "numericCode": "442",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "de",
          "iso639_2": "deu",
          "name": "German",
          "nativeName": "Deutsch"
        },
        {
          "iso639_1": "lb",
          "iso639_2": "ltz",
          "name": "Luxembourgish",
          "nativeName": "Lëtzebuergesch"
        }
      ],
      "translations": {
        "br": "Luxemburgo",
        "pt": "Luxemburgo",
        "nl": "Luxemburg",
        "hr": "Luksemburg",
        "fa": "لوکزامبورگ",
        "de": "Luxemburg",
        "es": "Luxemburgo",
        "fr": "Luxembourg",
        "ja": "ルクセンブルク",
        "it": "Lussemburgo",
        "hu": "Luxemburg"
      },
      "flags": [
        "https://restcountries.com/data/lux.svg",
        "https://restcountries.com/data/png/lux.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "LUX",
      "independent": true
    },
    {
      "name": "Macao",
      "topLevelDomain": [
        ".mo"
      ],
      "alpha2Code": "MO",
      "alpha3Code": "MAC",
      "callingCodes": [
        "853"
      ],
      "altSpellings": [
        "MO",
        "澳门",
        "Macao Special Administrative Region of the People's Republic of China",
        "中華人民共和國澳門特別行政區",
        "Região Administrativa Especial de Macau da República Popular da China"
      ],
      "region": "Eastern Asia",
      "continent": "Asia",
      "population": 649100,
      "latlng": [
        22.16666666,
        113.55
      ],
      "demonym": "Chinese",
      "area": 30,
      "gini": 35,
      "timezones": [
        "UTC+08:00"
      ],
      "borders": [
        "CHN"
      ],
      "nativeName": "澳門",
      "numericCode": "446",
      "currencies": [
        {
          "code": "MOP",
          "name": "Macanese pataca",
          "symbol": "P"
        }
      ],
      "languages": [
        {
          "iso639_1": "zh",
          "iso639_2": "zho",
          "name": "Chinese",
          "nativeName": "中文 (Zhōngwén)"
        },
        {
          "iso639_1": "pt",
          "iso639_2": "por",
          "name": "Portuguese",
          "nativeName": "Português"
        }
      ],
      "translations": {
        "br": "Macau",
        "pt": "Macau",
        "nl": "Macao",
        "hr": "Makao",
        "fa": "مکائو",
        "de": "Macao",
        "es": "Macao",
        "fr": "Macao",
        "ja": "マカオ",
        "it": "Macao",
        "hu": "Makaó"
      },
      "flags": [
        "https://restcountries.com/data/mac.svg",
        "https://restcountries.com/data/png/mac.png"
      ],
      "independent": false
    },
    {
      "name": "Macedonia (the former Yugoslav Republic of)",
      "topLevelDomain": [
        ".mk"
      ],
      "alpha2Code": "MK",
      "alpha3Code": "MKD",
      "callingCodes": [
        "389"
      ],
      "capital": "Skopje",
      "altSpellings": [
        "MK",
        "Republic of Macedonia",
        "Република Македонија"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 2058539,
      "latlng": [
        41.83333333,
        22
      ],
      "demonym": "Macedonian",
      "area": 25713,
      "gini": 31.9,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "ALB",
        "BGR",
        "GRC",
        "KOS",
        "SRB"
      ],
      "nativeName": "Македонија",
      "numericCode": "807",
      "currencies": [
        {
          "code": "MKD",
          "name": "Macedonian denar",
          "symbol": "ден"
        }
      ],
      "languages": [
        {
          "iso639_1": "mk",
          "iso639_2": "mkd",
          "name": "Macedonian",
          "nativeName": "македонски јазик"
        }
      ],
      "translations": {
        "br": "Macedônia",
        "pt": "Macedónia",
        "nl": "Macedonië",
        "hr": "Makedonija",
        "de": "Mazedonien",
        "es": "Macedonia",
        "fr": "Macédoine",
        "ja": "マケドニア旧ユーゴスラビア共和国",
        "it": "Macedonia",
        "hu": "Macedónia"
      },
      "flags": [
        "https://restcountries.com/data/mkd.svg",
        "https://restcountries.com/data/png/mkd.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CEFTA",
          "name": "Central European Free Trade Agreement"
        }
      ],
      "cioc": "MKD",
      "independent": true
    },
    {
      "name": "Madagascar",
      "topLevelDomain": [
        ".mg"
      ],
      "alpha2Code": "MG",
      "alpha3Code": "MDG",
      "callingCodes": [
        "261"
      ],
      "capital": "Antananarivo",
      "altSpellings": [
        "MG",
        "Republic of Madagascar",
        "Repoblikan'i Madagasikara",
        "République de Madagascar"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 22434363,
      "latlng": [
        -20,
        47
      ],
      "demonym": "Malagasy",
      "area": 587041,
      "gini": 42.6,
      "timezones": [
        "UTC+03:00"
      ],
      "nativeName": "Madagasikara",
      "numericCode": "450",
      "currencies": [
        {
          "code": "MGA",
          "name": "Malagasy ariary",
          "symbol": "Ar"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "mg",
          "iso639_2": "mlg",
          "name": "Malagasy",
          "nativeName": "fiteny malagasy"
        }
      ],
      "translations": {
        "br": "Madagascar",
        "pt": "Madagáscar",
        "nl": "Madagaskar",
        "hr": "Madagaskar",
        "fa": "ماداگاسکار",
        "de": "Madagaskar",
        "es": "Madagascar",
        "fr": "Madagascar",
        "ja": "マダガスカル",
        "it": "Madagascar",
        "hu": "Madagaszkár"
      },
      "flags": [
        "https://restcountries.com/data/mdg.svg",
        "https://restcountries.com/data/png/mdg.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "MAD",
      "independent": true
    },
    {
      "name": "Malawi",
      "topLevelDomain": [
        ".mw"
      ],
      "alpha2Code": "MW",
      "alpha3Code": "MWI",
      "callingCodes": [
        "265"
      ],
      "capital": "Lilongwe",
      "altSpellings": [
        "MW",
        "Republic of Malawi"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 16832910,
      "latlng": [
        -13.5,
        34
      ],
      "demonym": "Malawian",
      "area": 118484,
      "gini": 44.7,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "MOZ",
        "TZA",
        "ZMB"
      ],
      "nativeName": "Malawi",
      "numericCode": "454",
      "currencies": [
        {
          "code": "MWK",
          "name": "Malawian kwacha",
          "symbol": "MK"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "ny",
          "iso639_2": "nya",
          "name": "Chichewa",
          "nativeName": "chiCheŵa"
        }
      ],
      "translations": {
        "br": "Malawi",
        "pt": "Malávi",
        "nl": "Malawi",
        "hr": "Malavi",
        "fa": "مالاوی",
        "de": "Malawi",
        "es": "Malawi",
        "fr": "Malawi",
        "ja": "マラウイ",
        "it": "Malawi",
        "hu": "Malawi"
      },
      "flags": [
        "https://restcountries.com/data/mwi.svg",
        "https://restcountries.com/data/png/mwi.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "MAW",
      "independent": true
    },
    {
      "name": "Malaysia",
      "topLevelDomain": [
        ".my"
      ],
      "alpha2Code": "MY",
      "alpha3Code": "MYS",
      "callingCodes": [
        "60"
      ],
      "capital": "Kuala Lumpur",
      "altSpellings": [
        "MY"
      ],
      "region": "South-Eastern Asia",
      "continent": "Asia",
      "population": 31405416,
      "latlng": [
        2.5,
        112.5
      ],
      "demonym": "Malaysian",
      "area": 330803,
      "gini": 41.1,
      "timezones": [
        "UTC+08:00"
      ],
      "borders": [
        "BRN",
        "IDN",
        "THA"
      ],
      "nativeName": "Malaysia",
      "numericCode": "458",
      "currencies": [
        {
          "code": "MYR",
          "name": "Malaysian ringgit",
          "symbol": "RM"
        }
      ],
      "languages": [
        {
          "iso639_1": "ms",
          "iso639_2": "zsm",
          "name": "Malaysian",
          "nativeName": "بهاس مليسيا"
        }
      ],
      "translations": {
        "br": "Malásia",
        "pt": "Malásia",
        "nl": "Maleisië",
        "hr": "Malezija",
        "fa": "مالزی",
        "de": "Malaysia",
        "es": "Malasia",
        "fr": "Malaisie",
        "ja": "マレーシア",
        "it": "Malesia",
        "hu": "Malajzia"
      },
      "flags": [
        "https://restcountries.com/data/mys.svg",
        "https://restcountries.com/data/png/mys.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "ASEAN",
          "name": "Association of Southeast Asian Nations"
        }
      ],
      "cioc": "MAS",
      "independent": true
    },
    {
      "name": "Maldives",
      "topLevelDomain": [
        ".mv"
      ],
      "alpha2Code": "MV",
      "alpha3Code": "MDV",
      "callingCodes": [
        "960"
      ],
      "capital": "Malé",
      "altSpellings": [
        "MV",
        "Maldive Islands",
        "Republic of the Maldives",
        "Dhivehi Raajjeyge Jumhooriyya"
      ],
      "region": "Southern Asia",
      "continent": "Asia",
      "population": 344023,
      "latlng": [
        3.25,
        73
      ],
      "demonym": "Maldivan",
      "area": 300,
      "gini": 31.3,
      "timezones": [
        "UTC+05:00"
      ],
      "nativeName": "Maldives",
      "numericCode": "462",
      "currencies": [
        {
          "code": "MVR",
          "name": "Maldivian rufiyaa",
          "symbol": ".ރ"
        }
      ],
      "languages": [
        {
          "iso639_1": "dv",
          "iso639_2": "div",
          "name": "Divehi",
          "nativeName": "ދިވެހި"
        }
      ],
      "translations": {
        "br": "Maldivas",
        "pt": "Maldivas",
        "nl": "Maldiven",
        "hr": "Maldivi",
        "fa": "مالدیو",
        "de": "Malediven",
        "es": "Maldivas",
        "fr": "Maldives",
        "ja": "モルディブ",
        "it": "Maldive",
        "hu": "Maldív-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/mdv.svg",
        "https://restcountries.com/data/png/mdv.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "MDV",
      "independent": true
    },
    {
      "name": "Mali",
      "topLevelDomain": [
        ".ml"
      ],
      "alpha2Code": "ML",
      "alpha3Code": "MLI",
      "callingCodes": [
        "223"
      ],
      "capital": "Bamako",
      "altSpellings": [
        "ML",
        "Republic of Mali",
        "République du Mali"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 18135000,
      "latlng": [
        17,
        -4
      ],
      "demonym": "Malian",
      "area": 1240192,
      "gini": 33,
      "timezones": [
        "UTC"
      ],
      "borders": [
        "DZA",
        "BFA",
        "GIN",
        "CIV",
        "MRT",
        "NER",
        "SEN"
      ],
      "nativeName": "Mali",
      "numericCode": "466",
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Mali",
        "pt": "Mali",
        "nl": "Mali",
        "hr": "Mali",
        "fa": "مالی",
        "de": "Mali",
        "es": "Mali",
        "fr": "Mali",
        "ja": "マリ",
        "it": "Mali",
        "hu": "Mali"
      },
      "flags": [
        "https://restcountries.com/data/mli.svg",
        "https://restcountries.com/data/png/mli.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "MLI",
      "independent": true
    },
    {
      "name": "Malta",
      "topLevelDomain": [
        ".mt"
      ],
      "alpha2Code": "MT",
      "alpha3Code": "MLT",
      "callingCodes": [
        "356"
      ],
      "capital": "Valletta",
      "altSpellings": [
        "MT",
        "Republic of Malta",
        "Repubblika ta' Malta"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 425384,
      "latlng": [
        35.83333333,
        14.58333333
      ],
      "demonym": "Maltese",
      "area": 316,
      "gini": 28.7,
      "timezones": [
        "UTC+01:00"
      ],
      "nativeName": "Malta",
      "numericCode": "470",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "mt",
          "iso639_2": "mlt",
          "name": "Maltese",
          "nativeName": "Malti"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Malta",
        "pt": "Malta",
        "nl": "Malta",
        "hr": "Malta",
        "fa": "مالت",
        "de": "Malta",
        "es": "Malta",
        "fr": "Malte",
        "ja": "マルタ",
        "it": "Malta",
        "hu": "Málta"
      },
      "flags": [
        "https://restcountries.com/data/mlt.svg",
        "https://restcountries.com/data/png/mlt.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "MLT",
      "independent": true
    },
    {
      "name": "Marshall Islands",
      "topLevelDomain": [
        ".mh"
      ],
      "alpha2Code": "MH",
      "alpha3Code": "MHL",
      "callingCodes": [
        "692"
      ],
      "capital": "Majuro",
      "altSpellings": [
        "MH",
        "Republic of the Marshall Islands",
        "Aolepān Aorōkin M̧ajeļ"
      ],
      "region": "Micronesia",
      "continent": "Oceania",
      "population": 54880,
      "latlng": [
        9,
        168
      ],
      "demonym": "Marshallese",
      "area": 181,
      "timezones": [
        "UTC+12:00"
      ],
      "nativeName": "M̧ajeļ",
      "numericCode": "584",
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "mh",
          "iso639_2": "mah",
          "name": "Marshallese",
          "nativeName": "Kajin M̧ajeļ"
        }
      ],
      "translations": {
        "br": "Ilhas Marshall",
        "pt": "Ilhas Marshall",
        "nl": "Marshalleilanden",
        "hr": "Maršalovi Otoci",
        "fa": "جزایر مارشال",
        "de": "Marshallinseln",
        "es": "Islas Marshall",
        "fr": "Îles Marshall",
        "ja": "マーシャル諸島",
        "it": "Isole Marshall",
        "hu": "Marshall-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/mhl.svg",
        "https://restcountries.com/data/png/mhl.png"
      ],
      "cioc": "MHL",
      "independent": true
    },
    {
      "name": "Martinique",
      "topLevelDomain": [
        ".mq"
      ],
      "alpha2Code": "MQ",
      "alpha3Code": "MTQ",
      "callingCodes": [
        "596"
      ],
      "capital": "Fort-de-France",
      "altSpellings": [
        "MQ"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 378243,
      "latlng": [
        14.666667,
        -61
      ],
      "demonym": "French",
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Martinique",
      "numericCode": "474",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Martinica",
        "pt": "Martinica",
        "nl": "Martinique",
        "hr": "Martinique",
        "fa": "مونتسرات",
        "de": "Martinique",
        "es": "Martinica",
        "fr": "Martinique",
        "ja": "マルティニーク",
        "it": "Martinica",
        "hu": "Martinique"
      },
      "flags": [
        "https://restcountries.com/data/mtq.svg",
        "https://restcountries.com/data/png/mtq.png"
      ],
      "independent": false
    },
    {
      "name": "Mauritania",
      "topLevelDomain": [
        ".mr"
      ],
      "alpha2Code": "MR",
      "alpha3Code": "MRT",
      "callingCodes": [
        "222"
      ],
      "capital": "Nouakchott",
      "altSpellings": [
        "MR",
        "Islamic Republic of Mauritania",
        "al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 3718678,
      "latlng": [
        20,
        -12
      ],
      "demonym": "Mauritanian",
      "area": 1030700,
      "gini": 32.6,
      "timezones": [
        "UTC"
      ],
      "borders": [
        "DZA",
        "MLI",
        "SEN",
        "ESH"
      ],
      "nativeName": "موريتانيا",
      "numericCode": "478",
      "currencies": [
        {
          "code": "MRO",
          "name": "Mauritanian ouguiya",
          "symbol": "UM"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Mauritânia",
        "pt": "Mauritânia",
        "nl": "Mauritanië",
        "hr": "Mauritanija",
        "fa": "موریتانی",
        "de": "Mauretanien",
        "es": "Mauritania",
        "fr": "Mauritanie",
        "ja": "モーリタニア",
        "it": "Mauritania",
        "hu": "Mauritánia"
      },
      "flags": [
        "https://restcountries.com/data/mrt.svg",
        "https://restcountries.com/data/png/mrt.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        },
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "MTN",
      "independent": true
    },
    {
      "name": "Mauritius",
      "topLevelDomain": [
        ".mu"
      ],
      "alpha2Code": "MU",
      "alpha3Code": "MUS",
      "callingCodes": [
        "230"
      ],
      "capital": "Port Louis",
      "altSpellings": [
        "MU",
        "Republic of Mauritius",
        "République de Maurice"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 1262879,
      "latlng": [
        -20.28333333,
        57.55
      ],
      "demonym": "Mauritian",
      "area": 2040,
      "gini": 36.8,
      "timezones": [
        "UTC+04:00"
      ],
      "nativeName": "Maurice",
      "numericCode": "480",
      "currencies": [
        {
          "code": "MUR",
          "name": "Mauritian rupee",
          "symbol": "₨"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Maurício",
        "pt": "Maurícia",
        "nl": "Mauritius",
        "hr": "Mauricijus",
        "fa": "موریس",
        "de": "Mauritius",
        "es": "Mauricio",
        "fr": "Île Maurice",
        "ja": "モーリシャス",
        "it": "Mauritius",
        "hu": "Mauritius"
      },
      "flags": [
        "https://restcountries.com/data/mus.svg",
        "https://restcountries.com/data/png/mus.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "MRI",
      "independent": true
    },
    {
      "name": "Mayotte",
      "topLevelDomain": [
        ".yt"
      ],
      "alpha2Code": "YT",
      "alpha3Code": "MYT",
      "callingCodes": [
        "262"
      ],
      "capital": "Mamoudzou",
      "altSpellings": [
        "YT",
        "Department of Mayotte",
        "Département de Mayotte"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 226915,
      "latlng": [
        -12.83333333,
        45.16666666
      ],
      "demonym": "French",
      "timezones": [
        "UTC+03:00"
      ],
      "nativeName": "Mayotte",
      "numericCode": "175",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Mayotte",
        "pt": "Mayotte",
        "nl": "Mayotte",
        "hr": "Mayotte",
        "fa": "مایوت",
        "de": "Mayotte",
        "es": "Mayotte",
        "fr": "Mayotte",
        "ja": "マヨット",
        "it": "Mayotte",
        "hu": "Mayotte"
      },
      "flags": [
        "https://restcountries.com/data/myt.svg",
        "https://restcountries.com/data/png/myt.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "independent": false
    },
    {
      "name": "Mexico",
      "topLevelDomain": [
        ".mx"
      ],
      "alpha2Code": "MX",
      "alpha3Code": "MEX",
      "callingCodes": [
        "52"
      ],
      "capital": "Mexico City",
      "altSpellings": [
        "MX",
        "Mexicanos",
        "United Mexican States",
        "Estados Unidos Mexicanos"
      ],
      "region": "North America",
      "continent": "Americas",
      "population": 122273473,
      "latlng": [
        23,
        -102
      ],
      "demonym": "Mexican",
      "area": 1964375,
      "gini": 45.4,
      "timezones": [
        "UTC-08:00",
        "UTC-07:00",
        "UTC-06:00"
      ],
      "borders": [
        "BLZ",
        "GTM",
        "USA"
      ],
      "nativeName": "México",
      "numericCode": "484",
      "currencies": [
        {
          "code": "MXN",
          "name": "Mexican peso",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "México",
        "pt": "México",
        "nl": "Mexico",
        "hr": "Meksiko",
        "fa": "مکزیک",
        "de": "Mexiko",
        "es": "México",
        "fr": "Mexique",
        "ja": "メキシコ",
        "it": "Messico",
        "hu": "Mexikó"
      },
      "flags": [
        "https://restcountries.com/data/mex.svg",
        "https://restcountries.com/data/png/mex.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "PA",
          "name": "Pacific Alliance",
          "otherNames": [
            "Alianza del Pacífico"
          ]
        },
        {
          "acronym": "NAFTA",
          "name": "North American Free Trade Agreement",
          "otherNames": [
            "Tratado de Libre Comercio de América del Norte",
            "Accord de Libre-échange Nord-Américain"
          ]
        }
      ],
      "cioc": "MEX",
      "independent": true
    },
    {
      "name": "Micronesia (Federated States of)",
      "topLevelDomain": [
        ".fm"
      ],
      "alpha2Code": "FM",
      "alpha3Code": "FSM",
      "callingCodes": [
        "691"
      ],
      "capital": "Palikir",
      "altSpellings": [
        "FM",
        "Federated States of Micronesia"
      ],
      "region": "Micronesia",
      "continent": "Oceania",
      "population": 102800,
      "latlng": [
        6.91666666,
        158.25
      ],
      "demonym": "Micronesian",
      "area": 702,
      "gini": 40.1,
      "timezones": [
        "UTC+10:00",
        "UTC+11"
      ],
      "nativeName": "Micronesia",
      "numericCode": "583",
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Micronésia",
        "pt": "Micronésia",
        "nl": "Micronesië",
        "hr": "Mikronezija",
        "fa": "ایالات فدرال میکرونزی",
        "de": "Mikronesien",
        "es": "Micronesia",
        "fr": "Micronésie",
        "ja": "ミクロネシア連邦",
        "it": "Micronesia",
        "hu": "Mikronézia"
      },
      "flags": [
        "https://restcountries.com/data/fsm.svg",
        "https://restcountries.com/data/png/fsm.png"
      ],
      "cioc": "FSM",
      "independent": true
    },
    {
      "name": "Moldova (Republic of)",
      "topLevelDomain": [
        ".md"
      ],
      "alpha2Code": "MD",
      "alpha3Code": "MDA",
      "callingCodes": [
        "373"
      ],
      "capital": "Chișinău",
      "altSpellings": [
        "MD",
        "Republic of Moldova",
        "Republica Moldova"
      ],
      "region": "Eastern Europe",
      "continent": "Europe",
      "population": 3553100,
      "latlng": [
        47,
        29
      ],
      "demonym": "Moldovan",
      "area": 33846,
      "gini": 25.7,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "ROU",
        "UKR"
      ],
      "nativeName": "Moldova",
      "numericCode": "498",
      "currencies": [
        {
          "code": "MDL",
          "name": "Moldovan leu",
          "symbol": "L"
        }
      ],
      "languages": [
        {
          "iso639_1": "ro",
          "iso639_2": "ron",
          "name": "Romanian",
          "nativeName": "Română"
        }
      ],
      "translations": {
        "br": "Moldávia",
        "pt": "Moldávia",
        "nl": "Moldavië",
        "hr": "Moldova",
        "fa": "مولداوی",
        "de": "Moldawie",
        "es": "Moldavia",
        "fr": "Moldavie",
        "ja": "モルドバ共和国",
        "it": "Moldavia",
        "hu": "Moldova"
      },
      "flags": [
        "https://restcountries.com/data/mda.svg",
        "https://restcountries.com/data/png/mda.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CEFTA",
          "name": "Central European Free Trade Agreement"
        }
      ],
      "cioc": "MDA",
      "independent": true
    },
    {
      "name": "Monaco",
      "topLevelDomain": [
        ".mc"
      ],
      "alpha2Code": "MC",
      "alpha3Code": "MCO",
      "callingCodes": [
        "377"
      ],
      "capital": "Monaco",
      "altSpellings": [
        "MC",
        "Principality of Monaco",
        "Principauté de Monaco"
      ],
      "region": "Western Europe",
      "continent": "Europe",
      "population": 38400,
      "latlng": [
        43.73333333,
        7.4
      ],
      "demonym": "Monegasque",
      "area": 2.02,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "FRA"
      ],
      "nativeName": "Monaco",
      "numericCode": "492",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Mônaco",
        "pt": "Mónaco",
        "nl": "Monaco",
        "hr": "Monako",
        "fa": "موناکو",
        "de": "Monaco",
        "es": "Mónaco",
        "fr": "Monaco",
        "ja": "モナコ",
        "it": "Principato di Monaco",
        "hu": "Monaco"
      },
      "flags": [
        "https://restcountries.com/data/mco.svg",
        "https://restcountries.com/data/png/mco.png"
      ],
      "cioc": "MON",
      "independent": true
    },
    {
      "name": "Mongolia",
      "topLevelDomain": [
        ".mn"
      ],
      "alpha2Code": "MN",
      "alpha3Code": "MNG",
      "callingCodes": [
        "976"
      ],
      "capital": "Ulan Bator",
      "altSpellings": [
        "MN"
      ],
      "region": "Eastern Asia",
      "continent": "Asia",
      "population": 3093100,
      "latlng": [
        46,
        105
      ],
      "demonym": "Mongolian",
      "area": 1564110,
      "gini": 32.7,
      "timezones": [
        "UTC+07:00",
        "UTC+08:00"
      ],
      "borders": [
        "CHN",
        "RUS"
      ],
      "nativeName": "Монгол улс",
      "numericCode": "496",
      "currencies": [
        {
          "code": "MNT",
          "name": "Mongolian tögrög",
          "symbol": "₮"
        }
      ],
      "languages": [
        {
          "iso639_1": "mn",
          "iso639_2": "mon",
          "name": "Mongolian",
          "nativeName": "Монгол хэл"
        }
      ],
      "translations": {
        "br": "Mongólia",
        "pt": "Mongólia",
        "nl": "Mongolië",
        "hr": "Mongolija",
        "fa": "مغولستان",
        "de": "Mongolei",
        "es": "Mongolia",
        "fr": "Mongolie",
        "ja": "モンゴル",
        "it": "Mongolia",
        "hu": "Mongólia"
      },
      "flags": [
        "https://restcountries.com/data/mng.svg",
        "https://restcountries.com/data/png/mng.png"
      ],
      "cioc": "MGL",
      "independent": true
    },
    {
      "name": "Montenegro",
      "topLevelDomain": [
        ".me"
      ],
      "alpha2Code": "ME",
      "alpha3Code": "MNE",
      "callingCodes": [
        "382"
      ],
      "capital": "Podgorica",
      "altSpellings": [
        "ME",
        "Crna Gora"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 621810,
      "latlng": [
        42.5,
        19.3
      ],
      "demonym": "Montenegrin",
      "area": 13812,
      "gini": 38.5,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "ALB",
        "BIH",
        "HRV",
        "KOS",
        "SRB"
      ],
      "nativeName": "Црна Гора",
      "numericCode": "499",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "sr",
          "iso639_2": "srp",
          "name": "Serbian",
          "nativeName": "српски језик"
        },
        {
          "iso639_1": "bs",
          "iso639_2": "bos",
          "name": "Bosnian",
          "nativeName": "bosanski jezik"
        },
        {
          "iso639_1": "sq",
          "iso639_2": "sqi",
          "name": "Albanian",
          "nativeName": "Shqip"
        },
        {
          "iso639_1": "hr",
          "iso639_2": "hrv",
          "name": "Croatian",
          "nativeName": "hrvatski jezik"
        }
      ],
      "translations": {
        "br": "Montenegro",
        "pt": "Montenegro",
        "nl": "Montenegro",
        "hr": "Crna Gora",
        "fa": "مونته‌نگرو",
        "de": "Montenegro",
        "es": "Montenegro",
        "fr": "Monténégro",
        "ja": "モンテネグロ",
        "it": "Montenegro",
        "hu": "Montenegró"
      },
      "flags": [
        "https://restcountries.com/data/mne.svg",
        "https://restcountries.com/data/png/mne.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CEFTA",
          "name": "Central European Free Trade Agreement"
        }
      ],
      "cioc": "MNE",
      "independent": true
    },
    {
      "name": "Montserrat",
      "topLevelDomain": [
        ".ms"
      ],
      "alpha2Code": "MS",
      "alpha3Code": "MSR",
      "callingCodes": [
        "1"
      ],
      "capital": "Plymouth",
      "altSpellings": [
        "MS"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 4922,
      "latlng": [
        16.75,
        -62.2
      ],
      "demonym": "Montserratian",
      "area": 102,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Montserrat",
      "numericCode": "500",
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Montserrat",
        "pt": "Monserrate",
        "nl": "Montserrat",
        "hr": "Montserrat",
        "fa": "مایوت",
        "de": "Montserrat",
        "es": "Montserrat",
        "fr": "Montserrat",
        "ja": "モントセラト",
        "it": "Montserrat",
        "hu": "Montserrat"
      },
      "flags": [
        "https://restcountries.com/data/msr.svg",
        "https://restcountries.com/data/png/msr.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        }
      ],
      "independent": false
    },
    {
      "name": "Morocco",
      "topLevelDomain": [
        ".ma"
      ],
      "alpha2Code": "MA",
      "alpha3Code": "MAR",
      "callingCodes": [
        "212"
      ],
      "capital": "Rabat",
      "altSpellings": [
        "MA",
        "Kingdom of Morocco",
        "Al-Mamlakah al-Maġribiyah"
      ],
      "region": "Northern Africa",
      "continent": "Africa",
      "population": 33337529,
      "latlng": [
        32,
        -5
      ],
      "demonym": "Moroccan",
      "area": 446550,
      "gini": 39.5,
      "timezones": [
        "UTC"
      ],
      "borders": [
        "DZA",
        "ESH",
        "ESP"
      ],
      "nativeName": "المغرب",
      "numericCode": "504",
      "currencies": [
        {
          "code": "MAD",
          "name": "Moroccan dirham",
          "symbol": "د.م."
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Marrocos",
        "pt": "Marrocos",
        "nl": "Marokko",
        "hr": "Maroko",
        "fa": "المغرب",
        "de": "Marokko",
        "es": "Marruecos",
        "fr": "Maroc",
        "ja": "モロッコ",
        "it": "Marocco",
        "hu": "Marokkó"
      },
      "flags": [
        "https://restcountries.com/data/mar.svg",
        "https://restcountries.com/data/png/mar.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        },
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "MAR",
      "independent": true
    },
    {
      "name": "Mozambique",
      "topLevelDomain": [
        ".mz"
      ],
      "alpha2Code": "MZ",
      "alpha3Code": "MOZ",
      "callingCodes": [
        "258"
      ],
      "capital": "Maputo",
      "altSpellings": [
        "MZ",
        "Republic of Mozambique",
        "República de Moçambique"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 26423700,
      "latlng": [
        -18.25,
        35
      ],
      "demonym": "Mozambican",
      "area": 801590,
      "gini": 54,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "MWI",
        "ZAF",
        "SWZ",
        "TZA",
        "ZMB",
        "ZWE"
      ],
      "nativeName": "Moçambique",
      "numericCode": "508",
      "currencies": [
        {
          "code": "MZN",
          "name": "Mozambican metical",
          "symbol": "MT"
        }
      ],
      "languages": [
        {
          "iso639_1": "pt",
          "iso639_2": "por",
          "name": "Portuguese",
          "nativeName": "Português"
        }
      ],
      "translations": {
        "br": "Moçambique",
        "pt": "Moçambique",
        "nl": "Mozambique",
        "hr": "Mozambik",
        "fa": "موزامبیک",
        "de": "Mosambik",
        "es": "Mozambique",
        "fr": "Mozambique",
        "ja": "モザンビーク",
        "it": "Mozambico",
        "hu": "Mozambik"
      },
      "flags": [
        "https://restcountries.com/data/moz.svg",
        "https://restcountries.com/data/png/moz.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "MOZ",
      "independent": true
    },
    {
      "name": "Myanmar",
      "topLevelDomain": [
        ".mm"
      ],
      "alpha2Code": "MM",
      "alpha3Code": "MMR",
      "callingCodes": [
        "95"
      ],
      "capital": "Naypyidaw",
      "altSpellings": [
        "MM",
        "Burma",
        "Republic of the Union of Myanmar",
        "Pyidaunzu Thanmăda Myăma Nainngandaw"
      ],
      "region": "South-Eastern Asia",
      "continent": "Asia",
      "population": 51419420,
      "latlng": [
        22,
        98
      ],
      "demonym": "Burmese",
      "area": 676578,
      "gini": 30.7,
      "timezones": [
        "UTC+06:30"
      ],
      "borders": [
        "BGD",
        "CHN",
        "IND",
        "LAO",
        "THA"
      ],
      "nativeName": "Myanma",
      "numericCode": "104",
      "currencies": [
        {
          "code": "MMK",
          "name": "Burmese kyat",
          "symbol": "Ks"
        }
      ],
      "languages": [
        {
          "iso639_1": "my",
          "iso639_2": "mya",
          "name": "Burmese",
          "nativeName": "ဗမာစာ"
        }
      ],
      "translations": {
        "br": "Myanmar",
        "pt": "Myanmar",
        "nl": "Myanmar",
        "hr": "Mijanmar",
        "fa": "میانمار",
        "de": "Myanmar",
        "es": "Myanmar",
        "fr": "Myanmar",
        "ja": "ミャンマー",
        "it": "Birmania",
        "hu": "Mianmar"
      },
      "flags": [
        "https://restcountries.com/data/mmr.svg",
        "https://restcountries.com/data/png/mmr.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "ASEAN",
          "name": "Association of Southeast Asian Nations"
        }
      ],
      "cioc": "MYA",
      "independent": true
    },
    {
      "name": "Namibia",
      "topLevelDomain": [
        ".na"
      ],
      "alpha2Code": "NA",
      "alpha3Code": "NAM",
      "callingCodes": [
        "264"
      ],
      "capital": "Windhoek",
      "altSpellings": [
        "NA",
        "Namibië",
        "Republic of Namibia"
      ],
      "region": "Southern Africa",
      "continent": "Africa",
      "population": 2324388,
      "latlng": [
        -22,
        17
      ],
      "demonym": "Namibian",
      "area": 825615,
      "gini": 59.1,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "AGO",
        "BWA",
        "ZAF",
        "ZMB"
      ],
      "nativeName": "Namibia",
      "numericCode": "516",
      "currencies": [
        {
          "code": "NAD",
          "name": "Namibian dollar",
          "symbol": "$"
        },
        {
          "code": "ZAR",
          "name": "South African rand",
          "symbol": "R"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "af",
          "iso639_2": "afr",
          "name": "Afrikaans",
          "nativeName": "Afrikaans"
        }
      ],
      "translations": {
        "br": "Namíbia",
        "pt": "Namíbia",
        "nl": "Namibië",
        "hr": "Namibija",
        "fa": "نامیبیا",
        "de": "Namibia",
        "es": "Namibia",
        "fr": "Namibie",
        "ja": "ナミビア",
        "it": "Namibia",
        "hu": "Namíbia"
      },
      "flags": [
        "https://restcountries.com/data/nam.svg",
        "https://restcountries.com/data/png/nam.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "NAM",
      "independent": true
    },
    {
      "name": "Nauru",
      "topLevelDomain": [
        ".nr"
      ],
      "alpha2Code": "NR",
      "alpha3Code": "NRU",
      "callingCodes": [
        "674"
      ],
      "capital": "Yaren",
      "altSpellings": [
        "NR",
        "Naoero",
        "Pleasant Island",
        "Republic of Nauru",
        "Ripublik Naoero"
      ],
      "region": "Micronesia",
      "continent": "Oceania",
      "population": 10084,
      "latlng": [
        -0.53333333,
        166.91666666
      ],
      "demonym": "Nauruan",
      "area": 21,
      "gini": 34.8,
      "timezones": [
        "UTC+12:00"
      ],
      "nativeName": "Nauru",
      "numericCode": "520",
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "na",
          "iso639_2": "nau",
          "name": "Nauruan",
          "nativeName": "Dorerin Naoero"
        }
      ],
      "translations": {
        "br": "Nauru",
        "pt": "Nauru",
        "nl": "Nauru",
        "hr": "Nauru",
        "fa": "نائورو",
        "de": "Nauru",
        "es": "Nauru",
        "fr": "Nauru",
        "ja": "ナウル",
        "it": "Nauru",
        "hu": "Nauru"
      },
      "flags": [
        "https://restcountries.com/data/nru.svg",
        "https://restcountries.com/data/png/nru.png"
      ],
      "cioc": "NRU",
      "independent": true
    },
    {
      "name": "Nepal",
      "topLevelDomain": [
        ".np"
      ],
      "alpha2Code": "NP",
      "alpha3Code": "NPL",
      "callingCodes": [
        "977"
      ],
      "capital": "Kathmandu",
      "altSpellings": [
        "NP",
        "Federal Democratic Republic of Nepal",
        "Loktāntrik Ganatantra Nepāl"
      ],
      "region": "Southern Asia",
      "continent": "Asia",
      "population": 28431500,
      "latlng": [
        28,
        84
      ],
      "demonym": "Nepalese",
      "area": 147181,
      "gini": 32.8,
      "timezones": [
        "UTC+05:45"
      ],
      "borders": [
        "CHN",
        "IND"
      ],
      "nativeName": "नेपाल",
      "numericCode": "524",
      "currencies": [
        {
          "code": "NPR",
          "name": "Nepalese rupee",
          "symbol": "₨"
        }
      ],
      "languages": [
        {
          "iso639_1": "ne",
          "iso639_2": "nep",
          "name": "Nepali",
          "nativeName": "नेपाली"
        }
      ],
      "translations": {
        "br": "Nepal",
        "pt": "Nepal",
        "nl": "Nepal",
        "hr": "Nepal",
        "fa": "نپال",
        "de": "Népal",
        "es": "Nepal",
        "fr": "Népal",
        "ja": "ネパール",
        "it": "Nepal",
        "hu": "Nepál"
      },
      "flags": [
        "https://restcountries.com/data/npl.svg",
        "https://restcountries.com/data/png/npl.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "NEP",
      "independent": true
    },
    {
      "name": "Netherlands",
      "topLevelDomain": [
        ".nl"
      ],
      "alpha2Code": "NL",
      "alpha3Code": "NLD",
      "callingCodes": [
        "31"
      ],
      "capital": "Amsterdam",
      "altSpellings": [
        "NL",
        "Holland",
        "Nederland"
      ],
      "region": "Western Europe",
      "continent": "Europe",
      "population": 17019800,
      "latlng": [
        52.5,
        5.75
      ],
      "demonym": "Dutch",
      "area": 41850,
      "gini": 28.1,
      "timezones": [
        "UTC-04:00",
        "UTC+01:00"
      ],
      "borders": [
        "BEL",
        "DEU"
      ],
      "nativeName": "Nederland",
      "numericCode": "528",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "nl",
          "iso639_2": "nld",
          "name": "Dutch",
          "nativeName": "Nederlands"
        }
      ],
      "translations": {
        "br": "Holanda",
        "pt": "Países Baixos",
        "nl": "Nederland",
        "hr": "Nizozemska",
        "fa": "پادشاهی هلند",
        "de": "Niederlande",
        "es": "Países Bajos",
        "fr": "Pays-Bas",
        "ja": "オランダ",
        "it": "Paesi Bassi",
        "hu": "Hollandia"
      },
      "flags": [
        "https://restcountries.com/data/nld.svg",
        "https://restcountries.com/data/png/nld.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "NED",
      "independent": true
    },
    {
      "name": "New Caledonia",
      "topLevelDomain": [
        ".nc"
      ],
      "alpha2Code": "NC",
      "alpha3Code": "NCL",
      "callingCodes": [
        "687"
      ],
      "capital": "Nouméa",
      "altSpellings": [
        "NC"
      ],
      "region": "Melanesia",
      "continent": "Oceania",
      "population": 268767,
      "latlng": [
        -21.5,
        165.5
      ],
      "demonym": "New Caledonian",
      "area": 18575,
      "timezones": [
        "UTC+11:00"
      ],
      "nativeName": "Nouvelle-Calédonie",
      "numericCode": "540",
      "currencies": [
        {
          "code": "XPF",
          "name": "CFP franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Nova Caledônia",
        "pt": "Nova Caledónia",
        "nl": "Nieuw-Caledonië",
        "hr": "Nova Kaledonija",
        "fa": "کالدونیای جدید",
        "de": "Neukaledonien",
        "es": "Nueva Caledonia",
        "fr": "Nouvelle-Calédonie",
        "ja": "ニューカレドニア",
        "it": "Nuova Caledonia",
        "hu": "Új-Kaledónia"
      },
      "flags": [
        "https://restcountries.com/data/ncl.svg",
        "https://restcountries.com/data/png/ncl.png"
      ],
      "independent": false
    },
    {
      "name": "New Zealand",
      "topLevelDomain": [
        ".nz"
      ],
      "alpha2Code": "NZ",
      "alpha3Code": "NZL",
      "callingCodes": [
        "64"
      ],
      "capital": "Wellington",
      "altSpellings": [
        "NZ",
        "Aotearoa"
      ],
      "region": "Australia and New Zealand",
      "continent": "Oceania",
      "population": 4697854,
      "latlng": [
        -41,
        174
      ],
      "demonym": "New Zealander",
      "area": 270467,
      "gini": 36.2,
      "timezones": [
        "UTC-11:00",
        "UTC-10:00",
        "UTC+12:00",
        "UTC+12:45",
        "UTC+13:00"
      ],
      "nativeName": "New Zealand",
      "numericCode": "554",
      "currencies": [
        {
          "code": "NZD",
          "name": "New Zealand dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "mi",
          "iso639_2": "mri",
          "name": "Māori",
          "nativeName": "te reo Māori"
        }
      ],
      "translations": {
        "br": "Nova Zelândia",
        "pt": "Nova Zelândia",
        "nl": "Nieuw-Zeeland",
        "hr": "Novi Zeland",
        "fa": "نیوزیلند",
        "de": "Neuseeland",
        "es": "Nueva Zelanda",
        "fr": "Nouvelle-Zélande",
        "ja": "ニュージーランド",
        "it": "Nuova Zelanda",
        "hu": "Új-Zéland"
      },
      "flags": [
        "https://restcountries.com/data/nzl.svg",
        "https://restcountries.com/data/png/nzl.png"
      ],
      "cioc": "NZL",
      "independent": true
    },
    {
      "name": "Nicaragua",
      "topLevelDomain": [
        ".ni"
      ],
      "alpha2Code": "NI",
      "alpha3Code": "NIC",
      "callingCodes": [
        "505"
      ],
      "capital": "Managua",
      "altSpellings": [
        "NI",
        "Republic of Nicaragua",
        "República de Nicaragua"
      ],
      "region": "Central America",
      "continent": "Americas",
      "population": 6262703,
      "latlng": [
        13,
        -85
      ],
      "demonym": "Nicaraguan",
      "area": 130373,
      "gini": 46.2,
      "timezones": [
        "UTC-06:00"
      ],
      "borders": [
        "CRI",
        "HND"
      ],
      "nativeName": "Nicaragua",
      "numericCode": "558",
      "currencies": [
        {
          "code": "NIO",
          "name": "Nicaraguan córdoba",
          "symbol": "C$"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Nicarágua",
        "pt": "Nicarágua",
        "nl": "Nicaragua",
        "hr": "Nikaragva",
        "fa": "نیکاراگوئه",
        "de": "Nicaragua",
        "es": "Nicaragua",
        "fr": "Nicaragua",
        "ja": "ニカラグア",
        "it": "Nicaragua",
        "hu": "Nicaragua"
      },
      "flags": [
        "https://restcountries.com/data/nic.svg",
        "https://restcountries.com/data/png/nic.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CAIS",
          "name": "Central American Integration System",
          "otherAcronyms": [
            "SICA"
          ],
          "otherNames": [
            "Sistema de la Integración Centroamericana,"
          ]
        }
      ],
      "cioc": "NCA",
      "independent": true
    },
    {
      "name": "Niger",
      "topLevelDomain": [
        ".ne"
      ],
      "alpha2Code": "NE",
      "alpha3Code": "NER",
      "callingCodes": [
        "227"
      ],
      "capital": "Niamey",
      "altSpellings": [
        "NE",
        "Nijar",
        "Republic of Niger",
        "République du Niger"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 20715000,
      "latlng": [
        16,
        8
      ],
      "demonym": "Nigerien",
      "area": 1267000,
      "gini": 34.3,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "DZA",
        "BEN",
        "BFA",
        "TCD",
        "LBY",
        "MLI",
        "NGA"
      ],
      "nativeName": "Niger",
      "numericCode": "562",
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Níger",
        "pt": "Níger",
        "nl": "Niger",
        "hr": "Niger",
        "fa": "نیجر",
        "de": "Niger",
        "es": "Níger",
        "fr": "Niger",
        "ja": "ニジェール",
        "it": "Niger",
        "hu": "Niger"
      },
      "flags": [
        "https://restcountries.com/data/ner.svg",
        "https://restcountries.com/data/png/ner.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "NIG",
      "independent": true
    },
    {
      "name": "Nigeria",
      "topLevelDomain": [
        ".ng"
      ],
      "alpha2Code": "NG",
      "alpha3Code": "NGA",
      "callingCodes": [
        "234"
      ],
      "capital": "Abuja",
      "altSpellings": [
        "NG",
        "Nijeriya",
        "Naíjíríà",
        "Federal Republic of Nigeria"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 186988000,
      "latlng": [
        10,
        8
      ],
      "demonym": "Nigerian",
      "area": 923768,
      "gini": 35.1,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "BEN",
        "CMR",
        "TCD",
        "NER"
      ],
      "nativeName": "Nigeria",
      "numericCode": "566",
      "currencies": [
        {
          "code": "NGN",
          "name": "Nigerian naira",
          "symbol": "₦"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Nigéria",
        "pt": "Nigéria",
        "nl": "Nigeria",
        "hr": "Nigerija",
        "fa": "نیجریه",
        "de": "Nigeria",
        "es": "Nigeria",
        "fr": "Nigéria",
        "ja": "ナイジェリア",
        "it": "Nigeria",
        "hu": "Nigéria"
      },
      "flags": [
        "https://restcountries.com/data/nga.svg",
        "https://restcountries.com/data/png/nga.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "NGR",
      "independent": true
    },
    {
      "name": "Niue",
      "topLevelDomain": [
        ".nu"
      ],
      "alpha2Code": "NU",
      "alpha3Code": "NIU",
      "callingCodes": [
        "683"
      ],
      "capital": "Alofi",
      "altSpellings": [
        "NU"
      ],
      "region": "Polynesia",
      "continent": "Oceania",
      "population": 1470,
      "latlng": [
        -19.03333333,
        -169.86666666
      ],
      "demonym": "Niuean",
      "area": 260,
      "timezones": [
        "UTC-11:00"
      ],
      "nativeName": "Niuē",
      "numericCode": "570",
      "currencies": [
        {
          "code": "NZD",
          "name": "New Zealand dollar",
          "symbol": "$"
        },
        {
          "code": "(none)",
          "name": "Niue dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Niue",
        "pt": "Niue",
        "nl": "Niue",
        "hr": "Niue",
        "fa": "نیووی",
        "de": "Niue",
        "es": "Niue",
        "fr": "Niue",
        "ja": "ニウエ",
        "it": "Niue",
        "hu": "Niue"
      },
      "flags": [
        "https://restcountries.com/data/niu.svg",
        "https://restcountries.com/data/png/niu.png"
      ],
      "independent": true
    },
    {
      "name": "Norfolk Island",
      "topLevelDomain": [
        ".nf"
      ],
      "alpha2Code": "NF",
      "alpha3Code": "NFK",
      "callingCodes": [
        "672"
      ],
      "capital": "Kingston",
      "altSpellings": [
        "NF",
        "Territory of Norfolk Island",
        "Teratri of Norf'k Ailen"
      ],
      "region": "Australia and New Zealand",
      "continent": "Oceania",
      "population": 2302,
      "latlng": [
        -29.03333333,
        167.95
      ],
      "demonym": "Norfolk Islander",
      "area": 36,
      "timezones": [
        "UTC+11:30"
      ],
      "nativeName": "Norfolk Island",
      "numericCode": "574",
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Ilha Norfolk",
        "pt": "Ilha Norfolk",
        "nl": "Norfolkeiland",
        "hr": "Otok Norfolk",
        "fa": "جزیره نورفک",
        "de": "Norfolkinsel",
        "es": "Isla de Norfolk",
        "fr": "Île de Norfolk",
        "ja": "ノーフォーク島",
        "it": "Isola Norfolk",
        "hu": "Norfolk-sziget"
      },
      "flags": [
        "https://restcountries.com/data/nfk.svg",
        "https://restcountries.com/data/png/nfk.png"
      ],
      "independent": false
    },
    {
      "name": "Korea (Democratic People's Republic of)",
      "topLevelDomain": [
        ".kp"
      ],
      "alpha2Code": "KP",
      "alpha3Code": "PRK",
      "callingCodes": [
        "850"
      ],
      "capital": "Pyongyang",
      "altSpellings": [
        "KP",
        "Democratic People's Republic of Korea",
        "조선민주주의인민공화국",
        "Chosŏn Minjujuŭi Inmin Konghwaguk"
      ],
      "region": "Eastern Asia",
      "continent": "Asia",
      "population": 25281000,
      "latlng": [
        40,
        127
      ],
      "demonym": "North Korean",
      "area": 120538,
      "timezones": [
        "UTC+09:00"
      ],
      "borders": [
        "CHN",
        "KOR",
        "RUS"
      ],
      "nativeName": "북한",
      "numericCode": "408",
      "currencies": [
        {
          "code": "KPW",
          "name": "North Korean won",
          "symbol": "₩"
        }
      ],
      "languages": [
        {
          "iso639_1": "ko",
          "iso639_2": "kor",
          "name": "Korean",
          "nativeName": "한국어"
        }
      ],
      "translations": {
        "br": "Coreia do Norte",
        "pt": "Coreia do Norte",
        "nl": "Noord-Korea",
        "hr": "Sjeverna Koreja",
        "fa": "کره جنوبی",
        "de": "Nordkorea",
        "es": "Corea del Norte",
        "fr": "Corée du Nord",
        "ja": "朝鮮民主主義人民共和国",
        "it": "Corea del Nord",
        "hu": "Észak-Korea"
      },
      "flags": [
        "https://restcountries.com/data/prk.svg",
        "https://restcountries.com/data/png/prk.png"
      ],
      "cioc": "PRK",
      "independent": true
    },
    {
      "name": "Northern Mariana Islands",
      "topLevelDomain": [
        ".mp"
      ],
      "alpha2Code": "MP",
      "alpha3Code": "MNP",
      "callingCodes": [
        "1"
      ],
      "capital": "Saipan",
      "altSpellings": [
        "MP",
        "Commonwealth of the Northern Mariana Islands",
        "Sankattan Siha Na Islas Mariånas"
      ],
      "region": "Micronesia",
      "continent": "Oceania",
      "population": 56940,
      "latlng": [
        15.2,
        145.75
      ],
      "demonym": "American",
      "area": 464,
      "timezones": [
        "UTC+10:00"
      ],
      "nativeName": "Northern Mariana Islands",
      "numericCode": "580",
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "ch",
          "iso639_2": "cha",
          "name": "Chamorro",
          "nativeName": "Chamoru"
        }
      ],
      "translations": {
        "br": "Ilhas Marianas",
        "pt": "Ilhas Marianas",
        "nl": "Noordelijke Marianeneilanden",
        "hr": "Sjevernomarijanski otoci",
        "fa": "جزایر ماریانای شمالی",
        "de": "Nördliche Marianen",
        "es": "Islas Marianas del Norte",
        "fr": "Îles Mariannes du Nord",
        "ja": "北マリアナ諸島",
        "it": "Isole Marianne Settentrionali",
        "hu": "Északi-Mariana-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/mnp.svg",
        "https://restcountries.com/data/png/mnp.png"
      ],
      "independent": false
    },
    {
      "name": "Norway",
      "topLevelDomain": [
        ".no"
      ],
      "alpha2Code": "NO",
      "alpha3Code": "NOR",
      "callingCodes": [
        "47"
      ],
      "capital": "Oslo",
      "altSpellings": [
        "NO",
        "Norge",
        "Noreg",
        "Kingdom of Norway",
        "Kongeriket Norge",
        "Kongeriket Noreg"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 5223256,
      "latlng": [
        62,
        10
      ],
      "demonym": "Norwegian",
      "area": 323802,
      "gini": 27.6,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "FIN",
        "SWE",
        "RUS"
      ],
      "nativeName": "Norge",
      "numericCode": "578",
      "currencies": [
        {
          "code": "NOK",
          "name": "Norwegian krone",
          "symbol": "kr"
        }
      ],
      "languages": [
        {
          "iso639_1": "no",
          "iso639_2": "nor",
          "name": "Norwegian",
          "nativeName": "Norsk"
        },
        {
          "iso639_1": "nb",
          "iso639_2": "nob",
          "name": "Norwegian Bokmål",
          "nativeName": "Norsk bokmål"
        },
        {
          "iso639_1": "nn",
          "iso639_2": "nno",
          "name": "Norwegian Nynorsk",
          "nativeName": "Norsk nynorsk"
        }
      ],
      "translations": {
        "br": "Noruega",
        "pt": "Noruega",
        "nl": "Noorwegen",
        "hr": "Norveška",
        "fa": "نروژ",
        "de": "Norwegen",
        "es": "Noruega",
        "fr": "Norvège",
        "ja": "ノルウェー",
        "it": "Norvegia",
        "hu": "Norvégia"
      },
      "flags": [
        "https://restcountries.com/data/nor.svg",
        "https://restcountries.com/data/png/nor.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EFTA",
          "name": "European Free Trade Association"
        }
      ],
      "cioc": "NOR",
      "independent": true
    },
    {
      "name": "Oman",
      "topLevelDomain": [
        ".om"
      ],
      "alpha2Code": "OM",
      "alpha3Code": "OMN",
      "callingCodes": [
        "968"
      ],
      "capital": "Muscat",
      "altSpellings": [
        "OM",
        "Sultanate of Oman",
        "Salṭanat ʻUmān"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 4420133,
      "latlng": [
        21,
        57
      ],
      "demonym": "Omani",
      "area": 309500,
      "timezones": [
        "UTC+04:00"
      ],
      "borders": [
        "SAU",
        "ARE",
        "YEM"
      ],
      "nativeName": "عمان",
      "numericCode": "512",
      "currencies": [
        {
          "code": "OMR",
          "name": "Omani rial",
          "symbol": "ر.ع."
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Omã",
        "pt": "Omã",
        "nl": "Oman",
        "hr": "Oman",
        "fa": "عمان",
        "de": "Oman",
        "es": "Omán",
        "fr": "Oman",
        "ja": "オマーン",
        "it": "oman",
        "hu": "Omán"
      },
      "flags": [
        "https://restcountries.com/data/omn.svg",
        "https://restcountries.com/data/png/omn.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "OMA",
      "independent": true
    },
    {
      "name": "Pakistan",
      "topLevelDomain": [
        ".pk"
      ],
      "alpha2Code": "PK",
      "alpha3Code": "PAK",
      "callingCodes": [
        "92"
      ],
      "capital": "Islamabad",
      "altSpellings": [
        "PK",
        "Pākistān",
        "Islamic Republic of Pakistan",
        "Islāmī Jumhūriya'eh Pākistān"
      ],
      "region": "Southern Asia",
      "continent": "Asia",
      "population": 194125062,
      "latlng": [
        30,
        70
      ],
      "demonym": "Pakistani",
      "area": 881912,
      "gini": 31.6,
      "timezones": [
        "UTC+05:00"
      ],
      "borders": [
        "AFG",
        "CHN",
        "IND",
        "IRN"
      ],
      "nativeName": "Pakistan",
      "numericCode": "586",
      "currencies": [
        {
          "code": "PKR",
          "name": "Pakistani rupee",
          "symbol": "₨"
        }
      ],
      "languages": [
        {
          "iso639_1": "ur",
          "iso639_2": "urd",
          "name": "Urdu",
          "nativeName": "اردو"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Paquistão",
        "pt": "Paquistão",
        "nl": "Pakistan",
        "hr": "Pakistan",
        "fa": "پاکستان",
        "de": "Pakistan",
        "es": "Pakistán",
        "fr": "Pakistan",
        "ja": "パキスタン",
        "it": "Pakistan",
        "hu": "Pakisztán"
      },
      "flags": [
        "https://restcountries.com/data/pak.svg",
        "https://restcountries.com/data/png/pak.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "PAK",
      "independent": true
    },
    {
      "name": "Palau",
      "topLevelDomain": [
        ".pw"
      ],
      "alpha2Code": "PW",
      "alpha3Code": "PLW",
      "callingCodes": [
        "680"
      ],
      "capital": "Ngerulmud",
      "altSpellings": [
        "PW",
        "Republic of Palau",
        "Beluu er a Belau"
      ],
      "region": "Micronesia",
      "continent": "Oceania",
      "population": 17950,
      "latlng": [
        7.5,
        134.5
      ],
      "demonym": "Palauan",
      "area": 459,
      "timezones": [
        "UTC+09:00"
      ],
      "nativeName": "Palau",
      "numericCode": "585",
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Palau",
        "pt": "Palau",
        "nl": "Palau",
        "hr": "Palau",
        "fa": "پالائو",
        "de": "Palau",
        "es": "Palau",
        "fr": "Palaos",
        "ja": "パラオ",
        "it": "Palau",
        "hu": "Palau"
      },
      "flags": [
        "https://restcountries.com/data/plw.svg",
        "https://restcountries.com/data/png/plw.png"
      ],
      "cioc": "PLW",
      "independent": true
    },
    {
      "name": "Palestine, State of",
      "topLevelDomain": [
        ".ps"
      ],
      "alpha2Code": "PS",
      "alpha3Code": "PSE",
      "callingCodes": [
        "970"
      ],
      "capital": "Ramallah",
      "altSpellings": [
        "PS",
        "State of Palestine",
        "Dawlat Filasṭin"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 5159076,
      "latlng": [
        31.9,
        35.2
      ],
      "demonym": "Palestinian",
      "gini": 35.5,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "ISR",
        "EGY",
        "JOR"
      ],
      "nativeName": "فلسطين",
      "numericCode": "275",
      "currencies": [
        {
          "code": "EGP",
          "name": "Egyptian pound",
          "symbol": "E£"
        },
        {
          "code": "ILS",
          "name": "Israeli new shekel",
          "symbol": "₪"
        },
        {
          "code": "JOD",
          "name": "Jordanian dinar",
          "symbol": "د.أ"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Palestina",
        "pt": "Palestina",
        "nl": "Palestijnse gebieden",
        "hr": "Palestina",
        "fa": "فلسطین",
        "de": "Palästina",
        "es": "Palestina",
        "fr": "Palestine",
        "ja": "パレスチナ",
        "it": "Palestina",
        "hu": "Palesztina"
      },
      "flags": [
        "https://restcountries.com/data/pse.svg",
        "https://restcountries.com/data/png/pse.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "PLE",
      "independent": true
    },
    {
      "name": "Panama",
      "topLevelDomain": [
        ".pa"
      ],
      "alpha2Code": "PA",
      "alpha3Code": "PAN",
      "callingCodes": [
        "507"
      ],
      "capital": "Panama City",
      "altSpellings": [
        "PA",
        "Republic of Panama",
        "República de Panamá"
      ],
      "region": "Central America",
      "continent": "Americas",
      "population": 3814672,
      "latlng": [
        9,
        -80
      ],
      "demonym": "Panamanian",
      "area": 75417,
      "gini": 49.8,
      "timezones": [
        "UTC-05:00"
      ],
      "borders": [
        "COL",
        "CRI"
      ],
      "nativeName": "Panamá",
      "numericCode": "591",
      "currencies": [
        {
          "code": "PAB",
          "name": "Panamanian balboa",
          "symbol": "B/."
        },
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Panamá",
        "pt": "Panamá",
        "nl": "Panama",
        "hr": "Panama",
        "fa": "پاناما",
        "de": "Panama",
        "es": "Panamá",
        "fr": "Panama",
        "ja": "パナマ",
        "it": "Panama",
        "hu": "Panama"
      },
      "flags": [
        "https://restcountries.com/data/pan.svg",
        "https://restcountries.com/data/png/pan.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CAIS",
          "name": "Central American Integration System",
          "otherAcronyms": [
            "SICA"
          ],
          "otherNames": [
            "Sistema de la Integración Centroamericana,"
          ]
        }
      ],
      "cioc": "PAN",
      "independent": true
    },
    {
      "name": "Papua New Guinea",
      "topLevelDomain": [
        ".pg"
      ],
      "alpha2Code": "PG",
      "alpha3Code": "PNG",
      "callingCodes": [
        "675"
      ],
      "capital": "Port Moresby",
      "altSpellings": [
        "PG",
        "Independent State of Papua New Guinea",
        "Independen Stet bilong Papua Niugini"
      ],
      "region": "Melanesia",
      "continent": "Oceania",
      "population": 8083700,
      "latlng": [
        -6,
        147
      ],
      "demonym": "Papua New Guinean",
      "area": 462840,
      "gini": 41.9,
      "timezones": [
        "UTC+10:00"
      ],
      "borders": [
        "IDN"
      ],
      "nativeName": "Papua Niugini",
      "numericCode": "598",
      "currencies": [
        {
          "code": "PGK",
          "name": "Papua New Guinean kina",
          "symbol": "K"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Papua Nova Guiné",
        "pt": "Papua Nova Guiné",
        "nl": "Papoea-Nieuw-Guinea",
        "hr": "Papua Nova Gvineja",
        "fa": "پاپوآ گینه نو",
        "de": "Papua-Neuguinea",
        "es": "Papúa Nueva Guinea",
        "fr": "Papouasie-Nouvelle-Guinée",
        "ja": "パプアニューギニア",
        "it": "Papua Nuova Guinea",
        "hu": "Pápua Új-Guinea"
      },
      "flags": [
        "https://restcountries.com/data/png.svg",
        "https://restcountries.com/data/png/png.png"
      ],
      "cioc": "PNG",
      "independent": true
    },
    {
      "name": "Paraguay",
      "topLevelDomain": [
        ".py"
      ],
      "alpha2Code": "PY",
      "alpha3Code": "PRY",
      "callingCodes": [
        "595"
      ],
      "capital": "Asunción",
      "altSpellings": [
        "PY",
        "Republic of Paraguay",
        "República del Paraguay",
        "Tetã Paraguái"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 6854536,
      "latlng": [
        -23,
        -58
      ],
      "demonym": "Paraguayan",
      "area": 406752,
      "gini": 45.7,
      "timezones": [
        "UTC-04:00"
      ],
      "borders": [
        "ARG",
        "BOL",
        "BRA"
      ],
      "nativeName": "Paraguay",
      "numericCode": "600",
      "currencies": [
        {
          "code": "PYG",
          "name": "Paraguayan guaraní",
          "symbol": "₲"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        },
        {
          "iso639_1": "gn",
          "iso639_2": "grn",
          "name": "Guaraní",
          "nativeName": "Avañe'ẽ"
        }
      ],
      "translations": {
        "br": "Paraguai",
        "pt": "Paraguai",
        "nl": "Paraguay",
        "hr": "Paragvaj",
        "fa": "پاراگوئه",
        "de": "Paraguay",
        "es": "Paraguay",
        "fr": "Paraguay",
        "ja": "パラグアイ",
        "it": "Paraguay",
        "hu": "Paraguay"
      },
      "flags": [
        "https://restcountries.com/data/pry.svg",
        "https://restcountries.com/data/png/pry.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "cioc": "PAR",
      "independent": true
    },
    {
      "name": "Peru",
      "topLevelDomain": [
        ".pe"
      ],
      "alpha2Code": "PE",
      "alpha3Code": "PER",
      "callingCodes": [
        "51"
      ],
      "capital": "Lima",
      "altSpellings": [
        "PE",
        "Republic of Peru",
        " República del Perú"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 31488700,
      "latlng": [
        -10,
        -76
      ],
      "demonym": "Peruvian",
      "area": 1285216,
      "gini": 41.5,
      "timezones": [
        "UTC-05:00"
      ],
      "borders": [
        "BOL",
        "BRA",
        "CHL",
        "COL",
        "ECU"
      ],
      "nativeName": "Perú",
      "numericCode": "604",
      "currencies": [
        {
          "code": "PEN",
          "name": "Peruvian sol",
          "symbol": "S/."
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Peru",
        "pt": "Peru",
        "nl": "Peru",
        "hr": "Peru",
        "fa": "پرو",
        "de": "Peru",
        "es": "Perú",
        "fr": "Pérou",
        "ja": "ペルー",
        "it": "Perù",
        "hu": "Peru"
      },
      "flags": [
        "https://restcountries.com/data/per.svg",
        "https://restcountries.com/data/png/per.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "PA",
          "name": "Pacific Alliance",
          "otherNames": [
            "Alianza del Pacífico"
          ]
        },
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "cioc": "PER",
      "independent": true
    },
    {
      "name": "Philippines",
      "topLevelDomain": [
        ".ph"
      ],
      "alpha2Code": "PH",
      "alpha3Code": "PHL",
      "callingCodes": [
        "63"
      ],
      "capital": "Manila",
      "altSpellings": [
        "PH",
        "Republic of the Philippines",
        "Repúblika ng Pilipinas"
      ],
      "region": "South-Eastern Asia",
      "continent": "Asia",
      "population": 103279800,
      "latlng": [
        13,
        122
      ],
      "demonym": "Filipino",
      "area": 342353,
      "gini": 42.3,
      "timezones": [
        "UTC+08:00"
      ],
      "nativeName": "Pilipinas",
      "numericCode": "608",
      "currencies": [
        {
          "code": "PHP",
          "name": "Philippine peso",
          "symbol": "₱"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Filipinas",
        "pt": "Filipinas",
        "nl": "Filipijnen",
        "hr": "Filipini",
        "fa": "جزایر الندفیلیپین",
        "de": "Philippinen",
        "es": "Filipinas",
        "fr": "Philippines",
        "ja": "フィリピン",
        "it": "Filippine",
        "hu": "Fülöp-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/phl.svg",
        "https://restcountries.com/data/png/phl.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "ASEAN",
          "name": "Association of Southeast Asian Nations"
        }
      ],
      "cioc": "PHI",
      "independent": true
    },
    {
      "name": "Pitcairn",
      "topLevelDomain": [
        ".pn"
      ],
      "alpha2Code": "PN",
      "alpha3Code": "PCN",
      "callingCodes": [
        "64"
      ],
      "capital": "Adamstown",
      "altSpellings": [
        "PN",
        "Pitcairn Henderson Ducie and Oeno Islands"
      ],
      "region": "Polynesia",
      "continent": "Oceania",
      "population": 56,
      "latlng": [
        -25.06666666,
        -130.1
      ],
      "demonym": "Pitcairn Islander",
      "area": 47,
      "timezones": [
        "UTC-08:00"
      ],
      "nativeName": "Pitcairn Islands",
      "numericCode": "612",
      "currencies": [
        {
          "code": "NZD",
          "name": "New Zealand dollar",
          "symbol": "$"
        },
        {
          "code": "PND",
          "name": "Pitcairn Islands dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Ilhas Pitcairn",
        "pt": "Ilhas Picárnia",
        "nl": "Pitcairneilanden",
        "hr": "Pitcairnovo otočje",
        "fa": "پیتکرن",
        "de": "Pitcairn",
        "es": "Islas Pitcairn",
        "fr": "Îles Pitcairn",
        "ja": "ピトケアン",
        "it": "Isole Pitcairn",
        "hu": "Pitcairn-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/pcn.svg",
        "https://restcountries.com/data/png/pcn.png"
      ],
      "independent": true
    },
    {
      "name": "Poland",
      "topLevelDomain": [
        ".pl"
      ],
      "alpha2Code": "PL",
      "alpha3Code": "POL",
      "callingCodes": [
        "48"
      ],
      "capital": "Warsaw",
      "altSpellings": [
        "PL",
        "Republic of Poland",
        "Rzeczpospolita Polska"
      ],
      "region": "Central Europe",
      "continent": "Europe",
      "population": 38437239,
      "latlng": [
        52,
        20
      ],
      "demonym": "Polish",
      "area": 312679,
      "gini": 30.2,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "BLR",
        "CZE",
        "DEU",
        "LTU",
        "RUS",
        "SVK",
        "UKR"
      ],
      "nativeName": "Polska",
      "numericCode": "616",
      "currencies": [
        {
          "code": "PLN",
          "name": "Polish złoty",
          "symbol": "zł"
        }
      ],
      "languages": [
        {
          "iso639_1": "pl",
          "iso639_2": "pol",
          "name": "Polish",
          "nativeName": "język polski"
        }
      ],
      "translations": {
        "br": "Polônia",
        "pt": "Polónia",
        "nl": "Polen",
        "hr": "Poljska",
        "fa": "لهستان",
        "de": "Polen",
        "es": "Polonia",
        "fr": "Pologne",
        "ja": "ポーランド",
        "it": "Polonia",
        "hu": "Lengyelország"
      },
      "flags": [
        "https://restcountries.com/data/pol.svg",
        "https://restcountries.com/data/png/pol.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "POL",
      "independent": true
    },
    {
      "name": "Portugal",
      "topLevelDomain": [
        ".pt"
      ],
      "alpha2Code": "PT",
      "alpha3Code": "PRT",
      "callingCodes": [
        "351"
      ],
      "capital": "Lisbon",
      "altSpellings": [
        "PT",
        "Portuguesa",
        "Portuguese Republic",
        "República Portuguesa"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 10374822,
      "latlng": [
        39.5,
        -8
      ],
      "demonym": "Portuguese",
      "area": 92090,
      "gini": 33.5,
      "timezones": [
        "UTC-01:00",
        "UTC"
      ],
      "borders": [
        "ESP"
      ],
      "nativeName": "Portugal",
      "numericCode": "620",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "pt",
          "iso639_2": "por",
          "name": "Portuguese",
          "nativeName": "Português"
        }
      ],
      "translations": {
        "br": "Portugal",
        "pt": "Portugal",
        "nl": "Portugal",
        "hr": "Portugal",
        "fa": "پرتغال",
        "de": "Portugal",
        "es": "Portugal",
        "fr": "Portugal",
        "ja": "ポルトガル",
        "it": "Portogallo",
        "hu": "Portugália"
      },
      "flags": [
        "https://restcountries.com/data/prt.svg",
        "https://restcountries.com/data/png/prt.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "POR",
      "independent": true
    },
    {
      "name": "Puerto Rico",
      "topLevelDomain": [
        ".pr"
      ],
      "alpha2Code": "PR",
      "alpha3Code": "PRI",
      "callingCodes": [
        "1"
      ],
      "capital": "San Juan",
      "altSpellings": [
        "PR",
        "Commonwealth of Puerto Rico",
        "Estado Libre Asociado de Puerto Rico"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 3474182,
      "latlng": [
        18.25,
        -66.5
      ],
      "demonym": "Puerto Rican",
      "area": 8870,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Puerto Rico",
      "numericCode": "630",
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Porto Rico",
        "pt": "Porto Rico",
        "nl": "Puerto Rico",
        "hr": "Portoriko",
        "fa": "پورتو ریکو",
        "de": "Puerto Rico",
        "es": "Puerto Rico",
        "fr": "Porto Rico",
        "ja": "プエルトリコ",
        "it": "Porto Rico",
        "hu": "Puerto Rico"
      },
      "flags": [
        "https://restcountries.com/data/pri.svg",
        "https://restcountries.com/data/png/pri.png"
      ],
      "cioc": "PUR",
      "independent": false
    },
    {
      "name": "Qatar",
      "topLevelDomain": [
        ".qa"
      ],
      "alpha2Code": "QA",
      "alpha3Code": "QAT",
      "callingCodes": [
        "974"
      ],
      "capital": "Doha",
      "altSpellings": [
        "QA",
        "State of Qatar",
        "Dawlat Qaṭar"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 2587564,
      "latlng": [
        25.5,
        51.25
      ],
      "demonym": "Qatari",
      "area": 11586,
      "gini": 41.1,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "SAU"
      ],
      "nativeName": "قطر",
      "numericCode": "634",
      "currencies": [
        {
          "code": "QAR",
          "name": "Qatari riyal",
          "symbol": "ر.ق"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Catar",
        "pt": "Catar",
        "nl": "Qatar",
        "hr": "Katar",
        "fa": "قطر",
        "de": "Katar",
        "es": "Catar",
        "fr": "Qatar",
        "ja": "カタール",
        "it": "Qatar",
        "hu": "Katar"
      },
      "flags": [
        "https://restcountries.com/data/qat.svg",
        "https://restcountries.com/data/png/qat.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "QAT",
      "independent": true
    },
    {
      "name": "Republic of Kosovo",
      "topLevelDomain": [
        ""
      ],
      "alpha2Code": "XK",
      "alpha3Code": "KOS",
      "callingCodes": [
        "383"
      ],
      "capital": "Pristina",
      "altSpellings": [
        "XK",
        "Република Косово"
      ],
      "region": "Eastern Europe",
      "continent": "Europe",
      "population": 1733842,
      "latlng": [
        42.666667,
        21.166667
      ],
      "demonym": "Kosovar",
      "area": 10908,
      "gini": 29,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "ALB",
        "MKD",
        "MNE",
        "SRB"
      ],
      "nativeName": "Republika e Kosovës",
      "numericCode": "926",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "sq",
          "iso639_2": "sqi",
          "name": "Albanian",
          "nativeName": "Shqip"
        },
        {
          "iso639_1": "sr",
          "iso639_2": "srp",
          "name": "Serbian",
          "nativeName": "српски језик"
        }
      ],
      "translations": {
        "br": "Kosovo",
        "pt": "Kosovo",
        "hr": "Kosovo",
        "fa": "کوزوو",
        "es": "Kosovo",
        "fr": "Kosovo",
        "hu": "Koszovó"
      },
      "flags": [
        "https://restcountries.com/data/kos.svg",
        "https://restcountries.com/data/png/kos.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CEFTA",
          "name": "Central European Free Trade Agreement"
        }
      ],
      "independent": true
    },
    {
      "name": "Réunion",
      "topLevelDomain": [
        ".re"
      ],
      "alpha2Code": "RE",
      "alpha3Code": "REU",
      "callingCodes": [
        "262"
      ],
      "capital": "Saint-Denis",
      "altSpellings": [
        "RE",
        "Reunion"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 840974,
      "latlng": [
        -21.15,
        55.5
      ],
      "demonym": "French",
      "timezones": [
        "UTC+04:00"
      ],
      "nativeName": "La Réunion",
      "numericCode": "638",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Reunião",
        "pt": "Reunião",
        "nl": "Réunion",
        "hr": "Réunion",
        "fa": "رئونیون",
        "de": "Réunion",
        "es": "Reunión",
        "fr": "Réunion",
        "ja": "レユニオン",
        "it": "Riunione",
        "hu": "Réunion"
      },
      "flags": [
        "https://restcountries.com/data/reu.svg",
        "https://restcountries.com/data/png/reu.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "independent": false
    },
    {
      "name": "Romania",
      "topLevelDomain": [
        ".ro"
      ],
      "alpha2Code": "RO",
      "alpha3Code": "ROU",
      "callingCodes": [
        "40"
      ],
      "capital": "Bucharest",
      "altSpellings": [
        "RO",
        "Rumania",
        "Roumania",
        "România"
      ],
      "region": "Eastern Europe",
      "continent": "Europe",
      "population": 19861408,
      "latlng": [
        46,
        25
      ],
      "demonym": "Romanian",
      "area": 238391,
      "gini": 35.8,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "BGR",
        "HUN",
        "MDA",
        "SRB",
        "UKR"
      ],
      "nativeName": "România",
      "numericCode": "642",
      "currencies": [
        {
          "code": "RON",
          "name": "Romanian leu",
          "symbol": "lei"
        }
      ],
      "languages": [
        {
          "iso639_1": "ro",
          "iso639_2": "ron",
          "name": "Romanian",
          "nativeName": "Română"
        }
      ],
      "translations": {
        "br": "Romênia",
        "pt": "Roménia",
        "nl": "Roemenië",
        "hr": "Rumunjska",
        "fa": "رومانی",
        "de": "Rumänien",
        "es": "Rumania",
        "fr": "Roumanie",
        "ja": "ルーマニア",
        "it": "Romania",
        "hu": "Románia"
      },
      "flags": [
        "https://restcountries.com/data/rou.svg",
        "https://restcountries.com/data/png/rou.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "ROU",
      "independent": true
    },
    {
      "name": "Russian Federation",
      "topLevelDomain": [
        ".ru"
      ],
      "alpha2Code": "RU",
      "alpha3Code": "RUS",
      "callingCodes": [
        "7"
      ],
      "capital": "Moscow",
      "altSpellings": [
        "RU",
        "Rossiya",
        "Russian Federation",
        "Российская Федерация",
        "Rossiyskaya Federatsiya"
      ],
      "region": "Eastern Europe",
      "continent": "Europe",
      "population": 146599183,
      "latlng": [
        60,
        100
      ],
      "demonym": "Russian",
      "area": 17124442,
      "gini": 37.5,
      "timezones": [
        "UTC+03:00",
        "UTC+04:00",
        "UTC+06:00",
        "UTC+07:00",
        "UTC+08:00",
        "UTC+09:00",
        "UTC+10:00",
        "UTC+11:00",
        "UTC+12:00"
      ],
      "borders": [
        "AZE",
        "BLR",
        "CHN",
        "EST",
        "FIN",
        "GEO",
        "KAZ",
        "PRK",
        "LVA",
        "LTU",
        "MNG",
        "NOR",
        "POL",
        "UKR"
      ],
      "nativeName": "Россия",
      "numericCode": "643",
      "currencies": [
        {
          "code": "RUB",
          "name": "Russian ruble",
          "symbol": "₽"
        }
      ],
      "languages": [
        {
          "iso639_1": "ru",
          "iso639_2": "rus",
          "name": "Russian",
          "nativeName": "Русский"
        }
      ],
      "translations": {
        "br": "Rússia",
        "pt": "Rússia",
        "nl": "Rusland",
        "hr": "Rusija",
        "fa": "روسیه",
        "de": "Russland",
        "es": "Rusia",
        "fr": "Russie",
        "ja": "ロシア連邦",
        "it": "Russia",
        "hu": "Oroszország"
      },
      "flags": [
        "https://restcountries.com/data/rus.svg",
        "https://restcountries.com/data/png/rus.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EEU",
          "name": "Eurasian Economic Union",
          "otherAcronyms": [
            "EAEU"
          ]
        }
      ],
      "cioc": "RUS",
      "independent": true
    },
    {
      "name": "Rwanda",
      "topLevelDomain": [
        ".rw"
      ],
      "alpha2Code": "RW",
      "alpha3Code": "RWA",
      "callingCodes": [
        "250"
      ],
      "capital": "Kigali",
      "altSpellings": [
        "RW",
        "Republic of Rwanda",
        "Repubulika y'u Rwanda",
        "République du Rwanda"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 11553188,
      "latlng": [
        -2,
        30
      ],
      "demonym": "Rwandan",
      "area": 26338,
      "gini": 43.7,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "BDI",
        "COD",
        "TZA",
        "UGA"
      ],
      "nativeName": "Rwanda",
      "numericCode": "646",
      "currencies": [
        {
          "code": "RWF",
          "name": "Rwandan franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "rw",
          "iso639_2": "kin",
          "name": "Kinyarwanda",
          "nativeName": "Ikinyarwanda"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Ruanda",
        "pt": "Ruanda",
        "nl": "Rwanda",
        "hr": "Ruanda",
        "fa": "رواندا",
        "de": "Ruanda",
        "es": "Ruanda",
        "fr": "Rwanda",
        "ja": "ルワンダ",
        "it": "Ruanda",
        "hu": "Ruanda"
      },
      "flags": [
        "https://restcountries.com/data/rwa.svg",
        "https://restcountries.com/data/png/rwa.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "RWA",
      "independent": true
    },
    {
      "name": "Saint Barthélemy",
      "topLevelDomain": [
        ".bl"
      ],
      "alpha2Code": "BL",
      "alpha3Code": "BLM",
      "callingCodes": [
        "590"
      ],
      "capital": "Gustavia",
      "altSpellings": [
        "BL",
        "St. Barthelemy",
        "Collectivity of Saint Barthélemy",
        "Collectivité de Saint-Barthélemy"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 9417,
      "latlng": [
        18.5,
        -63.41666666
      ],
      "demonym": "Saint Barthélemy Islander",
      "area": 21,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Saint-Barthélemy",
      "numericCode": "652",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "São Bartolomeu",
        "pt": "São Bartolomeu",
        "nl": "Saint Barthélemy",
        "hr": "Saint Barthélemy",
        "fa": "سن-بارتلمی",
        "de": "Saint-Barthélemy",
        "es": "San Bartolomé",
        "fr": "Saint-Barthélemy",
        "ja": "サン・バルテルミー",
        "it": "Antille Francesi",
        "hu": "Saint-Barthélemy"
      },
      "flags": [
        "https://restcountries.com/data/blm.svg",
        "https://restcountries.com/data/png/blm.png"
      ],
      "independent": false
    },
    {
      "name": "Saint Helena, Ascension and Tristan da Cunha",
      "topLevelDomain": [
        ".sh"
      ],
      "alpha2Code": "SH",
      "alpha3Code": "SHN",
      "callingCodes": [
        "290"
      ],
      "capital": "Jamestown",
      "altSpellings": [
        "SH"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 4255,
      "latlng": [
        -15.95,
        -5.7
      ],
      "demonym": "Saint Helenian",
      "timezones": [
        "UTC+00:00"
      ],
      "nativeName": "Saint Helena",
      "numericCode": "654",
      "currencies": [
        {
          "code": "SHP",
          "name": "Saint Helena pound",
          "symbol": "£"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Santa Helena",
        "pt": "Santa Helena",
        "nl": "Sint-Helena",
        "hr": "Sveta Helena",
        "fa": "سنت هلنا، اسنشن و تریستان دا کونا",
        "de": "Sankt Helena",
        "es": "Santa Helena",
        "fr": "Sainte-Hélène",
        "ja": "セントヘレナ・アセンションおよびトリスタンダクーニャ",
        "it": "Sant'Elena",
        "hu": "Szent Ilona"
      },
      "flags": [
        "https://restcountries.com/data/shn.svg",
        "https://restcountries.com/data/png/shn.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "independent": false
    },
    {
      "name": "Saint Kitts and Nevis",
      "topLevelDomain": [
        ".kn"
      ],
      "alpha2Code": "KN",
      "alpha3Code": "KNA",
      "callingCodes": [
        "1"
      ],
      "capital": "Basseterre",
      "altSpellings": [
        "KN",
        "Federation of Saint Christopher and Nevis"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 46204,
      "latlng": [
        17.33333333,
        -62.75
      ],
      "demonym": "Kittian and Nevisian",
      "area": 261,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Saint Kitts and Nevis",
      "numericCode": "659",
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "São Cristóvão e Neves",
        "pt": "São Cristóvão e Neves",
        "nl": "Saint Kitts en Nevis",
        "hr": "Sveti Kristof i Nevis",
        "fa": "سنت کیتس و نویس",
        "de": "St. Kitts und Nevis",
        "es": "San Cristóbal y Nieves",
        "fr": "Saint-Christophe-et-Niévès",
        "ja": "セントクリストファー・ネイビス",
        "it": "Saint Kitts e Nevis",
        "hu": "Saint Kitts és Nevis"
      },
      "flags": [
        "https://restcountries.com/data/kna.svg",
        "https://restcountries.com/data/png/kna.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        }
      ],
      "cioc": "SKN",
      "independent": true
    },
    {
      "name": "Saint Lucia",
      "topLevelDomain": [
        ".lc"
      ],
      "alpha2Code": "LC",
      "alpha3Code": "LCA",
      "callingCodes": [
        "1"
      ],
      "capital": "Castries",
      "altSpellings": [
        "LC"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 186000,
      "latlng": [
        13.88333333,
        -60.96666666
      ],
      "demonym": "Saint Lucian",
      "area": 616,
      "gini": 51.2,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Saint Lucia",
      "numericCode": "662",
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Santa Lúcia",
        "pt": "Santa Lúcia",
        "nl": "Saint Lucia",
        "hr": "Sveta Lucija",
        "fa": "سنت لوسیا",
        "de": "Saint Lucia",
        "es": "Santa Lucía",
        "fr": "Saint-Lucie",
        "ja": "セントルシア",
        "it": "Santa Lucia",
        "hu": "Saint Lucia"
      },
      "flags": [
        "https://restcountries.com/data/lca.svg",
        "https://restcountries.com/data/png/lca.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        }
      ],
      "cioc": "LCA",
      "independent": true
    },
    {
      "name": "Saint Martin (French part)",
      "topLevelDomain": [
        ".mf",
        ".fr",
        ".gp"
      ],
      "alpha2Code": "MF",
      "alpha3Code": "MAF",
      "callingCodes": [
        "590"
      ],
      "capital": "Marigot",
      "altSpellings": [
        "MF",
        "Collectivity of Saint Martin",
        "Collectivité de Saint-Martin"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 36979,
      "latlng": [
        18.08333333,
        -63.95
      ],
      "demonym": "Saint Martin Islander",
      "area": 53,
      "timezones": [
        "UTC-04:00"
      ],
      "borders": [
        "SXM",
        "NLD"
      ],
      "nativeName": "Saint-Martin",
      "numericCode": "663",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "nl",
          "iso639_2": "nld",
          "name": "Dutch",
          "nativeName": "Nederlands"
        }
      ],
      "translations": {
        "br": "Saint Martin",
        "pt": "Ilha São Martinho",
        "nl": "Saint-Martin",
        "hr": "Sveti Martin",
        "fa": "سینت مارتن",
        "de": "Saint Martin",
        "es": "Saint Martin",
        "fr": "Saint-Martin",
        "ja": "サン・マルタン（フランス領）",
        "it": "Saint Martin",
        "hu": "Saint-Martin"
      },
      "flags": [
        "https://restcountries.com/data/maf.svg",
        "https://restcountries.com/data/png/maf.png"
      ],
      "independent": false
    },
    {
      "name": "Saint Pierre and Miquelon",
      "topLevelDomain": [
        ".pm"
      ],
      "alpha2Code": "PM",
      "alpha3Code": "SPM",
      "callingCodes": [
        "508"
      ],
      "capital": "Saint-Pierre",
      "altSpellings": [
        "PM",
        "Collectivité territoriale de Saint-Pierre-et-Miquelon"
      ],
      "region": "Northern America",
      "continent": "Americas",
      "population": 6069,
      "latlng": [
        46.83333333,
        -56.33333333
      ],
      "demonym": "French",
      "area": 242,
      "timezones": [
        "UTC-03:00"
      ],
      "nativeName": "Saint-Pierre-et-Miquelon",
      "numericCode": "666",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Saint-Pierre e Miquelon",
        "pt": "São Pedro e Miquelon",
        "nl": "Saint Pierre en Miquelon",
        "hr": "Sveti Petar i Mikelon",
        "fa": "سن پیر و میکلن",
        "de": "Saint-Pierre und Miquelon",
        "es": "San Pedro y Miquelón",
        "fr": "Saint-Pierre-et-Miquelon",
        "ja": "サンピエール島・ミクロン島",
        "it": "Saint-Pierre e Miquelon",
        "hu": "Saint-Pierre és Miquelon"
      },
      "flags": [
        "https://restcountries.com/data/spm.svg",
        "https://restcountries.com/data/png/spm.png"
      ],
      "independent": false
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "topLevelDomain": [
        ".vc"
      ],
      "alpha2Code": "VC",
      "alpha3Code": "VCT",
      "callingCodes": [
        "1"
      ],
      "capital": "Kingstown",
      "altSpellings": [
        "VC"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 109991,
      "latlng": [
        13.25,
        -61.2
      ],
      "demonym": "Saint Vincentian",
      "area": 389,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Saint Vincent and the Grenadines",
      "numericCode": "670",
      "currencies": [
        {
          "code": "XCD",
          "name": "East Caribbean dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "São Vicente e Granadinas",
        "pt": "São Vicente e Granadinas",
        "nl": "Saint Vincent en de Grenadines",
        "hr": "Sveti Vincent i Grenadini",
        "fa": "سنت وینسنت و گرنادین‌ها",
        "de": "Saint Vincent und die Grenadinen",
        "es": "San Vicente y Granadinas",
        "fr": "Saint-Vincent-et-les-Grenadines",
        "ja": "セントビンセントおよびグレナディーン諸島",
        "it": "Saint Vincent e Grenadine",
        "hu": "Saint Vincent és a Grenadine-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/vct.svg",
        "https://restcountries.com/data/png/vct.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        }
      ],
      "cioc": "VIN",
      "independent": true
    },
    {
      "name": "Samoa",
      "topLevelDomain": [
        ".ws"
      ],
      "alpha2Code": "WS",
      "alpha3Code": "WSM",
      "callingCodes": [
        "685"
      ],
      "capital": "Apia",
      "altSpellings": [
        "WS",
        "Independent State of Samoa",
        "Malo Saʻoloto Tutoʻatasi o Sāmoa"
      ],
      "region": "Polynesia",
      "continent": "Oceania",
      "population": 194899,
      "latlng": [
        -13.58333333,
        -172.33333333
      ],
      "demonym": "Samoan",
      "area": 2842,
      "gini": 38.7,
      "timezones": [
        "UTC+13:00"
      ],
      "nativeName": "Samoa",
      "numericCode": "882",
      "currencies": [
        {
          "code": "WST",
          "name": "Samoan tālā",
          "symbol": "T"
        }
      ],
      "languages": [
        {
          "iso639_1": "sm",
          "iso639_2": "smo",
          "name": "Samoan",
          "nativeName": "gagana fa'a Samoa"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Samoa",
        "pt": "Samoa",
        "nl": "Samoa",
        "hr": "Samoa",
        "fa": "ساموآ",
        "de": "Samoa",
        "es": "Samoa",
        "fr": "Samoa",
        "ja": "サモア",
        "it": "Samoa",
        "hu": "Szamoa"
      },
      "flags": [
        "https://restcountries.com/data/wsm.svg",
        "https://restcountries.com/data/png/wsm.png"
      ],
      "cioc": "SAM",
      "independent": true
    },
    {
      "name": "San Marino",
      "topLevelDomain": [
        ".sm"
      ],
      "alpha2Code": "SM",
      "alpha3Code": "SMR",
      "callingCodes": [
        "378"
      ],
      "capital": "City of San Marino",
      "altSpellings": [
        "SM",
        "Republic of San Marino",
        "Repubblica di San Marino"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 33005,
      "latlng": [
        43.76666666,
        12.41666666
      ],
      "demonym": "Sammarinese",
      "area": 61,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "ITA"
      ],
      "nativeName": "San Marino",
      "numericCode": "674",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "it",
          "iso639_2": "ita",
          "name": "Italian",
          "nativeName": "Italiano"
        }
      ],
      "translations": {
        "br": "San Marino",
        "pt": "São Marinho",
        "nl": "San Marino",
        "hr": "San Marino",
        "fa": "سان مارینو",
        "de": "San Marino",
        "es": "San Marino",
        "fr": "Saint-Marin",
        "ja": "サンマリノ",
        "it": "San Marino",
        "hu": "San Marino"
      },
      "flags": [
        "https://restcountries.com/data/smr.svg",
        "https://restcountries.com/data/png/smr.png"
      ],
      "cioc": "SMR",
      "independent": true
    },
    {
      "name": "Sao Tome and Principe",
      "topLevelDomain": [
        ".st"
      ],
      "alpha2Code": "ST",
      "alpha3Code": "STP",
      "callingCodes": [
        "239"
      ],
      "capital": "São Tomé",
      "altSpellings": [
        "ST",
        "Democratic Republic of São Tomé and Príncipe",
        "República Democrática de São Tomé e Príncipe"
      ],
      "region": "Middle Africa",
      "continent": "Africa",
      "population": 187356,
      "latlng": [
        1,
        7
      ],
      "demonym": "Sao Tomean",
      "area": 964,
      "gini": 56.3,
      "timezones": [
        "UTC"
      ],
      "nativeName": "São Tomé e Príncipe",
      "numericCode": "678",
      "currencies": [
        {
          "code": "STD",
          "name": "São Tomé and Príncipe dobra",
          "symbol": "Db"
        }
      ],
      "languages": [
        {
          "iso639_1": "pt",
          "iso639_2": "por",
          "name": "Portuguese",
          "nativeName": "Português"
        }
      ],
      "translations": {
        "br": "São Tomé e Príncipe",
        "pt": "São Tomé e Príncipe",
        "nl": "Sao Tomé en Principe",
        "hr": "Sveti Toma i Princip",
        "fa": "کواترو دو فرویرو",
        "de": "São Tomé und Príncipe",
        "es": "Santo Tomé y Príncipe",
        "fr": "Sao Tomé-et-Principe",
        "ja": "サントメ・プリンシペ",
        "it": "São Tomé e Príncipe",
        "hu": "São Tomé és Príncipe"
      },
      "flags": [
        "https://restcountries.com/data/stp.svg",
        "https://restcountries.com/data/png/stp.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "STP",
      "independent": true
    },
    {
      "name": "Saudi Arabia",
      "topLevelDomain": [
        ".sa"
      ],
      "alpha2Code": "SA",
      "alpha3Code": "SAU",
      "callingCodes": [
        "966"
      ],
      "capital": "Riyadh",
      "altSpellings": [
        "SA",
        "Kingdom of Saudi Arabia",
        "Al-Mamlakah al-‘Arabiyyah as-Su‘ūdiyyah"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 32248200,
      "latlng": [
        25,
        45
      ],
      "demonym": "Saudi Arabian",
      "area": 2149690,
      "gini": 45.9,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "IRQ",
        "JOR",
        "KWT",
        "OMN",
        "QAT",
        "ARE",
        "YEM"
      ],
      "nativeName": "العربية السعودية",
      "numericCode": "682",
      "currencies": [
        {
          "code": "SAR",
          "name": "Saudi riyal",
          "symbol": "ر.س"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Arábia Saudita",
        "pt": "Arábia Saudita",
        "nl": "Saoedi-Arabië",
        "hr": "Saudijska Arabija",
        "fa": "عربستان سعودی",
        "de": "Saudi-Arabien",
        "es": "Arabia Saudí",
        "fr": "Arabie Saoudite",
        "ja": "サウジアラビア",
        "it": "Arabia Saudita",
        "hu": "Szaúd-Arábia"
      },
      "flags": [
        "https://restcountries.com/data/sau.svg",
        "https://restcountries.com/data/png/sau.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "KSA",
      "independent": true
    },
    {
      "name": "Senegal",
      "topLevelDomain": [
        ".sn"
      ],
      "alpha2Code": "SN",
      "alpha3Code": "SEN",
      "callingCodes": [
        "221"
      ],
      "capital": "Dakar",
      "altSpellings": [
        "SN",
        "Republic of Senegal",
        "République du Sénégal"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 14799859,
      "latlng": [
        14,
        -14
      ],
      "demonym": "Senegalese",
      "area": 196722,
      "gini": 40.3,
      "timezones": [
        "UTC"
      ],
      "borders": [
        "GMB",
        "GIN",
        "GNB",
        "MLI",
        "MRT"
      ],
      "nativeName": "Sénégal",
      "numericCode": "686",
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Senegal",
        "pt": "Senegal",
        "nl": "Senegal",
        "hr": "Senegal",
        "fa": "سنگال",
        "de": "Senegal",
        "es": "Senegal",
        "fr": "Sénégal",
        "ja": "セネガル",
        "it": "Senegal",
        "hu": "Szenegál"
      },
      "flags": [
        "https://restcountries.com/data/sen.svg",
        "https://restcountries.com/data/png/sen.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "SEN",
      "independent": true
    },
    {
      "name": "Serbia",
      "topLevelDomain": [
        ".rs"
      ],
      "alpha2Code": "RS",
      "alpha3Code": "SRB",
      "callingCodes": [
        "381"
      ],
      "capital": "Belgrade",
      "altSpellings": [
        "RS",
        "Srbija",
        "Republic of Serbia",
        "Република Србија",
        "Republika Srbija"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 7076372,
      "latlng": [
        44,
        21
      ],
      "demonym": "Serbian",
      "area": 88361,
      "gini": 36.2,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "BIH",
        "BGR",
        "HRV",
        "HUN",
        "KOS",
        "MKD",
        "MNE",
        "ROU"
      ],
      "nativeName": "Србија",
      "numericCode": "688",
      "currencies": [
        {
          "code": "RSD",
          "name": "Serbian dinar",
          "symbol": "дин."
        }
      ],
      "languages": [
        {
          "iso639_1": "sr",
          "iso639_2": "srp",
          "name": "Serbian",
          "nativeName": "српски језик"
        }
      ],
      "translations": {
        "br": "Sérvia",
        "pt": "Sérvia",
        "nl": "Servië",
        "hr": "Srbija",
        "fa": "صربستان",
        "de": "Serbien",
        "es": "Serbia",
        "fr": "Serbie",
        "ja": "セルビア",
        "it": "Serbia",
        "hu": "Szerbia"
      },
      "flags": [
        "https://restcountries.com/data/srb.svg",
        "https://restcountries.com/data/png/srb.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CEFTA",
          "name": "Central European Free Trade Agreement"
        }
      ],
      "cioc": "SRB",
      "independent": true
    },
    {
      "name": "Seychelles",
      "topLevelDomain": [
        ".sc"
      ],
      "alpha2Code": "SC",
      "alpha3Code": "SYC",
      "callingCodes": [
        "248"
      ],
      "capital": "Victoria",
      "altSpellings": [
        "SC",
        "Republic of Seychelles",
        "Repiblik Sesel",
        "République des Seychelles"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 91400,
      "latlng": [
        -4.58333333,
        55.66666666
      ],
      "demonym": "Seychellois",
      "area": 452,
      "gini": 32.1,
      "timezones": [
        "UTC+04:00"
      ],
      "nativeName": "Seychelles",
      "numericCode": "690",
      "currencies": [
        {
          "code": "SCR",
          "name": "Seychellois rupee",
          "symbol": "₨"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Seicheles",
        "pt": "Seicheles",
        "nl": "Seychellen",
        "hr": "Sejšeli",
        "fa": "سیشل",
        "de": "Seychellen",
        "es": "Seychelles",
        "fr": "Seychelles",
        "ja": "セーシェル",
        "it": "Seychelles",
        "hu": "Seychelle-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/syc.svg",
        "https://restcountries.com/data/png/syc.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "SEY",
      "independent": true
    },
    {
      "name": "Sierra Leone",
      "topLevelDomain": [
        ".sl"
      ],
      "alpha2Code": "SL",
      "alpha3Code": "SLE",
      "callingCodes": [
        "232"
      ],
      "capital": "Freetown",
      "altSpellings": [
        "SL",
        "Republic of Sierra Leone"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 7075641,
      "latlng": [
        8.5,
        -11.5
      ],
      "demonym": "Sierra Leonean",
      "area": 71740,
      "gini": 35.7,
      "timezones": [
        "UTC"
      ],
      "borders": [
        "GIN",
        "LBR"
      ],
      "nativeName": "Sierra Leone",
      "numericCode": "694",
      "currencies": [
        {
          "code": "SLL",
          "name": "Sierra Leonean leone",
          "symbol": "Le"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Serra Leoa",
        "pt": "Serra Leoa",
        "nl": "Sierra Leone",
        "hr": "Sijera Leone",
        "fa": "سیرالئون",
        "de": "Sierra Leone",
        "es": "Sierra Leone",
        "fr": "Sierra Leone",
        "ja": "シエラレオネ",
        "it": "Sierra Leone",
        "hu": "Sierra Leone"
      },
      "flags": [
        "https://restcountries.com/data/sle.svg",
        "https://restcountries.com/data/png/sle.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "SLE",
      "independent": true
    },
    {
      "name": "Singapore",
      "topLevelDomain": [
        ".sg"
      ],
      "alpha2Code": "SG",
      "alpha3Code": "SGP",
      "callingCodes": [
        "65"
      ],
      "capital": "Singapore",
      "altSpellings": [
        "SG",
        "Singapura",
        "Republik Singapura",
        "新加坡共和国"
      ],
      "region": "South-Eastern Asia",
      "continent": "Asia",
      "population": 5535000,
      "latlng": [
        1.36666666,
        103.8
      ],
      "demonym": "Singaporean",
      "area": 710,
      "gini": 45.9,
      "timezones": [
        "UTC+08:00"
      ],
      "nativeName": "Singapore",
      "numericCode": "702",
      "currencies": [
        {
          "code": "BND",
          "name": "Brunei dollar",
          "symbol": "$"
        },
        {
          "code": "SGD",
          "name": "Singapore dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "ms",
          "iso639_2": "msa",
          "name": "Malay",
          "nativeName": "bahasa Melayu"
        },
        {
          "iso639_1": "ta",
          "iso639_2": "tam",
          "name": "Tamil",
          "nativeName": "தமிழ்"
        },
        {
          "iso639_1": "zh",
          "iso639_2": "zho",
          "name": "Chinese",
          "nativeName": "中文 (Zhōngwén)"
        }
      ],
      "translations": {
        "br": "Singapura",
        "pt": "Singapura",
        "nl": "Singapore",
        "hr": "Singapur",
        "fa": "سنگاپور",
        "de": "Singapur",
        "es": "Singapur",
        "fr": "Singapour",
        "ja": "シンガポール",
        "it": "Singapore",
        "hu": "Szingapúr"
      },
      "flags": [
        "https://restcountries.com/data/sgp.svg",
        "https://restcountries.com/data/png/sgp.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "ASEAN",
          "name": "Association of Southeast Asian Nations"
        }
      ],
      "cioc": "SIN",
      "independent": true
    },
    {
      "name": "Sint Maarten (Dutch part)",
      "topLevelDomain": [
        ".sx"
      ],
      "alpha2Code": "SX",
      "alpha3Code": "SXM",
      "callingCodes": [
        "1"
      ],
      "capital": "Philipsburg",
      "altSpellings": [
        "SX"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 38247,
      "latlng": [
        18.033333,
        -63.05
      ],
      "demonym": "Dutch",
      "area": 34,
      "timezones": [
        "UTC-04:00"
      ],
      "borders": [
        "MAF"
      ],
      "nativeName": "Sint Maarten",
      "numericCode": "534",
      "currencies": [
        {
          "code": "ANG",
          "name": "Netherlands Antillean guilder",
          "symbol": "ƒ"
        }
      ],
      "languages": [
        {
          "iso639_1": "nl",
          "iso639_2": "nld",
          "name": "Dutch",
          "nativeName": "Nederlands"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Sint Maarten",
        "pt": "São Martinho",
        "nl": "Sint Maarten",
        "fa": "سینت مارتن",
        "de": "Sint Maarten (niederl. Teil)",
        "fr": "Saint Martin (partie néerlandaise)",
        "it": "Saint Martin (parte olandese)",
        "hu": "Sint Maarten"
      },
      "flags": [
        "https://restcountries.com/data/sxm.svg",
        "https://restcountries.com/data/png/sxm.png"
      ],
      "independent": false
    },
    {
      "name": "Slovakia",
      "topLevelDomain": [
        ".sk"
      ],
      "alpha2Code": "SK",
      "alpha3Code": "SVK",
      "callingCodes": [
        "421"
      ],
      "capital": "Bratislava",
      "altSpellings": [
        "SK",
        "Slovak Republic",
        "Slovenská republika"
      ],
      "region": "Central Europe",
      "continent": "Europe",
      "population": 5426252,
      "latlng": [
        48.66666666,
        19.5
      ],
      "demonym": "Slovak",
      "area": 49037,
      "gini": 25,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "AUT",
        "CZE",
        "HUN",
        "POL",
        "UKR"
      ],
      "nativeName": "Slovensko",
      "numericCode": "703",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "sk",
          "iso639_2": "slk",
          "name": "Slovak",
          "nativeName": "slovenčina"
        }
      ],
      "translations": {
        "br": "Eslováquia",
        "pt": "Eslováquia",
        "nl": "Slowakije",
        "hr": "Slovačka",
        "fa": "اسلواکی",
        "de": "Slowakei",
        "es": "República Eslovaca",
        "fr": "Slovaquie",
        "ja": "スロバキア",
        "it": "Slovacchia",
        "hu": "Szlovákia"
      },
      "flags": [
        "https://restcountries.com/data/svk.svg",
        "https://restcountries.com/data/png/svk.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "SVK",
      "independent": true
    },
    {
      "name": "Slovenia",
      "topLevelDomain": [
        ".si"
      ],
      "alpha2Code": "SI",
      "alpha3Code": "SVN",
      "callingCodes": [
        "386"
      ],
      "capital": "Ljubljana",
      "altSpellings": [
        "SI",
        "Republic of Slovenia",
        "Republika Slovenija"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 2064188,
      "latlng": [
        46.11666666,
        14.81666666
      ],
      "demonym": "Slovene",
      "area": 20273,
      "gini": 24.6,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "AUT",
        "HRV",
        "ITA",
        "HUN"
      ],
      "nativeName": "Slovenija",
      "numericCode": "705",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "sl",
          "iso639_2": "slv",
          "name": "Slovene",
          "nativeName": "slovenski jezik"
        }
      ],
      "translations": {
        "br": "Eslovênia",
        "pt": "Eslovénia",
        "nl": "Slovenië",
        "hr": "Slovenija",
        "fa": "اسلوونی",
        "de": "Slowenien",
        "es": "Eslovenia",
        "fr": "Slovénie",
        "ja": "スロベニア",
        "it": "Slovenia",
        "hu": "Szlovénia"
      },
      "flags": [
        "https://restcountries.com/data/svn.svg",
        "https://restcountries.com/data/png/svn.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "SLO",
      "independent": true
    },
    {
      "name": "Solomon Islands",
      "topLevelDomain": [
        ".sb"
      ],
      "alpha2Code": "SB",
      "alpha3Code": "SLB",
      "callingCodes": [
        "677"
      ],
      "capital": "Honiara",
      "altSpellings": [
        "SB"
      ],
      "region": "Melanesia",
      "continent": "Oceania",
      "population": 642000,
      "latlng": [
        -8,
        159
      ],
      "demonym": "Solomon Islander",
      "area": 28896,
      "gini": 37.1,
      "timezones": [
        "UTC+11:00"
      ],
      "nativeName": "Solomon Islands",
      "numericCode": "090",
      "currencies": [
        {
          "code": "SBD",
          "name": "Solomon Islands dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Ilhas Salomão",
        "pt": "Ilhas Salomão",
        "nl": "Salomonseilanden",
        "hr": "Solomonski Otoci",
        "fa": "جزایر سلیمان",
        "de": "Salomonen",
        "es": "Islas Salomón",
        "fr": "Îles Salomon",
        "ja": "ソロモン諸島",
        "it": "Isole Salomone",
        "hu": "Salamon-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/slb.svg",
        "https://restcountries.com/data/png/slb.png"
      ],
      "cioc": "SOL",
      "independent": true
    },
    {
      "name": "Somalia",
      "topLevelDomain": [
        ".so"
      ],
      "alpha2Code": "SO",
      "alpha3Code": "SOM",
      "callingCodes": [
        "252"
      ],
      "capital": "Mogadishu",
      "altSpellings": [
        "SO",
        "aṣ-Ṣūmāl",
        "Federal Republic of Somalia",
        "Jamhuuriyadda Federaalka Soomaaliya",
        "Jumhūriyyat aṣ-Ṣūmāl al-Fiderāliyya"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 11079000,
      "latlng": [
        10,
        49
      ],
      "demonym": "Somali",
      "area": 637657,
      "gini": 36.8,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "DJI",
        "ETH",
        "KEN"
      ],
      "nativeName": "Soomaaliya",
      "numericCode": "706",
      "currencies": [
        {
          "code": "SOS",
          "name": "Somali shilling",
          "symbol": "Sh"
        }
      ],
      "languages": [
        {
          "iso639_1": "so",
          "iso639_2": "som",
          "name": "Somali",
          "nativeName": "Soomaaliga"
        },
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Somália",
        "pt": "Somália",
        "nl": "Somalië",
        "hr": "Somalija",
        "fa": "سومالی",
        "de": "Somalia",
        "es": "Somalia",
        "fr": "Somalie",
        "ja": "ソマリア",
        "it": "Somalia",
        "hu": "Szomália"
      },
      "flags": [
        "https://restcountries.com/data/som.svg",
        "https://restcountries.com/data/png/som.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        },
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "SOM",
      "independent": true
    },
    {
      "name": "South Africa",
      "topLevelDomain": [
        ".za"
      ],
      "alpha2Code": "ZA",
      "alpha3Code": "ZAF",
      "callingCodes": [
        "27"
      ],
      "capital": "Pretoria",
      "altSpellings": [
        "ZA",
        "RSA",
        "Suid-Afrika",
        "Republic of South Africa"
      ],
      "region": "Southern Africa",
      "continent": "Africa",
      "population": 55653654,
      "latlng": [
        -29,
        24
      ],
      "demonym": "South African",
      "area": 1221037,
      "gini": 63.1,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "BWA",
        "LSO",
        "MOZ",
        "NAM",
        "SWZ",
        "ZWE"
      ],
      "nativeName": "South Africa",
      "numericCode": "710",
      "currencies": [
        {
          "code": "ZAR",
          "name": "South African rand",
          "symbol": "R"
        }
      ],
      "languages": [
        {
          "iso639_1": "af",
          "iso639_2": "afr",
          "name": "Afrikaans",
          "nativeName": "Afrikaans"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "nr",
          "iso639_2": "nbl",
          "name": "Southern Ndebele",
          "nativeName": "isiNdebele"
        },
        {
          "iso639_1": "st",
          "iso639_2": "sot",
          "name": "Southern Sotho",
          "nativeName": "Sesotho"
        },
        {
          "iso639_1": "ss",
          "iso639_2": "ssw",
          "name": "Swati",
          "nativeName": "SiSwati"
        },
        {
          "iso639_1": "tn",
          "iso639_2": "tsn",
          "name": "Tswana",
          "nativeName": "Setswana"
        },
        {
          "iso639_1": "ts",
          "iso639_2": "tso",
          "name": "Tsonga",
          "nativeName": "Xitsonga"
        },
        {
          "iso639_1": "ve",
          "iso639_2": "ven",
          "name": "Venda",
          "nativeName": "Tshivenḓa"
        },
        {
          "iso639_1": "xh",
          "iso639_2": "xho",
          "name": "Xhosa",
          "nativeName": "isiXhosa"
        },
        {
          "iso639_1": "zu",
          "iso639_2": "zul",
          "name": "Zulu",
          "nativeName": "isiZulu"
        }
      ],
      "translations": {
        "br": "República Sul-Africana",
        "pt": "República Sul-Africana",
        "nl": "Zuid-Afrika",
        "hr": "Južnoafrička Republika",
        "fa": "آفریقای جنوبی",
        "de": "Republik Südafrika",
        "es": "República de Sudáfrica",
        "fr": "Afrique du Sud",
        "ja": "南アフリカ",
        "it": "Sud Africa",
        "hu": "Dél-afrikai Köztársaság"
      },
      "flags": [
        "https://restcountries.com/data/zaf.svg",
        "https://restcountries.com/data/png/zaf.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "RSA",
      "independent": true
    },
    {
      "name": "South Georgia and the South Sandwich Islands",
      "topLevelDomain": [
        ".gs"
      ],
      "alpha2Code": "GS",
      "alpha3Code": "SGS",
      "callingCodes": [
        "500"
      ],
      "capital": "King Edward Point",
      "altSpellings": [
        "GS",
        "South Georgia and the South Sandwich Islands"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 30,
      "latlng": [
        -54.5,
        -37
      ],
      "demonym": "South Georgia and the South Sandwich Islander",
      "timezones": [
        "UTC-02:00"
      ],
      "nativeName": "South Georgia",
      "numericCode": "239",
      "currencies": [
        {
          "code": "FKP",
          "name": "Falkland Islands Pound",
          "symbol": "£"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Ilhas Geórgias do Sul e Sandwich do Sul",
        "pt": "Ilhas Geórgia do Sul e Sanduíche do Sul",
        "nl": "Zuid-Georgia en Zuidelijke Sandwicheilanden",
        "hr": "Južna Georgija i otočje Južni Sandwich",
        "fa": "جزایر جورجیای جنوبی و ساندویچ جنوبی",
        "de": "Südgeorgien und die Südlichen Sandwichinseln",
        "es": "Islas Georgias del Sur y Sandwich del Sur",
        "fr": "Géorgie du Sud-et-les Îles Sandwich du Sud",
        "ja": "サウスジョージア・サウスサンドウィッチ諸島",
        "it": "Georgia del Sud e Isole Sandwich Meridionali",
        "hu": "Díli-Georgia ís Díli-Sandwich-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/sgs.svg",
        "https://restcountries.com/data/png/sgs.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "independent": false
    },
    {
      "name": "Korea (Republic of)",
      "topLevelDomain": [
        ".kr"
      ],
      "alpha2Code": "KR",
      "alpha3Code": "KOR",
      "callingCodes": [
        "82"
      ],
      "capital": "Seoul",
      "altSpellings": [
        "KR",
        "Republic of Korea"
      ],
      "region": "Eastern Asia",
      "continent": "Asia",
      "population": 50801405,
      "latlng": [
        37,
        127.5
      ],
      "demonym": "South Korean",
      "area": 100210,
      "gini": 31.3,
      "timezones": [
        "UTC+09:00"
      ],
      "borders": [
        "PRK"
      ],
      "nativeName": "대한민국",
      "numericCode": "410",
      "currencies": [
        {
          "code": "KRW",
          "name": "South Korean won",
          "symbol": "₩"
        }
      ],
      "languages": [
        {
          "iso639_1": "ko",
          "iso639_2": "kor",
          "name": "Korean",
          "nativeName": "한국어"
        }
      ],
      "translations": {
        "br": "Coreia do Sul",
        "pt": "Coreia do Sul",
        "nl": "Zuid-Korea",
        "hr": "Južna Koreja",
        "fa": "کره شمالی",
        "de": "Südkorea",
        "es": "Corea del Sur",
        "fr": "Corée du Sud",
        "ja": "大韓民国",
        "it": "Corea del Sud",
        "hu": "Díl-Korea"
      },
      "flags": [
        "https://restcountries.com/data/kor.svg",
        "https://restcountries.com/data/png/kor.png"
      ],
      "cioc": "KOR",
      "independent": true
    },
    {
      "name": "South Sudan",
      "topLevelDomain": [
        ".ss"
      ],
      "alpha2Code": "SS",
      "alpha3Code": "SSD",
      "callingCodes": [
        "211"
      ],
      "capital": "Juba",
      "altSpellings": [
        "SS"
      ],
      "region": "Middle Africa",
      "continent": "Africa",
      "population": 12131000,
      "latlng": [
        7,
        30
      ],
      "demonym": "South Sudanese",
      "area": 619745,
      "gini": 44.1,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "CAF",
        "COD",
        "ETH",
        "KEN",
        "SDN",
        "UGA"
      ],
      "nativeName": "South Sudan",
      "numericCode": "728",
      "currencies": [
        {
          "code": "SSP",
          "name": "South Sudanese pound",
          "symbol": "£"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Sudão do Sul",
        "pt": "Sudão do Sul",
        "nl": "Zuid-Soedan",
        "hr": "Južni Sudan",
        "fa": "سودان جنوبی",
        "de": "Südsudan",
        "es": "Sudán del Sur",
        "fr": "Soudan du Sud",
        "ja": "南スーダン",
        "it": "Sudan del sud",
        "hu": "Díl-Szudán"
      },
      "flags": [
        "https://restcountries.com/data/ssd.svg",
        "https://restcountries.com/data/png/ssd.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "independent": true
    },
    {
      "name": "Spain",
      "topLevelDomain": [
        ".es"
      ],
      "alpha2Code": "ES",
      "alpha3Code": "ESP",
      "callingCodes": [
        "34"
      ],
      "capital": "Madrid",
      "altSpellings": [
        "ES",
        "Kingdom of Spain",
        "Reino de España"
      ],
      "region": "Southern Europe",
      "continent": "Europe",
      "population": 46438422,
      "latlng": [
        40,
        -4
      ],
      "demonym": "Spanish",
      "area": 505992,
      "gini": 34.7,
      "timezones": [
        "UTC",
        "UTC+01:00"
      ],
      "borders": [
        "AND",
        "FRA",
        "GIB",
        "PRT",
        "MAR"
      ],
      "nativeName": "España",
      "numericCode": "724",
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Espanha",
        "pt": "Espanha",
        "nl": "Spanje",
        "hr": "Španjolska",
        "fa": "اسپانیا",
        "de": "Spanien",
        "es": "España",
        "fr": "Espagne",
        "ja": "スペイン",
        "it": "Spagna",
        "hu": "Spanyolország"
      },
      "flags": [
        "https://restcountries.com/data/esp.svg",
        "https://restcountries.com/data/png/esp.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "ESP",
      "independent": true
    },
    {
      "name": "Sri Lanka",
      "topLevelDomain": [
        ".lk"
      ],
      "alpha2Code": "LK",
      "alpha3Code": "LKA",
      "callingCodes": [
        "94"
      ],
      "capital": "Sri Jayawardenepura Kotte",
      "altSpellings": [
        "LK",
        "ilaṅkai",
        "Democratic Socialist Republic of Sri Lanka"
      ],
      "region": "Southern Asia",
      "continent": "Asia",
      "population": 20966000,
      "latlng": [
        7,
        81
      ],
      "demonym": "Sri Lankan",
      "area": 65610,
      "gini": 39.3,
      "timezones": [
        "UTC+05:30"
      ],
      "borders": [
        "IND"
      ],
      "nativeName": "śrī laṃkāva",
      "numericCode": "144",
      "currencies": [
        {
          "code": "LKR",
          "name": "Sri Lankan rupee",
          "symbol": "Rs"
        }
      ],
      "languages": [
        {
          "iso639_1": "si",
          "iso639_2": "sin",
          "name": "Sinhalese",
          "nativeName": "සිංහල"
        },
        {
          "iso639_1": "ta",
          "iso639_2": "tam",
          "name": "Tamil",
          "nativeName": "தமிழ்"
        }
      ],
      "translations": {
        "br": "Sri Lanka",
        "pt": "Sri Lanka",
        "nl": "Sri Lanka",
        "hr": "Šri Lanka",
        "fa": "سری‌لانکا",
        "de": "Sri Lanka",
        "es": "Sri Lanka",
        "fr": "Sri Lanka",
        "ja": "スリランカ",
        "it": "Sri Lanka",
        "hu": "Srí Lanka"
      },
      "flags": [
        "https://restcountries.com/data/lka.svg",
        "https://restcountries.com/data/png/lka.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "SRI",
      "independent": true
    },
    {
      "name": "Sudan",
      "topLevelDomain": [
        ".sd"
      ],
      "alpha2Code": "SD",
      "alpha3Code": "SDN",
      "callingCodes": [
        "249"
      ],
      "capital": "Khartoum",
      "altSpellings": [
        "SD",
        "Republic of the Sudan",
        "Jumhūrīyat as-Sūdān"
      ],
      "region": "Northern Africa",
      "continent": "Africa",
      "population": 39598700,
      "latlng": [
        15,
        30
      ],
      "demonym": "Sudanese",
      "area": 1886068,
      "gini": 34.2,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "CAF",
        "TCD",
        "EGY",
        "ERI",
        "ETH",
        "LBY",
        "SSD"
      ],
      "nativeName": "السودان",
      "numericCode": "729",
      "currencies": [
        {
          "code": "SDG",
          "name": "Sudanese pound",
          "symbol": "ج.س."
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Sudão",
        "pt": "Sudão",
        "nl": "Soedan",
        "hr": "Sudan",
        "fa": "سودان",
        "de": "Sudan",
        "es": "Sudán",
        "fr": "Soudan",
        "ja": "スーダン",
        "it": "Sudan",
        "hu": "Szudán"
      },
      "flags": [
        "https://restcountries.com/data/sdn.svg",
        "https://restcountries.com/data/png/sdn.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        },
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "SUD",
      "independent": true
    },
    {
      "name": "Suriname",
      "topLevelDomain": [
        ".sr"
      ],
      "alpha2Code": "SR",
      "alpha3Code": "SUR",
      "callingCodes": [
        "597"
      ],
      "capital": "Paramaribo",
      "altSpellings": [
        "SR",
        "Sarnam",
        "Sranangron",
        "Republic of Suriname",
        "Republiek Suriname"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 541638,
      "latlng": [
        4,
        -56
      ],
      "demonym": "Surinamer",
      "area": 163820,
      "gini": 57.9,
      "timezones": [
        "UTC-03:00"
      ],
      "borders": [
        "BRA",
        "FRA",
        "GUF",
        "GUY"
      ],
      "nativeName": "Suriname",
      "numericCode": "740",
      "currencies": [
        {
          "code": "SRD",
          "name": "Surinamese dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "nl",
          "iso639_2": "nld",
          "name": "Dutch",
          "nativeName": "Nederlands"
        }
      ],
      "translations": {
        "br": "Suriname",
        "pt": "Suriname",
        "nl": "Suriname",
        "hr": "Surinam",
        "fa": "سورینام",
        "de": "Suriname",
        "es": "Surinam",
        "fr": "Surinam",
        "ja": "スリナム",
        "it": "Suriname",
        "hu": "Suriname"
      },
      "flags": [
        "https://restcountries.com/data/sur.svg",
        "https://restcountries.com/data/png/sur.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        },
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "cioc": "SUR",
      "independent": true
    },
    {
      "name": "Svalbard and Jan Mayen",
      "topLevelDomain": [
        ".sj"
      ],
      "alpha2Code": "SJ",
      "alpha3Code": "SJM",
      "callingCodes": [
        "47"
      ],
      "capital": "Longyearbyen",
      "altSpellings": [
        "SJ",
        "Svalbard and Jan Mayen Islands"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 2562,
      "latlng": [
        78,
        20
      ],
      "demonym": "Norwegian",
      "timezones": [
        "UTC+01:00"
      ],
      "nativeName": "Svalbard og Jan Mayen",
      "numericCode": "744",
      "currencies": [
        {
          "code": "NOK",
          "name": "Norwegian krone",
          "symbol": "kr"
        }
      ],
      "languages": [
        {
          "iso639_1": "no",
          "iso639_2": "nor",
          "name": "Norwegian",
          "nativeName": "Norsk"
        }
      ],
      "translations": {
        "br": "Svalbard",
        "pt": "Svalbard",
        "nl": "Svalbard en Jan Mayen",
        "hr": "Svalbard i Jan Mayen",
        "fa": "سوالبارد و یان ماین",
        "de": "Svalbard und Jan Mayen",
        "es": "Islas Svalbard y Jan Mayen",
        "fr": "Svalbard et Jan Mayen",
        "ja": "スヴァールバル諸島およびヤンマイエン島",
        "it": "Svalbard e Jan Mayen",
        "hu": "Spitzbergák ís Jan Mayen-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/sjm.svg",
        "https://restcountries.com/data/png/sjm.png"
      ],
      "independent": false
    },
    {
      "name": "Swaziland",
      "topLevelDomain": [
        ".sz"
      ],
      "alpha2Code": "SZ",
      "alpha3Code": "SWZ",
      "callingCodes": [
        "268"
      ],
      "capital": "Lobamba",
      "altSpellings": [
        "SZ",
        "weSwatini",
        "Swatini",
        "Ngwane",
        "Kingdom of Swaziland",
        "Umbuso waseSwatini"
      ],
      "region": "Southern Africa",
      "continent": "Africa",
      "population": 1132657,
      "latlng": [
        -26.5,
        31.5
      ],
      "demonym": "Swazi",
      "area": 17364,
      "gini": 51.5,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "MOZ",
        "ZAF"
      ],
      "nativeName": "Swaziland",
      "numericCode": "748",
      "currencies": [
        {
          "code": "SZL",
          "name": "Swazi lilangeni",
          "symbol": "L"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "ss",
          "iso639_2": "ssw",
          "name": "Swati",
          "nativeName": "SiSwati"
        }
      ],
      "translations": {
        "br": "Suazilândia",
        "pt": "Suazilândia",
        "nl": "Swaziland",
        "hr": "Svazi",
        "fa": "سوازیلند",
        "de": "Swasiland",
        "es": "Suazilandia",
        "fr": "Swaziland",
        "ja": "スワジランド",
        "it": "Swaziland",
        "hu": "Szváziföld"
      },
      "flags": [
        "https://restcountries.com/data/swz.svg",
        "https://restcountries.com/data/png/swz.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "SWZ",
      "independent": true
    },
    {
      "name": "Sweden",
      "topLevelDomain": [
        ".se"
      ],
      "alpha2Code": "SE",
      "alpha3Code": "SWE",
      "callingCodes": [
        "46"
      ],
      "capital": "Stockholm",
      "altSpellings": [
        "SE",
        "Kingdom of Sweden",
        "Konungariket Sverige"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 9894888,
      "latlng": [
        62,
        15
      ],
      "demonym": "Swedish",
      "area": 450295,
      "gini": 30,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "FIN",
        "NOR"
      ],
      "nativeName": "Sverige",
      "numericCode": "752",
      "currencies": [
        {
          "code": "SEK",
          "name": "Swedish krona",
          "symbol": "kr"
        }
      ],
      "languages": [
        {
          "iso639_1": "sv",
          "iso639_2": "swe",
          "name": "Swedish",
          "nativeName": "svenska"
        }
      ],
      "translations": {
        "br": "Suécia",
        "pt": "Suécia",
        "nl": "Zweden",
        "hr": "Švedska",
        "fa": "سوئد",
        "de": "Schweden",
        "es": "Suecia",
        "fr": "Suède",
        "ja": "スウェーデン",
        "it": "Svezia",
        "hu": "Svídország"
      },
      "flags": [
        "https://restcountries.com/data/swe.svg",
        "https://restcountries.com/data/png/swe.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "SWE",
      "independent": true
    },
    {
      "name": "Switzerland",
      "topLevelDomain": [
        ".ch"
      ],
      "alpha2Code": "CH",
      "alpha3Code": "CHE",
      "callingCodes": [
        "41"
      ],
      "capital": "Bern",
      "altSpellings": [
        "CH",
        "Swiss Confederation",
        "Schweiz",
        "Suisse",
        "Svizzera",
        "Svizra"
      ],
      "region": "Central Europe",
      "continent": "Europe",
      "population": 8341600,
      "latlng": [
        47,
        8
      ],
      "demonym": "Swiss",
      "area": 41284,
      "gini": 33.1,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "AUT",
        "FRA",
        "ITA",
        "LIE",
        "DEU"
      ],
      "nativeName": "Schweiz",
      "numericCode": "756",
      "currencies": [
        {
          "code": "CHF",
          "name": "Swiss franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "de",
          "iso639_2": "deu",
          "name": "German",
          "nativeName": "Deutsch"
        },
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "it",
          "iso639_2": "ita",
          "name": "Italian",
          "nativeName": "Italiano"
        },
        {
          "iso639_2": "roh",
          "name": "Romansh"
        }
      ],
      "translations": {
        "br": "Suíça",
        "pt": "Suíça",
        "nl": "Zwitserland",
        "hr": "Švicarska",
        "fa": "سوئیس",
        "de": "Schweiz",
        "es": "Suiza",
        "fr": "Suisse",
        "ja": "スイス",
        "it": "Svizzera",
        "hu": "Svájc"
      },
      "flags": [
        "https://restcountries.com/data/che.svg",
        "https://restcountries.com/data/png/che.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "EFTA",
          "name": "European Free Trade Association"
        }
      ],
      "cioc": "SUI",
      "independent": true
    },
    {
      "name": "Syrian Arab Republic",
      "topLevelDomain": [
        ".sy"
      ],
      "alpha2Code": "SY",
      "alpha3Code": "SYR",
      "callingCodes": [
        "963"
      ],
      "capital": "Damascus",
      "altSpellings": [
        "SY",
        "Syrian Arab Republic",
        "Al-Jumhūrīyah Al-ʻArabīyah As-Sūrīyah"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 18564000,
      "latlng": [
        35,
        38
      ],
      "demonym": "Syrian",
      "area": 185180,
      "gini": 37.5,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "IRQ",
        "ISR",
        "JOR",
        "LBN",
        "TUR"
      ],
      "nativeName": "سوريا",
      "numericCode": "760",
      "currencies": [
        {
          "code": "SYP",
          "name": "Syrian pound",
          "symbol": "£"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Síria",
        "pt": "Síria",
        "nl": "Syrië",
        "hr": "Sirija",
        "fa": "سوریه",
        "de": "Syrien",
        "es": "Siria",
        "fr": "Syrie",
        "ja": "シリア・アラブ共和国",
        "it": "Siria",
        "hu": "Szőria"
      },
      "flags": [
        "https://restcountries.com/data/syr.svg",
        "https://restcountries.com/data/png/syr.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "SYR",
      "independent": true
    },
    {
      "name": "Taiwan",
      "topLevelDomain": [
        ".tw"
      ],
      "alpha2Code": "TW",
      "alpha3Code": "TWN",
      "callingCodes": [
        "886"
      ],
      "capital": "Taipei",
      "altSpellings": [
        "TW",
        "Táiwān",
        "Republic of China",
        "中華民國",
        "Zhōnghuá Mínguó"
      ],
      "region": "Eastern Asia",
      "continent": "Asia",
      "population": 23503349,
      "latlng": [
        23.5,
        121
      ],
      "demonym": "Taiwanese",
      "area": 36193,
      "gini": 33.6,
      "timezones": [
        "UTC+08:00"
      ],
      "nativeName": "臺灣",
      "numericCode": "158",
      "currencies": [
        {
          "code": "TWD",
          "name": "New Taiwan dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "zh",
          "iso639_2": "zho",
          "name": "Chinese",
          "nativeName": "中文 (Zhōngwén)"
        }
      ],
      "translations": {
        "br": "Taiwan",
        "pt": "Taiwan",
        "nl": "Taiwan",
        "hr": "Tajvan",
        "fa": "تایوان",
        "de": "Taiwan",
        "es": "Taiwán",
        "fr": "Taïwan",
        "ja": "台湾（中華民国）",
        "it": "Taiwan",
        "hu": "Tajvan"
      },
      "flags": [
        "https://restcountries.com/data/twn.svg",
        "https://restcountries.com/data/png/twn.png"
      ],
      "cioc": "TPE",
      "independent": true
    },
    {
      "name": "Tajikistan",
      "topLevelDomain": [
        ".tj"
      ],
      "alpha2Code": "TJ",
      "alpha3Code": "TJK",
      "callingCodes": [
        "992"
      ],
      "capital": "Dushanbe",
      "altSpellings": [
        "TJ",
        "Toçikiston",
        "Republic of Tajikistan",
        "Ҷумҳурии Тоҷикистон",
        "Çumhuriyi Toçikiston"
      ],
      "region": "Central Asia",
      "continent": "Asia",
      "population": 8593600,
      "latlng": [
        39,
        71
      ],
      "demonym": "Tadzhik",
      "area": 143100,
      "gini": 34,
      "timezones": [
        "UTC+05:00"
      ],
      "borders": [
        "AFG",
        "CHN",
        "KGZ",
        "UZB"
      ],
      "nativeName": "Тоҷикистон",
      "numericCode": "762",
      "currencies": [
        {
          "code": "TJS",
          "name": "Tajikistani somoni",
          "symbol": "ЅМ"
        }
      ],
      "languages": [
        {
          "iso639_1": "tg",
          "iso639_2": "tgk",
          "name": "Tajik",
          "nativeName": "тоҷикӣ"
        },
        {
          "iso639_1": "ru",
          "iso639_2": "rus",
          "name": "Russian",
          "nativeName": "Русский"
        }
      ],
      "translations": {
        "br": "Tajiquistão",
        "pt": "Tajiquistão",
        "nl": "Tadzjikistan",
        "hr": "Tađikistan",
        "fa": "تاجیکستان",
        "de": "Tadschikistan",
        "es": "Tayikistán",
        "fr": "Tadjikistan",
        "ja": "タジキスタン",
        "it": "Tagikistan",
        "hu": "Tádzsikisztán"
      },
      "flags": [
        "https://restcountries.com/data/tjk.svg",
        "https://restcountries.com/data/png/tjk.png"
      ],
      "cioc": "TJK",
      "independent": true
    },
    {
      "name": "Tanzania, United Republic of",
      "topLevelDomain": [
        ".tz"
      ],
      "alpha2Code": "TZ",
      "alpha3Code": "TZA",
      "callingCodes": [
        "255"
      ],
      "capital": "Dodoma",
      "altSpellings": [
        "TZ",
        "United Republic of Tanzania",
        "Jamhuri ya Muungano wa Tanzania"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 55155000,
      "latlng": [
        -6,
        35
      ],
      "demonym": "Tanzanian",
      "area": 945087,
      "gini": 40.5,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "BDI",
        "COD",
        "KEN",
        "MWI",
        "MOZ",
        "RWA",
        "UGA",
        "ZMB"
      ],
      "nativeName": "Tanzania",
      "numericCode": "834",
      "currencies": [
        {
          "code": "TZS",
          "name": "Tanzanian shilling",
          "symbol": "Sh"
        }
      ],
      "languages": [
        {
          "iso639_1": "sw",
          "iso639_2": "swa",
          "name": "Swahili",
          "nativeName": "Kiswahili"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Tanzânia",
        "pt": "Tanzânia",
        "nl": "Tanzania",
        "hr": "Tanzanija",
        "fa": "تانزانیا",
        "de": "Tansania",
        "es": "Tanzania",
        "fr": "Tanzanie",
        "ja": "タンザニア",
        "it": "Tanzania",
        "hu": "Tádzsikisztán"
      },
      "flags": [
        "https://restcountries.com/data/tza.svg",
        "https://restcountries.com/data/png/tza.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "TAN",
      "independent": true
    },
    {
      "name": "Thailand",
      "topLevelDomain": [
        ".th"
      ],
      "alpha2Code": "TH",
      "alpha3Code": "THA",
      "callingCodes": [
        "66"
      ],
      "capital": "Bangkok",
      "altSpellings": [
        "TH",
        "Prathet",
        "Thai",
        "Kingdom of Thailand",
        "ราชอาณาจักรไทย",
        "Ratcha Anachak Thai"
      ],
      "region": "South-Eastern Asia",
      "continent": "Asia",
      "population": 65327652,
      "latlng": [
        15,
        100
      ],
      "demonym": "Thai",
      "area": 513120,
      "gini": 34.9,
      "timezones": [
        "UTC+07:00"
      ],
      "borders": [
        "MMR",
        "KHM",
        "LAO",
        "MYS"
      ],
      "nativeName": "ประเทศไทย",
      "numericCode": "764",
      "currencies": [
        {
          "code": "THB",
          "name": "Thai baht",
          "symbol": "฿"
        }
      ],
      "languages": [
        {
          "iso639_1": "th",
          "iso639_2": "tha",
          "name": "Thai",
          "nativeName": "ไทย"
        }
      ],
      "translations": {
        "br": "Tailândia",
        "pt": "Tailândia",
        "nl": "Thailand",
        "hr": "Tajland",
        "fa": "تایلند",
        "de": "Thailand",
        "es": "Tailandia",
        "fr": "Thaïlande",
        "ja": "タイ",
        "it": "Tailandia",
        "hu": "Thaiföld"
      },
      "flags": [
        "https://restcountries.com/data/tha.svg",
        "https://restcountries.com/data/png/tha.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "ASEAN",
          "name": "Association of Southeast Asian Nations"
        }
      ],
      "cioc": "THA",
      "independent": true
    },
    {
      "name": "Timor-Leste",
      "topLevelDomain": [
        ".tl"
      ],
      "alpha2Code": "TL",
      "alpha3Code": "TLS",
      "callingCodes": [
        "670"
      ],
      "capital": "Dili",
      "altSpellings": [
        "TL",
        "East Timor",
        "Democratic Republic of Timor-Leste",
        "República Democrática de Timor-Leste",
        "Repúblika Demokrátika Timór-Leste"
      ],
      "region": "South-Eastern Asia",
      "continent": "Asia",
      "population": 1167242,
      "latlng": [
        -8.83333333,
        125.91666666
      ],
      "demonym": "East Timorese",
      "area": 14874,
      "gini": 28.7,
      "timezones": [
        "UTC+09:00"
      ],
      "borders": [
        "IDN"
      ],
      "nativeName": "Timor-Leste",
      "numericCode": "626",
      "currencies": [
        {
          "code": "THB",
          "name": "Thai baht",
          "symbol": "฿"
        }
      ],
      "languages": [
        {
          "iso639_1": "pt",
          "iso639_2": "por",
          "name": "Portuguese",
          "nativeName": "Português"
        }
      ],
      "translations": {
        "br": "Timor Leste",
        "pt": "Timor Leste",
        "nl": "Oost-Timor",
        "hr": "Istočni Timor",
        "fa": "تیمور شرقی",
        "de": "Timor-Leste",
        "es": "Timor Oriental",
        "fr": "Timor oriental",
        "ja": "東ティモール",
        "it": "Timor Est",
        "hu": "Kelet-Timor"
      },
      "flags": [
        "https://restcountries.com/data/tls.svg",
        "https://restcountries.com/data/png/tls.png"
      ],
      "cioc": "TLS",
      "independent": true
    },
    {
      "name": "Togo",
      "topLevelDomain": [
        ".tg"
      ],
      "alpha2Code": "TG",
      "alpha3Code": "TGO",
      "callingCodes": [
        "228"
      ],
      "capital": "Lomé",
      "altSpellings": [
        "TG",
        "Togolese",
        "Togolese Republic",
        "République Togolaise"
      ],
      "region": "Western Africa",
      "continent": "Africa",
      "population": 7143000,
      "latlng": [
        8,
        1.16666666
      ],
      "demonym": "Togolese",
      "area": 56785,
      "gini": 43.1,
      "timezones": [
        "UTC"
      ],
      "borders": [
        "BEN",
        "BFA",
        "GHA"
      ],
      "nativeName": "Togo",
      "numericCode": "768",
      "currencies": [
        {
          "code": "XOF",
          "name": "West African CFA franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Togo",
        "pt": "Togo",
        "nl": "Togo",
        "hr": "Togo",
        "fa": "توگو",
        "de": "Togo",
        "es": "Togo",
        "fr": "Togo",
        "ja": "トーゴ",
        "it": "Togo",
        "hu": "Togo"
      },
      "flags": [
        "https://restcountries.com/data/tgo.svg",
        "https://restcountries.com/data/png/tgo.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "TOG",
      "independent": true
    },
    {
      "name": "Tokelau",
      "topLevelDomain": [
        ".tk"
      ],
      "alpha2Code": "TK",
      "alpha3Code": "TKL",
      "callingCodes": [
        "690"
      ],
      "capital": "Fakaofo",
      "altSpellings": [
        "TK"
      ],
      "region": "Polynesia",
      "continent": "Oceania",
      "population": 1411,
      "latlng": [
        -9,
        -172
      ],
      "demonym": "Tokelauan",
      "area": 12,
      "timezones": [
        "UTC+13:00"
      ],
      "nativeName": "Tokelau",
      "numericCode": "772",
      "currencies": [
        {
          "code": "NZD",
          "name": "New Zealand dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Tokelau",
        "pt": "Toquelau",
        "nl": "Tokelau",
        "hr": "Tokelau",
        "fa": "توکلائو",
        "de": "Tokelau",
        "es": "Islas Tokelau",
        "fr": "Tokelau",
        "ja": "トケラウ",
        "it": "Isole Tokelau",
        "hu": "Tokelau-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/tkl.svg",
        "https://restcountries.com/data/png/tkl.png"
      ],
      "independent": false
    },
    {
      "name": "Tonga",
      "topLevelDomain": [
        ".to"
      ],
      "alpha2Code": "TO",
      "alpha3Code": "TON",
      "callingCodes": [
        "676"
      ],
      "capital": "Nuku'alofa",
      "altSpellings": [
        "TO"
      ],
      "region": "Polynesia",
      "continent": "Oceania",
      "population": 103252,
      "latlng": [
        -20,
        -175
      ],
      "demonym": "Tongan",
      "area": 747,
      "gini": 37.6,
      "timezones": [
        "UTC+13:00"
      ],
      "nativeName": "Tonga",
      "numericCode": "776",
      "currencies": [
        {
          "code": "TOP",
          "name": "Tongan paʻanga",
          "symbol": "T$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "to",
          "iso639_2": "ton",
          "name": "Tonga (Tonga Islands)",
          "nativeName": "faka Tonga"
        }
      ],
      "translations": {
        "br": "Tonga",
        "pt": "Tonga",
        "nl": "Tonga",
        "hr": "Tonga",
        "fa": "تونگا",
        "de": "Tonga",
        "es": "Tonga",
        "fr": "Tonga",
        "ja": "トンガ",
        "it": "Tonga",
        "hu": "Tonga"
      },
      "flags": [
        "https://restcountries.com/data/ton.svg",
        "https://restcountries.com/data/png/ton.png"
      ],
      "cioc": "TGA",
      "independent": true
    },
    {
      "name": "Trinidad and Tobago",
      "topLevelDomain": [
        ".tt"
      ],
      "alpha2Code": "TT",
      "alpha3Code": "TTO",
      "callingCodes": [
        "1"
      ],
      "capital": "Port of Spain",
      "altSpellings": [
        "TT",
        "Republic of Trinidad and Tobago"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 1349667,
      "latlng": [
        11,
        -61
      ],
      "demonym": "Trinidadian",
      "area": 5130,
      "gini": 40.3,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Trinidad and Tobago",
      "numericCode": "780",
      "currencies": [
        {
          "code": "TTD",
          "name": "Trinidad and Tobago dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Trinidad e Tobago",
        "pt": "Trindade e Tobago",
        "nl": "Trinidad en Tobago",
        "hr": "Trinidad i Tobago",
        "fa": "ترینیداد و توباگو",
        "de": "Trinidad und Tobago",
        "es": "Trinidad y Tobago",
        "fr": "Trinité et Tobago",
        "ja": "トリニダード・トバゴ",
        "it": "Trinidad e Tobago",
        "hu": "Trinidad ís Tobago"
      },
      "flags": [
        "https://restcountries.com/data/tto.svg",
        "https://restcountries.com/data/png/tto.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "CARICOM",
          "name": "Caribbean Community",
          "otherNames": [
            "Comunidad del Caribe",
            "Communauté Caribéenne",
            "Caribische Gemeenschap"
          ]
        }
      ],
      "cioc": "TTO",
      "independent": true
    },
    {
      "name": "Tunisia",
      "topLevelDomain": [
        ".tn"
      ],
      "alpha2Code": "TN",
      "alpha3Code": "TUN",
      "callingCodes": [
        "216"
      ],
      "capital": "Tunis",
      "altSpellings": [
        "TN",
        "Republic of Tunisia",
        "al-Jumhūriyyah at-Tūnisiyyah"
      ],
      "region": "Northern Africa",
      "continent": "Africa",
      "population": 11154400,
      "latlng": [
        34,
        9
      ],
      "demonym": "Tunisian",
      "area": 163610,
      "gini": 32.8,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "DZA",
        "LBY"
      ],
      "nativeName": "تونس",
      "numericCode": "788",
      "currencies": [
        {
          "code": "TND",
          "name": "Tunisian dinar",
          "symbol": "د.ت"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Tunísia",
        "pt": "Tunísia",
        "nl": "Tunesië",
        "hr": "Tunis",
        "fa": "تونس",
        "de": "Tunesien",
        "es": "Túnez",
        "fr": "Tunisie",
        "ja": "チュニジア",
        "it": "Tunisia",
        "hu": "Tunízia"
      },
      "flags": [
        "https://restcountries.com/data/tun.svg",
        "https://restcountries.com/data/png/tun.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        },
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "TUN",
      "independent": true
    },
    {
      "name": "Turkey",
      "topLevelDomain": [
        ".tr"
      ],
      "alpha2Code": "TR",
      "alpha3Code": "TUR",
      "callingCodes": [
        "90"
      ],
      "capital": "Ankara",
      "altSpellings": [
        "TR",
        "Turkiye",
        "Republic of Turkey",
        "Türkiye Cumhuriyeti"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 78741053,
      "latlng": [
        39,
        35
      ],
      "area": 783562,
      "gini": 41.9,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "ARM",
        "AZE",
        "BGR",
        "GEO",
        "GRC",
        "IRN",
        "IRQ",
        "SYR"
      ],
      "nativeName": "Türkiye",
      "numericCode": "792",
      "currencies": [
        {
          "code": "TRY",
          "name": "Turkish lira",
          "symbol": "֏"
        }
      ],
      "languages": [
        {
          "iso639_1": "tr",
          "iso639_2": "tur",
          "name": "Turkish",
          "nativeName": "Türkçe"
        }
      ],
      "translations": {
        "br": "Turquia",
        "pt": "Turquia",
        "nl": "Turkije",
        "hr": "Turska",
        "fa": "ترکیه",
        "de": "Türkei",
        "es": "Turquía",
        "fr": "Turquie",
        "ja": "トルコ",
        "it": "Turchia",
        "hu": "Törökország"
      },
      "flags": [
        "https://restcountries.com/data/tur.svg",
        "https://restcountries.com/data/png/tur.png"
      ],
      "cioc": "TUR",
      "independent": false
    },
    {
      "name": "Turkmenistan",
      "topLevelDomain": [
        ".tm"
      ],
      "alpha2Code": "TM",
      "alpha3Code": "TKM",
      "callingCodes": [
        "993"
      ],
      "capital": "Ashgabat",
      "altSpellings": [
        "TM"
      ],
      "region": "Central Asia",
      "continent": "Asia",
      "population": 4751120,
      "latlng": [
        40,
        60
      ],
      "demonym": "Turkmen",
      "area": 488100,
      "gini": 40.8,
      "timezones": [
        "UTC+05:00"
      ],
      "borders": [
        "AFG",
        "IRN",
        "KAZ",
        "UZB"
      ],
      "nativeName": "Türkmenistan",
      "numericCode": "795",
      "currencies": [
        {
          "code": "TMT",
          "name": "Turkmenistan manat",
          "symbol": "m"
        }
      ],
      "languages": [
        {
          "iso639_1": "tk",
          "iso639_2": "tuk",
          "name": "Turkmen",
          "nativeName": "Türkmen"
        },
        {
          "iso639_1": "ru",
          "iso639_2": "rus",
          "name": "Russian",
          "nativeName": "Русский"
        }
      ],
      "translations": {
        "br": "Turcomenistão",
        "pt": "Turquemenistão",
        "nl": "Turkmenistan",
        "hr": "Turkmenistan",
        "fa": "ترکمنستان",
        "de": "Turkmenistan",
        "es": "Turkmenistán",
        "fr": "Turkménistan",
        "ja": "トルクメニスタン",
        "it": "Turkmenistan",
        "hu": "Türkmenisztán"
      },
      "flags": [
        "https://restcountries.com/data/tkm.svg",
        "https://restcountries.com/data/png/tkm.png"
      ],
      "cioc": "TKM",
      "independent": true
    },
    {
      "name": "Turks and Caicos Islands",
      "topLevelDomain": [
        ".tc"
      ],
      "alpha2Code": "TC",
      "alpha3Code": "TCA",
      "callingCodes": [
        "1"
      ],
      "capital": "Cockburn Town",
      "altSpellings": [
        "TC"
      ],
      "region": "Caribbean",
      "continent": "Americas",
      "population": 31458,
      "latlng": [
        21.75,
        -71.58333333
      ],
      "demonym": "Turks and Caicos Islander",
      "area": 948,
      "timezones": [
        "UTC-04:00"
      ],
      "nativeName": "Turks and Caicos Islands",
      "numericCode": "796",
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Ilhas Turcas e Caicos",
        "pt": "Ilhas Turcas e Caicos",
        "nl": "Turks- en Caicoseilanden",
        "hr": "Otoci Turks i Caicos",
        "fa": "جزایر تورکس و کایکوس",
        "de": "Turks- und Caicosinseln",
        "es": "Islas Turks y Caicos",
        "fr": "Îles Turques-et-Caïques",
        "ja": "タークス・カイコス諸島",
        "it": "Isole Turks e Caicos",
        "hu": "Turks- ís Caicos-szigetek"
      },
      "flags": [
        "https://restcountries.com/data/tca.svg",
        "https://restcountries.com/data/png/tca.png"
      ],
      "independent": false
    },
    {
      "name": "Tuvalu",
      "topLevelDomain": [
        ".tv"
      ],
      "alpha2Code": "TV",
      "alpha3Code": "TUV",
      "callingCodes": [
        "688"
      ],
      "capital": "Funafuti",
      "altSpellings": [
        "TV"
      ],
      "region": "Polynesia",
      "continent": "Oceania",
      "population": 10640,
      "latlng": [
        -8,
        178
      ],
      "demonym": "Tuvaluan",
      "area": 26,
      "gini": 39.1,
      "timezones": [
        "UTC+12:00"
      ],
      "nativeName": "Tuvalu",
      "numericCode": "798",
      "currencies": [
        {
          "code": "AUD",
          "name": "Australian dollar",
          "symbol": "$"
        },
        {
          "code": "TVD[G]",
          "name": "Tuvaluan dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Tuvalu",
        "pt": "Tuvalu",
        "nl": "Tuvalu",
        "hr": "Tuvalu",
        "fa": "تووالو",
        "de": "Tuvalu",
        "es": "Tuvalu",
        "fr": "Tuvalu",
        "ja": "ツバル",
        "it": "Tuvalu",
        "hu": "Tuvalu"
      },
      "flags": [
        "https://restcountries.com/data/tuv.svg",
        "https://restcountries.com/data/png/tuv.png"
      ],
      "cioc": "TUV",
      "independent": true
    },
    {
      "name": "Uganda",
      "topLevelDomain": [
        ".ug"
      ],
      "alpha2Code": "UG",
      "alpha3Code": "UGA",
      "callingCodes": [
        "256"
      ],
      "capital": "Kampala",
      "altSpellings": [
        "UG",
        "Republic of Uganda",
        "Jamhuri ya Uganda"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 33860700,
      "latlng": [
        1,
        32
      ],
      "demonym": "Ugandan",
      "area": 241550,
      "gini": 42.8,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "COD",
        "KEN",
        "RWA",
        "SSD",
        "TZA"
      ],
      "nativeName": "Uganda",
      "numericCode": "800",
      "currencies": [
        {
          "code": "UGX",
          "name": "Ugandan shilling",
          "symbol": "Sh"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "sw",
          "iso639_2": "swa",
          "name": "Swahili",
          "nativeName": "Kiswahili"
        }
      ],
      "translations": {
        "br": "Uganda",
        "pt": "Uganda",
        "nl": "Oeganda",
        "hr": "Uganda",
        "fa": "اوگاندا",
        "de": "Uganda",
        "es": "Uganda",
        "fr": "Uganda",
        "ja": "ウガンダ",
        "it": "Uganda",
        "hu": "Uganda"
      },
      "flags": [
        "https://restcountries.com/data/uga.svg",
        "https://restcountries.com/data/png/uga.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "UGA",
      "independent": true
    },
    {
      "name": "Ukraine",
      "topLevelDomain": [
        ".ua"
      ],
      "alpha2Code": "UA",
      "alpha3Code": "UKR",
      "callingCodes": [
        "380"
      ],
      "capital": "Kyiv",
      "altSpellings": [
        "UA",
        "Ukrayina"
      ],
      "region": "Eastern Europe",
      "continent": "Europe",
      "population": 42692393,
      "latlng": [
        49,
        32
      ],
      "demonym": "Ukrainian",
      "area": 603700,
      "gini": 26.6,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "BLR",
        "HUN",
        "MDA",
        "POL",
        "ROU",
        "RUS",
        "SVK"
      ],
      "nativeName": "Україна",
      "numericCode": "804",
      "currencies": [
        {
          "code": "UAH",
          "name": "Ukrainian hryvnia",
          "symbol": "₴"
        }
      ],
      "languages": [
        {
          "iso639_1": "uk",
          "iso639_2": "ukr",
          "name": "Ukrainian",
          "nativeName": "Українська"
        }
      ],
      "translations": {
        "br": "Ucrânia",
        "pt": "Ucrânia",
        "nl": "Oekraïne",
        "hr": "Ukrajina",
        "fa": "وکراین",
        "de": "Ukraine",
        "es": "Ucrania",
        "fr": "Ukraine",
        "ja": "ウクライナ",
        "it": "Ucraina",
        "hu": "Ukrajna"
      },
      "flags": [
        "https://restcountries.com/data/ukr.svg",
        "https://restcountries.com/data/png/ukr.png"
      ],
      "cioc": "UKR",
      "independent": true
    },
    {
      "name": "United Arab Emirates",
      "topLevelDomain": [
        ".ae"
      ],
      "alpha2Code": "AE",
      "alpha3Code": "ARE",
      "callingCodes": [
        "971"
      ],
      "capital": "Abu Dhabi",
      "altSpellings": [
        "AE",
        "UAE"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 9856000,
      "latlng": [
        24,
        54
      ],
      "demonym": "Emirati",
      "area": 83600,
      "gini": 26,
      "timezones": [
        "UTC+04"
      ],
      "borders": [
        "OMN",
        "SAU"
      ],
      "nativeName": "دولة الإمارات العربية المتحدة",
      "numericCode": "784",
      "currencies": [
        {
          "code": "AED",
          "name": "United Arab Emirates dirham",
          "symbol": "د.إ"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Emirados árabes Unidos",
        "pt": "Emirados árabes Unidos",
        "nl": "Verenigde Arabische Emiraten",
        "hr": "Ujedinjeni Arapski Emirati",
        "fa": "امارات متحده عربی",
        "de": "Vereinigte Arabische Emirate",
        "es": "Emiratos Árabes Unidos",
        "fr": "Émirats arabes unis",
        "ja": "アラブ首長国連邦",
        "it": "Emirati Arabi Uniti",
        "hu": "Egyesült Arab Emőrsígek"
      },
      "flags": [
        "https://restcountries.com/data/are.svg",
        "https://restcountries.com/data/png/are.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "UAE",
      "independent": true
    },
    {
      "name": "United Kingdom of Great Britain and Northern Ireland",
      "topLevelDomain": [
        ".uk"
      ],
      "alpha2Code": "GB",
      "alpha3Code": "GBR",
      "callingCodes": [
        "44"
      ],
      "capital": "London",
      "altSpellings": [
        "GB",
        "UK",
        "Great Britain"
      ],
      "region": "Northern Europe",
      "continent": "Europe",
      "population": 65110000,
      "latlng": [
        54,
        -2
      ],
      "demonym": "British",
      "area": 242900,
      "gini": 35.1,
      "timezones": [
        "UTC-08:00",
        "UTC-05:00",
        "UTC-04:00",
        "UTC-03:00",
        "UTC-02:00",
        "UTC",
        "UTC+01:00",
        "UTC+02:00",
        "UTC+06:00"
      ],
      "borders": [
        "IRL"
      ],
      "nativeName": "United Kingdom",
      "numericCode": "826",
      "currencies": [
        {
          "code": "GBP",
          "name": "British pound",
          "symbol": "£"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Reino Unido",
        "pt": "Reino Unido",
        "nl": "Verenigd Koninkrijk",
        "hr": "Ujedinjeno Kraljevstvo",
        "fa": "بریتانیای کبیر و ایرلند شمالی",
        "de": "Vereinigtes Königreich",
        "es": "Reino Unido",
        "fr": "Royaume-Uni",
        "ja": "イギリス",
        "it": "Regno Unito",
        "hu": "Nagy-Britannia"
      },
      "flags": [
        "https://restcountries.com/data/gbr.svg",
        "https://restcountries.com/data/png/gbr.png"
      ],
      "cioc": "GBR",
      "independent": true
    },
    {
      "name": "United States of America",
      "topLevelDomain": [
        ".us"
      ],
      "alpha2Code": "US",
      "alpha3Code": "USA",
      "callingCodes": [
        "1"
      ],
      "capital": "Washington, D.C.",
      "altSpellings": [
        "US",
        "USA",
        "United States of America"
      ],
      "region": "Northern America",
      "continent": "Americas",
      "population": 323947000,
      "latlng": [
        38,
        -97
      ],
      "demonym": "American",
      "area": 9629091,
      "gini": 41.4,
      "timezones": [
        "UTC-12:00",
        "UTC-11:00",
        "UTC-10:00",
        "UTC-09:00",
        "UTC-08:00",
        "UTC-07:00",
        "UTC-06:00",
        "UTC-05:00",
        "UTC-04:00",
        "UTC+10:00",
        "UTC+12:00"
      ],
      "borders": [
        "CAN",
        "MEX"
      ],
      "nativeName": "United States",
      "numericCode": "840",
      "currencies": [
        {
          "code": "USD",
          "name": "United States dollar",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Estados Unidos",
        "pt": "Estados Unidos",
        "nl": "Verenigde Staten",
        "hr": "Sjedinjene Američke Države",
        "fa": "ایالات متحده آمریکا",
        "de": "Vereinigte Staaten von Amerika",
        "es": "Estados Unidos",
        "fr": "États-Unis",
        "ja": "アメリカ合衆国",
        "it": "Stati Uniti D'America",
        "hu": "Amerikai Egyesült Államok"
      },
      "flags": [
        "https://restcountries.com/data/usa.svg",
        "https://restcountries.com/data/png/usa.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "NAFTA",
          "name": "North American Free Trade Agreement",
          "otherNames": [
            "Tratado de Libre Comercio de América del Norte",
            "Accord de Libre-échange Nord-Américain"
          ]
        }
      ],
      "cioc": "USA",
      "independent": true
    },
    {
      "name": "Uruguay",
      "topLevelDomain": [
        ".uy"
      ],
      "alpha2Code": "UY",
      "alpha3Code": "URY",
      "callingCodes": [
        "598"
      ],
      "capital": "Montevideo",
      "altSpellings": [
        "UY",
        "Oriental Republic of Uruguay",
        "República Oriental del Uruguay"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 3480222,
      "latlng": [
        -33,
        -56
      ],
      "demonym": "Uruguayan",
      "area": 181034,
      "gini": 39.7,
      "timezones": [
        "UTC-03:00"
      ],
      "borders": [
        "ARG",
        "BRA"
      ],
      "nativeName": "Uruguay",
      "numericCode": "858",
      "currencies": [
        {
          "code": "UYU",
          "name": "Uruguayan peso",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Uruguai",
        "pt": "Uruguai",
        "nl": "Uruguay",
        "hr": "Urugvaj",
        "fa": "اروگوئه",
        "de": "Uruguay",
        "es": "Uruguay",
        "fr": "Uruguay",
        "ja": "ウルグアイ",
        "it": "Uruguay",
        "hu": "Uruguay"
      },
      "flags": [
        "https://restcountries.com/data/ury.svg",
        "https://restcountries.com/data/png/ury.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "cioc": "URU",
      "independent": true
    },
    {
      "name": "Uzbekistan",
      "topLevelDomain": [
        ".uz"
      ],
      "alpha2Code": "UZ",
      "alpha3Code": "UZB",
      "callingCodes": [
        "998"
      ],
      "capital": "Tashkent",
      "altSpellings": [
        "UZ",
        "Republic of Uzbekistan",
        "O‘zbekiston Respublikasi",
        "Ўзбекистон Республикаси"
      ],
      "region": "Central Asia",
      "continent": "Asia",
      "population": 31576400,
      "latlng": [
        41,
        64
      ],
      "area": 447400,
      "gini": 35.3,
      "timezones": [
        "UTC+05:00"
      ],
      "borders": [
        "AFG",
        "KAZ",
        "KGZ",
        "TJK",
        "TKM"
      ],
      "nativeName": "O‘zbekiston",
      "numericCode": "860",
      "currencies": [
        {
          "code": "UZS",
          "name": "Uzbekistani so'm",
          "symbol": "so'm"
        }
      ],
      "languages": [
        {
          "iso639_1": "uz",
          "iso639_2": "uzb",
          "name": "Uzbek",
          "nativeName": "Oʻzbek"
        },
        {
          "iso639_1": "ru",
          "iso639_2": "rus",
          "name": "Russian",
          "nativeName": "Русский"
        }
      ],
      "translations": {
        "br": "Uzbequistão",
        "pt": "Usbequistão",
        "nl": "Oezbekistan",
        "hr": "Uzbekistan",
        "fa": "ازبکستان",
        "de": "Usbekistan",
        "es": "Uzbekistán",
        "fr": "Ouzbékistan",
        "ja": "ウズベキスタン",
        "it": "Uzbekistan",
        "hu": "Üzbegisztán"
      },
      "flags": [
        "https://restcountries.com/data/uzb.svg",
        "https://restcountries.com/data/png/uzb.png"
      ],
      "cioc": "UZB",
      "independent": false
    },
    {
      "name": "Vanuatu",
      "topLevelDomain": [
        ".vu"
      ],
      "alpha2Code": "VU",
      "alpha3Code": "VUT",
      "callingCodes": [
        "678"
      ],
      "capital": "Port Vila",
      "altSpellings": [
        "VU",
        "Republic of Vanuatu",
        "Ripablik blong Vanuatu",
        "République de Vanuatu"
      ],
      "region": "Melanesia",
      "continent": "Oceania",
      "population": 277500,
      "latlng": [
        -16,
        167
      ],
      "demonym": "Ni-Vanuatu",
      "area": 12189,
      "gini": 37.6,
      "timezones": [
        "UTC+11:00"
      ],
      "nativeName": "Vanuatu",
      "numericCode": "548",
      "currencies": [
        {
          "code": "VUV",
          "name": "Vanuatu vatu",
          "symbol": "Vt"
        }
      ],
      "languages": [
        {
          "iso639_1": "bi",
          "iso639_2": "bis",
          "name": "Bislama",
          "nativeName": "Bislama"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Vanuatu",
        "pt": "Vanuatu",
        "nl": "Vanuatu",
        "hr": "Vanuatu",
        "fa": "وانواتو",
        "de": "Vanuatu",
        "es": "Vanuatu",
        "fr": "Vanuatu",
        "ja": "バヌアツ",
        "it": "Vanuatu",
        "hu": "Vanuatu"
      },
      "flags": [
        "https://restcountries.com/data/vut.svg",
        "https://restcountries.com/data/png/vut.png"
      ],
      "cioc": "VAN",
      "independent": true
    },
    {
      "name": "Venezuela (Bolivarian Republic of)",
      "topLevelDomain": [
        ".ve"
      ],
      "alpha2Code": "VE",
      "alpha3Code": "VEN",
      "callingCodes": [
        "58"
      ],
      "capital": "Caracas",
      "altSpellings": [
        "VE",
        "Bolivarian Republic of Venezuela",
        "República Bolivariana de Venezuela"
      ],
      "region": "South America",
      "continent": "Americas",
      "population": 31028700,
      "latlng": [
        8,
        -66
      ],
      "demonym": "Venezuelan",
      "area": 916445,
      "gini": 39,
      "timezones": [
        "UTC-04:00"
      ],
      "borders": [
        "BRA",
        "COL",
        "GUY"
      ],
      "nativeName": "Venezuela",
      "numericCode": "862",
      "currencies": [
        {
          "code": "VEF",
          "name": "Venezuelan bolívar",
          "symbol": "Bs S"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Venezuela",
        "pt": "Venezuela",
        "nl": "Venezuela",
        "hr": "Venezuela",
        "fa": "ونزوئلا",
        "de": "Venezuela",
        "es": "Venezuela",
        "fr": "Venezuela",
        "ja": "ベネズエラ・ボリバル共和国",
        "it": "Venezuela",
        "hu": "Venezuela"
      },
      "flags": [
        "https://restcountries.com/data/ven.svg",
        "https://restcountries.com/data/png/ven.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": [
            "UNASUR",
            "UNASUL",
            "UZAN"
          ],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "cioc": "VEN",
      "independent": true
    },
    {
      "name": "Vietnam",
      "topLevelDomain": [
        ".vn"
      ],
      "alpha2Code": "VN",
      "alpha3Code": "VNM",
      "callingCodes": [
        "84"
      ],
      "capital": "Hanoi",
      "altSpellings": [
        "VN",
        "Socialist Republic of Vietnam",
        "Cộng hòa Xã hội chủ nghĩa Việt Nam"
      ],
      "region": "South-Eastern Asia",
      "continent": "Asia",
      "population": 92700000,
      "latlng": [
        16.16666666,
        107.83333333
      ],
      "demonym": "Vietnamese",
      "area": 331212,
      "gini": 35.6,
      "timezones": [
        "UTC+07:00"
      ],
      "borders": [
        "KHM",
        "CHN",
        "LAO"
      ],
      "nativeName": "Việt Nam",
      "numericCode": "704",
      "currencies": [
        {
          "code": "VND",
          "name": "Vietnamese đồng",
          "symbol": "₫"
        }
      ],
      "languages": [
        {
          "iso639_1": "vi",
          "iso639_2": "vie",
          "name": "Vietnamese",
          "nativeName": "Tiếng Việt"
        }
      ],
      "translations": {
        "br": "Vietnã",
        "pt": "Vietname",
        "nl": "Vietnam",
        "hr": "Vijetnam",
        "fa": "ویتنام",
        "de": "Vietnam",
        "es": "Vietnam",
        "fr": "Viêt Nam",
        "ja": "ベトナム",
        "it": "Vietnam",
        "hu": "Vietnám"
      },
      "flags": [
        "https://restcountries.com/data/vnm.svg",
        "https://restcountries.com/data/png/vnm.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "ASEAN",
          "name": "Association of Southeast Asian Nations"
        }
      ],
      "cioc": "VIE",
      "independent": true
    },
    {
      "name": "Wallis and Futuna",
      "topLevelDomain": [
        ".wf"
      ],
      "alpha2Code": "WF",
      "alpha3Code": "WLF",
      "callingCodes": [
        "681"
      ],
      "capital": "Mata-Utu",
      "altSpellings": [
        "WF",
        "Territory of the Wallis and Futuna Islands",
        "Territoire des îles Wallis et Futuna"
      ],
      "region": "Polynesia",
      "continent": "Oceania",
      "population": 11750,
      "latlng": [
        -13.3,
        -176.2
      ],
      "demonym": "Wallis and Futuna Islander",
      "area": 142,
      "timezones": [
        "UTC+12:00"
      ],
      "nativeName": "Wallis et Futuna",
      "numericCode": "876",
      "currencies": [
        {
          "code": "XPF",
          "name": "CFP franc",
          "symbol": "Fr"
        }
      ],
      "languages": [
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        }
      ],
      "translations": {
        "br": "Wallis e Futuna",
        "pt": "Wallis e Futuna",
        "nl": "Wallis en Futuna",
        "hr": "Wallis i Fortuna",
        "fa": "والیس و فوتونا",
        "de": "Wallis und Futuna",
        "es": "Wallis y Futuna",
        "fr": "Wallis-et-Futuna",
        "ja": "ウォリス・フツナ",
        "it": "Wallis e Futuna",
        "hu": "Wallis és Futuna"
      },
      "flags": [
        "https://restcountries.com/data/wlf.svg",
        "https://restcountries.com/data/png/wlf.png"
      ],
      "independent": false
    },
    {
      "name": "Western Sahara",
      "topLevelDomain": [
        ".eh"
      ],
      "alpha2Code": "EH",
      "alpha3Code": "ESH",
      "callingCodes": [
        "212"
      ],
      "capital": "El Aaiún",
      "altSpellings": [
        "EH",
        "Taneẓroft Tutrimt"
      ],
      "region": "Northern Africa",
      "continent": "Africa",
      "population": 510713,
      "latlng": [
        24.5,
        -13
      ],
      "demonym": "Sahrawi",
      "area": 266000,
      "timezones": [
        "UTC+00:00"
      ],
      "borders": [
        "DZA",
        "MRT",
        "MAR"
      ],
      "nativeName": "الصحراء الغربية",
      "numericCode": "732",
      "currencies": [
        {
          "code": "MAD",
          "name": "Moroccan dirham",
          "symbol": "د.م."
        },
        {
          "code": "DZD",
          "name": "Algerian dinar",
          "symbol": "د.ج"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        }
      ],
      "translations": {
        "br": "Saara Ocidental",
        "pt": "Saara Ocidental",
        "nl": "Westelijke Sahara",
        "hr": "Zapadna Sahara",
        "fa": "جمهوری دموکراتیک عربی صحرا",
        "de": "Westsahara",
        "es": "Sahara Occidental",
        "fr": "Sahara Occidental",
        "ja": "西サハラ",
        "it": "Sahara Occidentale",
        "hu": "Nyugat-Szahara"
      },
      "flags": [
        "https://restcountries.com/data/esh.svg",
        "https://restcountries.com/data/png/esh.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "independent": false
    },
    {
      "name": "Yemen",
      "topLevelDomain": [
        ".ye"
      ],
      "alpha2Code": "YE",
      "alpha3Code": "YEM",
      "callingCodes": [
        "967"
      ],
      "capital": "Sana'a",
      "altSpellings": [
        "YE",
        "Yemeni Republic",
        "al-Jumhūriyyah al-Yamaniyyah"
      ],
      "region": "Western Asia",
      "continent": "Asia",
      "population": 27478000,
      "latlng": [
        15,
        48
      ],
      "demonym": "Yemeni",
      "area": 527968,
      "gini": 36.7,
      "timezones": [
        "UTC+03:00"
      ],
      "borders": [
        "OMN",
        "SAU"
      ],
      "nativeName": "اليَمَن",
      "numericCode": "887",
      "currencies": [
        {
          "code": "YER",
          "name": "Yemeni rial",
          "symbol": "﷼"
        }
      ],
      "languages": [
        {
          "iso639_1": "ar",
          "iso639_2": "ara",
          "name": "Arabic",
          "nativeName": "العربية"
        }
      ],
      "translations": {
        "br": "Iêmen",
        "pt": "Iémen",
        "nl": "Jemen",
        "hr": "Jemen",
        "fa": "یمن",
        "de": "Jemen",
        "es": "Yemen",
        "fr": "Yémen",
        "ja": "イエメン",
        "it": "Yemen",
        "hu": "Jemen"
      },
      "flags": [
        "https://restcountries.com/data/yem.svg",
        "https://restcountries.com/data/png/yem.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AL",
          "name": "Arab League",
          "otherNames": [
            "جامعة الدول العربية",
            "Jāmiʻat ad-Duwal al-ʻArabīyah",
            "League of Arab States"
          ]
        }
      ],
      "cioc": "YEM",
      "independent": true
    },
    {
      "name": "Zambia",
      "topLevelDomain": [
        ".zm"
      ],
      "alpha2Code": "ZM",
      "alpha3Code": "ZMB",
      "callingCodes": [
        "260"
      ],
      "capital": "Lusaka",
      "altSpellings": [
        "ZM",
        "Republic of Zambia"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 15933883,
      "latlng": [
        -15,
        30
      ],
      "demonym": "Zambian",
      "area": 752618,
      "gini": 57.1,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "AGO",
        "BWA",
        "COD",
        "MWI",
        "MOZ",
        "NAM",
        "TZA",
        "ZWE"
      ],
      "nativeName": "Zambia",
      "numericCode": "894",
      "currencies": [
        {
          "code": "ZMW",
          "name": "Zambian kwacha",
          "symbol": "ZK"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Zâmbia",
        "pt": "Zâmbia",
        "nl": "Zambia",
        "hr": "Zambija",
        "fa": "زامبیا",
        "de": "Sambia",
        "es": "Zambia",
        "fr": "Zambie",
        "ja": "ザンビア",
        "it": "Zambia",
        "hu": "Zambia"
      },
      "flags": [
        "https://restcountries.com/data/zmb.svg",
        "https://restcountries.com/data/png/zmb.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "ZAM",
      "independent": true
    },
    {
      "name": "Zimbabwe",
      "topLevelDomain": [
        ".zw"
      ],
      "alpha2Code": "ZW",
      "alpha3Code": "ZWE",
      "callingCodes": [
        "263"
      ],
      "capital": "Harare",
      "altSpellings": [
        "ZW",
        "Republic of Zimbabwe"
      ],
      "region": "Eastern Africa",
      "continent": "Africa",
      "population": 14240168,
      "latlng": [
        -20,
        30
      ],
      "demonym": "Zimbabwean",
      "area": 390757,
      "gini": 50.3,
      "timezones": [
        "UTC+02:00"
      ],
      "borders": [
        "BWA",
        "MOZ",
        "ZAF",
        "ZMB"
      ],
      "nativeName": "Zimbabwe",
      "numericCode": "716",
      "currencies": [
        {
          "code": "ZMW",
          "name": "Zambian kwacha",
          "symbol": "K"
        }
      ],
      "languages": [
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        },
        {
          "iso639_1": "sn",
          "iso639_2": "sna",
          "name": "Shona",
          "nativeName": "chiShona"
        },
        {
          "iso639_1": "nd",
          "iso639_2": "nde",
          "name": "Northern Ndebele",
          "nativeName": "isiNdebele"
        }
      ],
      "translations": {
        "br": "Zimbabwe",
        "pt": "Zimbabué",
        "nl": "Zimbabwe",
        "hr": "Zimbabve",
        "fa": "زیمباوه",
        "de": "Simbabwe",
        "es": "Zimbabue",
        "fr": "Zimbabwe",
        "ja": "ジンバブエ",
        "it": "Zimbabwe",
        "hu": "Zimbabwe"
      },
      "flags": [
        "https://restcountries.com/data/zwe.svg",
        "https://restcountries.com/data/png/zwe.png"
      ],
      "regionalBlocs": [
        {
          "acronym": "AU",
          "name": "African Union",
          "otherNames": [
            "الاتحاد الأفريقي",
            "Union africaine",
            "União Africana",
            "Unión Africana",
            "Umoja wa Afrika"
          ]
        }
      ],
      "cioc": "ZIM",
      "independent": true
    }
  ]