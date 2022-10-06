window.onload = function () {

    //侧边栏的关闭和打开
    let sidebar = document.querySelector('.sidebar')
    let sidebarButton = document.querySelector('.icon-cebianlan')
    let sidebarCloseButton = document.querySelector('.icon-guanbi_o')
    let background = document.querySelector('.background')

    sidebarButton.addEventListener('click', function () {
        sidebar.style.display = 'flex';
        background.style.display = 'block';
    })

    sidebarCloseButton.addEventListener('click', () => {
        sidebar.style.display = 'none';
        background.style.display = 'none';
    })

    //主页显示数据
    let dataArr = [
        { userAvatar: './assets/uploads/avatar.png', userName: 'emc272', msgInfo: '一个随笔录、、', picInfo: ['./assets/uploads/1.jpg', './assets/uploads/2.jpg', './assets/uploads/3.jpg'], otherInfo: { dianzan: 591, pinglun: 223, loop: 84 } },
        { userAvatar: './assets/uploads/36180475.jpg', userName: '豆瓣读书', msgInfo: '老照片 摄于公元2022年', picInfo: ['./assets/uploads/v2-00fd47b984b097ff6799c70eac688576_r.jpg', './assets/uploads/v2-368f17c7b49742d3653ee3d4623b5243_720w.jpg', './assets/uploads/v2-5789cc732e435e5d7d6d45717a08fe07_720w (3).jpg'], otherInfo: { dianzan: 191, pinglun: 3, loop: 4 } },
        { userAvatar: './assets/uploads/36180475.jpg', userName: '豆瓣读书', msgInfo: '老照片 摄于公元2022年', picInfo: ['./assets/uploads/v2-00fd47b984b097ff6799c70eac688576_r.jpg', './assets/uploads/v2-368f17c7b49742d3653ee3d4623b5243_720w.jpg', './assets/uploads/v2-5789cc732e435e5d7d6d45717a08fe07_720w (3).jpg'], otherInfo: { dianzan: 191, pinglun: 3, loop: 4 } },
        { userAvatar: './assets/uploads/36180475.jpg', userName: '豆瓣读书', msgInfo: '老照片 摄于公元2022年', picInfo: ['./assets/uploads/v2-00fd47b984b097ff6799c70eac688576_r.jpg', './assets/uploads/v2-368f17c7b49742d3653ee3d4623b5243_720w.jpg', './assets/uploads/v2-5789cc732e435e5d7d6d45717a08fe07_720w (3).jpg'], otherInfo: { dianzan: 191, pinglun: 3, loop: 4 } },
        { userAvatar: './assets/uploads/36180475.jpg', userName: '豆瓣读书', msgInfo: '老照片 摄于公元2022年', picInfo: ['./assets/uploads/v2-00fd47b984b097ff6799c70eac688576_r.jpg', './assets/uploads/v2-368f17c7b49742d3653ee3d4623b5243_720w.jpg', './assets/uploads/v2-5789cc732e435e5d7d6d45717a08fe07_720w (3).jpg'], otherInfo: { dianzan: 191, pinglun: 3, loop: 4 } }
    ]

    let recommend_content = document.querySelector('.recommend-content')
    let new_info = null

    function initDataView() {
        recommend_content.innerHTML = ''
        dataArr.forEach((value, index, arr) => {
            new_info = document.createElement('div')
            new_info.className = 'total-info'
            new_info.innerHTML = `<div class="user-info"><div class="user"><img src = "${value.userAvatar}" alt = "" ><span class="user-name">${value.userName}</span></div ><span class="iconfont icon-gengduo"></span></div ><div class="msg-info">${value.msgInfo}</div><div class="pic-info"><img src="${value.picInfo[0]}" alt=" "><img src="${value.picInfo[1]}" alt=""><img src="${value.picInfo[2]}" alt=""></div><div class="other-info"><span class="iconfont icon-dianzan"> ${value.otherInfo.dianzan}</span><span class="iconfont icon-pinglun"> ${value.otherInfo.pinglun}</span><span class="iconfont icon-loop"> ${value.otherInfo.loop}</span></div>`
            recommend_content.appendChild(new_info)
        })
    }

    initDataView()

    //实现数组内元素随机排列
    let rand
    let temp

    function randomArray(arr) {
        for (let i = 0, len = arr.length; i < len; i++) {
            rand = parseInt(Math.floor(Math.random() * len));
            temp = arr[rand];
            arr[rand] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
    //实现上拉懒加载和下滑刷新

    let shuaxin_bottom = document.querySelector('.shuaxin-bottom')
    let shuaxin_top = document.querySelector('.shuaxin-top')
    let flag = true

    let clientHeight = 0
    let scrollHeight = 0
    let scrollTop = 0

    let i = 1

    let distance = -82;

    recommend_content.ontouchstart = function (e) {

        //下滑部分
        moveY = e.changedTouches[0].clientY
        pageHeight = e.changedTouches[0].pageY

        let tops = 0
        this.ontouchmove = function (e) {

            //下滑部分
            tops = e.changedTouches[0].clientY - moveY
            if (pageHeight < 505) {
                if (tops < 0) {
                    tops = 0
                    //清空下拉事件
                    this.ontouchmove = null
                } else if (tops > 80) {
                    shuaxin_top.style.display = "block"
                    setTimeout(() => {
                        shuaxin_top.style.transform = 'rotate(1440deg)'
                    });
                }
            }

            //上拉部分
            if ((scrollTop + clientHeight) >= (scrollHeight - distance)) {

                shuaxin_bottom.style.display = "block"

                setTimeout(() => {
                    shuaxin_bottom.style.transform = `rotate(1440deg)`
                });
            }

            clientHeight = document.documentElement.clientHeight; //浏览器高度
            scrollHeight = document.body.scrollHeight;
            scrollTop = document.documentElement.scrollTop;

        }

        this.ontouchend = function () {
            //下滑部分
            this.ontouchmove = null
            shuaxin_top.style.cssText = 'transform:rotate(0);display:none;'
            if (pageHeight < 405) {
                if (tops < 80) {
                } else {
                    tops = 0
                    // setTimeout(() => {
                    //     shuaxin_top.style.transition = 'all 2s'
                    // });
                    //刷新界面
                    randomArray(dataArr)
                    initDataView()
                }
            }

            //上拉部分
            shuaxin_bottom.style.transition = 'all .01s'
            shuaxin_bottom.style.transform = ''
            shuaxin_bottom.style.display = 'none'
            setTimeout(() => {
                shuaxin_bottom.style.transition = 'all 2s'
            });

            if ((scrollTop + clientHeight) >= (scrollHeight - distance)) {
                dataArr.push({ userAvatar: './assets/uploads/36180475.jpg', userName: '豆瓣读书', msgInfo: '老照片 摄于公元2022年', picInfo: ['./assets/uploads/v2-00fd47b984b097ff6799c70eac688576_r.jpg', './assets/uploads/v2-368f17c7b49742d3653ee3d4623b5243_720w.jpg', './assets/uploads/v2-5789cc732e435e5d7d6d45717a08fe07_720w (3).jpg'], otherInfo: { dianzan: 191, pinglun: 3, loop: 4 } })
                dataArr.push({ userAvatar: './assets/uploads/36180475.jpg', userName: '豆瓣读书', msgInfo: '老照片 摄于公元2022年', picInfo: ['./assets/uploads/v2-00fd47b984b097ff6799c70eac688576_r.jpg', './assets/uploads/v2-368f17c7b49742d3653ee3d4623b5243_720w.jpg', './assets/uploads/v2-5789cc732e435e5d7d6d45717a08fe07_720w (3).jpg'], otherInfo: { dianzan: 191, pinglun: 3, loop: 4 } })
                initDataView()
            }
        }
    }

    //页面跳转
    let jump_to_user = document.querySelector('.jump-to-user')

    jump_to_user.addEventListener('click', () => {
        window.location.href = "user.html";
    })

    //侧边栏跟随移动

    let x = 0
    let movedx = 0
    let xNumber = 0

    sidebar.ontouchstart = function (e) {
        x = e.changedTouches[0].pageX
        this.ontouchmove = function (e) {
            e.preventDefault()
            movedx = x - e.changedTouches[0].pageX
            // console.log(movedx);
            if(movedx > 0){
                this.style.left = (7.5 - movedx * .0325) + 'rem';
            }
        }
        this.ontouchend = function(){
            this.ontouchmove = null
            
            xNumber = this.style.left
            xNumber = xNumber.split('r')[0]
            if(xNumber <= 2.6 ){
                this.style.left = ''
                sidebarCloseButton.click()
            }else{
                this.style.left = '7.5rem'
            }
            
        }
    }

}


