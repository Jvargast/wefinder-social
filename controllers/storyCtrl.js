const Story = require("../models/storiesModel");
const Users = require("../models/userModel");
const CronJob = require('cron')

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

/* const Cron = CronJob.CronJob;
const job = new Cron(
  "* * * * * *",
  async function() {
    const data = await storyModel.find();

    //The subtraction returns the difference between the two dates in milliseconds. 36e5 is the scientific notation for 60*60*1000, dividing by which converts the milliseconds difference into hours.
    data.forEach((doc, idx) => {
      const currentDate = new Date();
      const hours = Math.abs(currentDate - doc.timestamp) / 36e5;

      if (hours >= 24) {
        storyModel
          .findOneAndDelete({ _id: doc._id })
          .then(() => {
            console.log("Story Deleted");
          })
          .catch((error) => {
            console.log(`Failed to delete story`, error);
          });
      }
    });
  },
  null,
  true,
  "America/Los_Angeles"
);

module.exports = job */

const storyCtrl = {
    create: async(req, res)  => {
        try {
            const {content,images} = req.body;
            if(images.length === 0)
            return res.status(400).json({msg: "Por favor, agrega una foto!"})
            const newStory = new Story({
                content, images, user: req.user._id
            })
            await newStory.save()

            res.json({
                msg: 'Created Post!',
                newStory: {
                    ...newStory._doc,
                    user: req.user
                }
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getStories: async (req, res) => {
        try {


            const stories = await Story.find();
            res.json({
                msg: 'Success!',
                result: stories.length,
                stories
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteStory: async (req, res) => {
      try {
          const story = await Story.findOneAndDelete({_id: req.params.id, user: req.user._id})

          res.json({
              msg: 'Deleted Story!',
              newStory: {
                  ...story,
                  user: req.user
              }
          })

      } catch (err) {
          return res.status(500).json({msg: err.message})
      }
  }
  }
module.exports = storyCtrl