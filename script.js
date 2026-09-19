const menu=document.querySelector('.menu'),links=document.querySelector('#links');menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});links.addEventListener('click',e=>{if(e.target.matches('a')){links.classList.remove('open');menu.setAttribute('aria-expanded','false')}});

const profileActions=document.querySelector('.profile-actions');
const linkedin=document.createElement('a');
linkedin.className='cv-button';
linkedin.href='https://www.linkedin.com/in/songchong64/';
linkedin.target='_blank';
linkedin.rel='noreferrer';
linkedin.textContent='LinkedIn';
profileActions.insertBefore(linkedin,profileActions.lastElementChild);

const bioHeading=document.querySelector('#bio');
const about=document.querySelector('.about');
about.id='bio';
bioHeading.remove();
