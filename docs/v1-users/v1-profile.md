# user profile
- endpoint ``api/v1/user/:id``
- method ``GET``

### Return `` JSON`` Response
``` json
{
    data: {
        "name": "", // current user name
        "email": "", // current user email
        "password": "" // current user password
    },
}
```