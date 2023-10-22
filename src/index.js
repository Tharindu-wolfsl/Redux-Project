import { bugAdded, bugRemoved, bugResolved, getUnresolvedBugs, addBugToUser, getBugsAssignToUser } from "./store/bugs";
import { addProject } from "./store/projects";
import { userAdded } from "./store/users";
import configStore from "./store/storeConfig";

//subcribe always run when state changes
// store.subcribe(() => {
//     console.log('State changed!' , store.getState());
// })
let store = configStore();
let unsubcribe = store.subscribe(() => {
  console.log("State changed!", store.getState());
});
//without redux toolkit
// store.dispatch(bugAdded("Bug1"));
// store.dispatch(bugAdded("Bug2"));
// store.dispatch(bugAdded("Bug3"));
// store.dispatch(bugResolved(1));

//with redux toolkit
store.dispatch(bugAdded({description:"Bug1"}));
store.dispatch(bugAdded({description:"Bug2"}));
store.dispatch(bugAdded({description:"Bug3"}));

store.dispatch(addProject({description:'Project1'}))
store.dispatch(addProject({description:'Project2'}))

store.dispatch(userAdded({name:'User1'}))
store.dispatch(userAdded({name:'User2'}))

store.dispatch(addBugToUser({bugId:2, userId:1}))


store.dispatch(bugResolved({id : 1}));

//After unsubscribe state changes not showed
const unresolved = getUnresolvedBugs(store.getState());
const userBugs = getBugsAssignToUser(1)(store.getState());
console.log("userBugs", userBugs);
unsubcribe();
// store.dispatch(bugRemoved({id : 1}));




