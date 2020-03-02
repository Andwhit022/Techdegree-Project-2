# Techdegree-Project-2
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

funciton appendPageLinks
    pass in list
    set div with the class name "pagination" and append to div element with the class name "page"
    set a ul element and append to pagination div
    set LI element and append to ul element
        set each li element to have a A element and a href attribute 
        add the class name "active" to the first link
    add event listener for each A element
        for each A element remove "active" class name
        set "active" class name to the A element that was clicked using target
        call showPage function

call showPage
call appendPageLinks
    


