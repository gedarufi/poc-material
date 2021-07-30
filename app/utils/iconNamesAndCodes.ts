const iconHexCodes = {
  "mdi-account-cog": "F1370",
  "mdi-alert": "F0026",
  "mdi-arrow-left": "F004D",
  "mdi-calendar": "F00ED",
  "mdi-cash": "F0114",
  "mdi-check": "F012C",
  "mdi-chevron-down": "F0140",
  "mdi-chevron-right": "F0142",
  "mdi-close": "F0156",
  "mdi-close-circle": "F0159",
  "mdi-domain": "F01D7",
  "mdi-dumbbell": "F01E6",
  "mdi-home-city": "F0D15",
  "mdi-magnify": "F0349",
  "mdi-map-marker": "F034E",
  "mdi-translate": "F05CA",
  "mdi-triangle": "F0536"
};

const encode = (icon: string) => String.fromCodePoint(+`0x${iconHexCodes[icon]}`);

const encoded = {
  mdiAccountCog: encode("mdi-account-cog"),
  mdiAlert: encode("mdi-alert"),
  mdiArrowLeft: encode("mdi-arrow-left"),
  mdiCalendar: encode("mdi-calendar"),
  mdiCash: encode("mdi-cash"),
  mdiCheck: encode("mdi-check"),
  mdiChevronDown: encode("mdi-chevron-down"),
  mdiChevronRight: encode("mdi-chevron-right"),
  mdiClose: encode("mdi-close"),
  mdiCloseCircle: encode("mdi-close-circle"),
  mdiDomain: encode("mdi-domain"),
  mdiDumbbell: encode("mdi-dumbbell"),
  mdiHomeCity: encode("mdi-home-city"),
  mdiMagnify: encode("mdi-magnify"),
  mdiMapMarker: encode("mdi-map-marker"),
  mdiTranslate: encode("mdi-translate"),
  mdiTriangle: encode("mdi-triangle")
};

export {
  encoded
};
