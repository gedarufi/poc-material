import { materrialColors } from "./MaterrialColors";

export default {
  data() {
    return {
      themeHelper_brandColor: "#CDDC39",
      themeHelper_textTitle: "rgba(255, 255, 255, 0.9)",
      themeHelper_textDisabled: "rgba(255, 255, 255, 0.38)",
      themeHelper_textDefault: "#FFFFFF65",
      themeHelper_entityShadow: "0px 2px 4px rgba(0,0,0,0.5)",
      themeHelper_snackbarBackground: "#E3E3E3",
      themeHelper_textAccentTitle: "rgba(0, 0, 0, 0.87)",
      themeHelper_backgroundElevation1: "#27292D",
      themeHelper_backgroundElevation2: "#383B40",
      themeHelper_backgroundElevation3: "#5E626B",
      themeHelper_whiteOpacity60: "rgba(255, 255, 255, 0.60)"
    };
  },
  methods: {
    themeHelper_themeColor(alpha: number = 1): string {
      const themeColor = materrialColors.filter((color) => color.name === this.mdEffectiveTheme);
      const rgbEquivalent = this.getRGBEquivalent(themeColor && themeColor.length  !== 0 ? themeColor[0].hex : "#CDDC39");

      return `rgba(${rgbEquivalent.r}, ${rgbEquivalent.g}, ${rgbEquivalent.b}, ${alpha})`;
    },
    getRGBEquivalent(hexColor: string): { r: number, g: number, b: number } {
      const colorTest = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
      if (!!colorTest) {
        return {
          r: parseInt(colorTest[1], 16),
          g: parseInt(colorTest[2], 16),
          b: parseInt(colorTest[3], 16)
        };
      }
      return { r: 0, g: 172, b: 193 };
    }
  }
};
