## User DB
A simple React demo app to add and list a set of users:

### UI:
<img src="UI.png" width="400" alt="Proposed UI">

### Components:
| Components Structire | Common UI components |
| ----------- | ----------- |
| <ul><li>App<ul><li>Card<ul><li>UserForm<ul><li>Input</li><li>Input</li><li>Button</li></ul></li></ul></li><li>Card<ul><li>UserList<ul><li>UserRecord</li></ul></li></ul></li></ul></li></ul> | <ul><li>Card</li><li>Input</li><li>Button</li></ul> |

### State:
* App=> users: Array<User> ↓ (to the list)
    * UserForm=> user: User ↑
        * Input=> input: any ↑

### Interfaces:
User:  
&nbsp;&nbsp;name: string  
&nbsp;&nbsp;age: number
