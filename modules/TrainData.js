class TrainData {



    getTrainTime() {

        fetch("./trainDB.json")
            .then(res => {
                return res.json();
            })
            .then(station => {
                for (let i = 0; i < 8; i++) {
                    console.log(station);
                    let stationArray = station[i];
                    let stationDiv = document.createElement("div");
                    document.querySelector(".train-map-div").appendChild(stationDiv);
                    stationDiv.className = "station-map";

                    stationDiv.addEventListener("mouseover", () => {
                        stationDiv.className = "station-map-hover";
                        let output = "";
                        output =
                            ` <h4>Station:</h4>
                            <p> ${stationArray.station.name}</p>
                            <h5> Minutes between train</h5>
                            <p>${stationArray.station.trains}</p>
                            <h5>driving towards:</h5>
                            <p>${stationArray.station.direction.direction1}</p>
                            <p>${stationArray.station.direction.direction2}</p>`

                        stationDiv.innerHTML = output;
                    });





                }


            })


    }
}

export default TrainData;