<script setup>
    import NewsItem from '@/components/Main/NewsList/NewsItem/NewsItem'
    import { ref } from 'vue';
    import Datepicker from '@vuepic/vue-datepicker';
    import Multiselect from '@vueform/multiselect'

    const date = ref(new Date());
    const format = (date) => {
        const day = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate()
        const month = (date.getMonth() + 1 < 10) ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    const newsItemsData = [{
            id: 1,
            img: '1.jpg',
            tags: ['Медицина, Общество'],
            date: '02/02/2021',
            title: 'Благодаря поддержке предпринимателей. Златоустовские поликлиники оснастили холодильными установками для хранения вакцины'
        },
        {
            id: 2,
            img: '2.jpg',
            tags: ['Медицина'],
            date: '29/01/2021',
            title: 'Госпитальная база закрыта, учреждение вернётся в «доковидный» режим после дезинфекции.  Роддом Златоуста вновь откроет свои двери 8 февраля'
        },
        {
            id: 3,
            img: '3.jpg',
            tags: ['Коммуналка'],
            date: '29/01/2021',
            title: 'Осторожно, сосульки! Оттепель на этой неделе привела к тому, что на крышах многих домов образовались опасные ледяные наросты'
        },
        {
            id: 4,
            img: '4.jpg',
            tags: ['Политика'],
            date: '29/01/2021',
            title: 'В четыре раза меньше вопросов, чем обычно. В Златоусте прошло первое в 2021-м году Собрание депутатов'
        },
        {
            id: 5,
            img: '5.jpg',
            tags: ['Коммуналка'],
            date: '02/02/2021',
            title: 'В Златоусте сотрудники теротдела проверят магазин, из которого выбрасывали строительный мусор на контейнерную площадку'
        },
        {
            id: 6,
            img: '6.jpg',
            tags: ['Общество'],
            date: '02/02/2021',
            title: 'ДЧ: Первое Собрание депутатов 2021 года: планируется работа на весь год'
        },
        {
            id: 7,
            img: '2.jpg',
            tags: ['Медицина'],
            date: '29/01/2021',
            title: 'Госпитальная база закрыта, учреждение вернётся в «доковидный» режим после дезинфекции.  Роддом Златоуста вновь откроет свои двери 8 февраля',
            text: 'Ещё одна главная новость дня — с 8 февраля златоустовский роддом возвращается к привычному формату работы. Госпитальную базу для лечения больных коронавирусной инфекцией переводят...',
            isBig: true,
        },
    ]
    const pickerActive = ref(false)
    const togglePicker = () => {
         pickerActive.value = !pickerActive.value
    }
    const value = null
    const options = [{'label': 'Медицина', disabled: true},'Общество','Коммуналка','Политика','Спорт','Вектор развития','Общество','Коммуналка','Политика']
</script>
<template>
    <section class="news">
        <div class="container">
            <div class="news__content">
                <h1 class="news__title">Все новости</h1>
                <div class="news__breadcrumbs breadcrumbs">
                    <div class="breadcrumbs_wr"><a class="breadcrumb this--link" href="/">Главная<span>/</span></a>
                        <div class="breadcrumb">Новости</div>
                    </div>
                </div>
                <form class="news__form" name="news_form" action="#">
                    <Datepicker class="news__item" @open="togglePicker" @closed="togglePicker" :class="{active: pickerActive}"
                            v-model="date"
                            :format="format"
                            autoApply
                            :dayNames="['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']"
                            position="left"
                            :autoPosition="false"
                            locale="ru"
                            monthNameFormat="long"
                            :enableTimePicker="false"
                           >
                        <template #input-icon>
                            <img class="input-slot-image" src="@/assets/img/icons/calendar.svg"/>
                        </template>
                        <template #clear-icon="{ clear }">
                            <img class="input-slot-image" src="@/assets/img/icons/arrow.svg" @click="clear" />
                        </template>
                        <template #arrow-left>
                            <img class="slot-icon" src="@/assets/img/icons/calendar_arrow.svg"/>
                        </template>
                        <template #arrow-right>
                            <img class="slot-icon this--r180" src="@/assets/img/icons/calendar_arrow.svg"/>
                        </template>
                    </Datepicker>
                    <Multiselect class="news__form_item"
                            v-model="value"
                            :options="options"
                             placeholder="Выбрать рубрику"
                             ref="select"
                    />
                </form>
                <div class="news__items">
                    <NewsItem v-for="itemData in newsItemsData" :key="itemData.id" :data="itemData"/>
                </div>
                <ul class="news__pagination pagination">
                    <li class="pagination__item"><a class="pagination__arrow pagination__prev this--disabled" href="#"></a></li>
                    <li class="pagination__item"><a class="pagination__link active" href="#">1</a></li>
                    <li class="pagination__item"><a class="pagination__link" href="#">2</a></li>
                    <li class="pagination__item"><a class="pagination__link" href="#">3</a></li>
                    <li class="pagination__item"><a class="pagination__link" href="#">4</a></li>
                    <li class="pagination__item">...</li>
                    <li class="pagination__item"><a class="pagination__link" href="#">123</a></li>
                    <li class="pagination__item"><a class="pagination__arrow pagination__next" href="#"></a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

