<template>
  <div>
    <h1 class="neon">Essa Eu Fiz Pro Nosso Amor</h1>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss">
.neon {
  color: #fff;
  font-size: 40px;
  text-align: center;
  border: 1px solid #fff;
  box-shadow: 0 0 10px #fff;
  max-width: 90%;
  text-shadow: 0 0 20px #fff, 0 0 30px #be2444, 0 0 40px #be2444,
    0 0 50px #be2444, 0 0 60px #be2444, 0 0 70px #be2444, 0 0 80px #be2444;
  filter: blur(0.8px);

  @apply rounded-lg mx-auto py-4 font-bold leading-tight mt-10 px-4;
}

@media (min-width: 768px) {
  .neon {
    font-size: 54px;
    animation: glow 1s ease-in-out infinite alternate;
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff,
        0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #be2444, 0 0 40px #be2444,
        0 0 50px #be2444, 0 0 60px #be2444, 0 0 70px #be2444, 0 0 80px #be2444;
      filter: blur(0.8px);
    }
  }
}
</style>
