---
title: Popup
group:
  path: /feedback
  title: 反馈
---

# Popup

弹窗，可在其中加入具体内容，展示更多信息供用户使用。

## 注意事项
- maskClosable 为 false 时，onClose 函数不触发

## 代码示例

<code src='../../demo/pages/Popup'></code>

## API

### 属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
| -----|-----|-----|-----|----- |
| className | string | 否 | - | 类名 |
| visible | boolean | 否 | false | 是否显示 |
| maskClosable | boolean | 否 | false | 点击蒙层是否可以关闭 |
| disableScroll | boolean | 否 | true | 弹窗展示时，是否禁止页面滚动 |
| animation | boolean | 否 | true | 是否开启过渡动画 |
| duration | number | 否 | 300 | 过渡动画时长，单位毫秒 |
| position | `'center'` &verbar; `'top'` &verbar; `'bottom'` &verbar; `'left'` &verbar; `'right'` | 否 | "center" | 弹窗布局 |
| zIndex | number | 否 | 998 | 弹窗层级 |



### 事件

| 事件名 | 说明 | 类型 |
| -----|-----|-----|
| onClose | 弹窗关闭时，触发回调 | ( visible: boolean ) => void |

### 样式类

| 类名 | 说明 |
| ----|----|
| amd-popup | 整体样式 |
| amd-popup-mask | 遮罩层样式 |
| amd-popup-disable-scroll | 禁用滚动样式 |
| amd-popup-animation | 开启过渡动画样式 |
| amd-popup-content | 内容样式 |
| amd-popup-top | 内容样式 |
| amd-popup-bottom | 内容样式 |
| amd-popup-left | 内容样式 |
| amd-popup-right | 内容样式 |
| amd-popup-center | 内容样式 |
| amd-popup-close-container | 关闭图标区域样式 |
| amd-popup-close-container | 关闭图标样式 |


<style>
table th:first-of-type { width: 180px; }
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2)  {
    width: 140px
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3)  {
    width: 30px
}
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4)  {
    width: 110px
}
</style>
