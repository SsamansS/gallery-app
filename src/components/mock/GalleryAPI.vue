<template>
  <div>{{ arts }}</div>
</template>

<script lang="ts">
import axios from "axios";
import {type MuseumArtIDs, type ArtsType, type ArtType} from '../../types/MuseumAPITypes.ts'
import { getParseTreeNode } from "typescript";

export default {
  name: "App",
  data() {
    return {
      artIDs: [] as MuseumArtIDs,
      arts: [] as ArtsType
    };
  },
  methods: {
    async getAnswer() {
      const { data } = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects");
      this.artIDs = data.objectIDs;
    },
    async getArts() {
      for (const id of this.artIDs.filter((ID) => ID >= 37 && ID <= 40)) {
        const data: ArtType = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
        await this.arts.push(data);
      }
    }
  },
  async beforeMount() {
    await this.getAnswer();
    await this.getArts();
  },
};
</script>