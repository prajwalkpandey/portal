#portal

This repository contains the set of the codes for an online registration portal for the continuing students of IIIT Guwahati.

The details of the different folders are as follows:

1. css: This contains the set of CSS codes that have been used for designing and giving an outlook to the webpages.
2. imgs: The set of images that have been used/added to the webpages.
3. js: The different javascript files that include various codes such as the ones that are responsible for bringing and passing information to and from the database through an API.
4. src: These are the html files responsible that create our webpages.
5. index.html : The main/home html page.

This entire registration process has been integrated so as to be hosted on a server.

1. Once the server has been turned on, this is how the software works. Run the "index.html" file. 
2. On doing so, the home page opens up. Clicking on "IIITG", moves to a section where one can choose to continue as a student or an admin.
3. If someone is a student, then:
  3.1 They can proceed with the registration by filling up their roll number. 
    3.1.1 On filling the roll number and clicking on continue, relevant information about the student gets fetched from the database.
    3.1.2 The student has to fill up their semester and then click on continue to able to choose the courses.
    3.1.3 On clicking on continue, the student will be shown the compulsory courses as well as the available electives for that semester. The electives will be present
      in a checkbox manner. 
  3.2. If the student wants to raise a case regarding the registration process, then they will have the option to fill up a form and submit, which shall be reviewed by the admin later.
  3.3. Once the entire registration process is over, they can choose to generate a token, which they shall have to present to the academic section within a prescribed time, thus ensring physical 
       presence and also marking an end to the registration process.
4. If someone is an admin, they have to enter their email and password and that way they will be redirected to their home page, wherein they can view the students whose registrations are done and also have a look at
    applications filed.
      
