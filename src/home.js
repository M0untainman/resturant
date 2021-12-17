export default function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    const welcome = document.createElement('div');
    welcome.classList.add('welcomeMessage');
    const welcomeTxt = document.createElement('p')
    welcomeTxt.innerHTML = 'Welcome!'
    welcome.appendChild(welcomeTxt);
    content.append(welcome)
    
    
  }