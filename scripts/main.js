//Book-4
//3 components in Survey:
//do you have blue jeans?Y/N buttons 
//do you live in rural suburban etc? Selections 
//submit button

import { OwnJeansChoices } from "./OwnJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { LocationTypeChoices } from "./UrbanDweller.js"
import { SubmissionList } from "./Submissions.js"

const container = document.querySelector("#container")

//build all html, modify container and inject html
const render = async () => {
    const jeanOwnershipHTML= OwnJeansChoices()
    const locationsHTML= await LocationTypeChoices()
    const buttonHTML= await SaveSubmission()
    const submissionListHTML =  await SubmissionList() 

    container.innerHTML =
    `${jeanOwnershipHTML}
    ${locationsHTML}
    ${buttonHTML}
    ${submissionListHTML}`
}

//CUSTOM EVENT: add this line after custom event created in TransientState
document.addEventListener("newSubmissionCreated", render)//normally, ("click",--handler--here is render)

render()  //pulls in all html 