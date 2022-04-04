<template>
  <div class="comments">
    <div class="comments-header">
      <h3>Comments</h3>
    </div>
    <Disqus shortname="mdeng" />
  </div>
</template>
<script>
import { Disqus } from 'vue-disqus'

export default {
  components: {
    Disqus
  }
}
</script>
<style>
html.dark {
  color-scheme: none;
}
</style>
