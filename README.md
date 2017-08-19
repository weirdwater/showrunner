# Showrunner

Syndicate your podcasts easily with Showrunner. Add shows and episodes, Showrunner will generate the appropriate RSS so your podcast can be featured on iTunes.

Try the [live version][live-link]!

## 🗜 Tech

The application is built on a MEAN stack.

- **Angular** was used for the single page webapp.
- **Node.JS** was used to serve the files, data & RSS feeds.
- **Express** was used as the framework to structure the Node server.
- **Mongo** was used for data storage.

## 📝 Features

- [x] See shows
- [x] Create shows
- [ ] Upload show art
- [x] Edit shows
- [ ] Delete shows
- [x] See a show's episodes
- [x] Add episodes to shows
- [ ] Upload audio files
- [ ] Edit episodes
- [ ] Delete episodes
- [ ] Create an account & log in/out
- [ ] Restrict users to only edit/delete their shows
- [x] Generate iTunes compatible RSS feeds for shows (& episodes) 

# 🖱 Usage

## Create a show

When you open [Showrunner][live-link] you will see a list of shows on the left side of the page. If it's a fresh install the list will be empty. The list is titled "Shows" and next to it you will find the "New Show" button, click it.
To the right of the shows list a form will appear. Fill the information relevant to your show.

> The **slug** will be used as your show's identifier. Keep it short and make sure it doesn't have whitespace. A good slug would be `showrunner` or `showrunner-podcast`.

> Currently it is not possible to upload image files. A test image has been made available and is called `art.png`.

After entering your show's information click "Submit". Once the request has been completed you will be brought to your newly created show, congratulations!. It should now also be listed on the left side of the screen.

## Edit a show

With [showrunner open][live-link] click on a show listed on the left side. If there are now shows, create one (see section above). Once the show has loaded you will see two buttons next to the show's title: `RSS` and `Edit`. Click the edit button. You will be presented the same form from creating a show. Change the information you wish to change and click submit.

## Add episodes

Open a show from the shows list on the left side of the screen. Once loaded you will find the heading "Episodes" under the show's details. If there are any episodes, they will be presented as a list, under the heading. Next to the heading you will see a button which reads: "New Episode", click it. You will now be presented with the form for an episode.

> Audio file upload has not been implemented yet. For now a 30 second excerpt from the "null10 Podcast" is available to test with.

> The show notes field accepts html 🙌

Enter the information for your new episode and select submit when you are done. You will now be brought back to the show's details page. Appended to the episodes list you will find your new episode. Select the "+" button on the episode to expand it for more details.

## Import your show into iTunes

Go to the details page of your show by selecting it from the shows list. Next to the show's title you will see two buttons, the first is RSS, click it. You will now see your show's RSS feed. **Copy** the link to your show's RSS, it should be structured as so: `http://188.226.145.184/rss/shows/show-slug`.

Open iTunes and from the menu bar go to the "File" menu, select "Subscribe to Podcast...". A dialog box will popup with a text-area, **paste** your show's RSS link into it and click "OK". You should see your show appear in iTunes, it may take a while for all your info to appear.

The RSS feed should work for any podcasting app that will allow you to subscribe from an RSS feed.

# 🐳 Deployment

Want to run Showrunner yourself? It's easy, just make sure you have **Docker** installed. Clone this [repo][git-repo] and from the repo's directory run `npm run docker:up`. Docker will download the `weirdwater/showrunner` and `mongo` images from Docker hub and spin them up in concert. It should be available at [http://localhost:3000]().
If you want it running on a remote server it's best to change the `docker-compose.live.yml` file to reflect your server's environment. Then run `npm run docker-live:up`. It will spin up the docker images as deamons. Use the npm script `docker-live:down` to stop showrunner.


[live-link]: http://188.226.145.184/shows
[git-repo]: https://www.github.com/weirdwater/showrunner
