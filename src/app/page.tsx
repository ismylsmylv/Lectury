import { Provider } from "react-redux";
import ReduxProvider from "./storeProvider";
import HomeView from "./views/HomeView/view/page";
import { store } from "./lib/store";

export default function Home() {
  return <HomeView />;
}
