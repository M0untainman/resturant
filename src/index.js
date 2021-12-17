import './style.css';
import loadHome from './home'
import loadBurgers from './burgers'
import loadContact from './contact';

// dom declarations
const home = document.getElementById('home');
const burgers = document.getElementById('burgers');
const contact = document.getElementById('contact');

// addEventListener
home.addEventListener('click', () => {
    loadHome();
})

burgers.addEventListener('click', () => {
    loadBurgers()
})

contact.addEventListener('click', () => {
    loadContact();
})