import onChange from 'on-change';

const updateLinks = (links) => {
  const linksList = document.querySelector('.posts');
  linksList.innerHTML = '';
  links.forEach((link) => {
    const listItem = document.createElement('li');
    listItem.textContent = link;
    linksList.appendChild(listItem);
  });
};

const initView = (links) => {
  onChange(links, () => {
    updateLinks(links);
  });
};

export default initView;
