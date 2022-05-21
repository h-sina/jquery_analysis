// 匹配用于骆驼化的虚线字符串
// Matches dashed string for camelizing
// var rdashAlpha = /-([a-z])/g;

// 由camelCase用作replace（） 的回调
// function fcamelCase(_all, letter) {
//   return letter.toUpperCase();
// }
// 为什么要_all参数？

// 通过刚刚的正则进行匹配 然后替换成刚刚字符串转成的大写
// function camelCase(string) {
//   return string.replace(rdashAlpha, fcamelCase);
// }

// 导出camelCase