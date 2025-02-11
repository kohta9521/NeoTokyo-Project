import { Meta, StoryObj } from "@storybook/react";

// components
import Logo from "../Logo";

const meta: Meta = {
  title: "Components/Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "key設定用のid",
    },
    link: {
      control: {
        type: "text",
      },
      description: "遷移先のリンク",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      description: "画像のサイズ",
    },
  },
};

export default meta;

type LogoStory = StoryObj<typeof Logo>;

export const Default: LogoStory = {
  args: {
    id: "home",
    link: "/",
    size: "Medium",
  },
};
