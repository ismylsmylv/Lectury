import { IoDocumentsOutline, IoDocumentsSharp } from "react-icons/io5";
import {
  MdForum,
  MdGroups,
  MdOutlineForum,
  MdOutlineGroups
} from "react-icons/md";
import { RiHome5Fill, RiHome5Line } from "react-icons/ri";
export const navs = [
  {
    title: "Home",
    url: "home",
    iconFilled: RiHome5Fill,
    iconOutline: RiHome5Line
  },
  {
    title: "Forums",
    url: "forums",
    iconFilled: MdForum,
    iconOutline: MdOutlineForum
  },
  {
    title: "Resources",
    url: "resources",
    iconFilled: IoDocumentsSharp,
    iconOutline: IoDocumentsOutline
  },
  {
    title: "Groups",
    url: "groups",
    iconFilled: MdGroups,
    iconOutline: MdOutlineGroups
  }
];
