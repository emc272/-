window.onload = function () {
    let dynamic_area = document.querySelector('.dynamic-area')
    let dynamicHeight = dynamic_area.offsetTop

    //排他思想应用于用户界面导航栏
    let nav = document.querySelector('.nav')

    for (let i = 0; i <= 2; i++) {
        nav.children[i].addEventListener('click', function () {
            for (let j = 0; j <= 2; j++) {
                nav.children[j].className = ''
            }
            this.className = 'active'
            if (i == 0) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
            if (i === 1) {
                window.scrollTo({
                    top: dynamicHeight,
                    behavior: "smooth"
                });
            }
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

    //上拉召唤用户名单和下滑到一定程度召唤固定导航栏和左右滑动切换动态/主页

    let userArr = []
    //上下滑动相关
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
    let water_number = document.querySelector('.water_number')


    //初始化
    function InitUserInfo() {
        axios.get('http://127.0.0.1:3007/my/userInfo').then(function (res) {
            var { data: userArr } = res.data
            big_avatar.src = userArr.user_avatar
            transform_name.innerText = userArr.user_name
            water_number.innerText = userArr.reshui
        })
    }

    InitUserInfo()

    let moveY = 0
    let tops = 0;
    let pageHeight = 0
    let scrollhei = 0

    //左右滑动相关

    let levels = 0
    let left_slide = null
    let right_slide = null

    user_index.ontouchstart = function (e) {
        moveY = e.changedTouches[0].clientY
        moveX = e.changedTouches[0].clientX
        pageHeight = e.changedTouches[0].pageY
        this.ontouchmove = function (e) {
            scroll()
            //获取手指位移量

            //左右滑动
            levels = e.changedTouches[0].clientX - moveX

            //下滑/上拉
            tops = e.changedTouches[0].clientY - moveY
            if (pageHeight < 405) {
                if (tops < 0) {
                    tops = 0
                    //清空下拉事件
                    user_index.ontouchmove = null

                } else if (tops > 180) {
                    p.style.display = 'block'
                }
            }
        }
        user_index.ontouchend = function () {

            //左右滑动
            if (levels < -70) {
                levels = 0
                left_slide = setTimeout(() => {
                    window.scrollTo({
                        top: dynamicHeight,
                        behavior: "smooth"
                    });
                    clearTimeout(left_slide)
                }, 500);
            } else if (levels > 70) {
                levels = 0
                right_slide = setTimeout(() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                    clearTimeout(right_slide)
                }, 500);
            }

            //下滑/上拉
            scroll()
            user_index.ontouchmove = null
            if (pageHeight < 405) {
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

    //补充，防止直接甩浏览器时判断失误
    window.onscroll = function (e) {
        scroll()
        if (document.documentElement.scrollTop >= 320) {
            nav.style.position = 'fixed'
            nav.style.top = '1.43rem'
            nav.style.left = '50%'
            nav.style.width = '15rem'
            nav.style.transform = 'translateX(-50%)'
            nav.style.backgroundColor = 'white'
        }
        if (document.documentElement.scrollTop >= dynamicHeight - 1) {
            nav.children[1].className = 'active'
            nav.children[0].className = 'none'
        } else {
            nav.children[0].className = 'active'
            nav.children[1].className = 'none'
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

    function scroll() {
        scrollhei = document.body.scrollTop || document.documentElement.scrollTop
        if (scrollhei > 276) {
            //这一段代码主要是控制导航栏
            fixed_nav.style.display = 'flex'
        } else {
            fixed_nav.style.display = 'none'
            nav.style = ''
        }
    }

    //点击热水出现动画
    let dianreshuihu = document.querySelector('.dianrenshuihu')
    let tips = document.querySelector('.tips')
    let flag = true

    function addReshui() {
        axios.post('http://127.0.0.1:3007/my/updateReshui').then(function (res) {
            console.log(res.body);
        })
    }

    boiling_water.addEventListener('click', () => {
        if (flag) {
            flag = false

            //数字增加
            addReshui()
            setTimeout(() => {
                InitUserInfo()   
            },400);

            //图标部分
            dianreshuihu.style.transform = 'translateY(-3rem) scale(5)'
            tips.style.opacity = '1'
            tips.style.transform = 'translate(-2.2rem,-3rem) scale(1.2)'
            setTimeout(() => {
                tips.style.opacity = '0'
                setTimeout(() => {
                    tips.style.transform = ''
                }, 1200);
            }, 1200);

            //回调地狱（有空的时候再来修改码风）
            setTimeout(() => {
                dianreshuihu.style.transition = 'all 1s'
                dianreshuihu.style.transform = 'translate(-1rem,-6rem) scale(5)'
                dianreshuihu.style.opacity = '0'
                setTimeout(() => {
                    dianreshuihu.style.transition = 'all .01s'
                    dianreshuihu.style.transform = ''
                    setTimeout(() => {
                        dianreshuihu.style.opacity = '1'
                        setTimeout(() => {
                            dianreshuihu.style.transition = 'all .6s'
                        });
                    }, 50);
                }, 1000);
            }, 600);

        } else {
            //文字部分
            dianreshuihu.style.color = '#505355'
            tips.innerText = '今天已经提醒过他/她喝热水了'
            tips.style.width = '7rem'
            tips.style.transform = 'translate(-3.2rem,-3rem) scale(1.2)'
            tips.style.opacity = '1'
            setTimeout(() => {
                tips.style.transition = 'opacity,transform .01s'
                tips.style.opacity = '0'
                tips.style.transform = ''
                setTimeout(() => {
                    tips.style.transition = 'opacity,transform 1.2s'
                }, 50);
            }, 1200);

            //图标部分
            setTimeout(() => {
                dianreshuihu.style.color = ''
            }, 1000);
        }
    })

    //页面跳转
    let jump_to_index = document.querySelector('.jump-to-index')

    jump_to_index.addEventListener('click', () => {
        window.location.href = "index.html";
    })

}