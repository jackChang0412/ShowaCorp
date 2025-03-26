// GSAP 動畫
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".dish").forEach((dish, index) => {
    gsap.fromTo(dish, 
        { 
            opacity: 0, 
            x: index % 2 === 0 ? -100 : 100  // 偶數往左滑入，奇數往右滑入
        },  
        { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: "power2.out", 
            scrollTrigger: {
                trigger: dish,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// 標題滑入效果
gsap.from("header", { opacity: 0, y: -50, duration: 1.5, ease: "power3.out" });

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