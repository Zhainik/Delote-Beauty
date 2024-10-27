const menuIcon = document.getElementById('menuIcon')
const sidebarMenu = document.getElementById('sidebarMenu')
const closeIcon = document.getElementById('closeIcon')

menuIcon.addEventListener('click', () => {
    sidebarMenu.style.left = 'calc(100% - 475px)';
})

closeIcon.addEventListener('click', () => {
    sidebarMenu.style.left = '100%';
})
