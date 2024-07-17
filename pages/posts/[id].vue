<script setup lang="ts">
    const slug = useRoute()
    definePageMeta({layout: 'blue', layoutTransition: {name: 'fade-in'}})
    const post = ref()
    const {data:fetchpost} = await useFetch(`https://jsonplaceholder.typicode.com/posts/${slug.params.id}`)
    post.value = fetchpost.value
</script>

<template >
    <Head>
        <Title>{{ post.title }}</Title>
    </Head>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
</template>