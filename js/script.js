/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn, .dropbtn img')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.display = "inline";
    document.getElementById("mySidenav").style.transition = "1.5s";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("mySidenav").style.transition = "1.5s";
  }