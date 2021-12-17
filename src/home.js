import burger from './155-1551357_bobs-burgers-clipart.jpeg';


export default function loadHome() {
    
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    const welcome = document.createElement('div');
    welcome.classList.add('welcomeMessage');
    const welcomeTxt = document.createElement('p')
    welcomeTxt.innerHTML = 'Welcome!'
    const burgerImg = document.createElement('img');
    burgerImg.src = burger;
    welcome.appendChild(burgerImg)
    welcome.appendChild(welcomeTxt);
    welcome.appendChild(burgerImg)
    content.append(welcome)
    const homeTxt = document.createElement('p')
    homeTxt.innerHTML = "Bob's burgers is a family resturant run by Bob Belcher"
    content.appendChild(homeTxt);
    const homeTxt2 = document.createElement('p')
    homeTxt2.innerHTML = "We always have great burgers and there is a new daily special every day. So check in often to get the best burgers in town!"
    content.appendChild(homeTxt2);
    

    // css styling
    welcome.style.color = '#E8292F';
    welcome.style.margin = 'auto';
    welcome.style.fontSize = '5rem'
    welcome.style.display = 'flex';
    homeTxt.style.color = '#E8292F'
    homeTxt.style.fontSize = '3rem'
    homeTxt.style.textShadow = '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'
    homeTxt2.style.color = '#E8292F'
    homeTxt2.style.fontSize = '3rem'
    homeTxt2.style.textShadow = '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'
    burgerImg.style.width = '150px'
    burgerImg.style.height = '100px'
    
  }