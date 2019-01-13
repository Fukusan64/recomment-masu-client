<template>
  <div class="spaceButtom">
    <b-field
      type="is-dark"
    >
      <b-autocomplete
        v-model="inputValue"
        :keep-first="true"
        :data="userNamesArray"
        placeholder="select atCoder user name"
        icon="magnify"
        :loading="isLoading"
        @select="setUserName"
      >
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
  mounted() {
    this.$store.dispatch('userList/getList');
    this.setUserName(this.inputValue);
  },
  data() {
    return {
      inputValue: this.$route.params.userName || '',
    };
  },
  computed: {
    userNamesArray() {
      return this.$store.getters['userList/filteredUserNameList'](this.inputValue);
    },
    isLoading() {
      return this.$store.state.userList.listStatus === 'loading';
    }
  },
  methods: {
    setUserName(userName) {
      if (userName) {
        // eslint-disable-next-line
        this.$store.dispatch('recommendProblemList/getList', userName);
        this.$router.push(`/${userName}`);
      }
    },
  },
}
</script>
