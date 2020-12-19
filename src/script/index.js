const _input = document.getElementById("Search");
const _button = document.getElementById("click");
const show_data = document.getElementById("body-content").getContext("2d");
const error = document.getElementById("error");
const show = document.getElementById("show");



_button.addEventListener("click", onButtonSearchClicked);
_input.addEventListener("keyup", event => {
    KeyCode(event);
})



function onButtonSearchClicked(){
    $(document).ready(function(){
        $(".loader").fadeIn("fast");
        $(".loader").fadeOut("slow");
    })
    SearchData(_input.value)
    .then(data => {
        Render(data);
    })
    .catch(ErrorHandler);
}

function Render(result){
    if (result){
        

        // show.style.display = "block";
        $("#show").show("fast");
        $("#show").css("display", "block");
        error.style.display = "none";
        new Chart(show_data, {
            type: "bar",
            data: {
                labels: ["Confirmed", "Deaths", "Recovered"],
                datasets: [
                    {
                        label: "Positif",
                        data:[
                            result.confirmed.value,
                            result.deaths.value,
                            result.recovered.value,
                        ],
                        backgroundColor: [
                            "#f9ed00", "#d80000", "#5ff900"
                        ],
                        borderColor: "#05ffd9",
                        barPercentage: 0.9,
                    }
                ]
            },
            options: {
                // scales: {
                //     xAxes: [
                //         {
                //             gridLines: {
                //                 display: true,
                //                 z: 10
                //             }
                //         }
                //     ],
                //     yAxes: [
                       
                //     ]
                // }
            }
        })
    }
}

function ErrorHandler(message){
    // show.style.display = "none";
    $("#show").fadeOut("fast");
    // error.style.display = "block";
    $("#error").fadeIn("slow");
    error.innerHTML = `<h1>${message}</h1>`
}

function KeyCode(event){
    const Enter = event.keyCode;

    if (Enter === 13){
        onButtonSearchClicked();
    }
}