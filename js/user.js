window.onload = function () {
    //排他思想应用于用户界面导航栏
    let nav = document.querySelector('.nav')
    for (let i = 0; i <= 2; i++) {
        nav.children[i].addEventListener('click', function () {
            for (let j = 0; j <= 2; j++) {
                nav.children[j].className = ''
            }
            this.className = 'active'
        })
    }

    //生成热点图
    let newGroup
    let rect
    let graph = document.querySelector('.js-calendar-graph')
    for (let i = 0; i <= 28; i++) {
        newGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
        newGroup.setAttribute('transform', `translate(${14 * i}, 0)`)
        for (let j = 0; j <= 6; j++) {
            rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
            rect.setAttribute('width', '10')
            rect.setAttribute('height', '10')
            rect.setAttribute('x', `${14 - i}`)
            rect.setAttribute('y', `${13 * j}`)
            rect.setAttribute('rx', '2')
            rect.setAttribute('ry', '2')
            newGroup.appendChild(rect)
        }
        graph.appendChild(newGroup)
    }

    //热点图的打开
    let chart = document.querySelector('.thermodynamic_chart')
    let chart_button = document.querySelector('.icon-xiala')

    chart_button.addEventListener('click', () => {
        if (chart.style.display == 'none') {
            chart.style.display = 'block'
            chart_button.className = 'iconfont icon-shangyi'
        } else {
            chart.style.display = 'none'
            chart_button.className = 'iconfont icon-xiala'
        }
    })
}