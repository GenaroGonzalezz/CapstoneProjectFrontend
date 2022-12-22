import { render, screen } from "@testing-library/react";
import Chance from "chance";
import { BrowserRouter } from "react-router-dom";

import MovieCatalog from "../MovieCatalog";

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

    // before() is run once before all the tests in a describe
    // after() is run once after all the tests in a describe
    // beforeEach() is run before each test in a describe
    // afterEach() is run after each test in a describe

    // describe("When using MovieCatalog component", () => {
    //     it("Displays a component with MovieInfo and buttons to watch movie and view details", () => {
    //         // const { getByTestId } = render(<MovieCatalog movie={{}} />)
    //         // const movieValue = getByTestId("movieComp").textContent;
    //         // expect(movieValue).toEqual({});
    //     }
    // });

    it("Should display the MovieCatalog component", () => {
        //Arrange
        render(

            <MovieCatalog movie={movie} />

        )

        // Act (on the target behavior)
        const image = screen.getByRole('div', { name: 'cover' });

        //Assert (expected outcomes)
        expect(image).toBeVisible();
    });
});