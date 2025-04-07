<ol id="skills"> 
    <li>HTML</li> 
    <li>CSS</li> 
</ol> 
<button onclick="addSkill()">Add Skill</button>
<script> 
function addSkill() { 
    const newSkill = document.createElement('li'); 
    newSkill.textContent = 'JavaScript'; 
    document.getElementById('skills').appendChild(newSkill); 
} 
</script> 
