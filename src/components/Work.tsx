import type { Info as WorkCardInfo } from "../types/types";

const workCardList: WorkCardInfo[] = [
  {
    id: "work_card_1",
    iconUrl: "/assets/icon_work_1.svg",
    title: "Modern workforce",
    description:
      "Multistakeholder governance aligns employees with the organization’s wider community.",
  },
  {
    id: "work_card_2",
    iconUrl: "/assets/icon_work_2.svg",
    title: "Meritocratic by design",
    description:
      "Tokenized ownership aligns deeply committed individuals with the organization’s success.",
  },
  {
    id: "work_card_3",
    iconUrl: "/assets/icon_work_3.svg",
    title: "Engineered for resilience",
    description:
      "Open Enterprise supports best practices in sociocratic management.",
  },
];

function Work() {
  return (
    <>
      <div
        id="work-heading"
        className="mx-auto w-[895px] space-y-6 text-center"
      >
        <h2 id="work-title" className="title inline-block w-full">
          Reimagining what it means to work
        </h2>
        <p id="work-description" className="description text-lg">
          Teams and communities using Open Enterprise fundamentally unlock a
          reality of work that reimagines how people engage in economic
          opportunity, meeting the demands and expectations of a modern
          organization.
        </p>
      </div>
      <div id="work-card-list" className="mt-12 flex w-full gap-x-6">
        {workCardList.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

function Card({ item }: { item: WorkCardInfo }) {
  return (
    <div
      id={item.id}
      className="shadow-card flex min-h-[340px] w-full flex-col items-center justify-center gap-y-6 rounded-lg bg-white px-6"
    >
      <img src={item.iconUrl} alt="work icon image" />
      <div className="work-card-content space-y-4 text-center">
        <h3 className="card-title text-2xl font-bold">{item.title}</h3>
        <p className="card-description description text-lg">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default Work;
