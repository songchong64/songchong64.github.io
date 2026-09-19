const menu=document.querySelector('.menu'),links=document.querySelector('#links');menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});links.addEventListener('click',e=>{if(e.target.matches('a')){links.classList.remove('open');menu.setAttribute('aria-expanded','false')}});

const profileActions=document.querySelector('.profile-actions');
const linkedin=document.createElement('a');
linkedin.className='cv-button';
linkedin.href='https://www.linkedin.com/in/songchong64/';
linkedin.target='_blank';
linkedin.rel='noreferrer';
linkedin.textContent='LinkedIn';
profileActions.insertBefore(linkedin,profileActions.lastElementChild);

const standaloneEmail=profileActions.querySelector('a[href^="mailto:"]');
if(standaloneEmail) standaloneEmail.remove();

const contactDetails=document.querySelector('.contact-grid > div:first-child p');
if(contactDetails){
  contactDetails.innerHTML='Address: Room 601, Kim Jaechul Graduate School of AI, KAIST,<br>108 Taebong-ro, Seocho-gu, Seoul 06764, Republic of Korea<br>Email: <a href="mailto:songchong@kaist.edu">songchong@kaist.edu</a><br>Phone: +82-10-9929-3473 (mobile), +82-2-958-0751 (office)';
}

const bioHeading=document.querySelector('#bio');
const about=document.querySelector('.about');
about.id='bio';
bioHeading.remove();

const keynoteHeading=[...document.querySelectorAll('#professional-activities .subhead')]
  .find(heading=>heading.textContent.trim().toLowerCase()==='keynote speech');
const invitedTalksSection=document.querySelector('#invited-talks');

if(keynoteHeading&&invitedTalksSection){
  const keynoteItems=[];
  let item=keynoteHeading.nextElementSibling;

  while(item&&!item.matches('.subhead')){
    keynoteItems.push(item);
    item=item.nextElementSibling;
  }

  const keynoteSection=document.createElement('section');
  keynoteSection.className='section';
  keynoteSection.id='keynote-speech';
  keynoteSection.innerHTML='<header><h2>Keynote Speech</h2></header><div class="section-body"></div>';
  keynoteSection.querySelector('.section-body').append(...keynoteItems);
  invitedTalksSection.before(keynoteSection);
  keynoteHeading.remove();

  const talksLink=document.querySelector('#links a[href="#invited-talks"]');
  if(talksLink) talksLink.href='#keynote-speech';
}
