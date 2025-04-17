document.getElementById("submit").addEventListener('click', async(e)=>{
    e.preventDefault();

    const Name = document.getElementById('Name').value;
    const email = document.getElementById('email').value;
    const skill = document.getElementById('skill-category').value;
    const portfolio = document.getElementById('portfolio').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if(password !== confirmPassword){
        document.getElementById('confirm-password-err').innerHTML = "Password not match";
        return;
    }

    try{
        const res = await fetch('http://localhost:5000/gigfloww/members/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({Name, email, skill, portfolio, password})
        });

        const data = await res.json();
        console.log(data);
        if(res.ok){
            window.location.href = '../confirmation.html';
        }
        else {
            alert("Error: "+data.message);
        }
    } catch (err){
        console.error(err);
        alert("Server error!");
    }
})