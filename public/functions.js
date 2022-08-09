function CallMe(event) {
    event.preventDefault();
    var input = document.getElementById("Program_name");
    alert(input)
  }
  document.getElementById("Program_description").addEventListener("click", CallMe);

function DisplayPrograms(){
    for(let i = 0; i < programList.length; i++){
        console.log(programList[i].title);
    }
    console.log("Listing complete.");
}

function LoadPrograms(){
    const dbRef = ref(db);
    get(child(dbRef, "programs")).then( (snapshot) => {
      
      snapshot.forEach(childSnapshot => {
        programList.push(childSnapshot.val());
      });
  
    })
    console.log(programList);
}

function ProgramName(){
    let PrgName = document.getElementById("Program_name");
    PrgName.addEventListener('submit', (event) => {
        set(ref(db, 'programs/abi101/' + title), {
        title: PrgName
        });
        console.log("title updated to " + PrgName.val());
    })

}
  
 
var programList =[];
programList.push("hi");


// After DOM ready do this:

if($.isready){
    console.log("DOM was loaded.");
} else {
    console.log("idk what happened, lol");
}