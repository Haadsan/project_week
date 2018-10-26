use educationRants_hub;
db.dropDatabase();

db.educationrants.insertMany([
  {
    title: "My Rant On Formal Education",
    selftext: "While on the F Line in San Francisco, I overheard a man telling a stranger he had just met how “You need to go to college in this day in age. With this economy, there isn’t any way you’re going to find a job and make any money without a college degree.  What are you going to do? Work in a coffee shop? They don’t make any money.” This struck a nerve with me.",
    author: "Jack"
  },
  {
    title: "Is having a degree better?",
    selftext: "Yes, education is important.  Everyone feels that they are supposed to continue their schooling after high school.  It’s the natural next step in one’s life. Some people feel they need that “college experience”. But are those that went to a University and received a degree any better off that the ones that didn’t?",
    author: "Sara"
  }

]);
