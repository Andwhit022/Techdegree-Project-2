/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



let studentList = document.querySelectorAll('li.student-item');
let pageItems = 10;



   //Create the `showPage` function to hide all of the items in the 
   
const showPage  = (list, pageNum) => {
   let startIndex = (pageNum * pageItems) - pageItems;
   let endIndex = (pageNum * pageItems)-1;

   for (let i =0; i < studentList.length; i ++){
      if (i >= startIndex && i <= endIndex ){
         list[i].style.display = 'block';
      } else{
         list[i].style.display = 'none';
     }
   }
};

showPage(studentList, 1);




   //Create the `appendPageLinks function` to generate, append, and add 
  // functionality to the pagination buttons.


const appendPageLinks = (list) => {
   let maxPages = Math.ceil(studentList.length/pageItems);

   let linkDiv = document.createElement('div');
   linkDiv.className = 'pagination';

   let page = document.querySelector('.page');
   page.appendChild(linkDiv);

   let ul = document.createElement('ul');
   linkDiv.appendChild(ul);


   for(let i = 0; i < maxPages; i ++){
      let li =document.createElement('li');
      li.value= i+1;
      ul.appendChild(li);

      let a = document.createElement('a');
      li.appendChild(a);

      a.textContent= i+1;
      a.className = '';
      a.href = '#';
      a.addEventListener('click', ()=> {
         let pageButton = event.target;
         pageButton.className = 'active';

         let PageNumberButton = a.textContent;
         
         let pageLink = document.getElementsByTagName('a');

         for(let l=0; l < pageLink.length; l++){
            pageLink[l].className = '';
         }
         showPage(studentList, PageNumberButton);
      });
      
   }
}

appendPageLinks(studentList);