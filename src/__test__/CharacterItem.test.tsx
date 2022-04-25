import React from "react";
import { render, RenderAPI } from "@testing-library/react-native";
import CharacterItem from "../components/CharacterItem";

let component: RenderAPI;

function initializeComponent() {
  return render(
    <CharacterItem
      data={{
        id: 1,
        name: "test",
        image: "sample_url",
        species: "alien",
        status: "alive",
        gender: "male",
        origin: { name: "earth" },
        location: {
          name: "area-51",
        },
        episode: [],
      }}
    />
  );
}

beforeAll(async () => {
  component = await initializeComponent();
});

test("Renders correctly", async () => {
  await expect(component).toMatchSnapshot();
});
