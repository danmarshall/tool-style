export { ToolTemplate } from './components/ToolTemplate';
export type { ToolTemplateProps } from './components/ToolTemplate';

export { Header } from './components/Header';
export type { HeaderProps } from './components/Header';

export { Sidebar } from './components/Sidebar';
export type { SidebarProps } from './components/Sidebar';

export { Main } from './components/Main';
export type { MainProps } from './components/Main';

export { Footer } from './components/Footer';
export type { FooterProps } from './components/Footer';

export {
  AccordionSection,
  SidebarSection,
  Tabs,
  ButtonGroup,
} from './components/SidebarComponents';
export type {
  AccordionSectionProps,
  SidebarSectionProps,
  TabsProps,
  ButtonGroupProps,
} from './components/SidebarComponents';

// Export style modules for consumers who want to use them directly
export * as headerStyles from './styles/header.css';
export * as sidebarStyles from './styles/sidebar.css';
export * as mainStyles from './styles/main.css';
export * as footerStyles from './styles/footer.css';
export * as containerStyles from './styles/container.css';
export { vars } from './styles/theme.css';
