<template>
  <div class="spaceButtom">
    <b-field
      type="is-dark"
    >
      <b-autocomplete
        :open-on-focus="true"
        v-model="inputValue"
        :data="userNamesArray | userNamesArrayFilter(inputValue)"
        placeholder="select atCoder user name"
        icon="magnify"
        @select="setUserName">
        <template slot="empty">表示可能なユーザーではありません</template>
      </b-autocomplete>
    </b-field>
  </div>
</template>

<style scoped>
.spaceButtom{
  margin-bottom: 1em;
}
</style>


<script>
export default {
  data() {
    return {
      userNamesArray: ['fukusan64', 'masu1208', 'unit'],
      inputValue: '',
    };
  },
  computed: {
  },
  methods: {
    setUserName(userName) {
      if (userName) {
        // eslint-disable-next-line
        console.log(`selected userName: ${userName}`);
      }
    },
  },
  filters: {
    userNamesArrayFilter(userNamesArray, inputValue) {
      const lowerInputVal = inputValue.toLowerCase();
      return userNamesArray.filter((userName) => {
        return userName.toLowerCase().indexOf(lowerInputVal) >= 0;
      });
    },
  },
}
</script>
