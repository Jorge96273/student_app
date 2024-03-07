import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter } from 'react-router-dom';
import App from "./App";
import HomePage from "./HomePage";
import AboutPage from './AboutPage';
import CharactersPage from './CharactersPage';
import CharacterDetailsPage from './CharacterDetailsPage'
import NotFound from './NotFound';
import LocationsPage from './LocationsPage';
import FavoriteCharactersPage from "./FavoriteCharactersPage";
// const router = createBrowswerRouter(array of objects of all the paths)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "about/",
                element: <AboutPage />
            },
            {
                path: "characters/",
                element: <CharactersPage />
            },
            {
                path: "character/:id/",
                element: <CharacterDetailsPage/>
            },
            {
                path: "locations/",
                element: <LocationsPage/>
            },
            {
                path:'favorites/',
                element: <FavoriteCharactersPage/>
            }
        ],
        errorElement: <NotFound/>
    },
])

export default router;