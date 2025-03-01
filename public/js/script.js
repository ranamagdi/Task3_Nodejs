document.getElementById('form1').addEventListener('submit', async (e) => {
    e.preventDefault();
    document.getElementById('error').innerText = "Fetching data...";
    
    const address = document.getElementById('address').value;
    
    try {
        const res = await fetch(`http://localhost:3000/weather?address=${address}`);
        const data = await res.json();

        if (data.error) {
            document.getElementById('error').innerText = data.error;
            clearFields();
        } else {
            document.getElementById('error').innerText = "";
            document.getElementById('country').innerText = `🌍 Country: ${data.location}`;
            document.getElementById('lat').innerText = `📍 Latitude: ${data.latitude}`;
            document.getElementById('lon').innerText = `📍 Longitude: ${data.longitude}`;
            document.getElementById('temp').innerText = `🌡 Temperature: ${data.forecast}°C`;
       
        }
    } catch (e) {
        document.getElementById('error').innerText = "Something went wrong!";
        clearFields();
    }
});

function clearFields() {
    document.getElementById('country').innerText = "";
    document.getElementById('lat').innerText = "";
    document.getElementById('lon').innerText = "";
    document.getElementById('temp').innerText = "";
    document.getElementById('forecast').innerText = "";
}
