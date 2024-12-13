const eInvoiceTypes = () => (
    [
        {
            value: "01",
            label: "Invoice"
        },
        {
            value: "02",
            label: "Credit Note"
        },
        {
            value: "03",
            label: "Debit Note"
        },
        {
            value: "04",
            label: "Refund Note"
        },
        {
            value: "11",
            label: "Self-billed Invoice"
        },
        {
            value: "12",
            label: "Self-billed Credit Note"
        },
        {
            value: "13",
            label: "Self-billed Debit Note"
        },
        {
            value: "14",
            label: "Self-billed Refund Note"
        }
    ]
);

const taxType = () => (
    [
        {
          value: "01",
          label: "Sales Tax"
        },
        {
          value: "02",
          label: "Service Tax"
        },
        {
          value: "03",
          label: "Tourism Tax"
        },
        {
          value: "04",
          label: "High-Value Goods Tax"
        },
        {
          value: "05",
          label: "Sales Tax on Low Value Goods"
        },
        {
          value: "06",
          label: "Not Applicable"
        },
        {
          value: "E",
          label: "Tax exemption (where applicable)"
        }
      ]
);

const state = () => (
    [
        {
            value: "00",
            label: "All States"
        },
        {
            value: "01",
            label: "Johor"
        },
        {
            value: "02",
            label: "Kedah"
        },
        {
            value: "03",
            label: "Kelantan"
        },
        {
            value: "04",
            label: "Melaka"
        },
        {
            value: "05",
            label: "Negeri Sembilan"
        },
        {
            value: "06",
            label: "Pahang"
        },
        {
            value: "07",
            label: "Pulau Pinang"
        },
        {
            value: "08",
            label: "Perak"
        },
        {
            value: "09",
            label: "Perlis"
        },
        {
            value: "10",
            label: "Selangor"
        },
        {
            value: "11",
            label: "Terengganu"
        },
        {
            value: "12",
            label: "Sabah"
        },
        {
            value: "13",
            label: "Sarawak"
        },
        {
            value: "14",
            label: "Wilayah Persekutuan Kuala Lumpur"
        },
        {
            value: "15",
            label: "Wilayah Persekutuan Labuan"
        },
        {
            value: "16",
            label: "Wilayah Persekutuan Putrajaya"
        },
        {
            value: "17",
            label: "Not Applicable"
        }
    ]
);

const country = () => (
    [
        {
            value: "ABW",
            label: "ARUBA"
        },
        {
            value: "AFG",
            label: "AFGHANISTAN"
        },
        {
            value: "AGO",
            label: "ANGOLA"
        },
        {
            value: "AIA",
            label: "ANGUILLA"
        },
        {
            value: "ALA",
            label: "ALAND ISLANDS"
        },
        {
            value: "ALB",
            label: "ALBANIA"
        },
        {
            value: "AND",
            label: "ANDORA"
        },
        {
            value: "ARE",
            label: "UNITED ARAB EMIRATES"
        },
        {
            value: "ARG",
            label: "ARGENTINA"
        },
        {
            value: "ARM",
            label: "ARMENIA"
        },
        {
            value: "ASM",
            label: "AMERICAN SAMOA"
        },
        {
            value: "ATA",
            label: "ANTARCTICA"
        },
        {
            value: "ATF",
            label: "FRENCH SOUTHERN TERRITORIES"
        },
        {
            value: "ATG",
            label: "ANTIGUA AND BARBUDA"
        },
        {
            value: "AUS",
            label: "AUSTRALIA"
        },
        {
            value: "AUT",
            label: "AUSTRIA"
        },
        {
            value: "AZE",
            label: "AZERBAIDJAN"
        },
        {
            value: "BDI",
            label: "BURUNDI"
        },
        {
            value: "BEL",
            label: "BELGIUM"
        },
        {
            value: "BEN",
            label: "BENIN"
        },
        {
            value: "BES",
            label: "BONAIRE, SINT EUSTATIUS AND SABA"
        },
        {
            value: "BFA",
            label: "BURKINA FASO"
        },
        {
            value: "BGD",
            label: "BANGLADESH"
        },
        {
            value: "BGR",
            label: "BULGARIA"
        },
        {
            value: "BHR",
            label: "BAHRAIN"
        },
        {
            value: "BHS",
            label: "BAHAMAS"
        },
        {
            value: "BIH",
            label: "BOSNIA AND HERZEGOVINA"
        },
        {
            value: "BLM",
            label: "SAINT BARTHELEMY"
        },
        {
            value: "BLR",
            label: "BELARUS"
        },
        {
            value: "BLZ",
            label: "BELIZE"
        },
        {
            value: "BMU",
            label: "BERMUDA"
        },
        {
            value: "BOL",
            label: "BOLIVIA"
        },
        {
            value: "BRA",
            label: "BRAZIL"
        },
        {
            value: "BRB",
            label: "BARBADOS"
        },
        {
            value: "BRN",
            label: "BRUNEI DARUSSALAM"
        },
        {
            value: "BTN",
            label: "BHUTAN"
        },
        {
            value: "BVT",
            label: "BOUVET ISLAND"
        },
        {
            value: "BWA",
            label: "BOTSWANA"
        },
        {
            value: "CAF",
            label: "CENTRAL AFRICAN REPUBLIC"
        },
        {
            value: "CAN",
            label: "CANADA"
        },
        {
            value: "CCK",
            label: "COCOS ISLAND"
        },
        {
            value: "CHE",
            label: "SWITZERLAND"
        },
        {
            value: "CHL",
            label: "CHILE"
        },
        {
            value: "CHN",
            label: "CHINA"
        },
        {
            value: "CIV",
            label: "COTE D'IVOIRE"
        },
        {
            value: "CMR",
            label: "CAMEROON"
        },
        {
            value: "COD",
            label: "CONGO, THE DEMOCRATIC REPUBLIC"
        },
        {
            value: "COG",
            label: "CONGO"
        },
        {
            value: "COK",
            label: "COOK ISLANDS "
        },
        {
            value: "COL",
            label: "COLOMBIA"
        },
        {
            value: "COM",
            label: "COMOROS"
        },
        {
            value: "CPV",
            label: "CAPE VERDE"
        },
        {
            value: "CRI",
            label: "COSTA RICA"
        },
        {
            value: "CUB",
            label: "CUBA"
        },
        {
            value: "CUW",
            label: "CURACAO"
        },
        {
            value: "CXR",
            label: "CHRISTMAS ISLANDS"
        },
        {
            value: "CYM",
            label: "CAYMAN ISLANDS"
        },
        {
            value: "CYP",
            label: "CYPRUS"
        },
        {
            value: "CZE",
            label: "CZECH REPUBLIC"
        },
        {
            value: "DEU",
            label: "GERMANY"
        },
        {
            value: "DJI",
            label: "DJIBOUTI"
        },
        {
            value: "DMA",
            label: "DOMINICA"
        },
        {
            value: "DNK",
            label: "DENMARK"
        },
        {
            value: "DOM",
            label: "DOMINICAN REPUBLIC"
        },
        {
            value: "DZA",
            label: "ALGERIA"
        },
        {
            value: "ECU",
            label: "ECUADOR"
        },
        {
            value: "EGY",
            label: "EGYPT"
        },
        {
            value: "ERI",
            label: "ERITREA"
        },
        {
            value: "ESH",
            label: "WESTERN SAHARA"
        },
        {
            value: "ESP",
            label: "SPAIN"
        },
        {
            value: "EST",
            label: "ESTONIA"
        },
        {
            value: "ETH",
            label: "ETHIOPIA"
        },
        {
            value: "FIN",
            label: "FINLAND"
        },
        {
            value: "FJI",
            label: "FIJI"
        },
        {
            value: "FLK",
            label: "FALKLAND ISLANDS (MALVINAS)"
        },
        {
            value: "FRA",
            label: "FRANCE"
        },
        {
            value: "FRO",
            label: "FAEROE ISLANDS"
        },
        {
            value: "FSM",
            label: "MICRONESIA, FEDERATED STATES OF"
        },
        {
            value: "GAB",
            label: "GABON"
        },
        {
            value: "GBR",
            label: "UNITED KINGDOM"
        },
        {
            value: "GEO",
            label: "GEORGIA"
        },
        {
            value: "GGY",
            label: "GUERNSEY"
        },
        {
            value: "GHA",
            label: "GHANA"
        },
        {
            value: "GIB",
            label: "GIBRALTAR"
        },
        {
            value: "GIN",
            label: "GUINEA"
        },
        {
            value: "GLP",
            label: "GUADELOUPE"
        },
        {
            value: "GMB",
            label: "GAMBIA"
        },
        {
            value: "GNB",
            label: "GUINEA-BISSAU"
        },
        {
            value: "GNQ",
            label: "EQUATORIAL GUINEA"
        },
        {
            value: "GRC",
            label: "GREECE"
        },
        {
            value: "GRD",
            label: "GRENADA"
        },
        {
            value: "GRL",
            label: "GREENLAND"
        },
        {
            value: "GTM",
            label: "GUATEMALA"
        },
        {
            value: "GUF",
            label: "FRENCH GUIANA"
        },
        {
            value: "GUM",
            label: "GUAM"
        },
        {
            value: "GUY",
            label: "GUYANA"
        },
        {
            value: "HKG",
            label: "HONG KONG"
        },
        {
            value: "HMD",
            label: "HEARD AND MCDONALD ISLANDS"
        },
        {
            value: "HND",
            label: "HONDURAS"
        },
        {
            value: "HRV",
            label: "CROATIA"
        },
        {
            value: "HTI",
            label: "HAITI"
        },
        {
            value: "HUN",
            label: "HUNGARY"
        },
        {
            value: "IDN",
            label: "INDONESIA"
        },
        {
            value: "IMN",
            label: "ISLE OF MAN"
        },
        {
            value: "IND",
            label: "INDIA"
        },
        {
            value: "IOT",
            label: "BRITISH INDIAN OCEAN TERRITORY"
        },
        {
            value: "IRL",
            label: "IRELAND"
        },
        {
            value: "IRN",
            label: "IRAN"
        },
        {
            value: "IRQ",
            label: "IRAQ"
        },
        {
            value: "ISL",
            label: "ICELAND"
        },
        {
            value: "ISR",
            label: "ISRAEL"
        },
        {
            value: "ITA",
            label: "ITALY"
        },
        {
            value: "JAM",
            label: "JAMAICA"
        },
        {
            value: "JEY",
            label: "JERSEY (CHANNEL ISLANDS)"
        },
        {
            value: "JOR",
            label: "JORDAN "
        },
        {
            value: "JPN",
            label: "JAPAN"
        },
        {
            value: "KAZ",
            label: "KAZAKHSTAN"
        },
        {
            value: "KEN",
            label: "KENYA"
        },
        {
            value: "KGZ",
            label: "KYRGYZSTAN"
        },
        {
            value: "KHM",
            label: "CAMBODIA"
        },
        {
            value: "KIR",
            label: "KIRIBATI"
        },
        {
            value: "KNA",
            label: "ST.KITTS AND NEVIS"
        },
        {
            value: "KOR",
            label: "THE REPUBLIC OF KOREA"
        },
        {
            value: "KWT",
            label: "KUWAIT"
        },
        {
            value: "LAO",
            label: "LAOS"
        },
        {
            value: "LBN",
            label: "LEBANON"
        },
        {
            value: "LBR",
            label: "LIBERIA"
        },
        {
            value: "LBY",
            label: "LIBYAN ARAB JAMAHIRIYA"
        },
        {
            value: "LCA",
            label: "SAINT LUCIA "
        },
        {
            value: "LIE",
            label: "LIECHTENSTEIN "
        },
        {
            value: "LKA",
            label: "SRI LANKA  "
        },
        {
            value: "LSO",
            label: "LESOTHO"
        },
        {
            value: "LTU",
            label: "LITHUANIA"
        },
        {
            value: "LUX",
            label: "LUXEMBOURG"
        },
        {
            value: "LVA",
            label: "LATVIA "
        },
        {
            value: "MAC",
            label: "MACAO"
        },
        {
            value: "MAF",
            label: "SAINT MARTIN (FRENCH PART)"
        },
        {
            value: "MAR",
            label: "MOROCCO"
        },
        {
            value: "MCO",
            label: "MONACO"
        },
        {
            value: "MDA",
            label: "MOLDOVA, REPUBLIC OF"
        },
        {
            value: "MDG",
            label: "MADAGASCAR"
        },
        {
            value: "MDV",
            label: "MALDIVES"
        },
        {
            value: "MEX",
            label: "MEXICO"
        },
        {
            value: "MHL",
            label: "MARSHALL ISLANDS "
        },
        {
            value: "MKD",
            label: "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF"
        },
        {
            value: "MLI",
            label: "MALI"
        },
        {
            value: "MLT",
            label: "MALTA"
        },
        {
            value: "MMR",
            label: "MYANMAR"
        },
        {
            value: "MNE",
            label: "MONTENEGRO"
        },
        {
            value: "MNG",
            label: "MONGOLIA "
        },
        {
            value: "MNP",
            label: "NORTHERN MARIANA ISLANDS"
        },
        {
            value: "MOZ",
            label: "MOZAMBIQUE"
        },
        {
            value: "MRT",
            label: "MAURITANIA"
        },
        {
            value: "MSR",
            label: "MONTSERRAT"
        },
        {
            value: "MTQ",
            label: "MARTINIQUE"
        },
        {
            value: "MUS",
            label: "MAURITIUS"
        },
        {
            value: "MWI",
            label: "MALAWI"
        },
        {
            value: "MYS",
            label: "MALAYSIA"
        },
        {
            value: "MYT",
            label: "MAYOTTE"
        },
        {
            value: "NAM",
            label: "NAMIBIA"
        },
        {
            value: "NCL",
            label: "NEW CALEDONIA "
        },
        {
            value: "NER",
            label: "NIGER"
        },
        {
            value: "NFK",
            label: "NORFOLK ISLAND"
        },
        {
            value: "NGA",
            label: "NIGERIA"
        },
        {
            value: "NIC",
            label: "NICARAGUA"
        },
        {
            value: "NIU",
            label: "NIUE"
        },
        {
            value: "NLD",
            label: "NETHERLANDS"
        },
        {
            value: "NOR",
            label: "NORWAY"
        },
        {
            value: "NPL",
            label: "NEPAL"
        },
        {
            value: "NRU",
            label: "NAURU"
        },
        {
            value: "NZL",
            label: "NEW ZEALAND "
        },
        {
            value: "OMN",
            label: "OMAN"
        },
        {
            value: "PAK",
            label: "PAKISTAN"
        },
        {
            value: "PAN",
            label: "PANAMA"
        },
        {
            value: "PCN",
            label: "PITCAIRN"
        },
        {
            value: "PER",
            label: "PERU"
        },
        {
            value: "PHL",
            label: "PHILIPPINES"
        },
        {
            value: "PLW",
            label: "PALAU"
        },
        {
            value: "PNG",
            label: "PAPUA NEW GUINEA"
        },
        {
            value: "POL",
            label: "POLAND"
        },
        {
            value: "PRI",
            label: "PUERTO RICO"
        },
        {
            value: "PRK",
            label: "DEMOC.PEOPLES REP.OF KOREA"
        },
        {
            value: "PRT",
            label: "PORTUGAL"
        },
        {
            value: "PRY",
            label: "PARAGUAY"
        },
        {
            value: "PSE",
            label: "PALESTINIAN TERRITORY, OCCUPIED"
        },
        {
            value: "PYF",
            label: "FRENCH POLYNESIA"
        },
        {
            value: "QAT",
            label: "QATAR"
        },
        {
            value: "REU",
            label: "REUNION"
        },
        {
            value: "ROU",
            label: "ROMANIA"
        },
        {
            value: "RUS",
            label: "RUSSIAN FEDERATION (USSR)"
        },
        {
            value: "RWA",
            label: "RWANDA"
        },
        {
            value: "SAU",
            label: "SAUDI ARABIA"
        },
        {
            value: "SDN",
            label: "SUDAN"
        },
        {
            value: "SEN",
            label: "SENEGAL"
        },
        {
            value: "SGP",
            label: "SINGAPORE"
        },
        {
            value: "SGS",
            label: "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLAND"
        },
        {
            value: "SHN",
            label: "ST. HELENA "
        },
        {
            value: "SJM",
            label: "SVALBARD AND JAN MAYEN ISLANDS"
        },
        {
            value: "SLB",
            label: "SOLOMON ISLANDS"
        },
        {
            value: "SLE",
            label: "SIERRA LEONE"
        },
        {
            value: "SLV",
            label: "EL SALVADOR"
        },
        {
            value: "SMR",
            label: "SAN MARINO"
        },
        {
            value: "SOM",
            label: "SOMALIA"
        },
        {
            value: "SPM",
            label: "ST. PIERRE AND MIQUELON"
        },
        {
            value: "SRB",
            label: "SERBIA & MONTENEGRO "
        },
        {
            value: "SSD",
            label: "SOUTH SUDAN"
        },
        {
            value: "STP",
            label: "SAO TOME AND PRINCIPE"
        },
        {
            value: "SUR",
            label: "SURINAME"
        },
        {
            value: "SVK",
            label: "SLOVAK REPUBLIC"
        },
        {
            value: "SVN",
            label: "SLOVENIA"
        },
        {
            value: "SWE",
            label: "SWEDEN"
        },
        {
            value: "SWZ",
            label: "ESWATINI, KINGDOM OF (SWAZILAND)"
        },
        {
            value: "SXM",
            label: "SINT MAARTEN (DUTCH PART)"
        },
        {
            value: "SYC",
            label: "SEYCHELLES"
        },
        {
            value: "SYR",
            label: "SYRIAN ARAB REPUBLIC"
        },
        {
            value: "TCA",
            label: "TURKS AND CAICOS ISLANDS"
        },
        {
            value: "TCD",
            label: "CHAD"
        },
        {
            value: "TGO",
            label: "TOGO"
        },
        {
            value: "THA",
            label: "THAILAND"
        },
        {
            value: "TJK",
            label: "TAJIKISTAN"
        },
        {
            value: "TKL",
            label: "TOKELAU"
        },
        {
            value: "TKM",
            label: "TURKMENISTAN"
        },
        {
            value: "TLS",
            label: "TIMOR-LESTE "
        },
        {
            value: "TON",
            label: "TONGA"
        },
        {
            value: "TTO",
            label: "TRINIDAD AND TOBAGO"
        },
        {
            value: "TUN",
            label: "TUNISIA"
        },
        {
            value: "TUR",
            label: "TURKIYE "
        },
        {
            value: "TUV",
            label: "TUVALU"
        },
        {
            value: "TWN",
            label: "TAIWAN"
        },
        {
            value: "TZA",
            label: "TANZANIA UNITED REPUBLIC"
        },
        {
            value: "UGA",
            label: "UGANDA"
        },
        {
            value: "UKR",
            label: "UKRAINE"
        },
        {
            value: "UMI",
            label: "UNITED STATES MINOR OUTLYING ISLANDS"
        },
        {
            value: "URY",
            label: "URUGUAY"
        },
        {
            value: "USA",
            label: "UNITED STATES OF AMERICA"
        },
        {
            value: "UZB",
            label: "UZBEKISTAN"
        },
        {
            value: "VAT",
            label: "VATICAN CITY STATE (HOLY SEE)"
        },
        {
            value: "VCT",
            label: "SAINT VINCENT AND GRENADINES"
        },
        {
            value: "VEN",
            label: "VENEZUELA"
        },
        {
            value: "VGB",
            label: "VIRGIN ISLANDS(BRITISH)"
        },
        {
            value: "VIR",
            label: "VIRGIN ISLANDS(US)"
        },
        {
            value: "VNM",
            label: "VIETNAM"
        },
        {
            value: "VUT",
            label: "VANUATU"
        },
        {
            value: "WLF",
            label: "WALLIS AND FUTUNA ISLANDS"
        },
        {
            value: "WSM",
            label: "SAMOA"
        },
        {
            value: "YEM",
            label: "YEMEN"
        },
        {
            value: "ZAF",
            label: "SOUTH AFRICA"
        },
        {
            value: "ZMB",
            label: "ZAMBIA"
        },
        {
            value: "ZWE",
            label: "ZIMBABWE"
        }
      ]
);

const classification = () => (
    [
        {
            value: "001",
            label: "Breastfeeding equipment "
        },
        {
            value: "002",
            label: "Child care centres and kindergartens fees"
        },
        {
            value: "003",
            label: "Computer, smartphone or tablet"
        },
        {
            value: "004",
            label: "Consolidated e-Invoice "
        },
        {
            value: "005",
            label: "Construction materials (as specified under Fourth Schedule of the Lembaga Pembangunan Industri Pembinaan Malaysia Act 1994)"
        },
        {
            value: "006",
            label: "Disbursement "
        },
        {
            value: "007",
            label: "Donation"
        },
        {
            value: "008",
            label: "e-Commerce - e-Invoice to buyer / purchaser"
        },
        {
            value: "009",
            label: "e-Commerce - Self-billed e-Invoice to seller, logistics, etc. "
        },
        {
            value: "010",
            label: "Education fees"
        },
        {
            value: "011",
            label: "Goods on consignment (Consignor)"
        },
        {
            value: "012",
            label: "Goods on consignment (Consignee)"
        },
        {
            value: "013",
            label: "Gym membership"
        },
        {
            value: "014",
            label: "Insurance - Education and medical benefits"
        },
        {
            value: "015",
            label: "Insurance - Takaful or life insurance"
        },
        {
            value: "016",
            label: "Interest and financing expenses"
        },
        {
            value: "017",
            label: "Internet subscription "
        },
        {
            value: "018",
            label: "Land and building"
        },
        {
            value: "019",
            label: "Medical examination for learning disabilities and early intervention or rehabilitation treatments of learning disabilities"
        },
        {
            value: "020",
            label: "Medical examination or vaccination expenses"
        },
        {
            value: "021",
            label: "Medical expenses for serious diseases"
        },
        {
            value: "022",
            label: "Others"
        },
        {
            value: "023",
            label: "Petroleum operations (as defined in Petroleum (Income Tax) Act 1967)"
        },
        {
            value: "024",
            label: "Private retirement scheme or deferred annuity scheme "
        },
        {
            value: "025",
            label: "Motor vehicle"
        },
        {
            value: "026",
            label: "Subscription of books / journals / magazines / newspapers / other similar publications"
        },
        {
            value: "027",
            label: "Reimbursement "
        },
        {
            value: "028",
            label: "Rental of motor vehicle"
        },
        {
            value: "029",
            label: "EV charging facilities (Installation, rental, sale / purchase or subscription fees) "
        },
        {
            value: "030",
            label: "Repair and maintenance"
        },
        {
            value: "031",
            label: "Research and development "
        },
        {
            value: "032",
            label: "Foreign income "
        },
        {
            value: "033",
            label: "Self-billed - Betting and gaming "
        },
        {
            value: "034",
            label: "Self-billed - Importation of goods "
        },
        {
            value: "035",
            label: "Self-billed - Importation of services"
        },
        {
            value: "036",
            label: "Self-billed - Others"
        },
        {
            value: "037",
            label: "Self-billed - Monetary payment to agents, dealers or distributors "
        },
        {
            value: "038",
            label: "Sports equipment, rental / entry fees for sports facilities, registration in sports competition or sports training fees imposed by associations / sports clubs / companies registered with the Sports Commissioner or Companies Commission of Malaysia and carrying out sports activities as listed under the Sports Development Act 1997"
        },
        {
            value: "039",
            label: "Supporting equipment for disabled person"
        },
        {
            value: "040",
            label: "Voluntary contribution to approved provident fund "
        },
        {
            value: "041",
            label: "Dental examination or treatment"
        },
        {
            value: "042",
            label: "Fertility treatment"
        },
        {
            value: "043",
            label: "Treatment and home care nursing, daycare centres and residential care centers"
        },
        {
            value: "044",
            label: "Vouchers, gift cards, loyalty points, etc"
        },
        {
            value: "045",
            label: "Self-billed - Non-monetary payment to agents, dealers or distributors"
        }
    ]
);
export { eInvoiceTypes, taxType, state, country,classification };