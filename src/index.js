Component({
  properties: {
    titleValue: {
      type: String,
      value: 'title'
    },
    listData: {
      type: Array,
    },
  },
  data: {
    listData: [],
  },
  methods: {
    onItemTap(e) {
      const myEventDetail = {e} // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})
