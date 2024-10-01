//tracks choices as the user interacts with your application
//Set up initial state then have a fn that can change that:
// Set up the transient state data structure and provide initial valuess
///*transient state is stored in the database.json*/
///* store their choices permanently when they click Submit*/
// Set up the transient state data structure and provide initial values
const transientState={
            // "id": 1,---taken out bcs its tracked by json server
            "ownsBlueJeans": false,
            "socioLocationId": 0 //initial state that user can change
}


// Functions to modify each property of transient state--other modules can now change the state
export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans=chosenOwnership
    console.log(transientState)// to see transient state when set function run
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId=chosenLocation
    console.log(transientState)
}

//POST 'create' REQUEST---NORMALLY YOU'VE DONE GET REQUEST:
// Function to convert transient state to permanent state
export const saveSurveySubmission= async()=>{
    //second argument passed is postOptions (object); first argument is usually URL
    const postOptions = {
        method: "POST",
        headers: {
            //because theres dash in key name need "":
            "Content-Type": "application/json"
        },
        //now data stored in application want to send it w post/body request
        //when get response from API its in string format 
        //so convert object to string to send to API
        body: JSON.stringify(transientState) //stringify the object transientState 
    }

    //make request:  rmbr postOptions at the end so its not a get request!
    const response = await fetch ("http://localhost:8088/submissions", postOptions) //rmbr async in fn declaration

//******//CUSTOM EVENT: go get the state when the state changes
        //go get the state when the state changes so you can see live changes on network tab in devTools
        const customEvent = new CustomEvent("newSubmissionCreated")
        document.dispatchEvent(customEvent)

}
