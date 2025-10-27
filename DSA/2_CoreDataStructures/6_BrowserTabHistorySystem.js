//Browser Tab History System
//you’ll understand how browsers manage navigation with Back and Forward just like Chrome.

/*
We’ll maintain two stacks:
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
    forward(){
        if(this.forward.length===0){
            console.log("No forward pages!")
            return
        }
        this.backStack.push(this.currentPage)
        this.currentPage=this.forwardStack.pop()
        console.log(`You went forward to: ${this.currentPage}`)
    }
    showHistory() {
    console.log("Back Stack:", this.backStack);
    console.log("Current Page:", this.currentPage);
    console.log("Forward Stack:", this.forwardStack);
    console.log("---------------------------");
    }
}