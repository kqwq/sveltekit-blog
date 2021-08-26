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
  export let posts
  let searchTerm = ""

  $: searchedPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  })

  

</script>

<h1>Posts</h1>

<input type="text" placeholder="search" bind:value={searchTerm}>

<a href="/all-posts" style="float:right">See all posts</a>

<div class="posts">
  {#if searchedPosts.length > 0}
  {#each searchedPosts as item}
    <div class="post">
      <h2>{item.title.substring(0, 30)}</h2>
      <p>{item.body.substring(0, 80)}</p>
      <p class="link"><a href={`/blog/${item.id}`}>Read more</a></p>
    </div>
  {/each}
  {:else}
    <p>No posts found with "{searchTerm}"</p>
  {/if}
</div>

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

  input {
    border: 1px solid #ddd;
    padding:10px 12px;
    border-radius: 5px;
  }

  
  @media screen and (max-width: 600px) {
    .posts {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;
      margin: 30px 0;
    }
  }
</style>