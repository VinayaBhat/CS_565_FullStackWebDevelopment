# CS_565_FullStackWebDevelopment
Course Work
Fall 2019

# Assignment 1

1. exercise1 is the HTML form.Implemented  entirely using `form` element of HTML.

2. exercise2 is the `http://placekitten.com/` website implemented in HTML. I have 2 `div` elements and one `footer` element.

3. exercise3 is the portfolio using only HTML. 
I have included 
- name and a brief bio about myself in the about section. 
- I have implemented the header, footer, and two section elements (About and to get in touch). 
- An unordered list of links (LinkedIn and Github) and headers of type h1, h2 and h4.
- The three photo elements are LinkedIn icon,Githib icon and profile picture.
- A contact form with input elements for email and a submit button

# Assignment 2

*I have implemented all styling using <style> tags within the HTML file.*

1. exercise1 is the HTML form with CSS styling. I have
- Centered the form in the middle of the webpage
- Used the linear gradient mentioned
- Whenever a button is hovered over it changes the color to green from navyblue.

2. exercise2 is the placekitten website. I have inspected the website and done the CSS styling. I have implemented the same colour and 
fonts used in the website. I have used 2 `div` elements, in the first `div` element we have the heading,text and one image and in the second '`div` element we have only the images.

3. exercise3 is the portfolio. I have used CSS flexbox to style this page. We have one main box which is the flexbox and two items called left box and right box. The left box conatins the profile picture. I decided crop the profile picture to fit in the circle. Also, I ended up using a different picture than what I used in the first assignment.
In the right box, I have added my name, information about myself, contact form and LinkedIn and Github links.


# Assignment 3

*I have implemented styling using <style> tags within the HTML file*

1. exercise1 is the HTML form which is implemeted and styled completely using Boostrap. I have kept each input field within a div element. Submit button is the primary button and Reset button is the secondary button.

2. exercise2 is implemented using Boostrap grid. I have used col-*number_of_cells* to specify the number of cells in the 12 column grid that the item will take up even on resizing the page from page xs upwards.

3. exercise3 is **Layout 1** implemented using **CSS FlexBox**

4. exercise4 is **Layout 2**   implemeted using **Bootstrap grid**

5. exercise5 is **Layout 3** implemented using **position:relative, float and inline-block**

6. exercise6 is **Layout 4** implemented using **CSS Grid**

7. exercise7 is **Layout 5** implemented using **CSS Grid**

8. exercise8 is **Layout 6** implemented using **Bootstrap Grid** and works on form resizing.

# Assignment 4 
 
 **All javascript code was implemented within <script> element in the HTML file**
 
 1. exercise1 prints `FizzBuzz` on numbers divisble by 3 and 5, prints `Fizz` on numbers divisble by 3 and prints `Buzz` on numbers divisible by 5. All the other numbers from 1 to 100 are printed as it is in the console. 
 
 2. exercise2 reverses the number and prints it in the console. I take the modulo of the number by 10 and then divide the number by 10. The module operation gives me the last number and the divide operation removes the last number. Do this until number becomes 10. On each iteration multiple 10 by the existing result and add the remainder.
  
 3. exercise3 is the Bootstrap form. I added the javascript code to print the form input field contents on console on *Submit* action and reset the form input fields on *Reset* action.
 
 4. exercise4  prints the page dimensions *Width* and *Height* on page resize. 
 
 5. exercise5 is the button to change the color of the webpage. I have placed the button in the center of the page and the button changes color when hovered over it. On each click of the button the background of the page is changed to a randomly generated color (HexCode)

# Assignment 5

Files:
- index.html : This file has the bootstrap form
- app.js : This file has the express node creation and the post method which displays the form content on the webpage.
- package.json
- package-lock.json
- .gitignore

1. Download the project
2. Go to the project directory `cd assignment#5` 
3. On running `node app.js` in the command prompt, the server is started and is listening on port 8080. 
   
   `http://localhost:8080/` displays the form. After filling out the contents if we press `submit`, the contents of the form is displayed on `http://localhost:8080/submit`

# AngularTutorial

1. Download the project
2. Change the project directory `assignment#6` to `assignment6` since webpack does not support `#`
3. Run `npm install -g @angular/cli@latest` to install angular on the system in the command prompt. 
4. Go into the project directory: ` cd AngularTutorial` in the command prompt. 
5. Run `npm update` to install all project dependencies in the command prompt. 
6. Run `ng serve` in the command prompt to start the dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


**Modified Files** <br />
AngularTutorial/src/index.html <br />
AngularTutorial/src/main.ts <br />
AngularTutorial/src/app/app.component.ts <br />
AngularTutorial/src/app/app.module.ts <br />


