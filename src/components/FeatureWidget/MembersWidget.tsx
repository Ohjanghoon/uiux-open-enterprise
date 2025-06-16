import { useEffect, useState } from "react";
import { memberList } from "../../data/mock";
import type { MemberInfo } from "../../types/types";

function MembersWidget() {
  const [widgetMembers, setWidgetMembers] = useState<MemberInfo[] | null>(null);

  useEffect(() => {
    const selected = memberList.slice(0, 3);
    setWidgetMembers(selected);
  }, []);

  return (
    <div
      id="widget-members-container"
      className="mx-auto h-full w-[484px] space-y-8 rounded-2xl px-10 py-8 shadow-[30px_30px_0_var(--green)] ring-4 ring-black"
    >
      <h3 id="title" className="text-[32px] font-bold">
        Members
      </h3>
      <ul id="member-list" className="space-y-6">
        {widgetMembers?.map((item) => {
          return (
            <li key={item.id} className="flex items-center gap-x-4">
              <img
                src={`/assets/members/${item.filename}`}
                alt="member image"
              />
              <div className="space-y-1">
                <h4 className="text-2xl font-semibold">{item.name}</h4>
                <p className="text-gray">{item.shares} SHARES</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MembersWidget;
