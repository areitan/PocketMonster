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
On pageload, the user will be presented with project title (PocketMonster), brief description of its function (maybe a snippet of background on D&D?), and a form with dropdown boxes for monster selection criteria. The last monster that was encountered (searched for) will be displayed on the homepage using local storage.

Upon submission of the form, the user will be directed to a new page with a monster statblock (layout designed by us), and a QR code that links to the original statblock hosted on the API.


- [PocketMonster Git Hub Repository](https://github.com/areitan/PocketMonster)
- [PocketMonster Deployed Application](https://areitan.github.io/*******)


PocketMonster Dashboard Screenshot

![PocketMonster Screenshot](./assets/images/*******)png)


## Process

### Wireframing

1. After brainstorming for our project idea and deciding on 2 API's, we drew out some simple sketches of our potential site.


### Kanban board

1. We decided to use a Kanban Board to help organize and assign tasks.
2. We divided the Kanban Board into 4 sections
    * The Icebox is the container for things we'd like to add after we have our minimum viable product. 
    * We have a To-Do container where tasks are waiting to be assigned. 
    * We have items that are in process and assigned.
    * We have a section for items that we feel are completed.


### index.html

1. We added id's to the inputs and other areas of the ```HTML``` we wanted our ```.js``` file to interact with.


### script.js

1. We added variables for the inputs from ```index.html``` that I needed for traversing the DOM and maintaining user inputs in local storage.
2. We used JSON and the ```localStorage.getItem()``` and ```localStorage.setItem()``` to pupt information into local storage and retrieve it for display.
3. We added an ```if``` statement to set the ```HTML``` elements to display the last saved user inputs. 

### style.css

1. We decided to use tailwind as our CSS framework, but found that installing it wasn't working so in the interest of time, we changed to Foundation.


## How To Contribute

Suggestions are welcome.


## Credits
-Trilogy Education Services, LLC, a 2U, Inc. brand