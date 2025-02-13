// filepath: /Users/ruanmingyu/Desktop/NotionNext/themes/fukasawa-erduoya/style.js
const Style = () => {
    return <style jsx global>{`
        // 底色
        body {
            background-color: #eeedee;
        }
        .dark body {
            background-color: black;
        }

        /* fukasawa的首页响应式分栏 */
        #theme-fukasawa-erduoya .grid-item {
            height: auto;
            break-inside: avoid-column;
            margin-bottom: .5rem;
        }

        /* 大屏幕（宽度≥1024px）下显示3列 */
        @media (min-width: 1024px) {
            #theme-fukasawa .grid-container {
                column-count: 3;
                column-gap: .5rem;
            }
        }

        /* 小屏幕（宽度≥640px）下显示2列 */
        @media (min-width: 640px) and (max-width: 1023px) {
            #theme-fukasawa .grid-container {
                column-count: 2;
                column-gap: .5rem;
            }
        }

        /* 移动端（宽度<640px）下显示1列 */
        @media (max-width: 639px) {
            #theme-fukasawa .grid-container {
                column-count: 1;
                column-gap: .5rem;
            }
        }

        .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
            padding: 10px;
        }

        .container-memos {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 10px;
            padding: 10px;
        }

        /* 固定左侧目录栏 */
        .aside-left {
            position: fixed;
            top: 0;
            left: 0;
            width: 250px; /* 根据需要调整宽度 */
            height: 100vh; /* 高度为视口高度 */
            overflow-y: auto; /* 如果内容超出高度，显示滚动条 */
            background-color: #fff; /* 根据需要调整背景色 */
            z-index: 1000; /* 确保在其他内容之上 */
        }

        /* 右侧内容区域 */
        .main-content {
            margin-left: 250px; /* 根据左侧目录栏的宽度调整 */
            padding: 10px;
        }

         /* 回到顶部按钮样式 */
        .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            background-color: #333;
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1000;
            transition: opacity 0.3s;
            opacity: 0;
        }

        .back-to-top.show {
            opacity: 1;
        }

        .back-to-top svg {
            width: 24px;
            height: 24px;
        }
        
    `}</style>
}

export { Style }