Component({
  properties: {
    titleValue: {
      type: String,
      value: 'title'
    },
    titleStyle: {
      type: String,
      value: 'color: #999;'
    },
    itemStyle: {
      type: String,
      value: 'color: #666;background-color:#f4f4f4'
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
