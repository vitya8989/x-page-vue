<script setup>
    import { toRefs, computed } from 'vue'

    const props = defineProps({
        data: {},
    })
    const { data } = toRefs(props)
    const img = computed(() => {
       return require(`@/assets/img/news/${data.value.img}`)
    })
    const isBig = data.value.isBig
</script>

<template>
    <a class="news__item news_item" :class="{'this--big': isBig}" href="#">
        <div class="news_item__top">
            <div class="news_item__img"><img :src="img" alt=""/></div>
        </div>
        <div class="news_item__bottom">
            <div class="news_item__tags tags">
                <div class="tags_group">
                    <div class="tag" v-for="tag in data.tags" :key="tag">{{tag}}</div>
                </div>
                <div class="tags_group">
                    <div class="tag this--date">{{data.date}}</div>
                </div>
            </div>
            <div class="news_item__title">{{data.title}}</div>
            <div class="news_item__text" v-if="data.text">{{data.text}}</div>
        </div>
    </a>
</template>

