<template>
  <div class="main">
    <h1>FWD-GG</h1>
    <form action="/shortUrls" method="POST" class="my-4 form-inline">
      <label for="fullUrl" class="sr-only">Url</label>
      <br />
      <input
        required
        placeholder="Url"
        type="url"
        name="fullUrl"
        id="fullUrl"
        class="form-control col mr-2"
      />
      <button class="btn btn-success" type="submit">Shrink</button>
    </form>

    <table class="table table-striped table-responsive">
      <thead>
        <tr>
          <th>Full URL</th>
          <th>Short URL</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="shortUrl in shortUrl" :key="shortUrl.shortUrl">
          <td>
            <a :href="shortUrl.full">{{shortUrl.full}}</a>
          </td>
          <td>
            <a :href="shortUrl.short">{{shortUrl.short}}</a>
          </td>
          <td>{{shortUrl.clicks}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      fullUrl: value,
      shortUrl: value,
      clicks: value,
    };
  },
  props: {
    fullUrl: {
      type: String,
      default: "",
    },
    shortUrl: {
      type: String,
      default: "",
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
