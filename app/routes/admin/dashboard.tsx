import { Header } from "components";

const dashboard = () => {
  const user = { name: "dia" };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`welcome ${user?.name ?? "Guest"} !!`}
        description="track destinations and plan trips in real time "
      />
      dashboard page content
    </main>
  );
};

export default dashboard;
