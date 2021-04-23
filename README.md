# Work Day Scheduler - Day Planner

## Project Description & Goals
   * Our goal for this project was to develop out starter code, into a simple calander application which tracks the users' work day events (to be entered by the user).  The calander was to run from the standard 9:00am-5:00pm work day.  

   * Our objective included upating the HTML starter code, along with modifying the CSS (powered by jQuerey in this application).  In order to work with date and time functionality (current day/time displayed at the top of the screen), the Moment.js library was to be utilized.  
   
   * This library was to be utlized as well, so that the Day Planner would highlight in grey (past), present (red) and future (green) dependant upon what time of the day it currently is.

   * Finally, upon clicking on a save function, the users' input was to be stored and logged (utilizing local storage).


## Action Items 

    1) After initial review of the Work Day Scheduler starter code, I began by incorporating a JavaScript file by adding the script to the bottom of the HTML.
    2) Next, the build out process began for the time blocks.  Utilizing Boot Strap for starter code assitance, I was able to incorporate all rows within the container.  All of which follow a similar pattern for every hour of the work day (9am-5pm)
    3) Included within each row were paragraph and div class, both of which established the parameters for the rows (including size, a form control text area, in addition to a toggle primary button (which most closeley mimicked the demo on Bootstrap)). 
    4) Following the creation of my time blocks, I proceeded to the Javascript.  I began from the beginning and utilizing the moment.js library, to perfrom a function pulling in the current day to the page's header.  This format was (moment().format('ddd, MMM Do YYYY')).
    5) After the current day display was established at the top of the page, I proceeded to build out my variables to create an active Javascript.  These variables were created to be included in seperate Event Listeners, one for every button (9am-5pm), in order for the user to be able to successfully enter data and save into the text fields. These functions rely on document.GetElementById as well, and all console log correctly to display the users' input is being saved.
    

    **Items in Progress/Troubleshooting 
    


 <img src="Screenshot (34).png" alt="Day Planner Image 1">

 <img src="Screenshot (35).png" alt="Day Planner Image 2"> 



## Live Link to Deployed Page

 https://adamspiegel.github.io/Day-Planner/

 
# Contact Information
* Email - AdamSpiegel23@gmail.com
* GitHub - https://github.com/AdamSpiegel
* LinkedIn - www.linkedin.com/in/adam-spiegel-3086687
