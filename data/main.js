// دالة فتح وإغلاق القائمة
function toggleMenu() {
    var menu = document.getElementById('navMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// كود بناء الهيدر الخاص بالمقالات
var articleHeader = document.getElementById("bostHead");
if (articleHeader) {
    articleHeader.innerHTML = `
    <div id="toggleMenuBtn" style="cursor:pointer;">
   <img id="nav" src="../../nav.png">
    </div>
    <img src="../../techmaze.png" alt="TechMaze Logo" class="logo">
    <nav id="navMenu" class="dropdown-menu">
        <a href="../../index.html">الرئيسية</a>
        <a href="../../programming.html">برمجة</a>
        <a href="../../apps.html">تطبيقات</a>
        <a href="../../tools.html">ادوات</a>
        <a href="../../news.html"> أخبار</a>
        <a href="../../content.html">تواصل معنا</a>
    </nav>`;

    // ربط الحدث بالزر (بدون أقواس)
    document.getElementById("nav").onclick = toggleMenu;
}

// كود بناء هيدر الصفحة الرئيسية
var mainHeader = document.getElementById("mainHead");
if (mainHeader) {
    mainHeader.innerHTML = `
    <div id="toggleMenuMain" style="cursor:pointer;">
      <img id="nav" src="nav.png">
    </div>
    <img src="techmaze.png" alt="TechMaze Logo" class="logo">
    <nav id="navMenu" class="dropdown-menu">
        <a href="index.html">الرئيسية</a>
        <a href="programming.html">برمجة</a>
        <a href="apps.html">تطبيقات</a>
        <a href="tools.html">ادوات</a>
        <a href="news.html"> أخبار</a>
        <a href="content.html">تواصل معنا</a>
    </nav>`;

    document.getElementById("nav").onclick = toggleMenu;
}
