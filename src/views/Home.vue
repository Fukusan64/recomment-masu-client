<template>
  <div class="container" id="home">
    <h1 class="title">AtCoder Problem Recommenter</h1>
    <UserNameSelector/>
    <RecommendProblemList/>
  </div>
</template>

<script>

import UserNameSelector from '@/components/UserNameSelector'
import RecommendProblemList from '@/components/RecommendProblemList'

export default {
  name: 'home',
  components: {
    UserNameSelector,
    RecommendProblemList,
  }
}
</script>
