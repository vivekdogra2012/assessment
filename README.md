
React SPA Application with Infinite Scroll and Favorites Feature
This is a single-page application (SPA) built using React that allows users to view a list of items fetched from an API and add them to their favorites. It includes infinite scroll functionality to load more items as the user scrolls down.

Features
Dashboard Page (/): Displays a list of favorite items and a button to navigate to the List page.
List Page (/list): Displays a list of items fetched from an external API. Users can add items to their favorites by clicking a button.
Infinite Scroll: Automatically loads more items as the user scrolls down the list.
Favorites: Users can add items to their favorites, and their selection is saved in local storage. Favorites are visible on both the Dashboard and List pages.

Setup

Clone the repository:
git clone <repository-url>

Install dependencies:

cd <project-folder>
npm install
Start the development server:
npm start


Usage:
Dashboard Page: Navigate to / to view your favorite items and navigate to the List page.
List Page: Navigate to /list to view the list of items. Scroll down to load more items. Click the "Add to Favorites" button to add items to your favorites.
Dependencies
React Router DOM: Provides routing and navigation for React applications.
Tailwind CSS: A utility-first CSS framework for building responsive web designs.


Folder Structure:

src/
|-- components/
|   |-- Dashboard.js
|   |-- List.js
|-- styles/
|   |-- Dashboard.scss
|-- App.js
|-- index.js
|-- ...
