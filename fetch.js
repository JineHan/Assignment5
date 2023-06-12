
// when user clicks the button, JS calls JSON data.
document.getElementById("studyButton").addEventListener("click", function() {
    fetch('education.json')
      .then(function(response) {
        if (response.ok) {
        return response.json();
    } else {
        throw new Error('Error: ' + response.status); // Throw an error if the response is not successful
      }
      })
      .then(function(data) {
        displayButtons(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  
  function displayButtons(data) {
    const buttonContainer = document.getElementById("buttonContainer");
    removeAllChildElements(buttonContainer); // without removeAllChildElements, historical calls stays.
  
    // loop degrees to display as options
    for (let i = 0; i < data.length; i++) {
      const button = document.createElement("button");
      button.textContent = data[i].degree;
      button.classList.add("button");
      button.addEventListener("click", function() {
        displaySchool(data[i].school);
      });
      buttonContainer.appendChild(button);
    }

}
  
  function displaySchool(school) {
    const resultContainer = document.getElementById("resultContainer");
    removeAllChildElements(resultContainer);
  
    const schoolElement = document.createElement("p");
    schoolElement.textContent = "I studied at " + school;
    resultContainer.appendChild(schoolElement);

 // Show the resume message when the button container is displayed
  document.getElementById("resumeMessage").style.display = "block";// blocked until all results are displayed.
  }
  
  function removeAllChildElements(element) {
    while (element.firstChild) {
      element.firstChild.remove();
    }
  }



  
  