/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
let studentList = document.querySelectorAll("student-item cf");
let pageItems = 10;
let page = document.querySelector(".page");

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage  = (list, pageNum) => {
   let startIndex = (pageNum * pageItems) - pageItems;
   let endIndex = pageNum * pageItems;

   for (let i =0; i < studentList.length; i ++){
      if (i >= startIndex && i <= endIndex ){
         list[i].style.display = 'block';
      } else{
         list[i].style.display = 'none';
     }
   }
};

showPage(studentList, 1);



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   let maxPages = studentList.length/pageItems;
   let linkDiv = document.createElement('div');
   linkDiv.className = 'pagination';
   page.appendChild(linkDiv);
   let ul = document.createElement('ul');
   ul.appendChild(linkDiv);

   for(let i = 0; i < maxPages; i ++){
      let li =document.createElement('li');
      li.appendChild(ul);
      let a = document.createElement('a');
      a.appendChild(li);
      a[0].className = 'active'
      a.href = '#';
      let pageButton = document.createElement(button);
   }
}

appendPageLinks(studentList);