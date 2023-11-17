# update a blog
- endpoint ``api/v1/blog/:id``
- method ``PUT``

#### Params
- title : ``string (min length = 4 characters)``
- description : ``string (min length = 6 characters)``
- image : ``mimes ['png', 'jpeg', 'jpg']``
- author: `` user_id ``
- created_at `` Date ``


<br><hr><br>
### messages

**success**
- blog updated successfully

**failed**
- blog updating failed
- title must be more than 4 characters
- description must be more than 6 characters
- uploaded image type must be png,jpeg,jpg  


<br><hr><br>

### Return ``JSON`` Response
``` json 
{
    "success": , // boolean(true, false) 
    "message": "", // string of message 
    "data": {} // updated blog data (new data)   
}
```

