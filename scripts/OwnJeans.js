//static version 
//provide UI controls for user to pick Y/N 
//component fn that produce Y/N radio buttons 

//step3:
import { setOwnsBlueJeans } from "./TransientState.js"


//step 2:
 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
     const handleOwnershipChange = (changeEvent) => {
        if (changeEvent.target.name === "ownsJeans") {
            const convertedToBoolean = JSON.parse(changeEvent.target.value)
            //so everytime changes to state of radio buttons in html rep below it'll store 
            setOwnsBlueJeans(convertedToBoolean)
        }
    }

    //step1:radio button options --when this change --step 2 happen "setOwnsBlueJeans" sets transient state
export const OwnJeansChoices = () => {

    //new line added with new handleOwnershipChange function to invoke the function when change event happen
    document.addEventListener("change", handleOwnershipChange)

    let html= "<h2>Do you own a pair of blue jeans</h2>"
//note: you can only pick one option when radio buttons are both named ownJeans if want to pick >1 option name ownJeans1 ownJeans2
     html += "<input type = 'radio' name='ownsJeans' value='true'/> Yes"
     html += "<input type = 'radio' name='ownsJeans' value='false'/> No"
     return html
}