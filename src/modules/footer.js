import '../styles/sassModules/_footer.scss';
const footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = `
  <div class="container container--footer">
  <div class="socials">
    <p>Follow Us</p>
    <div class="social-icons" >
      <a class="instagram" target="_blank" href="https://www.instagram.com/"></a>
      </a>
      <a class="twitter" target="_blank" href="https://twitter.com/home">
      </a>
    </div>
  </div>
  <a class="contribute" target="_blank" href="https://github.com/Parzivalcen/TodoAppModular">
Contribute</a>

  <a class="gitHub" target="_blank" href="https://github.com/Parzivalcen"></a>

  </div>`;
  return footer;
};
export default footer;