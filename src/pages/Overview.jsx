import OverviewSummary from "../features/overview/OverviewSummary";
import OverviewTable from "../features/overview/OverviewTable";
import Heading from "../ui/Heading";

const Overview = () => {
  return (
    <>
      <Heading>Overview</Heading>
      <OverviewSummary />
      <OverviewTable />
    </>
  );
};

export default Overview;
