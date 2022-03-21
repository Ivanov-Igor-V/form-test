<template>
  <div class="form">
    <h4 class="form__header">Персональные данные</h4>

    <div class="form__parent">
      <div class="form-parent">
        <label class="form__label" for="name">Имя</label>
        <input type="text" name="name" class="input" v-model="this.user.name" />
      </div>
      <div class="form-parent">
        <label class="form__label" for="age">Возраст</label>
        <input type="text" name="age" class="input" v-model="this.user.age" />
      </div>
    </div>
    <div class="form__new-child">
      <h4 class="form__children-header">Дети (макс. 5)</h4>
      <button class="btn" v-if="user.children.length < 5" @click="childInc">
        <fa icon="plus" style="margin-right: 8px" />
        <span> Добавить ребенка </span>
      </button>
    </div>
    <div v-for="(child, i) of user.children" :key="i" class="form__children">
      <div class="form-child">
        <label class="form__label" for="name">Имя</label>
        <input
          type="text"
          name="name"
          class="input input_small"
          v-model="this.user.children[i].name"
        />
      </div>
      <div class="form-child">
        <label class="form__label" for="age">Возраст</label>
        <input
          type="text"
          name="age"
          class="input input_small"
          v-model="this.user.children[i].age"
        />
      </div>
      <button class="btn btn_non-border" @click="deleteChild(child)">
        Удалить
      </button>
    </div>
    <button class="btn-save" @click="sendUser">Сохранить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: "",
        children: [],
      },
    };
  },
  computed: {},
  methods: {
    childInc() {
      this.childQuatity++;
      this.user.children.push({
        name: "",
        age: "",
        id: Date.now(),
      });
    },
    childDec() {
      if (this.childQuatity >= 0) this.childQuatity--;
    },
    deleteChild(child) {
      this.user.children = this.user.children.filter(
        (el) => el.id !== child.id
      );
    },
    sendUser() {
      this.$emit("transfer", this.user);
    },
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
}
.form__parent {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 33px;
  position: relative;
}

.form-parent {
  position: relative;
  background: #ffffff;
  height: 56px;
  margin-bottom: 11px;
}

.form-child {
  position: relative;
}

.form__label {
  position: absolute;
  height: 16px;
  left: 16px;
  right: 571px;
  top: 8px;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: rgba(17, 17, 17, 0.48);
}

.input {
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  align-self: start;
  width: 616px;
  box-sizing: border-box;
  height: 56px;
  padding: 20px 14px 6px 14px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

@media (max-width: 630px) {
  .input {
    width: 300px;
  }
}

.input_small {
  width: 260px;
  margin-right: 18px;
}

.form__new-child {
  display: flex;
  flex-direction: row;
  width: inherit;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 11px;
  height: 44px;
  flex-wrap: wrap;
}
.btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  width: 204px;
  height: 44px;
  border: 2px solid #01a7fd;
  box-sizing: border-box;
  border-radius: 100px;
  color: #01a7fd;
}

.btn_non-border {
  border: none;
}

.form__children {
  width: 260px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.btn-save {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  background: #01a7fd;
  border-radius: 100px;
  height: 44px;
  width: 118px;
  line-height: 24px;
  display: flex;
  text-align: center;
  color: #ffffff;
  align-self: flex-start;
}

.form__header {
  align-self: start;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
}

.form__children-header {
  font-weight: 500;
  font-size: 16px;
}
</style>
