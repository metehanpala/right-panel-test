export enum ManagerType {
  Main = 'main',
  MainWoEvent = 'main-wo-event',
  System = 'system',
  Event = 'event'
}

export interface ViewDefinition {
  id: string;
  defaultLayout: string;
}

export interface FrameDefinition {
  id: string;
  views?: ViewDefinition[];
}

export interface ManagerDefinition {
  managerType: ManagerType;
  frames?: FrameDefinition[];
  startupNode?: string;
}

export interface ManagerWindow {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  maximized: boolean;
  displayId: number;
  displayX: number;
  displayY: number;
  displayWidth: number;
  displayHeight: number;
  scaleFactor: number;
  manager: ManagerDefinition;
}

export interface MultiMonitorConfiguration {
  version: number;
  windows: ManagerWindow[];
  overruleAllowed: boolean;
}

export interface ManagerInfo {
  framesToCreate: string[];
  managerDefinition: ManagerDefinition;
}
