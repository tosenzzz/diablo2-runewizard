<template>
  <rune-popup ref="runePopup" />
  <div class="relative">
    <div class="flex justify-between items-center mb-2">
      <h2 class="rw-Title-h2 mb-0">Runes</h2>

      <div v-if="isAnyRuneSelected" class="-mt-2px">
        <a class="rw-Runes-clear" href="#" @click.prevent="onClearRunes">
          <icon-cancel class="ux-icon ux-icon--fw rw-Runes-clearIcon text-[#da0000] mr-1" />clear
        </a>
      </div>
    </div>
    <h3 class="rw-Title-h2 mb-2">
      <input class="cursor-pointer" type="checkbox" id="hiRW" checked @click="onCheckHideIfNotHave" />
      <label class="cursor-pointer" for="hiRW"> Hide RWs without runes</label>
    </h3>

    <div class="rw-Runes flex justify-between w-[130px] select-none">
      <div v-for="(runesTier, i) in runesByTier" :key="i" class="w-1/3">
        <!-- a single rune -->
        <div v-for="rune in runesTier" :key="rune.name" class="rw-Rune mx-auto"
          :class="{ 'is-selected': haveRunes[rune.name] }" @click="onToggleRune(rune.name)"
          @mouseenter="onEnterRune($event, rune.name)" @mouseleave="onLeaveRune()">
          <span class="mx-auto my-auto">{{ rune.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import runesData, { ERuneTier } from "@/data/runes";
import store from "@/store";

import IconCancel from "@/icons/IconCancel.vue";
import RunePopup from "@/components/RunePopup.vue"

type TRunePopup = TVueInstanceOf<typeof RunePopup>;

export default defineComponent({
  name: "Runes",

  components: {
    IconCancel,
    RunePopup
  },

  data() {
    return {
      haveRunes: store.state.haveRunes,
      runes: runesData,
    };
  },

  computed: {
    isAnyRuneSelected(): boolean {
      return store.getRunes().length > 0;
    },

    runesByTier(): TRuneDef[][] {
      const tiers = [
        this.runes.filter((rune) => rune.tier === ERuneTier.COMMON),
        this.runes.filter((rune) => rune.tier === ERuneTier.SEMIRARE),
        this.runes.filter((rune) => rune.tier === ERuneTier.RARE),
      ];

      // console.log(tiers);

      return tiers;
    },

    runePopup(): TRunePopup {
      return this.$refs.runePopup as TRunePopup;
    },
  },

  methods: {
    onClearRunes() {
      store.clearRunes();
      store.saveState();
    },

    onEnterRune(ev: Event, rune: string) {
      if (!ev.target) return;
      this.runePopup.showRune(rune.toString(), ev.target as HTMLElement);
    },

    onLeaveRune() {
      this.runePopup.setVisible(false);
    },

    onToggleRune(runeId: TRuneId) {
      const state = store.hasRune(runeId);

      store.setRunes([runeId], !state);
      store.saveState();
    },

    onCheckHideIfNotHave(ev: Event) {
      const checkbox = ev.target as HTMLInputElement;
      store.setHideIfNotHave(checkbox.checked);
      store.saveState();
    },
  },
});
</script>
