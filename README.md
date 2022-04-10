# PocketMonster

Create a QR for a Dungeons and Dragons Monster

## User Story

```
[AS A] Dungeon Master 
[I WANT] to easily generate a Dungeons and Dragons 5e monster 
[SO THAT] I can send it to my players
[GIVEN] I enter the attributes I would like the monster to have 
[WHEN] I click the search button 
[THEN] I am directed to a page with the monster's stats and a QR code that links back to the monster's page.
```
## Project Description
---
On page load, the user will be presented with project title (PocketMonster), brief description of its function, and a form with dropdown boxes for monster selection criteria. The last monster that was encountered (searched for) will be displayed on the homepage using local storage.

Upon submission of the form, the user will be directed to a new page with a monster statblock (layout designed by us), and a QR code that links to the original statblock hosted on the API.


- [PocketMonster Git Hub Repository](https://github.com/areitan/PocketMonster)
- [PocketMonster Deployed Application](https://areitan.github.io/PocketMonster/)


### PocketMonster Initial Page Screenshot

![PocketMonster Screenshot](./assets/images/index_screenshot.png)

### PocketMonster Results Page Screenshot

![PocketMonster Screenshot](./assets/images/randomizedresults_screenshot.png)

## Process
---

### Wireframing

1. After brainstorming for our project idea and deciding on 2 API's, we drew out some simple sketches of our potential site.


### Kanban board

1. We decided to use a Kanban Board to help organize and assign tasks.
2. We divided the Kanban Board into 4 sections
    * The Icebox is the container for things we'd like to add after we have our minimum viable product. 
    * The To-Do container where tasks are waiting to be assigned. 
    * The In-process container is for things we're working on and that are assigned.
    * The Completed container is for items that we feel are complete at t his point.


### index.html and randomizedresults.html

1. We added id's to the inputs and other areas of the ```HTML``` we wanted our ```.js``` file to interact with.
2. We added Zurb Foundation classes to structure our page.
3. Foundation had a building block template we used to create the translucent effect on the option boxes and the last monster encountered section.


### script.js

1. We added variables for the inputs from ```index.html``` that I needed for traversing the DOM and maintaining user inputs in local storage.
2. We used JSON and the ```localStorage.getItem()``` and ```localStorage.setItem()``` to pupt information into local storage and retrieve it for display.
3. We added an ```if``` statement to set the ```HTML``` elements to display the last saved user inputs. 

### style.css

1. We decided to use tailwind as our CSS framework, but found that installing it wasn't working so in the interest of time, we changed to Foundation.
2. We added some code from a Foundation template to control the translucent overlay for the form and local storage display.


## How To Contribute
---

Suggestions are welcome.


## Credits
---

- [Pixabay Free Stock Photos](https://pixabay.com/)
- [Zurb Foundation: Translucent Form Overlay](https://get.foundation/building-blocks/blocks/translucent-form-overlay.html)
- Trilogy Education Services, LLC, a 2U, Inc. brand