<template>
  <main>
    <div class="computed">{{ computedValue }}</div>

    <button
      v-for="(inputType, index) in inputTypeList"
      :key="index"
      @click.prevent.stop="SetInputType(inputType)"
    >
      {{ inputType }}
    </button>
    
    <Input :inputTypeList="inputTypeList" :inputType="inputType" />
  </main>
</template>

<script>
import Input from "../components/Input.vue";
import { computed, ref } from "vue";

export default {
  name: "Home",
  components: {
    Input,
  },
  setup() {
    const inputTypeList = ref(["text", "radio", "select"]);
    const inputType = ref("text");

    const SetInputType = (value) => {
      inputType.value = value;
    };

    const computedValue = computed(() => {
      return "你選擇了 " + inputType.value;
    });

    return { inputTypeList, SetInputType, inputType, computedValue };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/mixin.scss";

div {
  &.computed {
    color: var(--computed-font);
  }
}

button {
  @include button;
}
</style>
