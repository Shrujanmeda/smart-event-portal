const API = "/events";
async function loadEvents(){

    const response = await fetch(API);

    const events = await response.json();

    let output = "";

    events.forEach(event=>{

        output += `
        <div class="card">
            <h3>${event.name}</h3>
            <p>Date : ${event.date}</p>
            <p>Location : ${event.location}</p>
        </div>
        `;

    });

    document.getElementById("events").innerHTML = output;
}

async function addEvent(){

    const name=document.getElementById("name").value;
    const date=document.getElementById("date").value;
    const location=document.getElementById("location").value;

    await fetch(API,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            date,
            location
        })
    });

    loadEvents();
}

loadEvents();