import { WindowApp } from './src/types';

declare global {
    interface Window {
        Window: Window;
        application: WindowApp;
    }
}
