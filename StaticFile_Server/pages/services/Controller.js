export default {
  getForumTopics: () =>
    fetch(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    ).then((res) => res.json()),
};
