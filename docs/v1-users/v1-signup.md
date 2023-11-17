# create a user

- - endpoint `` api/v1/signup `` 
  - method  `` POST ``



  **params**
- name : user name
- email : user email
- password : user password 

<br> <hr> <br>

### messages
**<span style="color:green" >success message</span>**
- register success message

**<span style="color: red">failed message</span>**
- registeration failed
- password must be more than 4 characters
- email already registered in website

<br><hr><br>


###  Return ``JSON`` 
``` json  
 {
    success: , // boolean (true, false)
    message: "", // string
    data: {} // created user data (info)
 }
```
 
 
