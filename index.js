  // 創建提示框
  const messageBox = document.createElement("div");
  messageBox.id = "messageBox";
  messageBox.textContent = "You are close to the bottom of the page."
  document.body.appendChild(messageBox);

  window.addEventListener("scroll", function(){
    //頁面能夠滾動的最大距離。
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    //視窗目前已經滾動的垂直距離（px），從頁面頂部向下滾動的距離(也就是目前滾動了多少)。
    const currentScroll = window.scrollY; 

    if (scrollableHeight - currentScroll < 100) {

      // 加上 CSS class，顯示。。
      messageBox.classList.add("show");
    } else {

      // 移除 CSS class，隱藏。
      messageBox.classList.remove("show");
    }
  });

    //hamburger 控制選單開關
  function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("show");
}