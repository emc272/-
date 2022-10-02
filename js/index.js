window.onload = function () {
    let sidebar = document.querySelector('.sidebar')
    let sidebarButton = document.querySelector('.icon-cebianlan')
    let sidebarCloseButton = document.querySelector('.icon-guanbi_o')

    sidebarButton.addEventListener('click', function () {
        sidebar.style.display = 'flex';
    })

    sidebarCloseButton.addEventListener('click', () => {
        sidebar.style.display = 'none';
    })
}