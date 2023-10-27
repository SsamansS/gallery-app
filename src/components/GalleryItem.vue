<template>
    <div class="card">
        <img 
            src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/2268018/87c979797015bf0f00bd98cb5a8fff9f/960"
            
        />
    </div>
</template>

<style lang="scss" scoped>
    .card {
    width: 200px; /* Ширина карточки */
    height: 300px; /* Высота карточки */
    border: 1px solid #ccc;
    text-align: center;
    }

    .card img {
    width: 100%; /* Изображение заполнит 100% ширины родительской карточки */
    height: 100%; /* Изображение заполнит 100% высоты родительской карточки */
    object-fit: cover; /* Сохранит соотношение сторон и обрежет изображение, чтобы оно полностью заполнило блок */
    }
</style>