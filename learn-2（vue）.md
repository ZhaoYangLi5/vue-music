# 项目中vue的学习记录
## vue的钩子函数
  - beforeCreate
    + 在实例初始化之后，数据观测和event/watcher事件配置之前
  - created
    + 实例已经创建之后被调用，数据观测，属性和方法的运算，watch/event事件回调已经结束，挂载阶段没有开始，$el属性不可见
  - beforeMount
    + 挂载开始之前调用，相关的render函数首次被调用
  - mounted
    + el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子。
  - beforeUpdate
    + 数据更新是调用，发生在虚拟DOM重新渲染和打补丁之前，你可以在这个钩子中进一步更改状态，不会触发附加的重渲染过程
  - update
    + 当这个钩子被调用，组件DOM已经更新，现在可以执行依赖于DOM的操作，但是大多数避免在此期间更改，最好使用计算属性或者watcher取而代之
  - activated
    + keep-alive 组件激活时调用
  - deactivated
    + keep-alive 组件停用时调用
  - beforeDestroy
    + 实例销毁前调用，在这之前，实例仍然可用
  - destroyed
    + vue实例销毁后调用，调用后，vue实例指示的所有东西解绑定，所有事件监听器被移除，所有的子实例也会被销毁

  | __相关文章__  ---- [Vue2.0 探索之路——生命周期和钩子函数的一些理解](https://segmentfault.com/a/1190000008010666)
  ```
  beforecreated：el 和 data 并未初始化 
  created:完成了 data 数据的初始化，el没有
  beforeMount：完成了 el 和 data 初始化 
  mounted ：完成挂载

  应用实例介绍
  beforecreate : 举个栗子：可以在这加个loading事件 
  created ：在这结束loading，还做一些初始化，实现函数自执行 
  mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
  beforeDestory： 你确认删除XX吗？ destoryed ：当前组件已被删除，清空相关内容
  ```

## 组件相关小技巧
  1、 保证dom成功渲染，可以采用两种办法：
      （1）this.$nextTick 可以保证dom树成功渲染
      （2）setTimeout 20ms保证dom树成功渲染（20ms是因为浏览器刷新时间为17ms）
  2、  组件切换时，会触发destroy方法，所以要在钩子函数destoryed中清掉时间计时器等
  3、 设置标志位，确保逻辑执行一次
