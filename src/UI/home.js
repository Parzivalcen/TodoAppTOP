import '../styles/home.css'
const header = () => {
  const header = document.createElement('header');
  header.classList.add('primary-header');
  header.innerHTML = `
  <button aria-expanded="false" class="mobile-toggle" aria-controls="tags-navigation"></button>
  <div class="side-panel"> 
  <ul id="tags-navigation" class="tags-navigation flex" data-visible="false">
      <h2>Tags <span class="add-Tags" id="add-Tags"></span></h2>
      <li class="tag">Daily</li>
      <li class="tag">Work</li>
    </ul>
  </div>
  `
  
  return header;
}

const toggle = () => {
    const toggle = document.querySelector('.mobile-toggle');
    const tagNav = document.querySelector('.tags-navigation');
    toggle.addEventListener('click', () => {
      const visibility = tagNav.getAttribute('data-visible');
      if (visibility ===  'false')
      {
        // Expand nav
        tagNav.setAttribute('data-visible', true);
        // change Ham-Btn when aria is expanaded
        toggle.setAttribute('aria-expanded', true);
      }else
      {
        tagNav.setAttribute('data-visible', false);
        toggle.setAttribute('aria-expanded', false);
      }
      
    })
}


const hero = () => {
  const home = document.createElement('div');
  home.classList.add('container', 'container-hero');
  home.innerHTML = `

  `
}
export {header, hero, toggle}