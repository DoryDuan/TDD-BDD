<template>
  <div>
    <Header @add="addUndoItem" />
    <UndoList
      :list="undoList"
      @delete="handleItemDelete"
      @status="handleItemChangeStatus"
      @reset="handleItemResetStatus"
      @changeValue="changeItemValue"
    />
  </div>
</template>

<script>
import Header from "@/containers/TodoList/components/Header.vue";
import UndoList from "@/containers/TodoList/components/UndoList.vue";
import axios from "axios";
export default {
  name: "TodoList",
  data() {
    return {
      undoList: []
    };
  },
  props: {},
  components: { Header, UndoList },
  mounted() {
    axios
      .get("/getUndoList.json")
      .then(res => {
        // console.log(res.data);
        this.undoList = [...res.data];
      })
      .catch(e => {});
  },
  methods: {
    addUndoItem(inputValue) {
      this.undoList.push({
        status: "div",
        value: inputValue
      });
    },
    handleItemDelete(index) {
      this.undoList.splice(index, 1);
    },
    handleItemChangeStatus(index) {
      this.undoList[index].status = "input";
    },
    handleItemResetStatus(index) {
      this.undoList[index].status = "div";
    },
    changeItemValue(obj) {
      this.undoList[obj.index].value = obj.value;
    }
  }
};
</script>

<style scoped lang="stylus"></style>
