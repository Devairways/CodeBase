export default API = {
  getForumTopics: () =>
    fetch("https://my-json-server.typicode.com/typicode/demo/posts")
      .then((res) => res.json())
      .then((data) => data),
  setForumTopics: () =>
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json)),
};
