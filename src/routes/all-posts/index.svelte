<script context="module">
  export const load = async({fetch}) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return {
      props: {
        posts
      }
    }
  }
</script>

<script>
  import { paginate, LightPaginationNav } from 'svelte-paginate'
  export let posts

  let items = posts.reverse()
  let currentPage = 1
  let pageSize = 4
  $: paginatedItems = paginate({ items, pageSize, currentPage })


</script>

<h1>All Posts</h1>

<a href="../" style="float:right">Search for posts</a>

<br>


<div class="posts">
  {#each paginatedItems as item}
    <div class="post">
      <h2>{item.title.substring(0, 30)}</h2>
      <p>{item.body.substring(0, 80)}</p>
      <p class="link"><a href={`../blog/${item.id}`}>Read more</a></p>
    </div>
  {/each}
</div>

<LightPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/>

<style>
  .posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: 30px 0;
  }

  .post {
    padding: 10px;
    border: 1px solid #ddd;
    box-shadow: 0 0 15px #eee;
  }

  h2 {
    margin: 0;
  }

  .link {
    text-align: right;
  }

</style>