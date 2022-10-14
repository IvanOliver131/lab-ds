import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { waitFor, within } from "@storybook/testing-library";
import { Header } from ".";
import { Logo } from "../../../../components/Logo";

export default {
  title: "Sign In/Header",
  component: Header,
  args: {},
  argTypes: {},
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
      // expect(canvas.getByAltText("logo")).toBeInTheDocument();
      expect(canvas.getByText("Ignite Lab")).toBeInTheDocument();
      expect(
        canvas.getByText("Faça login e começe a usar! 😎")
      ).toBeInTheDocument();
    });
  },
};
