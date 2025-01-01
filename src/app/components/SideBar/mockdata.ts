import { RiHome5Fill } from "react-icons/ri";
import { RiHome5Line } from "react-icons/ri";
import { MdForum } from "react-icons/md";
import { MdOutlineForum } from "react-icons/md";
import { MdPermMedia } from "react-icons/md";
import { MdOutlinePermMedia } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
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
    iconFilled: MdPermMedia,
    iconOutline: MdOutlinePermMedia
  },
  {
    title: "Groups",
    url: "groups",
    iconFilled: MdGroups,
    iconOutline: MdOutlineGroups
  }
];
