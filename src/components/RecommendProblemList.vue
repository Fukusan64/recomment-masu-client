<template>
  <div>
    <h2 class="title is-5">recommented problem</h2>
    <section>
      <b-field grouped group-multiline>
        <div class="control">
          <b-switch @input="val => input('abc', val)" v-model="ignoreList.abc">ABC問題を非表示</b-switch>
        </div>
      </b-field>
      <b-table
      :data="problems"
      bordered
      striped
      narrowed
      mobile-cards
      paginated
      per-page="20"
      :current-page="currentPage"
      @page-change="ChangePageQuery"
      :pagination-simple="true"
      :loading="isLoading"
      >
        <template slot-scope="props">
          <b-table-column field="problem" label="Problem" centered>
            {{ props.row.problem }}
          </b-table-column>
          <b-table-column field="evaluationValue" label="Evaluation value" centered>
            {{ props.row.evaluationValue }}
          </b-table-column>
          <b-table-column field="link" label="Link" centered>
              <b-tooltip :label="props.row.link" position="is-left">
              <a class="button is-link is-outlined is-small" :href="props.row.link">Link</a>
            </b-tooltip>
          </b-table-column>
        </template>
        <template slot="empty">
          <section class="section">
            <div class="content has-text-grey has-text-centered">
              <p>
                <b-icon
                    icon="emoticon-sad"
                    size="is-large">
                </b-icon>
              </p>
              <p>Nothing here.</p>
            </div>
          </section>
        </template>
      </b-table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ignoreList: {
        abc: this.$route.query.ignoreabc || false,
      },
      currentPage: this.$route.query.page || 1,
    }
  },
  computed: {
    problems() {
      return this.$store.getters['recommendProblemList/filteredProblemList'](this.ignoreList);
    },
    isLoading() {
      return this.$store.state.recommendProblemList.listStatus === 'loading';
    }
  },
  methods: {
    input(param,val) {
      this.ignoreList[param] = val;
      this.$router.push({ path: '/', query: { ...this.$route.query, [`ignore${param}`]: val }});
    },
    ChangePageQuery(page) {
      this.$router.push({ path: '/', query: { ...this.$route.query, page }});
    }
  },
}
</script>
