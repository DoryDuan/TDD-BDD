<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input
        placeholder="todo Item"
        class="header-input"
        data-test="header-input"
        :value="inputValue"
        @input="(e)=>changeInputValue(e.target.value)"
        @keyup.enter="addTodoItem"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      // inputValue: ""
    };
  },
  computed: {
    ...mapState(['inputValue'])
  },
  methods: {
    addTodoItem() {
      if (this.inputValue) {
        this.$emit("add", this.inputValue);
        this.changeInputValue("");
      }
    },
    ...mapMutations(["changeInputValue"])
  }
};
</script>

<style scoped lang="stylus">
.header {
  background: #000;
  line-height: 60px;
}

.header-content {
  width: 600px;
  margin: 0 auto;
  color: #fff;
}

.header-input {
  float: right;
  width: 360px;
  line-height: 24px;
  outline: none;
  margin-top: 16px;
  text-indent: 10px;
  color: #333;
}
</style>
