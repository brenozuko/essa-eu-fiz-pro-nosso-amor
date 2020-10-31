<template>
<div>
<div class="arrow bounce">
  <button @click="showText()">
  <a class="fa fa-arrow-down fa-2x"></a>
  </button>
</div>

</div>
</template>

<script>
export default {

  data() {
    return {
      valueToCommit: 0
    }
  },


  methods: {
    showText(){
       let value = this.valueToCommit
        if(value < 4){
          this.valueToCommit++
          value = this.valueToCommit
        }
          this.$store.commit("text/setTextValue", value);

    }
  }
}
</script>

<style lang="scss">

.arrow {
  text-align: center;
  margin: 8% 0;

  a{
    color: white;
    text-decoration: none;
}
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
