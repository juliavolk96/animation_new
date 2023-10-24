// TODO: write code here

document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.collapsible-button');
  const container = document.querySelector('.collapsible-container');

  let isCollapsed = true;

  button.addEventListener('click', function () {
    if (isCollapsed) {
      container.style.maxHeight = container.scrollHeight + 'px';
    } else {
      container.style.maxHeight = '0';
    }
    isCollapsed = !isCollapsed;
  });
});
