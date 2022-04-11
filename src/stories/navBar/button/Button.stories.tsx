import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../../../features/navBar/button/Button";

export default {
  title: "NevBar/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Button",
  route: "/",
};
