<template>
  <div>
    <div class="rw-Search flex items-center mb-4">
      <label class="text-gold whitespace-nowrap mr-4">{{ "Search" }}</label>
      <input v-model="searchText" type="text" class="rw-Search-input" @input="onSearchInput" />
    </div>
    <div class="rw-Search flex items-center mb-8 justify-right">
      <label class="text-gold whitespace-nowrap">Item type</label>
      <select v-model="itype" class="rw-Search-select mr-4" @change="onSearchInput">
        <option v-for="itype in ITypes" :key="itype" :value="itype">{{ itype }}</option>
      </select>
      <label class="text-gold whitespace-nowrap">{{ "Version" }}</label>
      <select v-model="version" class="rw-Search-select" @change="onSearchInput">
        <option v-for="ver in VerList" :key="ver" :value="ver">{{ ver }}</option>
      </select>
    </div>

    <div>
      <runewords-table :items="runewordsList" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import runewordsData, { RwVer, ItemTypes } from "@/data/runewords";

import RunewordsTable from "@/components/RunewordsTable.vue";

export default defineComponent({
  name: "Runewords",

  components: {
    RunewordsTable,
  },

  data() {
    return {
      isHelpVisible: false,

      runewordsList: [] as TRunewordItem[],

      searchText: "",
      version: "LOD",
      itype: "ALL",
    };
  },


  computed: {
    ITypes(): string[] {
      const tm = ItemTypes()
      tm.unshift("ALL")
      return tm;
    },
    VerList(): string[] {
      let tm = Object.keys(RwVer);
      tm.unshift("ALL");
      return tm
    },
    Vers(): string[] {
      return RwVer[this.version];
    },
  },

  created() {
    this.runewordsList = runewordsData.slice() as TRunewordItem[];
    this.updateFilter(this.searchText, this.version);
  },

  methods: {
    onSearchInput() {
      this.updateFilter(this.searchText, this.version);
    },


    updateFilter(text: string, ver: string) {
      const vList = RwVer[ver] || [];
      const searchTerm = text.toLowerCase();

      const matches = (item: TRunewordItem) => {
        const matchesTitle = item.title.toLowerCase().includes(searchTerm);
        const matchesType = item.ttypes.some((type) => {
          return type.toLowerCase().includes(searchTerm);
        });
        const matchesVersion = ver == "ALL" || vList.includes(item.version || "");
        const matchesIType = this.itype === "ALL" || item.ttypes.includes(this.itype as TItemTypeId);

        return (matchesVersion) && (matchesIType) && (searchTerm === "" || matchesTitle || matchesType);
      };

      this.runewordsList.forEach((item) => {
        item.filterMatch = matches(item);
      });
    },
  },
});
</script>
