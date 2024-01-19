# LBR Bouldering League 

This project was created to allow Long Beach Rising to use an online platform to manage Bouldering League.  The application allows members of the gym to form a greater communityy over the duration of boudlering league as well as give transparency to how points are calculated, whos on which team, and how the leaderboards look. A memeber is able to sign up and either create or join an existing team.  They can then fill out a form to submit their completed climbs and have their points automatically calculated for themselves as well as for their entir team. As an admin, you can create new climbing sets and associated climbs for each week of bouldering league.   

## Usage 

To get the application preped to run in development, you can run:

### `bundle install`

Installs all Ruby Gems and Dependencies.

### `npm install --prefix client`

Installs all Node.js Dependencies.

### `rails db:create db:migrate db:seed`

Sets up the database and loads seed data.

### `rails s`

Starts the server - running on localhost:3000

### `npm start --prefix client`

Runs the app in the development mode.
Open http://localhost:4000 to view it in your browser.

Enjoy!

## Future Updates/Implementations

    - set up action mailer to send out automated emails regarding info about bouldering league... ex: reminder to submit climbs before week end
    - set up styling specifically for smaller screens, better interface on phones.
    - look into including cropper.js for image adjustments before uploading via Active Storage
    - look into Lightbox Libraty to allow users to click on an image and display it in a larger format

