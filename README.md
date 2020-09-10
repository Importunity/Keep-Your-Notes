<h1>README is still under construction</h1>
<h1>
    What is Keep Your Notes?
</h1>
<p>In short it is just a remake of the google keep app created by google. I am remaking the app so I can learn react, 
    express, how to use hooks, functional components, redux, props, and more. May add in JWT Authentication if I get to adding it
 </p>
<h1>
    Development Process:
</h1>
<p>Descriptions: these are the steps I took to develop the application. There may be steps that will be modified/change in future iterations</p>
<ol>
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
    <li>Create Take a note... input </li>
</ol>
