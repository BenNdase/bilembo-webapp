import { ReactNode } from "react";

export type variant = "contained" | "outlined" | "gradient" | "text";
export type size = "sm" | "md" | "lg";
export type color = "white";
export type fullWidth = boolean;
export type ripple = boolean;
export type className = string;
export type children = ReactNode;

// button
export interface IButton {
  handleClick: (e: any) => void;
  title?: string;
  variant?: variant;
  size?: size;
  color?: color;
  fullWidth?: fullWidth;
  ripple?: ripple;
  className?: className;
  children: children;
}

export interface IFooterMenus {
  id: number;
  subSectionTitle: string;
  menus: IMenu[];
}
export interface IMenu {
  title?: string;
  name: string;
  path: string;
}
