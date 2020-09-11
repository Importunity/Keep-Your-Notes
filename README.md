<h1>README is still under construction</h1>
<h1>
    What is Keep Your Notes?
</h1>
<p>In short it is just a remake of the google keep app created by google. I am remaking the app so I can learn react, 
    express, how to use hooks, functional components, redux, props, and more. May add in JWT Authentication if I get to adding it.
 </p>
 <p>By: Amadeus</p>
<h1>
    Development Process:
</h1>
<p>Descriptions: these are the steps I took to develop the application. There may be steps that will be modified/change in future iterations</p>
<ol>
    <h3>Plans for Iteration 1:</h3>
    <li>Create Documents: documents will be provided as soon as they're scanned.</li>
    <li>Add backend dependencies: bodyparser, concurrently, express, morgan, nodemon
        <ul>
            <li>body-parser: parses incoming request bodies in middleware </li>
            <li>concurrently: used so you can run frontend and backend simultaneously </li>
            <li>express: backend</li>
            <li>morgan: middleware i.e communication and i/o</li>
            <li>nodemon: so the app can refresh on file changes</li>
        </ul>
    </li>
    <h5>Note: when creating mongo uri's remember to create environmental variables to store the uri instead of pushing the uri into public repo</h5>
    <li>Create backend Express connection to MongoDB</li>
    <li>Create frontend React App</li>
    <h5>Note: All of the components added below are merely skeletal structure and may be prone to change or are non-functional. Functionality will be added in the later stages and will be documented in another bulletpoint</h5>
    <li>Create Navigation Bar
        <ul>
            <li>Add in react components
                <ul>
                    <li>Main-Menu</li>
                    <li>Refresh</li>
                    <li>Search</li>
                    <li>Setting</li>
                    <li>View</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Create Main body of the page
        <ul>
            <li>Add in react components
                <ul>
                    <li>ContentArea</li>
                    <li>CreateNote</li>
                    <li>Note</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Create Side Navigation Bar
        <ul>
            <li>Add in react components 
                <ul>
                    <li>Archive</li>
                    <li>Labels</li>
                    <li>Notes</li>
                    <li>Reminders</li>
                    <li>Trash</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Create user interface for navigation bar</li>
    <li>Create Take a note... inside main body 
        <ul>
            <li>Create on click expand</li>
            <li>Create on click outside to close</li>
        </ul>
    </li>
    <li>Create on click outside to create Note
        <ul>
            <li>Create footer icons
                <ul>
                    <li>click ellipsis to dropdown and delete note</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Create Actions
        <ul>
            <li>note actions to:
                <ul>
                    <li>Retrieve Notes from array</li>
                    <li>Delete Notes from array</li>
                    <li>Add Notes into array</li>
                </ul>
            </li>
            <li>Types for the type of actions that will be used, such as the actions listed above</li>
        </ul>
    </li>
    <li>Create Reducers
        <ul>
            <li>Create reducers for notes, reducers are meant to "reduce" or clean up your code</li>
        </ul>
    </li>
    <h6>Iteration 1</h6>
    <li><img src="./Keep Documents/keep1.gif" width="auto" height="300px" /></li>
    <h3>Plans for Iteration 2:</h3>
    <li>Remove all "temp" values from the array</li>
    <li>Load in notes from database</li>
    <li>Deploy the web application onto heroku</li>
    <li>Create uglify Register/Login UI for the user -- will be beautified in the future this is just temp</li>
    <li>Create login component</li>
    <li>Create logout component</li>
    <li>More will be added... I have decided to add in JWT authentication also</li>
</ol>
<hr>
<h1> Deployed Application Link Below: </h1>
<a href="https://sheltered-stream-33917.herokuapp.com/">Link</a>
