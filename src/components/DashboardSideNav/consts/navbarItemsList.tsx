import SettingsIcon from "@mui/icons-material/Settings";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupsIcon from "@mui/icons-material/Groups";
import ArticleIcon from "@mui/icons-material/Article";
import TableChartIcon from "@mui/icons-material/TableChart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

export const navbadItemsList = [
  {
    id: 0,
    icon: <TableChartIcon />,
    label: "Overview",
    route: "/overview",
  },
  {
    id: 1,
    icon: <AssignmentIcon />,
    label: "Tickets",
    route: "/tickets",
  },
  {
    id: 2,
    icon: <LightbulbIcon />,
    label: "Ideas",
    route: "/ideas",
  },
  {
    id: 3,
    icon: <GroupsIcon />,
    label: "Contacts",
    route: "/contacts",
  },
  {
    id: 4,
    icon: <SupportAgentIcon />,
    label: "Agents",
    route: "/agents",
  },
  {
    id: 5,
    icon: <ArticleIcon />,
    label: "Articles",
    route: "/articles",
  },
  {
    id: 6,
    icon: "",
    label: "Divider",
    route: "",
  },
  {
    id: 7,
    icon: <SettingsIcon />,
    label: "Settings",
    route: "/settings",
  },
  {
    id: 8,
    icon: <SubscriptionsIcon />,
    label: "Subscription",
    route: "/subscription",
  },
];
