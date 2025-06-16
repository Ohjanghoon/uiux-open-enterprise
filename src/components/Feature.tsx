import type { Info } from "../types/types";
import Slider from "react-slick";

import ContributorWidget from "./FeatureWidget/ContributorWidget";
import MembersWidget from "./FeatureWidget/MembersWidget";
import ProposalWidget from "./FeatureWidget/ProposalWidget";

interface FeatureInfo extends Info {
  widgetComponent: React.FC;
}

const featureInfoList: FeatureInfo[] = [
  {
    id: "feature_info_1",
    iconUrl: "/assets/icon_feature_info_members.svg",
    title: "Kickstart an organization with your co-founders",
    description:
      "It’s the early days, you just had a long conversation with two friends about a meaningful challenge that you’re all passionate about and have a potential solution for. You’re ready to embark the startup journey.",
    widgetComponent: MembersWidget,
  },
  {
    id: "feature_info_2",
    iconUrl: "/assets/icon_feature_info_proposal.svg",
    title: "Onboard users, investors and advisors as you grow",
    description:
      "You’ve bootstrapped and delivered an MVP, and some investors and advisors are interested in having a chat with you. As an Open Enterprise, you can onboard them seamlessly into your digital organization and align them with your success.",
    widgetComponent: ProposalWidget,
  },
  {
    id: "feature_info_3",
    iconUrl: "/assets/icon_feature_info_contributor.svg",
    title: "Engage highly committed contributors",
    description:
      "You need talented people on-demand across various tasks that your full-time workforce can’t prioritize at the moment. As an Open Enterprise, you can easily fund tasks and have people apply to work on them in return for funds or shares.",
    widgetComponent: ContributorWidget,
  },
];

function Feature() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <>
      <Slider {...settings}>
        {featureInfoList.map((item) => {
          return (
            <div>
              <div
                key={item.id}
                className="feature-container mt-30 grid h-auto min-h-150 w-full grid-cols-2 place-items-center gap-6 py-20"
              >
                <div id="feature-widget-container" className="font-ibm w-full">
                  <item.widgetComponent />
                </div>
                <Info item={item} />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

function Info({ item }: { item: FeatureInfo }) {
  return (
    <div id="feature-info-container" className="space-y-6">
      <img src={item.iconUrl} alt="feature icon" />
      <h2 className="feature-title title">{item.title}</h2>
      <p className="description -tracking-[2%]">{item.description}</p>
    </div>
  );
}

export default Feature;
