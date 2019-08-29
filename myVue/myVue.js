
    class myVue{
        constructor(obj){
            // 1 设置默认值
            let defaultObj = {
                data: null,
                computed: null,
                watch: null,
                beforeCreate: function(){

                },
                created: function(){

                },
                beforeMount: function(){

                },
                mounted: function(){

                },
            }
            // 2 遍历页面中的对象
            for(let key in defaultObj){
                obj[key] ? this[key] = obj[key] : this[key] = defaultObj[key]
            }

            // 3 对象创建完毕 执行beforeCreate函数
            this.beforeCreate();

            // 4 挂载数据
            // 4.1 将传入的data属性赋给this
            if(obj.data){
                for(let key in this.data){
                    this[key] = obj.data[key];
                }
                this.$data = obj.data; // 设置全局变量
            }
            // 4.2 计算属性
            if(obj.computed){
                for(let key in obj.computed){
                    this[key] = obj.computed[key].call(this);
                }
            }

            // 5 执行created函数
            this.created();
            // 5.1 检查是否有el属性
            if(obj.el){
                this.el = $(obj.el);
                this.$el = $(obj.el); // 设置全局变量
            }
            // 5.2 检查是否有template属性
            if(this.template){
                this.template = obj.template;
                // 动态创建template里的所有的html元素 ...
            }

            // 6 执行beforeMounte函数
            this.beforeMount();

            // 7 用vue对象的数据属性替换模板中的内容
            // 7.1 替换data中的数据
            let html = this.el.innerHTML;
            for(let key in this.data){
                // 7.1.1 用属性替换属性名 {{}}一一对应
                html = html.replace(new RegExp("{{" + key + "}}","g"),this[key]);
            }
            // 7.2 替换computed中的数据
            for(let key in this.computed){
                html = html.replace(new RegExp("{{" + key + "}}","g"),this[key]);
            }
            // 7.3 将处理好的数据在虚拟节点DOM中准备,但也更新到页面
            this.el.innerHTML = html;

            // 8 执行mounted函数
            this.mounted();
        }

        // 9 双向绑定
        addWatch(){

        }
    }
    // 
    function $(str){
        if(str.charAt(0) == '#'){
            return document.getElementById(str.substring(1));
        }else if(str.charAt(0) == '.'){
            return document.getElementsByClassName(str.substring(1));
        }else{
            return document.getElementsByTagName(str);
        }
    }