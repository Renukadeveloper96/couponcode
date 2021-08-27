function openForm(){
    document.getElementById("popupForm2").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm2").style.display = "none";
  }
  function fillId(){
  var id = Math.floor(Math.random()*100000)
  document.getElementById('id1').value = id
 }