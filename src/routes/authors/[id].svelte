<script context="module">
  export const load = async({page, fetch}) => {
    let id = page.params.id
    const userRes = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
    const user = await userRes.json()
  
  
    return {
      props: {
        user
      }
    }
  }
  </script>

  <script>
    export let user
  </script>

  <h3>Author: {user.name}</h3>
  <p>Company: {user.company.name}</p>
  <p>Email: {user.email}</p>
  