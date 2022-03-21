<template>
  <div class="wrapper">
    <div class="preview" v-if="user">
      <h2 class="preview__header">Персональные данные</h2>
      <span class="preview__user"> {{ user.name }}, {{ user.age }} лет </span>
      <div class="preview__user-children">
        <div class="child">
          <h2 class="preview__header">Дети</h2>
          <span
            class="preview__child"
            v-for="child in user.children"
            :key="child"
          >
            {{ child.name }}, {{ child.age }} лет
          </span>
        </div>
      </div>
    </div>
    <div v-else>Не заполнено!</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "alef-preview",
  props: ["user"],
  components: {},
};
</script>

<style scoped>
.wrapper {
  min-width: 616px;
}

.preview {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 100%;
}
.preview__user {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 60px;
}
.preview__header {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
  align-self: start;
}
.preview__child {
  background: #f1f1f1;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 20px;
  margin-bottom: 30px;
}

.child {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}
</style>
