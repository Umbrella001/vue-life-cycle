(function () {
    var vm = new Vue({
        el: '#app',
        data: {
            message: '生命周期',
            age: 1
        },
        computed: {
            count: function () {
                return this.age + 1
            }
        },
        /**
         * 优先级 render -> template -> el
         */
        // template: '<p>vue对象中的template的内容</p>',
        // render: function(creatElement){
        //    return creatElement('h1','this is creatElement')
        // },
        /**
         * 初始化data数据
         */
        beforeCreate: function () {
            console.group('-----------beforeCreate创建前状态-------------')
            console.log('%c%s', 'color:red', 'el:' + this.$el); // undefined
            console.log('%c%s', 'color:red', 'data:' + this.$data); // undefined
            console.log('%c%s', 'color:red', 'count:' + this.count); // undefined
            console.log('%c%s', 'color:red', 'message:' + this.message); // undefined
            // alert('beforeCreate')
        },
        created: function () {
            console.group('-----------created创建完毕状态-------------')
            console.log('%c%s', 'color:red', 'el:' + this.$el); //  undefined
            console.log('%c%s', 'color:red', 'data:' + this.$data); // 已经初始化
            console.log('%c%s', 'color:red', 'count:' + this.count); // 已经初始化
            console.log('%c%s', 'color:red', 'message:' + this.message); // 已经初始化
            // alert('created')
        },
        /**
         * 完成了el的绑定
         */
        beforeMount: function () {
            console.group('-----------beforeMount挂载前状态-------------')
            console.log('%c%s', 'color:red', 'el:' + this.$el); //  已经初始化
            console.log(this.$el); // 拿到页面未更新数据的DOM节点
            console.log(this.$el.innerHTML); // 未挂载到页面
            console.log('%c%s', 'color:red', 'data:' + this.$data); //  已经初始化 
            console.log('%c%s', 'color:red', 'message:' + this.message); //  已经初始化
            // alert('beforeMount')
        },
        mounted: function () {
            console.group('-----------mounted挂载完毕状态-------------')
            console.log('%c%s', 'color:red', 'el:' + this.$el); //  已经初始化            
            console.log(this.$el); // 拿到页面已更新数据的DOM节点
            console.log(this.$el.innerHTML); //  已挂载到页面
            console.log('%c%s', 'color:red', 'data:' + this.$data); //  已经初始化
            console.log('%c%s', 'color:red', 'message:' + this.message); // 已经初始化
            // alert('mounted')
        },
        /**
         * vue组件更新
         */
        beforeUpdate: function () {
            console.group('-----------beforeUpdate更新前状态-------------')
            console.log('%c%s', 'color:red', 'el:' + this.$el); // 更新初始化            
            console.log(this.$el.innerHTML); // 未更新数据的innerHTML
            console.log('%c%s', 'color:red', 'data.message:' + this.$data.message); // 数据更新完毕
            console.log('%c%s', 'color:red', 'message:' + this.message); // 数据更新完毕但为赋值到页面上
            // alert('beforeUpdate')
        },
        updated: function () {
            console.group('-----------updated更新完毕状态-------------')
            console.log('%c%s', 'color:red', 'el:' + this.$el); // 更新初始化         
            console.log(this.$el.innerHTML); // 已更新数据的innerHTML
            console.log('%c%s', 'color:red', 'data:' + this.$data); // 更新初始化 
            console.log('%c%s', 'color:red', 'message:' + this.message); // 数据更新完毕并且赋值完毕
            // alert('updated')
        },
        /**
         * vue组件销毁
         */
        beforeDestroy: function () {
            console.group('-----------beforeDestroy销毁前状态-------------')
            console.log('%c%s', 'color:red', 'el:' + this.$el);
            console.log(this.$el); //
            console.log('%c%s', 'color:red', 'data:' + this.$data);
            console.log('%c%s', 'color:red', 'message:' + this.message);
        },
        destroyed: function () {
            console.group('-----------destroyed销毁完毕状态-------------')
            console.log('%c%s', 'color:red', 'el:' + this.$el);
            console.log(this.$el);
            console.log(this.$el.innerHTML);
            console.log('%c%s', 'color:red', 'data:' + this.$data);
            console.log('%c%s', 'color:red', 'message:' + this.message);
        }
    });

    document.getElementById('btn').onclick = function () {
        vm.message = '已经变了';
    }
    document.getElementById('btn1').onclick = function () {
        vm.$destroy();
    }
})()