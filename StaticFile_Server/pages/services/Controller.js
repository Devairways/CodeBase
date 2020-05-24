export default {
  getForumTopics: () =>
    fetch(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    ).then((res) => res.json()),
  setForumTopics: (data) =>
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        body: data.body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json)),
};
