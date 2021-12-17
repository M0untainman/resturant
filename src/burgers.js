export default function loadBurgers() {
  const content = document.getElementById('content');
      content.innerHTML = '';
      content.style.margin = 'auto'
      content.style.padding = '0.5rem'
      content.style.padding = '0.5rem';
      content.style.color = '#E8292F';
      content.style.display ='flex';
      content.style.flexDirection = 'column';
      content.style.width ='fit-content';
      content.style.height = '800px';
      content.style.overflow = 'scroll';
    

      const menu_item1 = document.createElement('div');
      menu_item1.innerHTML = "Something's NOT Fishy Burger - (100% Beef) "
      menu_item1.classList.add('menuContainer');
      content.appendChild(menu_item1)

      const menu_item2 = document.createElement('div');
      menu_item2.innerHTML = 'You Gouda Be Kidding Me'
      menu_item2.classList.add('menuContainer');
      content.appendChild(menu_item2)

      const menu_item3 = document.createElement('div');
      menu_item3.innerHTML = 'New Bacon-ings'
      menu_item3.classList.add('menuContainer');
      content.appendChild(menu_item3)
  
      const menu_item4 = document.createElement('div');
      menu_item4.innerHTML = 'Summer Thyme Burger '
      menu_item4.classList.add('menuContainer');
      content.appendChild(menu_item4)

      const menu_item5 = document.createElement('div');
      menu_item5.innerHTML = "Eggers Can't Be Cheesers Burger - (with fried egg and cheese)"
      menu_item5.classList.add('menuContainer');
      content.appendChild(menu_item5)



    
  }