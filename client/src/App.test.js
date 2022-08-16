import { render, screen } from "@testing-library/react"

import { MemoryRouter } from "react-router-dom"

import Intro from "./components/Intro"

test("Renderiza una landing page", () => {
  render(<Intro />, { wrapper: MemoryRouter })

  expect(screen.getByText("Welcome")).toBeInTheDocument()
})

test("debe haber una imagen representativa del proyecto", () => {
  render(<Intro />, { wrapper: MemoryRouter })

  expect(screen.getAllByRole("img")).toHaveLength(1)
})
