# 个人主页

这是一个用于发布在GitHub上的个人主页，展示个人信息、教育背景、技能、经历和项目等内容。

## 项目结构

```
├── index.html          # 主页面文件
├── styles.css          # 样式文件
├── script.js           # JavaScript文件
└── README.md           # 项目说明
```

## 如何使用

### 1. 部署到GitHub Pages

1. 在GitHub上创建一个新的仓库，命名为 `your-username.github.io`（将 `your-username` 替换为你的GitHub用户名）
2. 将本项目的所有文件上传到该仓库
3. 在仓库设置中，找到 "GitHub Pages" 部分，选择 "main" 分支作为源
4. 等待几分钟，你的个人主页就会在 `https://your-username.github.io` 上可用

### 2. 本地预览

在本地目录中运行以下命令之一来启动本地服务器：

#### 使用Python 3：
```bash
python -m http.server 8000
```

#### 使用Node.js：
```bash
npx http-server -p 8000
```

然后在浏览器中访问 `http://localhost:8000` 查看效果。

## 个性化修改

1. **个人信息**：修改 `index.html` 文件中的姓名、头像、联系方式等信息
2. **技能和经历**：根据个人实际情况更新技能列表、校园经历和项目信息
3. **样式**：可以修改 `styles.css` 文件来自定义颜色、字体和布局
4. **交互**：可以修改 `script.js` 文件来添加更多交互功能

## 技术栈

- HTML5
- CSS3
- JavaScript
- Font Awesome 图标库

## 响应式设计

本页面采用响应式设计，在不同设备上都能良好显示：
- 桌面端：多列布局
- 平板端：适配中等屏幕
- 移动端：单列布局

## 特点

- 现代化的渐变背景
- 平滑的滚动效果
- 卡片悬停动画
- 响应式布局
- 清晰的信息层次结构