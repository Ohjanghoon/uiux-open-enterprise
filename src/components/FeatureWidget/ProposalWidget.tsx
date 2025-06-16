function ProposalWidget() {
  return (
    <div
      id="widget-proposal-container"
      className="mx-auto w-[484px] space-y-8 rounded-2xl px-10 py-8 ring-4 ring-black"
    >
      <div id="proposal-member" className="space-y-6">
        <div id="member-info" className="flex items-center gap-x-4">
          <img src="/src/assets/members/member_4.svg" alt="" />
          <div className="space-y-2 font-semibold">
            <h4 className="text-2xl">Jassir Jonis</h4>
            <p className="text-gray">Pre-seed angel investor</p>
          </div>
        </div>
        <p>
          Hey guys, love what you’re doing and I’m convinced that together we’ll
          achieve amazing things.
        </p>
        <div className="grid grid-cols-2">
          <div className="space-y-3">
            <h5 className="text-gray">COMMIT</h5>
            <span className="text-2xl">10,000 DAI</span>
          </div>
          <div className="space-y-3">
            <h5 className="text-gray">Shares</h5>
            <span className="text-2xl">20</span>
          </div>
        </div>
      </div>
      <button
        id="vote-btn"
        className="w-full rounded-2xl bg-black px-6 py-3 text-2xl font-medium text-white"
      >
        Go to vote
      </button>
    </div>
  );
}

export default ProposalWidget;
