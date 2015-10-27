# OlapicCarousel
Final carousel for Olapic Technical Problem Case

First thing I had to do was get git on my computer, so I installed that, as well as github for windows.  I also learned some of the commands for the windows command line in case I needed to use that.

Then I looked for beginner code snippets for carousels using .js, and found one pretty quickly.

I used microsoft expression web 4 to edit and preview my code, and then took some of the snippets to test the carousel.

After looking at a few plugins, I decided it would be better to just add the features of the carousel one by one from the ground up.  Plugins had a lot of extra things that I didn't really need and overcomplicated the process.

I ended up figuring out how to show 6 pictures at once after spending some time building and formatting the css file. 

After that, I tried to get the RESTful API media assets, but that didn't seem to work.  I may have been coding the request incorrectly, so I commented out that code.  

Then I decided to use the Chrome Advanced RESTlet Client to test the calls in a more structured environment. I was able to figure out how to construct the URL that I needed properly so that I could reference the dummy customer.

After that I had some trouble figuring out how to properly reference the links that were being returned in the JSON response.  So I took a look at StackOverflow and asked around about how to properly reference this type of response. 

Turns out I needed to parse the JSON response to properly reference the links.  So once I figured that out, I just wrote a for loop to do that for all 20 array elements and load them into the list items in the page. There was an issue with reading the response one more time, but I used the same methods for that solution.

...Man I learned a lot in the last 48 hours. 
