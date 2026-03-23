// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '40px 0';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '60px 0';
        header.style.boxShadow = 'none';
    }
});

// 技能卡片悬停效果
const skillCards = document.querySelectorAll('.skill-category');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = ' translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 项目卡片悬停效果
const projectCards = document.querySelectorAll('.project-item');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 兴趣爱好标签点击效果
const hobbyTags = document.querySelectorAll('.hobbies-list span');
hobbyTags.forEach(tag => {
    tag.addEventListener('click', function() {
        this.style.backgroundColor = '#764ba2';
        setTimeout(() => {
            this.style.backgroundColor = '#667eea';
        }, 500);
    });
});

// 页面加载完成后显示动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});