import { IElement } from './Element'
import { RangeRect } from './Range'

export interface IPasteOption {
  isPlainText: boolean
}

export interface IPositionContextByEvent {
  pageNo: number
  element: IElement | null
  rangeRect: RangeRect | null
}

export type IHookName = 'intersectionPageNoChange'
  | 'pageSizeChange'
  | 'pageScaleChange'
  | 'saved'
  | 'contentChange'
  | 'controlChange'
  | 'pageModeChange'
  | 'zoneChange'
  | 'visiblePageNoListChange'
  | 'cursorChange'

export type IRunHook = (hookName: IHookName, ...args: any[]) => void