<script lang="ts">
    import GalleryItem from '../components/GalleryItem.vue'
    import axios from 'axios'
    import { VueElement, ref } from 'vue'
    import GalleryAPI from '../components/mock/GalleryAPI.vue';
    import type { ArtsType } from '@/types/MuseumAPITypes';
    import arts from '../components/mock/GalleryAPI.vue'


    export default {
        data() {
            return {
            arts: arts
            };
        }
    };
</script>

<template>
    <p>fdsfds</p>
    <div class="gallery">
        <GalleryItem v-for="photo in arts" :key="photo" />
    </div>
</template>

<style lang="scss" scoped >
    .gallery {
        // text-align: center;
        // margin-top: 10%;
        display: grid;
        grid-template-columns: 200px 200px 200px 200px 200px;  /* Автоматически повторяющиеся колонки с минимальной шириной 150px */
        grid-gap: 10px; /* Расстояние между элементами в галерее */

    }
</style>