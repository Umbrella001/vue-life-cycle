### vue-life-cycle

关于vue的生命周期demo

### 详细的讲解可以看我的博客：

https://blog.csdn.net/Umbrella_Um/article/details/100135410


### 生命周期经历的阶段和钩子函数

1. ↓ 实例化vue(组件)对象：new Vue()

2. ↓ 初始化事件和生命周期 init events 和 init cycle

3. ↓ BeforeCreated函数：

   在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。即此时vue（组件）对象被创建了，但是vue对象的属性还没有绑定，如data属性computed属性还没有绑定，即没有值。

   此时还没有数据和真实DOM。

   即：属性还没有赋值，也没有动态创建template属性对应的HTML元素（二阶段的createUI函数还没有执行）


4. ↓ 挂载数据（属性赋值）

    包括 属性和computed的运算，

5. ↓ Created函数：

    vue对象的属性有值了，但是DOM还没有生成，$el属性还不存在。

 	此时有数据了，但是还没有真实的DOM

   即：data，computed都执行了。属性已经赋值，但没有动态创建template属性对应的HTML元素，所以，此时如果更改数据不会触发updated函数

   如果：数据的初始值就来自于后端，可以发送ajax，或者fetch请求获取数据，但是，此时不会触发updated函数

6. ↓ 检查

    1）检查是否有el属性

      检查vue配置，即new Vue{}里面的el项是否存在，有就继续检查template项。没有则等到手动绑定调用`vm.$mount()`,完成了全局变量$el的绑定。

     2）检查是否有template属性

    检查配置中的template项，如果没有template进行填充被绑定区域，则被绑定区域的el对象的outerHTML（即整个#app DOM对象，包括`<div id=”app” >`和`</div>`标签）都作为被填充对象替换掉填充区域

    即：如果vue对象中有 template属性，那么，template后面的HTML会替换$el对应的内容。如果有render属性，那么render就会替换template。

    即：优先关系时：render--> template -->el


7. ↓ beforeMonute函数：

   	模板编译(template)、数据挂载之前执行的钩子函数

   	此时 this.$el有值，但是数据还没有挂载到页面上。即此时页面中的{{ }}还没有被替换


8. ↓ 用vue对象的数据（属性）替换模板中的内容

9. ↓ Monuted函数：

    模板编译完成，数据挂载完毕

    即：此时已经把数据依据挂载到了页面上，所以，页面上能够看到正确的数据了。

    一般来说，我们在此处发送异步请求（ajax，fetch，axios等），获取服务器上的数据，显示在DOM里。


10. ↓ beforeUpdate函数：

    组件更新之前执行的函数

    数据更新了，但是，vue（组件）对象对应的dom中的内部（innerHTML）没有变，所以叫作组件更新前


11. ↓ updated函数：

    组件更新之后执行的函数

    vue（组件）对象对应的dom中的内部（innerHTML）改变了，所以，叫作组件更新之后


12. ↓ activated函数：keep-alive组件激活时调用

13. ↓ deactivated函数：keep-alive组件停用时调用

14. ↓ beforeDestroy：实例销毁之前调用。在这一步，实例仍然完全可用。

15. → destroyed：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
