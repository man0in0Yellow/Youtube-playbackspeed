// contentScript.js

// YouTube sayfasının yüklenmesini bekleyelim
window.addEventListener("load", function () {
  // div oluşturalım
  const newdiv = document.createElement("div");
  console.log("div olustu")

  // "ytp-left-controls" sınıfına sahip elementi bulalım
  const leftControls = document.querySelector(".ytp-left-controls");
  if (leftControls) {
    leftControls.appendChild(newdiv);
  }
  //newdiv icine hazirladigimiz widgeti koyalim
  newdiv.innerHTML = `
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <style>
        .slider-area {
            display: flex;
            justify-content: center;
            padding: 3px;
            cursor: pointer;

        }

        #sliderValue {
            font-family: inherit;
            opacity: 0.9;
            cursor: pointer;

        }


        #myForm {
            overflow: hidden;
            transition: width 1s;
            width: 0px;
            cursor: pointer;

        }

        .container:hover>#myForm {
            width: 200px;
            cursor: pointer;


        }

        .container {
            width: 240px;
            cursor: pointer;

          
        }

        #forwardIcon {
            color: #eee;
            padding-top: 24px;
            padding-left: 12px;
            cursor: pointer;

        }

        .form-group {
            color: #eee;
            width: 200px;
            cursor: pointer;

            
        }

        #slider {
            accent-color: #eee;
            cursor: pointer;

        }


    </style>
</head>

<body>

    <div class="container" style="display: flex;height: 48px;">
        <div>
            <i id="forwardIcon" class="fa-solid fa-forward fa-2xl"></i>
        </div>

        <form id="myForm">
            <div class="form-group  ">
                <div class="slider-area"  >
                    <input id="slider" style="width: 150px;" step="0.05" type="range" value="1.00" min="1" max="4"
                        oninput=" nextElementSibling.value = value ">
                    <output id="sliderValue" class="speed">1.00</output>
                </div>
            </div>
        </form>
    </div>

</body>

</html>
  `;


  const slider = document.getElementById("slider");
  const sliderValue = document.getElementById("sliderValue");
  slider.addEventListener("input", function () {
    sliderValue.textContent = parseFloat(slider.value).toFixed(2);
    console.log("slider value from input: ", parseFloat(slider.value).toFixed(2))
  });

  function setSliderValue(value) {
    slider.value = value.toFixed(2);;
    sliderValue.textContent = value.toFixed(2);;
  }






  // Slider value set to speed
  slider.addEventListener("input", function () {
    const video = document.querySelector("video");
    if (video) {
      video.playbackRate = slider.value;
    };
  });
});
