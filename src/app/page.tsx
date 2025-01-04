import { Provider } from "react-redux";
import ReduxProvider from "./storeProvider";
import HomeView from "./views/HomeView/page";
import { store } from "./lib/store";

export default function Home() {
  return <HomeView />;
}
