/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

//set global variables to hold student list items and number of items on each page.
let studentList = document.querySelectorAll('li.student-item');
let pageItems = 10;


//Create the `showPage` function to hide all of the items in the list except the ten on each page.   
const showPage  = (list, pageNum) => {
   //set starIndex and endIndex variables to determine what interval of students to show
   let startIndex = (pageNum * pageItems) - pageItems;
   let endIndex = (pageNum * pageItems)-1;

   //for any list greater than or equal to start index And less than end index print the list item
   for (let i =0; i < studentList.length; i ++){
      if (i >= startIndex && i <= endIndex ){
         list[i].style.display = 'block';
      } else{
         list[i].style.display = 'none';
     }
   }
};

//call showPage function to show first page
showPage(studentList, 1);


/**Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
**/
const appendPageLinks = (list) => {
   //set a variable to hold the number of pages needed
   let maxPages = Math.ceil(studentList.length/pageItems);

   //create and append a div with the class name 'pagination'
   let linkDiv = document.createElement('div');
   linkDiv.className = 'pagination';

   //set page variable to hold page div and append pagination div to page div
   let page = document.querySelector('.page');
   page.appendChild(linkDiv);

   //create a ul element and append it to pagination div
   let ul = document.createElement('ul');
   linkDiv.appendChild(ul);

   //for every page create a li and 'a' element
   for(let i = 0; i < maxPages; i ++){
      let li =document.createElement('li');
      li.value= i+1;
      ul.appendChild(li);

      let a = document.createElement('a');
      li.appendChild(a);

      //set each 'a' elements text content to hold its page number
      a.textContent= i+1;
      a.className = '';
      a.href = '#';

      //add event listener to each 'a' element
      a.addEventListener('click', ()=> {

         //set the clicked button's class name to 'active'
         let pageButton = event.target;
         pageButton.className = 'active';

         let PageNumberButton = a.textContent;
         
         let pageLink = document.getElementsByTagName('a');

         //remove to the 'active' class name from other 'a' elements
         for(let l=0; l < pageLink.length; l++){
            pageLink[l].classList.remove('active');
         }
         //call the show page function and pass the student list and PageNumberButton
         showPage(studentList, PageNumberButton);
      });
   }
}
//call appendPageLinks function
appendPageLinks(studentList);