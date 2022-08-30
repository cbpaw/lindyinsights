import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  PresentationChartLineIcon,
  ChatIcon
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Why Lindy Insights",
  desc: "We are here so that you can leverage our expertise for your business. Here are some reasons why.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Data Science specialists of 7+ years",
      desc: "We have been around many corporate clients and have expert knowledge in the field.",
      icon: <PresentationChartLineIcon/>,
    },
    {
      title: "Highly technical skills",
      desc: "We offer high level quality code, deep knowledge, experience and great communication.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Direct Contact",
      desc: "We stay in direct contact to our customers.",
      icon: <ChatIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
