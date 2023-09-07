# Work Planner
## Overview
- This challenge lets the user write anything they might need to do for each hour that way they can look at it and see their notes. It has a local storage function that way even if the website is closed or refreshed, the notes will stay there. It has a useful highlight over the current hour so that it's easy to see which hour it is and see what the user needs to do during that time. 
- This code uses JQuery, JavaScript, HTML, and CSS. The HTML has the basics with each time container with the individual hour and then the CSS uses those classes to change the color highlighted on the current, past, and future times. The JavaScript and JQuery target the user's input and the current time. If the user writes something in the time slot, the save button can be clicked to save that to local storage so that the input will stay there to reference. The highlighted hour changes based on the current time using the day.js(). Loops and if statements are used to change what happens when the hour changes to change the color.
## Successes and Struggles:
- I am proud that I had a pretty good outline and plan before I got tutor help. I was provided the starter code from Denver University BootCamp for the HTML and the CSS. I had to change the HTML to show the hours as there was an "area hidden" that was to be deleted. I also had to copy the original container for hour-9 and change that for the rest of the hours from 10-5 and then delete the given classes since the JavaScript & Jquery would be changing the times based on the current time. 
- I struggled with getting the if statements to work correctly and change the time. When I was trying to do it, the colors would just disappear completely. This was actually because I was using JavaScript syntax and not JQuery so I was actually trying to mix the two without realizing. I scheduled a tutor session with Corey Yates and she helped me with the correct syntax and we changed the hours to have the correct color and she helped me with my local storage function as well.
## Contributions:
 - BBC Tutor: Corey Yates (Tutor Session 9/7/2023)
    - A big shout out and thank you to Corey Yates for helping me with this assignment including helping me clean up the local storage function and fix my if statements to be able to show the current, past, and future hour, and for helping me to understand the parseInt and pop method. She gave me additional tips too regarding the HTML and tips to check the code. 
 - Duckett, Jon, et al. JavaScript & jQuery: Interactive Front-End Web Development. Wiley, 2015. 
 - js.foundation, JS Foundation -. .“.Siblings().” ..Siblings() | jQuery API Documentation, api.jquery.com/siblings/. Accessed 1 Sept. 2023. 
 - MozDevNet. “Parseint() - Javascript: MDN.” JavaScript | MDN, developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt. Accessed 29 Aug. 2023. 
- BBC Bootcamp for provided code (HTML and CSS). 

