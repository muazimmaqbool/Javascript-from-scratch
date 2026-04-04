//To run go inside this folder via cd and enter: node --watch 6_BrowserTabHistorySystem.js

//Browser Tab History System
//you’ll understand how browsers manage navigation with Back and Forward just like Chrome.

/*
We willl maintain two stacks to achieve this:
    backStack → keeps track of previously visited pages.
    forwardStack → keeps track of pages you moved forward to (after going back).
    currentPage → stores the page you’re currently on.

| Action        | backStack     | currentPage | forwardStack |
| ------------- | ------------- | ----------- | ------------ |
| Visit Home    | []            | Home        | []           |
| Visit About   | [Home]        | About       | []           |
| Visit Contact | [Home, About] | Contact     | []           |
| Go Back       | [Home]        | About       | [Contact]    |
| Go Forward    | [Home, About] | Contact     | []           |

*/
class BrowserTabHistory{
    constructor(){
        this.backStack=[]
        this.forwardStack=[]
        this.currentPage=null
    }
    //visiting new page
    visit(page){
        if(this.currentPage){
            this.backStack.push(this.currentPage)
        }
        this.currentPage=page; //current page is now new visited page
        this.forwardStack=[]; //clearing forward history when visiting a new page
        console.log(`You visited page: ${page}`)
    }

    //going back
    //Move current page to forwardStack
    //Pop the last page from backStack to become the new currentPage
    back(){
        if(this.backStack.length===0){
            console.log("No previous page!");
            return
        }
        this.forwardStack.push(this.currentPage)
        this.currentPage=this.backStack.pop()
        console.log(`You went back to: ${this.currentPage}`)
    }
    
    //going forward
    //Move current page to backStack
    //Pop the last page from forwardStack to become new currentPage
    forward(){
        if(this.forwardStack.length===0){
            console.log("No forward pages!")
            return
        }
        this.backStack.push(this.currentPage)
        this.currentPage=this.forwardStack.pop()
        console.log(`You went forward to: ${this.currentPage}`)
    }
    showHistory() {
    console.log("---------------------------")
    console.log("Back Stack:", this.backStack);
    console.log("Current Page:", this.currentPage);
    console.log("Forward Stack:", this.forwardStack);
    console.log("---------------------------");
    }

    showCurrentPage(){
        console.log("currently You are on page:",this.currentPage)
    }
}

const browser=new BrowserTabHistory()

browser.visit("Home")
browser.visit("GeeksForGeeks")
browser.visit("Programiz")
browser.visit("Settings")

browser.showHistory()
/*
o/p: 
Back Stack: [ 'Home', 'GeeksForGeeks', 'Programiz' ]
Current Page: Settings
Forward Stack: []
*/

browser.back() //Programiz
browser.forward() //Settings
browser.back() //Programiz
browser.back() //GeeksForGeeks
browser.forward() //Programiz 
browser.showCurrentPage() // Programiz
browser.showHistory()
/*
browser.showHistory():
o/p:
Back Stack: [ 'Home', 'GeeksForGeeks' ]
Current Page: Programiz
Forward Stack: [ 'Settings' ]
*/

/*
In browsers like Chrome:
    When you visit a new page → it clears forward history (like our visit()).
    When you go back → it moves the current page to forward history.
    When you go forward → it moves it back again.
    This is exactly what happens internally!
*/
