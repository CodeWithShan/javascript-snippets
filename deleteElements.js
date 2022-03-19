// Delete elements from an array

// Ex: 1
const task = {
  id: 1,
  description: "Buy grocery from the market",
  status: "completed",
  deadline: "5 Days"
}

delete task.deadline;

console.log(task);

/*
Output:

{
  id: 1,
  description: "Buy grocery from the market",
  status: "completed",
}

*/

// Ex: 2
const platforms = ["udemy", "eduonix", "skillshare"];

deletedPlatforms = platforms.splice(1);

console.log(platforms, deletedPlatforms);

/*
Output:
["udemy"]
["eduonix", "skillshare"] 

*/

// Ex: 3
const followers = ["john", "edward", "jack"];

// returns index of the selected element
const requestIndex = followers.indexOf("edward");

// Now, use splice to delete
deletedFollowers = followers.splice(requestIndex, 1)

console.log(followers, deletedFollowers);

// Ex: 4
const roles = ["developer", "designer", "marketer"];

deletedRole = roles.pop()

console.log(roles, deletedRole);

/*
Output:

['developer', 'designer']
'marketer'

*/

// Ex: 5
const names = ["John", "Edward", "Jack"];

deletedName = names.shift();

console.log(names, deletedName);

/*
   Output:

   ['Edward', 'Jack']
   'John'

*/

// Ex: 6
const tasks = [
  { id: 1, description: 'Buy Grocery' },
  { id: 2, description: 'Create a blog post' },
  { id: 3, description: 'Make a thumbnail' },
  { id: 4, description: 'Share on Twitter' }
];

const filteredTasks = tasks.filter(task => {
  return task.id != 3;
})

console.log(filteredTasks);

/*
   Output:
     [
        {id: 1, description: 'Buy Grocery'},
        {id: 2, description: 'Create a blog post'},
        {id: 4, description: 'Share on Twitter'}
     ]

*/