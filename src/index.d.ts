import { WindowApp } from './types';

declare global {
    interface Window {
        Window: Window;
        application: WindowApp;
    }
}
