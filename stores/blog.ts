type State = {
  posts: IPost[] | unknown;
}

export const useStoreBlog = defineStore('blog', {
  state: (): State => ({
    posts: []
  }),
  actions: {
    async fetchPosts() {
      const baseUrl = useRuntimeConfig().public.baseUrl;
      const { data } = await useFetch(baseUrl + '/posts');
      this.posts = data.value;
    },
  },
})