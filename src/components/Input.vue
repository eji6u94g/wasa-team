<template>
  <div class="input-container">
    <div>
      <input v-if="inputType === 'text'" type="text" v-model="InputValue" />

      <div v-else-if="inputType === 'radio'">
        <input
          type="radio"
          name="radio"
          id="hey"
          value="hey"
          v-model="InputValue"
        />
        <label for="hey">hey</label>
        <input
          type="radio"
          name="radio"
          id="hi"
          value="hi"
          v-model="InputValue"
        />
        <label for="hi">hi</label>
        <input
          type="radio"
          name="radio"
          id="hello"
          value="hello"
          v-model="InputValue"
        />
        <label for="hello">hello</label>
      </div>

      <select v-else name="selectValue" id="select" v-model="InputValue">
        <option
          v-for="(value, index) in selectValue"
          :key="index"
          :value="value"
        >
          {{ value }}
        </option>
      </select>
    </div>

    <div>
      <p>輸入為 {{ InputValue ? InputValue : "未選擇或輸入" }}</p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "Input",
  props: {
    inputType: {
      type: String,
      default: "text",
    },
  },
  setup(props) {
    const selectValue = ref([1, 2, 3, 4]);
    const InputValue = ref(null);

    watch(
      () => props.inputType,
      (newValue, oldValue) => {
        InputValue.value = null;
      }
    );

    return { props, selectValue, InputValue };
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  div {
    color: var(--input-font);
  }
}
</style>
