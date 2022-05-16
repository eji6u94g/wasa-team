### 考慮到沿用性跟維護性, 從幾個方面來說明

## 1. vue components and views
將可能抽取重複使用的部分或是功能性的部分(input, navbar)等等, 做成components
## 2. scss
考慮到維護性, 將每個 component 跟 view 各自的 css 設定寫在每個 component 或 view, 將顏色、mixin、重複性css設定分開寫在 "./assets/style" , 方便後續設計需要更改或是出現 bug 時, 快速更改.
## 3. axios and api
將 axios 設定寫在 "./helpers/axiosSetting", 有關 RESTful(get/post/get/...) 的部分寫在 "./apis", 這樣可以如果api的路徑或是傳輸的格式有所改變時, 只需要更改 axiosSetting, 就可以套用到整個案子
