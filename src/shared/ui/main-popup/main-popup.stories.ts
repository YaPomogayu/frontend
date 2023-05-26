import type { Meta, StoryObj } from "@storybook/react";
import { MainPopup } from ".";

const meta: Meta<typeof MainPopup> = {
  title: "MainPopup",
  component: MainPopup,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Иванов Иван Иванович",
    phoneNumber: "+7(000) 000-00-00",
  },
};