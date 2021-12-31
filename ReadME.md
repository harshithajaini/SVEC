### Front End Tecchnologies
- html
- CSS
- JavaScript
- BootStrap Framework
- Angular Framework
### Back End Technologies
- Node.js
   - express.js
   - nodemoon
   - cors
   - dotenv
- java
- Python
- PHP
- C#
  
### Databases
- MongoDb
- Mysql
- SQLite
- Firebase
- postgrossql
- Oracle
- VCS(Source code management) 
   - Distributed VCS
   - Remote(central) VCS
   - Github

### Git


- git init
- git add filename
- git add filename1 filename2
- git add . or git add --all
- git status
- do git configurations(name and email)
- commit data with commit messages
- push the code into github
### HTML5
- Hyper Text Markup Language
- Semantic Elements 
  - header
  - section
  - article
  - aside
  - footer
  - table

- Block Level Elements
    - h1 to h6
    - div
    - all semantic elements
    - Text will start from new line
- Inline Elements
   - span
   - img
   - a
   - nav
   - form
   - input
   - text area
   - legend
   - sup
   - sub
   - ul
   - ol


### Task :
=====
- Audio
- Video
- canvas
- progress
- datalist
- meter
- select

### CSS
+ Cascading Style Sheets
+ Types of CSS
   - Inline CSS
   - External CSS
   - Internal CSS
+ Syntax of CSS

'''
selector{
    css properties
}
'''

#### Selectors
+ Simple Selectors
   - Class Selector (.)
   - Grouping Selector (,)
   - By Element Name
   - id Selector

+ Combinators
   + Universal Selector 
   + Descendant selector ( )
   + Child Selector (>)
   + Adjacent Sibling Selctor (+)
   + General Selector (~)

+ Pseudo Selectors
+ Pseudo element selector
+ Attribute Selector


### Box Model
+ margin
+ border
+ padding(ClockWise)
   - padding : 10px (for all adjacent sides)
   - padding : 10px 30px (10 for bottom,30 for left and right)
   - padding : 10px 300px 50px(10 for bottom, 300 for left and right, 50 for bottom)
   - padding : 10px 30px 4px 5px(top,right,bottom,left)
+ width
- 1rem:16px

#### Responsive Web Design

#### Flex-box
+ display
   -flex
      -flex wrap
      -justify-content
      - flex-direction
      - flex-flow
   - none
   - inline
   - block
   - inline-block
+ position
   - static
   - relative
   - absolute
   - fixed
   - sticky
+ align-content
+ align-files
+ align-self

### Media Queries
- Extra small devices (Mobile)
   - max-with:600px
- small devices (Large phones)
   - min-width:600px
- medium devices (Small laptops)
   - min-width:768px
- Large devices (Large laptops or desktops)
   - min-width:992px
- Extra large devices ()
   - min-width:1200px


''' 
@media only screen(min-width:320px) and (max-width:500px){
   CSS code
}
'''

### Bootstrap  4.6

- It is a CSS framework
- module (collection of functions)
- package (collection of modules)
- library (collection of packages)
- framework (collection of libraries)
   + module --> package --> library --> framework
   + Type of modes
      - online
         - CDN links
      - offline
+ background-color - bg
+ text-white
+ Margin in bootstrap (m-* (0-5))
   - 0 --> 0rem
   - 1 --> 0.25rem
   - 2 --> 0.5rem
   - 3 --> 1rem
   - 4 --> 1.5rem
   - 5 --> 3 rem
   - ml-5 (margin-left)
   - m (margin in all directions)
   - mt (margin-top)
   - mb
   - mr
+ Padding (padding-left --> pl-5)

+ colors
   - primary
   - secondary
   - info
   - success
   - warning
   - danger
   - light
   - dark
   - white
+ We can use color buttons for 
   - Buttons (btn-primary)
   - text (text - white)
   - secondary (bg-secondary)
   - alert (alert alert-primary)

+ Grid System
   -    col-sm-12
   - sm (small devices >=576)
   - md (medium devices >=768)
   - lg (large devices >=992)
   - xl (Extra large devices >=1140)
+ Modal
+ Table


#### JavaScript

+ In 1995 'Brenden Eich' introduced javaScript (ES-262)
+ JavScript is loosely toupled dynamic language (text-based programming language)
+ It also provides OOPS concepts.
+ We can use in client-side and server-side (Node.js) for dynamic web applications.
+ To conitnue in a same block (Shift+Enter)
+ To check the data type(console.log(typeof()))
- ECMA-Script (ES-6)
   - let & const
   - map ()
   - arrow
   - classes
   - spread operator
   - rest parameter
+ Datatypes
   - Number
   - BigInt (2^53-1)
   - String
   - Boolean
   - Undefined
   - Null
   - Object
   - Array
+ Variables
   - var
   - let
   - const
   - scope
      - function level --> var
      - block level --> let,const
   - redefine --> var,let
   - redeclare --> var

+ typeof() - to check the data type   
+ Object

+ Array

+ Alerts
+ To generate notification
   - alert
   - prompt (to take input from the user)
   - confirm



+ console statements
   - console.log()
   - console.info()
   - console.warn()
   - console.error()

+ Spread Operator 
   - it is used to change array elements from one array to another (swamp)
   - ...variable

+ Rest parameter
   + to handle function parameters
   - ...parameter


+ Destructuring of arrays

+ Functions

   - Functon with functionname
   ```
   function demo(x,y){
      return x+y
   }
   demo()
   ```
   - Anonymous function
   ```
   let demo=function(x,y){
    return x+y  
    }
   console.log(demo(3,4))   
   ```
   - Arrow Function
   ```
   let demo=(x,y) =>{
      return x*y
   }
   console.log(demo(3,4))
   ```
   + for-of
      - to get index values of an array
   + for-of
       - to get elements in an arrray

   + forEach() --> (ES-5)
   + map() --> (ES-6)

### DOM

      - Document Object Model
      - Document
      - history
      - window
      - navigator
   + DOM methods
      - `getElementById()`
      - `getElementsByClassName()`
      - `querySelector()`
      - `innerText`
      - `textContent`
      - `append`
      - `appendChild`
      - `innerHTML`
      - `setAttribute()`
      - `classList`
      - `style`
      - `src`

### JSON
+ JavaScriptObjectNotation
   - To exxchange information between client and server
```
{
   "name":"Harshitha",
   "age":"18",
   "mobile":9346962459
}
```

+ Ajax call or Promises (Fetch API) or axios

### ReactJS
##### ReactJS Features

+ It is a Library
+ It follows Component based Architecture
   - Functional Component
   - Class Component
   - Pure Component
   - Higher Order Comoponent

+ It provides Virtual DOM   
+ UniDirectional data flow
+ It provides JDX (JavaScript and XML)
+ Single Page Applications

+ Project Environment Setup
      - [Download Visual Studio code](https://code.visualstudio.com/download)
      - [Download Nodejs](https://nodejs.org/en/download/)
      - install Nodejs and check versions of `node` and `npm`
         - npm (node package manager)
         - `node-v`
         - `npm-v`
      - `webpack` and `label`
      - `create-react-app`
         - `npm install create-react app`
             - `create-react-app projectname`
      - `npx create-react-app appname`
+ Indx.html
+ Index.js
+ App,js
       + IndexPage
         + Index.html
            -nav.js
            - body.js
            - footer.js

            + Home.js
               - nav
               - body
               - footer
         + loginPage   
            - login.js
         + Register
         + About
         + Contact


### Animations



#### Reference links
- [FlatIcon]
- [color codes]()
- [contrast checker]()
- [getbootstrap](getbootstrap.com)
- [jasonlint](www.jasonlint.com)
   - to validate
- [jsonplaceholder] (https://jsonplaceholder.typicode.com/posts)