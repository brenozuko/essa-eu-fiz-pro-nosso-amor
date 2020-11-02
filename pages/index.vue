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

    <div class="flex justify-center">
      <audio
        :src="
          require('@/assets/audio/Perfect - Ed e Andrea.mp3')
        "
        controls
      ></audio>
    </div>

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
        Não há pessoa mais especial, mais querida, mais amada e com mais espaço no meu coração do que você. Tu me fez crescer, me ensinou a amar e é parte ativa na construção de tudo que sou. Eu não poderia ser mais grato.
      </p>
    </div>

    <div
      :class="{ 'fade-enter': showText >= 3, hidden: showText < 3 }"
      class="py-4"
    >
      <p class="homenage-style">Obrigado por 10 anos incríveis, meu amor. <br/> De sempre, pra sempre</p>
    </div>

    <Arrow v-if="showText <= 3" />


    <LoveYou  v-if="showText >= 4"/>
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



  .swiper-button-prev,
  .swiper-button-next {
    &::after {
      color: white;
    }
  }

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


.poem-style {
  @apply text-center text-white text-2xl leading-none;
}

.homenage-style {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 18px;
  max-width: 80%;
  line-height: 20px;

  @apply mx-auto text-center text-white;
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


  .homenage-style {
  font-size: 24px;
  max-width: 50%;

  @apply leading-tight;
}

}
</style>
