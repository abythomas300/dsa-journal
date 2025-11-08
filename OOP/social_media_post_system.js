// Social Media Post System
// Task: Create two classes that work together
// Goal: Understand how to different classes work together, object composition, need for utility functions

// Create the following
// User class with:-
// Properties: username, followers (number), isVerified (boolean)
// Method: displayProfile() - prints user info with a ✓ badge if verified
// Post class with:-
// Properties: content, author (a User object!), likes, timestamp
// Method: like() - increases likes by 1
// Method: displayPost() - shows the post with author's username, like comment count, display comments
// Method: deletePost() - delete that particular post 
// Comment class with:-
// Properties: commentText, author, timestamp
// Method: displayOneComment() - show that particular comment details

// Solution:
class User {
  constructor(username, designation, followers, following, isVerified) {
    this.username = username
    this.designation = designation
    this.followers = followers
    this.following = following
    this.isVerified = isVerified
  }
  displayProfile() {
    const verificationBadge = this.isVerified? '✔️' : ''
    console.log(`${this.username} ${verificationBadge} \n ${this.designation} \n ${this.followers} followers • ${this.following} following \n `)
  }
}

class Post {
  constructor(content, author, likes, timestamp, comments) {
    this.content = content
    this.author = author
    this.likes = likes
    this.timestamp = timestamp
    this.verifiedBadge = author.isVerified ? '✔️' : ''
    this.comments = comments
  }
  like() {
    this.likes = this.likes + 1
    console.log(`You liked this post: "${this.content}". It now has ${this.likes} likes.\n`)
  }

  displayComments(comments) {
    console.log(`\n---- Comments on ${this.author.username}'s post' ----`)
    comments.map((comment)=>{
      console.log(`${comment.commentAuthor} | ${comment.timestamp}`)
      console.log(`>"${comment.commentText}"\n`)
    })
    console.log('\n\n')
  }
  
  displayPost() {
    console.log(`\n${this.content}`)
    console.log(`Posted by ${this.author.username}${this.verifiedBadge} on ${this.timestamp}`)
    if(this.comments){
      console.log(`${this.likes} Likes | ${this.comments.length} Comments`)
      this.displayComments(this.comments)
    } else {
      console.log(`${this.likes} Likes | 0 Comments`)
    }
  }
}

class Comment {
  constructor(commentText, commentAuthor, timestamp){
    this.commentText = commentText
    this.commentAuthor = commentAuthor.username
    this.timestamp = timestamp
  }
  displayComment(){
    console.log("Highlighted comment: ")
    console.log(`${this.commentText}`)
    console.log(`Commented by: ${this.commentAuthor} on ${this.timestamp}`)
  }
}

// helper function to format UTC date
function formatDate(utcDate) {
  const hour = utcDate.getHours()
  const minute = utcDate.getMinutes()
  const day = utcDate.getDate()
  const month = utcDate.getMonth()
  const year = utcDate.getFullYear()
  return `${day}-${month}-${year} ${hour}:${minute}`
}

// creating users 
const user1 = new User('Michael B Jordan', 'Actor', 1500, 5,true)
const user2 = new User('Aby Thomas', 'Software Engineer', 99450, 0, true)
const user3 = new User('Robert Downey Jr', 'Actor', 8921, 2, false)
const user4 = new User('Patrick NPC', 'Office Worker', 10, 432, false)
const user5 = new User('iShowSpeed', 'Streamer', 84113, 10, true)

// commenting few comments
const p2c1 = new Comment(
  'A collab between Aby Thomas and The Primeagen would be epic.',
  user4,
  formatDate(new Date())
)

const p2c2 = new Comment(
  'You are an inspiration!',
  user3,
  formatDate(new Date())
)

const p1c1 = new Comment(
  'Yo, MBJ, you wanna race me ?',
  user5,
  formatDate(new Date())
)

// creating posts
const post1 = new Post('Scenes from a Music - Sinners BTS', user1, 666, formatDate(new Date()), [p1c1])
const post2 = new Post('Building the new Flipkart in 1 month', user2, 987, formatDate(new Date()), [p2c1, p2c2])
const post3 = new Post('Preperation for Dr. Doom was not easy, says RDJ', user3, 100, formatDate(new Date()))

// storing all posts in order
const allPosts = [post1, post2, post3]

// storiing all users in order
const allUsers = [user1, user2, user3, user4, user5]

// function to display all posts together
function displayAllPosts(posts){
  console.log(`\n ${'-'.repeat(10)} Your Feed ${'-'.repeat(10)}`)
  posts.map((post)=>{
    post.displayPost()
  })
}

// function to display all users to gether
function displayAllUsers(users){
  console.log(`\n ${'-'.repeat(10)} Recommended users ${'-'.repeat(10)}`)
  users.map((user)=>{
    user.displayProfile()
  })
}

// function to delete a post
function deletePost(postToDelete){
  // checking whether targeted post exists
  if(allPosts.includes(postToDelete)) { 
    //getting the index of target post
    const targetIndex = allPosts.indexOf(postToDelete)
    // splicing allPosts array
    const deletedPost = allPosts.splice(targetIndex, 1)
    console.log(`Post Deleted Successfully: "${deletedPost[0].content}" \n`)
  } else {
    console.log("Post deletion failed: The post either does not exist or has already been deleted..\n")
  }
}


// SIMULATION
// displayAllPosts(allPosts) // displaying all blogs
// displayAllUsers(allUsers) //display all users
// post2.like() // liking a posts
// post3.like() // liking a post
// deletePost(post1) // deleting a post
// displayAllPosts(allPosts) // displaying all blogs again
// deletePost(post1)// attempt to delete already deleted post
// user2.displayProfile()// display a user's profile
// post3.displayPost()
// comment1.displayComment() // displaying one comment
// post2.displayPost()
