<template>
  <div>
    <h2 class="title is-5">recommented problem</h2>
    <b-table
      :data="data"
      bordered
      striped
      narrowed
      mobile-cards
      paginated
      per-page="10"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
        { problem: 'xmascon17_i', evaluationValue: '9.41123e-22', link: 'https://atcoder.jp/contests/kupc2017/tasks/kupc2017_l' },
      ],
    }
  }
}
</script>
