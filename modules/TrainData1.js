class TrainData1 {

    constructor() {

        this.metroSchedule = document.querySelector("#metroSchedule");
        //this.output = document.querySelector("#output");

        this.getTrainTime();
    }


    getTrainTime() {
        this.metroSchedule.addEventListener("click", () => {

            fetch("./trainDB.json")
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    console.log(data);

                    //if (data.length > 0) {
                    // Work with JSON data here
                    //let output = '<h2 class="mb-3"> Metro Schedule<h2>';
                    let temp = `<h2 class="mb-3"> Metro Schedule<h2>
                        <thead>
                         <tr>
                           <th>Line</th>
                           <th>Route</th>
                         </tr>
                       </thead>`;
                    // console.log(data[0].route[0]);


                    data.forEach(data => {
                        temp += `
                                  <tr>
                                  <td>${data.line}</td>
                                  <td>${data.route[0].daytime}</td>
                                  <td>${data.route[0].evening}</td>
                                  <td>${data.route[0].weekend}</td>
                                  </tr>
                                  `;
                    });

                    document.getElementById("data").innerHTML = temp;
                    //}

                })
                .catch(err => {

                    console.log(err);
                })
        })
    }
}

export default TrainData1;