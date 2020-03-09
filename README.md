# Techdegree-Project-2
In this project I am hiding portions of a list and showing
it in increments using a set of buttons

 set variable to store student list item elements
 set variable to store number of list items on each page

 function showPage
        pass in list to represent student list
        pass in page to represent page number
        set start index to (page * items per page) - items per page
        set end index to page * items per page
    for any list greater than or equal to start index And less than end index
            print list item
    endfor
endfunction

call showPage to show first page

funciton appendPageLinks
        pass in list
        set a variable to hold the number of pages needed
        set div with the class name "pagination" and append to div element with the class name "page"
        set a ul element and append to pagination div
    for each page set LI element and append to ul element
            set each li element to have a 'a' element and a href attribute 
            add the class name "active" to the first link
         add event listener for each 'a' element
                for each 'a' element remove "active" class name
                set "active" class name to the 'a' element that was clicked using target
                for each page
                    remove active class from 'a' element
                endfor
            call showPage function
        endeventListener
    endfor
endfunction
                  
call appendPageLinks
    


