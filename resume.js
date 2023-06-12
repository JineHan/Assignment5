

// The Education data in Resume is fetched from JSON.

const url = "education.json"

getData();

async function getData(){

  try{
    const result = await fetch(url,{method:'GET'});
    const data = await result.json();
    createProjectList(data);
  }catch(err){
    handleError(err);
  }
}

const div = document.getElementById('education');

function createProjectList(educations) {
    let str = '<dl>';
    for (let schoolInfo of educations) {
      str += `
        <div class="row">
          <h7>${schoolInfo.degree}</h7>
          <h7>${schoolInfo.school}</h7>
          <h7>${schoolInfo.location}</h7>
        </div>
      `;
    }
    str += '</dl>';
    div.innerHTML = str;
  }
  
  
  function handleError(err){
    div.innerHTML = `<p class='error-text'>${err}</p>`;
  }
