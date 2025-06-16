import { useState } from "react";
import { memberList } from "../../data/mock";
import type { MemberInfo } from "../../types/types";

function ContributorWidget() {
  const members = [...memberList].sort((a, b) => b.rate - a.rate).slice(0, 3);

  const [selectedMember, setSelectedMember] = useState(members[0]);

  return (
    <div
      id="widget-contributor-container"
      className="mx-auto flex w-full items-stretch gap-x-3 px-2"
    >
      <div className="bg-light-gold flex-grow space-y-6 rounded-2xl px-6 py-8 ring-4 ring-black">
        <h3 className="text-[24px] font-bold">3 applicants</h3>
        {members.map((item) => {
          return (
            <div
              key={item.id}
              className="flex cursor-pointer justify-between"
              onMouseEnter={() => setSelectedMember(item)}
            >
              <div className="flex items-center justify-center gap-x-4">
                <img
                  src={`/assets/members/${item.filename}`}
                  alt="member image"
                  width={40}
                  height={40}
                />
                <span
                  className={`text-xl font-semibold ${selectedMember.id === item.id ? "text-green transition-colors duration-300" : ""}`}
                >
                  {item.name}
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <img
                  src="/assets/icon_star.svg"
                  alt="star icon"
                  width={24}
                  height={24}
                />
                <span className="text-xl">{item.rate}</span>
              </div>
            </div>
          );
        })}
      </div>
      <ViewProfileMember item={selectedMember} />
    </div>
  );
}

function ViewProfileMember({ item }: { item: MemberInfo }) {
  return (
    <div className="ring-green flex w-[240px] flex-col items-center gap-y-4 rounded-2xl p-6 ring-4">
      <img
        src={`/assets/members/${item.filename}`}
        width={72}
        height={72}
        alt=""
      />
      <div className="space-y-1 text-center">
        <h6 className="text-xl font-bold">{item.name}</h6>
        <span className="text-gray">{item.job}</span>
      </div>
      <div className="flex w-full items-center justify-between">
        <span>{item.commit} commits</span>
        <div className="flex items-center gap-x-2">
          <img src="/assets/icon_star.svg" alt="" width={24} height={24} />
          <span>{item.rate}</span>
        </div>
      </div>
      <button className="w-full rounded-2xl bg-black px-6 py-3 text-white">
        View Profile
      </button>
    </div>
  );
}

export default ContributorWidget;
