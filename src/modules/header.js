import '../styles/sassModules/_header.scss';
import Icon from '../imgs/climb.png';


const header = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const myIcon = new Image();
  myIcon.src = Icon;
  
  header.innerHTML = `
  <div class="container container--header">
    <i class="icon"></i>
    <h1> Get things done</h1>
    <div class="menu--container">
      <button aria-expanded="false" class="mobile-toggle" aria-controls="categories-navigation"></button>

      <div class="user" data-visible="false">
        <h2 class="user-name">user</h2>
        <span class="user-icon">O</span>
      </div>
    </div>
  </div>`;
  return header;
};
export default header;