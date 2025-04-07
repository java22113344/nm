<form onsubmit="return validateForm()"> 
    <input type="text" id="name" placeholder="Name"><br> 
    <input type="email" id="email" placeholder="Email"><br> 
    <button type="submit">Submit</button> 
</form> 
 
<script> 
function validateForm() { 
    if (!document.getElementById('name').value || 
!document.getElementById('email').value) { 
        alert("Both fields are required!"); 
  
 
        return false; 
    } 
    return true; 
} 
</script>
