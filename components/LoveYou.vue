<template>
  <div>
    <div class="py-8 flex justify-center">
      <button @click="countSteps()" class="button-love">Clica Aqui</button>
    </div>

    <div id="ILove" class="container-love">
      <h2 v-if="steps >= 1" class="text-love mr-6">Eu</h2>

      <svg v-if="steps >= 2" class="heart" viewBox="0 0 32 29.6">
        <path
          d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
        />
      </svg>

      <h2 v-if="steps >= 3" class="text-love ml-2">Você</h2>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      steps: 0,
    };
  },

  methods: {
    countSteps() {
      let element = document.getElementById("ILove");
      element.scrollIntoView({ block: "end", behavior: "smooth" });

    setInterval(() => {
        if (this.steps <= 3) this.steps++;
      }, 1000);
    },
  },
};
</script>


<style lang="scss">
.button-love {
  font-size: 36px;
  box-shadow: 0 0 10px #fff;
  transition: hover 800ms linear;

  @apply bg-transparent border rounded-full p-6 px-10 border-white text-white;

  &:focus {
    @apply outline-none;
  }
}


.text-love {
  color: #fff;

  font-size: 3em;
  margin-top: 1em;
  text-align: center;
  text-transform: uppercase;
}

.heart {
  fill: red;
  position: relative;
  top: 20px;
  width: 50px;
  animation: pulse 1s ease infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

.container-love {
  margin-top: -78px;
  @apply flex justify-center py-16;
}

@media (min-width: 768px) {
  .button-love:hover {
  animation: glow 3s infinite;
}

}
</style>
