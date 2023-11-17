# signin

- - endpoint `` api/v1/signin `` 
  - method  `` POST ``



  **params**
- email : user email
- password : user password 

<br> <hr> <br>

### messages
**<span style="color:green" >success message</span>**
- login success message

**<span style="color: red">failed message</span>**
- login failed
- password does not match
- email not registered
    

<br><hr><br>


###  Return ``JSON``
``` json  
 {
    success: , // boolean (true, false)
    message: "", // string
    data: {} // created user data (info)
 }
```
 
 
