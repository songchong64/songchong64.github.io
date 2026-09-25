const menu=document.querySelector('.menu'),links=document.querySelector('#links');menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});links.addEventListener('click',e=>{if(e.target.matches('a')){links.classList.remove('open');menu.setAttribute('aria-expanded','false')}});

document.title='Song Chong | KAIST Professor of Artificial Intelligence';

const canonical=document.createElement('link');
canonical.rel='canonical';
canonical.href='https://songchong64.github.io/';
document.head.append(canonical);

const searchDescription=document.querySelector('meta[name="description"]');
if(searchDescription){
  searchDescription.content='Official academic website of Song Chong, ICT Endowed Chair Professor at KAIST and founding Head of the Kim Jaechul Graduate School of AI. Research, publications, honors, talks, and curriculum vitae.';
}

const robotsMeta=document.createElement('meta');
robotsMeta.name='robots';
robotsMeta.content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
document.head.append(robotsMeta);

const profileSchema=document.createElement('script');
profileSchema.type='application/ld+json';
profileSchema.textContent=JSON.stringify({
  '@context':'https://schema.org',
  '@type':'ProfilePage',
  '@id':'https://songchong64.github.io/#profile',
  url:'https://songchong64.github.io/',
  name:'Song Chong — KAIST Professor of Artificial Intelligence',
  dateModified:'2026-09-25',
  mainEntity:{
    '@type':'Person',
    '@id':'https://songchong64.github.io/#song-chong',
    name:'Song Chong',
    alternateName:['Prof. Song Chong','Professor Song Chong'],
    url:'https://songchong64.github.io/',
    image:'https://songchong64.github.io/song-chong.jpg',
    jobTitle:['ICT Endowed Chair Professor','Head, Kim Jaechul Graduate School of AI'],
    worksFor:{
      '@type':'CollegeOrUniversity',
      name:'Korea Advanced Institute of Science and Technology',
      alternateName:'KAIST',
      url:'https://www.kaist.ac.kr/'
    },
    alumniOf:[
      {'@type':'CollegeOrUniversity',name:'The University of Texas at Austin'},
      {'@type':'CollegeOrUniversity',name:'Seoul National University'}
    ],
    knowsAbout:['Artificial Intelligence','Decision Making under Uncertainty','Machine Learning','Mathematical Optimization','Data Networks','Mobile Computing'],
    sameAs:[
      'https://scholar.google.com/citations?user=m2Lm6f4AAAAJ',
      'https://www.linkedin.com/in/songchong64/'
    ]
  }
});
document.head.append(profileSchema);

const profileActions=document.querySelector('.profile-actions');
const linkedin=document.createElement('a');
linkedin.className='cv-button';
linkedin.href='https://www.linkedin.com/in/songchong64/';
linkedin.target='_blank';
linkedin.rel='noreferrer';
linkedin.textContent='LinkedIn';
profileActions.insertBefore(linkedin,profileActions.lastElementChild);

const portrait=document.querySelector('.portrait');
if(portrait) portrait.setAttribute('aria-label','Portrait of Song Chong, KAIST professor of artificial intelligence');

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
