export default function fixMinHeight(params) {
  let headerHeight = getComputedStyle(document.querySelector("header")).height;
  document.querySelector(
    "main"
  ).style.minHeight = `calc(100dvh - ${headerHeight})`;
}
