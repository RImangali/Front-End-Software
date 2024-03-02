function switchTab(tabToShowId, tabToHideId) {
    var tabToShow = document.getElementById(tabToShowId);
    var tabToHide = document.getElementById(tabToHideId);

    tabToShow.style.display = "grid";
    tabToHide.style.display = "none";

    var tab1 = document.getElementById('tab1');
    var tab2 = document.getElementById('tab2');

    if (tabToShowId === 'sign_in') {
        tab1.classList.add('is_active');
        tab2.classList.remove('is_active');
    } else {
        tab2.classList.add('is_active');
        tab1.classList.remove('is_active');
    }
}
