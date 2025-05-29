// 确保整个 HTML 文档加载并解析完成后再执行脚本内的代码，
// 这样可以避免因脚本在 DOM 元素创建前执行而找不到元素的问题。
document.addEventListener('DOMContentLoaded', function() {
    // --- “数据解读小贴士”区块折叠功能 ---

    // 获取ID为 'tips-toggle' 的元素，这是用户点击以展开/折叠内容的可点击区域 (通常是 <h4> 标题)。
    const tipsToggle = document.getElementById('tips-toggle');
    // 获取ID为 'tips-content' 的元素，这是实际需要被隐藏或显示的内容区域 (包含小贴士列表的 <div>)。
    const tipsContent = document.getElementById('tips-content');
    // 获取 'tipsToggle' 元素内部类名为 '.toggle-icon' 的子元素 (一个 <span>)，用于显示 '+' 或 '−' 图标。
    // 使用三元操作符进行安全检查：仅当 tipsToggle 存在时才尝试查询其子元素。
    const toggleIcon = tipsToggle ? tipsToggle.querySelector('.toggle-icon') : null;

    // 条件检查：确保上述三个关键的DOM元素都成功获取到，
    // 这是为了防止在HTML结构不完整或ID不匹配时脚本执行出错。
    if (tipsToggle && tipsContent && toggleIcon) {
        // 为 'tipsToggle' 元素（即小贴士的标题区域）添加一个点击事件监听器。
        // 当用户点击这个区域时，提供的回调函数将被执行。
        tipsToggle.addEventListener('click', function() {
            // 检查 'tipsContent' (内容区域) 当前是否处于隐藏状态。
            // 它被认为是隐藏的，如果其 'display' CSS属性为 'none'，
            // 或者如果该属性为空字符串 (在某些情况下，元素初始时可能没有显式设置 display 样式，但默认为隐藏或由CSS文件设置)。
            const isHidden = tipsContent.style.display === 'none' || tipsContent.style.display === '';
            
            // 根据 'isHidden' 的值，切换 'tipsContent' 的 'display' 样式属性。
            // 如果内容当前是隐藏的 (isHidden 为 true)，则将其设置为 'block' (显示它)。
            // 否则 (如果内容当前是显示的)，则将其设置为 'none' (隐藏它)。
            tipsContent.style.display = isHidden ? 'block' : 'none';
            
            // 根据新的显示状态更新 'toggleIcon' (加/减号图标) 的文本内容。
            // 如果内容刚才被设置为显示 (即 isHidden 为 true)，则图标应变为 '−' (表示可以折叠)。
            // 否则 (内容被设置为隐藏)，图标应变为 '+' (表示可以展开)。
            // 注意：这里使用的是真正的减号 '−' (U+2212) 而不是连字符 '-'，以获得更好的视觉效果。
            toggleIcon.textContent = isHidden ? '−' : '+';
        });

        // (这部分是之前版本用于确保初始状态的，新版JS中已移除，因为CSS负责初始隐藏，JS仅负责切换)
        // // 确保在JS启用时，图标状态与内容初始状态一致。
        // // CSS 文件通常会将 #tips-content 初始化为 display: none;
        // // 这里再次检查并相应地设置图标。
        // if (tipsContent.style.display === 'none' || tipsContent.style.display === '') {
        //     // 如果内容区域是隐藏的，确保图标显示为 '+'。
        //     if (toggleIcon) { // 再次检查 toggleIcon 是否存在
        //         toggleIcon.textContent = '+';
        //     }
        // } else {
        //     // 如果内容区域是显示的 (例如，如果CSS没有隐藏它或用户通过其他方式打开了它)，
        //     // 则确保图标显示为 '−'。
        //     if (toggleIcon) { // 再次检查 toggleIcon 是否存在
        //         toggleIcon.textContent = '−';
        //     }
        // }
    }
});
