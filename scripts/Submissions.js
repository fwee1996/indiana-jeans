//Display all the submissions so far
//Complete the component function,
//invoke it from the main module 
//and then compose that HTML into the overall UI.
//summary:component fn get, data from api, create html rep of data
export const SubmissionList = async () => {
    //rmbr async because await inside



        // Get the submissions from your API
    const response = await fetch ("http://localhost:8088/submissions") //This line returns strings //rmbr async in fn declaration line 25 
    const submissions= await response.json()//convert response (a string) to array of js objects to iterate

    // Iterate the submissions and create some <section> representations
    //iterate.  ${submission.ownsBlueJeans} returns boolean, ${submission.socioLocationId} returns number
    let submissionHTML=""
    for  (const submission of submissions){
        submissionHTML+=`<section class="submission">
        <div>Owns Jeans?${submission.ownsBlueJeans}</div> 
        <div>Area type foreign key?${submission.socioLocationId}</div>
        </section>`
    }
    // Return the HTML string    
    return submissionHTML
}
