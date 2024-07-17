<script setup lang="ts">
const posts = ref()
const {data:fetchposts} = await useFetch("https://jsonplaceholder.typicode.com/posts")
posts.value = fetchposts.value
// const posts = useMyPostsStore()
// await callOnce(posts.fetch)
</script>

<template>
    <h1>Welcome to index</h1>
    <ul>
        <li v-for="post in posts">
            <NuxtLink :to="{name: 'posts-id', params: {id: post.id}}">{{ post.title }}</NuxtLink>
        </li>
    </ul>
</template>