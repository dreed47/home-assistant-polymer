window.loadES5Adapter().then(() => {
  import(/* webpackChunkName: "hassio-icons" */ "./resources/hassio-icons");
  import(/* webpackChunkName: "hassio-main" */ "./hassio-main");
});
const styleEl = document.createElement("style");
styleEl.innerHTML = `
body {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  margin: 0;
  padding: 0;
  height: 100vh;
}
`;
document.head.appendChild(styleEl);
