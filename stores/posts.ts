import { defineStore } from 'pinia'

interface IPost {
  id: number;
  title: string;
  body: string;
}

interface PostsType {
  posts : IPost[]
}

export const useMyPostsStore = defineStore({
  id: 'myPostsStore',
  state: ():PostsType => ({
    posts: []
   }),
  actions: {
    async fetch() {
      const data:[] = await $fetch("https://jsonplaceholder.typicode.com/posts")
      this.posts = data
    }
  }
})
