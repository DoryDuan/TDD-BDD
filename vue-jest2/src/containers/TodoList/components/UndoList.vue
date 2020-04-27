<template>
  <div class="undo-list">
    <div class="title">
      正在进行
      <span data-test="count" class="count">{{list.length}}</span>
    </div>
    <ul>
      <li
        class="item"
        data-test="list-item"
        v-for="(item,index) in list"
        :key="item.value"
        @click="()=>{changeStatus(index)}"
      >
        <input
          v-if="item.status==='input'"
          data-test="input"
          :value="item.value"
          @blur="()=>handleInputBlur(index)"
          @change="(e)=>handleInputChange(e.target.value,index)"
        />
        <span v-else>{{item.value}}</span>
        <span class="deledte" data-test="delete" @click="()=>handleDelete(index)">-</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UndoList",
  data() {
    return {};
  },
  props: ["list"],
  methods: {
    handleDelete(index) {
      this.$emit("delete", index);
    },
    changeStatus(index) {
      this.$emit("status", index);
    },
    handleInputBlur(index) {
      this.$emit("reset", index);
    },
    handleInputChange(value, index) {
      this.$emit("changeValue", {
        value,
        index
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.undo-list {
  width: 600px;
  margin: 0 auto;
}

.title {
  line-height: 30px;
  font-size: 24px;
  fint-weight: bold;
  margin: 10px 0;
}

.count {
  float: right;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #e6e6e6;
  border-radius: 10px;
  color: #000;
  font-size: 12px;
  margin-top: 5px;
}

.item {
  line-height: 32px;
  font-size: 14px;
  background: #fff;
  border-left: 5px solid #629A9A;
  border-radius: 3px;
  margin-bottom: 10px;
  text-indent: 10px;
}

.deledte {
  float: right;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #e6e6e6;
  border-radius: 10px;
  color: #000;
  font-size: 12px;
  margin-top: 5px;
  text-indent: 0;
  margin-right: 10px;
  cursor: pointer;
}
</style>
