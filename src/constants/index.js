import {
  BudgetsIcon,
  OverviewIcon,
  PotsIcon,
  ReccuringIcon,
  TransactionsIcon,
} from "../components/icons";

// C:\Users\DELL\Desktop\finance-app\public\images\icon-nav-overview.svg
const sideBarLinks = [
  {
    icon: OverviewIcon,
    path: "/overview",
    label: "Overview",
  },
  {
    icon: TransactionsIcon,
    path: "/transactions",
    label: "Transactions",
  },
  {
    icon: BudgetsIcon,
    path: "/budgets",
    label: "Budgets",
  },
  {
    icon: PotsIcon,
    path: "/pots",
    label: "Pots",
  },
  {
    icon: ReccuringIcon,
    path: "/reccuring-bills",
    label: "Recurring bills",
  },
];

export { sideBarLinks };
