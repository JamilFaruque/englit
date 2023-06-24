// Hamburger Menu
const menuBar = document.getElementById('menu-bar');
const menuItems = document.getElementById('menu-items');
const header = document.getElementById('header');
const cancelMenuBar = document.getElementById('cancel-menu-bar');


menuBar.addEventListener('click', () => {
  menuItems.classList.add('duration-500');
  menuItems.classList.remove('-translate-y-80');
})
cancelMenuBar.addEventListener('click', () => {
  menuItems.classList.add('-translate-y-80')
})

// Final year speacial section ---- Courses

// icon links

const downArrow = `<span id='down-arrow' class='absolute'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg> </span>
`;
const upArrow = `<span id='up-arrow' class='absolute'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg> </span>
`;


const courseTitle = document.querySelectorAll('#course-title');
const courseDetail = document.querySelectorAll('#course-detail');

for (let i = 0; i < courseDetail.length; i++) {
  courseTitle[i].innerHTML += downArrow
  courseTitle[i].addEventListener('click', function () {
    if (courseDetail[i].classList.contains('h-0')) {
      courseDetail[i].classList.remove('h-0');
      courseTitle[i].querySelector('span').remove()
      courseTitle[i].innerHTML += upArrow
      const contentHeight = courseDetail[i].scrollHeight;

      const contentHeightInPixels = contentHeight + 'px';

      courseDetail[i].style.height = contentHeightInPixels;
      courseDetail[i].classList.add('h-auto');
    } else {
      courseTitle[i].querySelector('span').remove()
      courseTitle[i].innerHTML += downArrow

      courseDetail[i].classList.add('h-0');
      courseDetail[i].classList.remove('h-auto');

      // Reset the height to 0
      courseDetail[i].style.height = '0px';
    }

  });


}
