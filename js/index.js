/**
 * Created by admin on 2018/1/23.
 */
/**
 * Created by developer on 2017/5/25.
 */

var uwillbe = new UWillBe();
var params = uwillbe.getparams();
var listVue = new Vue({
    el: '#app',
    data: {
        newsList: [],
        pageNo: 1,
        pageSize: 10,
        isShow: false,
        mypageNo: 0,
        mypageSize: 0,
        totalPages: '',
        currentPageNo: ''
    },
    ready: function () {
        var that = this;
        that.getNewList();

    },
    methods: {
        //获取列表
        getNewList: function () {
            var that = this;
            uwillbe.getNews({
                newsTypeId: 2
            }, {
                callback: function (res) {
                    console.log(res);
                    that.totalPages = res.data.pageTotal;//总页数
                    that.currentPageNo = res.data.pageNo;//当前页数
                    that.newsList = res.data.dataList;
                    that.page_active();
                }
            })
        },
        openHtml: function (url) {
            window.open(url)
        },
        page_active: function () {
            var that = this;
            if (that.totalPages > 0) {
                laypage({
                    cont: 'Paging', //容器。值支持id名、原生dom对象，jquery对象,
                    pages: that.totalPages, //总页数
                    curr: that.currentPageNo || 1, //当前页
                    groups: 5,//连续显示分页数
                    prev: '上一页', //若不显示，设置false即可
                    next: '下一页', //若不显示，设置false即可
                    jump: function (obj) { //触发分页后的回调
                        //点击跳页触发函数自身，并传递当前页：obj.curr
                        that.currentPageNo = obj.curr; //当前页
                        uwillbe.getNews({
                            pageNo: that.currentPageNo,//请求参数 当前点击的那一页
                            newsTypeId: 2 //请求参数
                        }, {
                            callback: function (res) {
                                //返回的数据
                                that.newsList = res.data.dataList;

                            }
                        })
                    }
                });
            }

        }
    }
});