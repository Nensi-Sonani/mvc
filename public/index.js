document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let studdata = {
        name:document.getElementById("name").value,
        grid:document.getElementById("grid").value,
        course:document.getElementById("course").value,
        number:document.getElementById("number").value,
        city:document.getElementById("city").value
    }
    console.log(studdata);

    fetch("http://localhost:8080/stud/add",{
        method:"POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(studdata)
    })
})