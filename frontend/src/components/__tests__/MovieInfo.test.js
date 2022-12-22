import { render, screen } from "@testing-library/react";
import Chance from "chance";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";

import MovieInfo from "../MovieInfo";

const chance = new Chance();


describe("When using MovieInfo component", () => {
    let movie;

    beforeEach(() => {
        movie = {
            _id: chance.guid(),
            name: chance.name(),
            // synopsis: chance.name(),
            coverImage: chance.url(),
            genre: chance.word(),
            // movieUrl: chance.url(),
            releaseDate: chance.year(),
        }
    });


    it("Should display the movie cover image", () => {
        //Arrange
        render(
            <MovieInfo movie={movie} />

        );

        // Act (on the target behavior)
        const image = screen.getByRole('img', { name: 'cover' });

        //Assert (expected outcomes)
        expect(image).toBeVisible();
    });

    it("Should display the movie name", () => {
        render(<MovieInfo movie={movie} />)

        // Act (on the target behavior)
        const name = screen.getByText(product.name);

        expect(name).toBeVisible();
    });


    it("Should display the movie genre", () => {

        render(<MovieInfo movie={movie} />)

        // Act (on the target behavior)
        const genre = screen.getByText(product.genre);

        expect(genre).toBeVisible();
    });

    it("Should display the movie release date", () => {
        render(<MovieInfo movie={movie} />)

        // Act (on the target behavior)
        const date = screen.getByText(product.releaseDate);

        expect(date).toBeVisible();
    });



});

