import {action, observable} from 'mobx'
import {RootStore} from "./RootStore";

export interface IUIStore {
    toastVisible: boolean;
    toastMessage: string;
    toastColor: "primary"|"secondary"|"tertiary"|"success"|"warning"|"danger"|"light"|"medium"|"dark";

    showToast(message: string, color?: "primary"| "secondary"| "tertiary"| "success"| "warning"| "danger"| "light"| "medium"| "dark"): void;
    hideToast(): void;

}
export class UIStore implements  IUIStore{
    constructor(public root: RootStore) {
    }

    @observable toastVisible = false;
    @observable toastMessage = '';
    @observable toastColor: "primary"|"secondary"|"tertiary"|"success"|"warning"|"danger"|"light"|"medium"|"dark" = "primary";

    @action
    showToast(message: string, color?: "primary"|"secondary"|"tertiary"|"success"|"warning"|"danger"|"light"|"medium"|"dark"): void {
        this.toastVisible = true;
        this.toastMessage = message;
        if(color) {
            this.toastColor = color;
        } else {
            this.toastColor = "primary"
        }
    }

    @action
    hideToast(): void {
        this.toastVisible = false;
        this.toastMessage = '';
    }

}
