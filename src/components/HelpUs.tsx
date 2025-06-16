import type { Info } from "../types/types";

interface taskCardInfo extends Info {
  bounty: number;
  date: string;
}

const taskCardList: taskCardInfo[] = [
  {
    id: "task_card_1",
    title: "Ideate a list of features based on the Sociocracy model",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas provident delectus debitis, sapiente maiores voluptates, laboriosam reprehenderit voluptatem magnam repellat quas consequuntur tenetur dolor incidunt temporibus impedit quam nobis sunt.",
    bounty: 5,
    date: "May 15",
  },
  {
    id: "task_card_2",
    title: "Update documentation with FAQs",
    description:
      "Review our community chat for the most frequently asked questions and document answers for our product docs.",
    bounty: 10,
    date: "May 18",
  },
  {
    id: "task_card_3",
    title: "Tutorial video series",
    description:
      "Create a series of video tutorials that cover everything from start to finish on using Open Enterprise.",
    bounty: 40,
    date: "May 20",
  },
];

function HelpUs() {
  return (
    <>
      <div
        id="helpUs-heading"
        className="mx-auto w-[895px] space-y-6 text-center"
      >
        <h2 id="helpUs-title" className="title inline-block w-full">
          Help us improve Open Enterprise
        </h2>
        <p id="helpUs-description" className="description text-[17.9px]">
          As an Open Enterprise ourselves, we are actively looking for new
          talent to join our mission of improving and delivering the Open
          Enterprise model to the world. Apply for open tasks and earn a stake
          in our success.
        </p>
      </div>
      <div className="mt-12 flex gap-x-6">
        {taskCardList.map((item) => (
          <TaskCard item={item} key={item.id} />
        ))}
      </div>
      <div id="btn-wrapper" className="w-full text-center">
        <button className="mt-12 rounded-lg bg-black px-6 py-5 text-[18px] font-bold text-white">
          View more
        </button>
      </div>
    </>
  );
}

function TaskCard({ item }: { item: taskCardInfo }) {
  return (
    <div className="shadow-card font-ibm flex min-h-60 w-full flex-col justify-between rounded-2xl bg-white p-6">
      <h3 className="text-[18px] font-bold">{item.title}</h3>
      <p className="line-clamp-3 overflow-ellipsis">{item.description}</p>
      <div className="flex justify-between">
        <span className="bg-green rounded-[40px] px-2 py-1 text-white">
          {item.bounty} AUT
        </span>
        <span className="font-semibold">Apply by {item.date}</span>
      </div>
    </div>
  );
}

export default HelpUs;
