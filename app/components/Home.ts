import Vue from "nativescript-vue";

import ThemeHelper from "../theme-chooser/ThemeHelper";
import { MostUsedIndustry } from "../DTO/MostUsedIndustry";
import { ITdlTypeaheadOption } from "../DTO/TdlTypeaheadOption";

import { encoded as icons } from "../utils/iconNamesAndCodes";
import { countryList } from "./contries";

import NsAutoComplete from "material-v2/dist/ns/NsAutoComplete.vue"

export default Vue.extend({
  components: {
    NsAutoComplete
  },
  mixins: [ThemeHelper],
  computed: {
    title() {
      return "POC Export Material Component";
    },
    styleProperties(): { [key: string]: string } {
      return {
        "--theme-color": this.themeHelper_brandColor
      };
    }
  },
  data() {
    return {
      country: [] as ITdlTypeaheadOption[],
      contriesList: [] as MostUsedIndustry[],
      loading: false,
      mdiCheck: icons.mdiCheck
    };
  },
  methods: {
    autoCompleteTapped() {
      this.$navigateTo(NsAutoComplete, {
        props: {
          selectedItems: this.country,
          fetchList: this.getCountries,
          inputLabel: "Add/select a different country*",
          propertyToBePrompt: "text",
          addNewItem: true,
          addNewItemElement: {
            type: "industry/sector",
            icon: icons.mdiDomain,
            text: "Add new country"
          },
          minChars: 1
        }
      });
    },
    getCountries(query?: string): Promise<ITdlTypeaheadOption[]> {
      return Promise.resolve<ITdlTypeaheadOption[]>(
        countryList.filter(
          (row: ITdlTypeaheadOption) => !query || row.text.toLowerCase().indexOf(query.toLowerCase()) >= 0
        )
      );
    },
    changeCountryStatus(index: number): void {
      this.contriesList[index].active = !this.contriesList[index].active;
    },
  },
  watch: {
    country: {
      handler(newValue) {
        if (newValue[0]) {
          this.contriesList.push(
            {
              code: !!newValue[0].id ? newValue[0].id : undefined,
              name: newValue[0].text,
              locale: "en",
              active: true
            }
          );
          this.country = [];
        }
      },
      deep: true
    }
  }
});
