<template>
  <div class="mx-auto" style="max-width: 1100px">
    <Header />
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="foto in foto_album" :key="foto.url">
        <div
          class="border-foto"
          :style="`background-image: url(${foto.url})`"
        ></div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <div class="py-4 mb-8">
      <p class="poem-style">- Todas as cartas de amor são ridículas</p>
      <p class="poem-style ml-3">Se não fossem ridículas</p>
      <p class="poem-style ml-3">Não seriam cartas de amor</p>
      <p class="poem-style"></p>
    </div>

    <div
      :class="{ 'fade-enter': showText >= 1, hidden: showText < 1 }"
      class="py-4"
    >
      <p class="homenage-style">
        Talvez de todas as formas ridículas que eu poderia te presentear, esta
        seja a melhor.
      </p>
    </div>

    <div
      :class="{ 'fade-enter': showText >= 2, hidden: showText < 2 }"
      class="py-4"
    >
      <p class="homenage-style">
        Afinal ela é única, escala e sempre vai receber atualizações de tudo que
        somos.
      </p>
    </div>

    <div
      :class="{ 'fade-enter': showText >= 3, hidden: showText < 3 }"
      class="py-4"
    >
      <p class="homenage-style">Obrigado por 10 anos incríveis.</p>
    </div>

    <Arrow v-if="showText <= 3" />

    <div class="py-8 flex justify-center" v-if="showText >= 4">
      <button class="button-love">Clica Aqui</button>
    </div>
  </div>
</template>

<script>
import fotos from "../static/json/fotos.json";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-autoplay",
  title: "Autoplay",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      foto_album: fotos,
    };
  },

  computed: {
    showText() {
      return this.$store.state.text.numberText;
    },
  },
};
</script>


<style lang="scss">
.fade-enter {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}

.button-love {
  font-size: 36px;
  box-shadow: 0 0 10px #fff;
  transition: hover 800ms linear;

  @apply bg-transparent border rounded-full p-6 px-10 border-white text-white;

  &:focus {
    @apply outline-none;
  }
}

.button-love:hover {
  animation: glow 3s infinite;
}

.poem-style {
  @apply text-center text-white text-2xl leading-none;
}

.homenage-style {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 24px;
  max-width: 50%;

  @apply mx-auto text-center text-white leading-tight;
}
.border-foto {
  width: 315px;
  height: 300px;
  @apply bg-cover mx-auto bg-no-repeat my-16;
}

@media (min-width: 768px) {
  .border-foto {
    width: 700px;
    height: 600px;
  }

  .poem-style {
    @apply text-4xl;
  }
}
</style>
