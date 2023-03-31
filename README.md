# Jaiveer-Dhanju-IS24-full-stack-competition-req97073


How to setup?

First we need to run the backend
Go to the terminal, and make sure you're inside the bc-gov-test-backend-main folder
Run the command npm i
This command is needed to install all required dependencies
Run the command: node app.js
This command launches the server


Next, we can launch the frontend
Go to the terminal, and make sure you're inside the bc-gov-test-frontend-main folder
Run the command npm i
This command is needed to install all required dependencies
Run the command: npm start
This command launches the frontend

Known issues with my project:
1. The project isn't complete. I wasn't able to find the time to complete the last user story which was being able to edit a products information. Unfortunately, I was   occupied with my final exam. If I had the time I would have added another function to my server to handle HTTP PUT requests, and add edit buttons next to each product   item in my table.
2. I either have a race condition issue or a problem with my useEffect (in the file App.js) on my frontend. When a user submits a new product my table isn't re-       rendering. The newly added product only shows when I refresh the page. I think the issue is that my program is doing a POST call then GET right after. So maybe when I do a GET call old data is being sent over. The other reason I can think my tables data isn't updating might be because react is rendering my content before the new data is ready.

Thank you!!
