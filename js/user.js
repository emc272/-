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

    //下滑召唤用户名单
    let user_index = document.querySelector('.user-index')
    let user_details = document.querySelector('.user-details')
    let p = document.querySelector('.xiala')
    let summary_about = document.querySelector('.aboutme')
    let user_details_close = document.querySelector('.icon-guanbi_o')
    let big_avatar = document.querySelector('.big_avatar')
    let boiling_water = document.querySelector('.boiling_water')
    let thelun = document.querySelector('.thelun')
    let transform_name = document.querySelector('.transform_name')
    let fixed_nav = document.querySelector('.fixed_nav')

    let moveY = 0
    let tops = 0;
    let pageHeight = 0
    let scrollhei = 0
    // user_index.onscroll = function() {
        

    // }
    user_index.ontouchstart = function (e) {
        moveY = e.changedTouches[0].clientY
        pageHeight = e.changedTouches[0].pageY
        this.ontouchmove = function (e) {
            scroll()
            //获取手指位移量
            tops = e.changedTouches[0].clientY - moveY
            if (pageHeight < 705) {
                if (tops < 0) {
                    tops = 0
                    //清空下拉事件
                    user_index.ontouchmove = null

                    //头像缩小
                } else if (tops > 180) {
                    p.style.display = 'block'
                }
            }
            // console.log(pageHeight);
            // console.log(tops);
        }
        user_index.ontouchend = function () {
            scroll()
            user_index.ontouchmove = null
            if (pageHeight < 705) {
                if (tops < 180) {
                    this.style.top = 0;
                    p.style.display = "none"
                } else {
                    //清空tops，手指离开触发界面切换
                    tops = 0
                    //设置移动动画
                    big_avatar.style.transform = 'scale(0.5) translate(12.3rem, -1rem)'
                    boiling_water.style.transform = 'translate(-1.6rem,21rem)'
                    thelun.style.transform = 'translate(-5rem,18.8rem)'
                    transform_name.style.transform = 'translate(-.5rem, -5.5rem)'
                    //清除提示信息
                    p.style.display = "none"
                    setTimeout(() => {
                        transform_name.style.transform = ''
                        big_avatar.style.transform = ''
                        boiling_water.style.transform = ''
                        thelun.style.transform = ''
                        user_index.style.display = 'none'
                        user_details.style.display = 'block'
                    }, 580);
                }
            }
        }
    }

    //关闭用户菜单
    user_details_close.addEventListener('click', () => {
        user_index.style.display = 'block'
        user_details.style.display = 'none'
    })

    summary_about.addEventListener('click', () => {
        big_avatar.style.transform = 'scale(0.5) translate(12.3rem, -1rem)'
        boiling_water.style.transform = 'translate(-1.6rem,21rem)'
        thelun.style.transform = 'translate(-5rem,18.8rem)'
        transform_name.style.transform = 'translate(-.5rem, -5.5rem)'
        setTimeout(() => {
            transform_name.style.transform = ''
            big_avatar.style.transform = ''
            boiling_water.style.transform = ''
            thelun.style.transform = ''
            user_index.style.display = 'none'
            user_details.style.display = 'block'
        }, 580);
    })

    function scroll(){
        scrollhei =  document.body.scrollTop || document.documentElement.scrollTop
            if(scrollhei > 276){
                //这一段代码主要是控制导航栏
                fixed_nav.style.display = 'flex'
            }else{
                fixed_nav.style.display = 'none'
            }
    }
}