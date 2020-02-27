import {action, observable} from 'mobx'
import {RootStore} from "./RootStore";
import {FirebaseApi} from "../apis/FirebaseApi";
import {IUser} from "../models/User";

export class UIMode {
    static readonly Dark = new UIMode('dark', '#424242');
    static readonly Light = new UIMode('light', '#eeeeee');
    static readonly Red = new UIMode('red', '#d7884e');
    static readonly Blue = new UIMode('blue', '#96d4cf');
    static readonly Green = new UIMode('green', '#7dc8aa');

    // private to disallow creating other instances of this type
    private constructor(private readonly key: string, public readonly value: any) {
    }

    toString() {
        return this.key;
    }
}

export interface IUIStore {
    toastVisible: boolean;
    toastMessage: string;
    toastColor: "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark";
    mode: UIMode;


    showToast(message: string, color?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"): void;

    hideToast(): void;

    change(mode: UIMode): void;

    setThemeFromUser(): void;

}

export class UIStore implements IUIStore {
    constructor(public root: RootStore) {
    }

    @observable toastVisible = false;
    @observable toastMessage = '';
    @observable toastColor: "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark" = "primary";
    @observable mode = UIMode.Light;


    @action
    showToast(message: string, color?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"): void {
        this.toastVisible = true;
        this.toastMessage = message;
        if (color) {
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

    @action
    async change(mode: UIMode) {
        this.mode = mode;
        document.body.classList.remove('dark-theme', 'red-theme', 'light-theme', 'blue-theme', 'green-theme');
        document.body.classList.add(mode.toString() + '-theme');
        const result = await FirebaseApi.updateTheme(this.root.userStore.user.uid, mode.toString());
    }

    @action
    async setThemeFromUser() {
        console.log(this.root.userStore.user.uid + 'USER IDDD');
        if (this.root.userStore.user.uid && this.root.userStore.user.uid != '0') {
            const user = await FirebaseApi.getUser(this.root.userStore.user.uid);
            user.get().then(res => {
                    const themesAvailable: UIMode[] = [UIMode.Dark, UIMode.Light, UIMode.Red, UIMode.Blue, UIMode.Green];
                    if (res && res.data() && (res.data() as IUser).theme) {
                        const selectedThemeFilteredArray = themesAvailable.filter(val => (res.data() as IUser).theme === val.toString());
                        if (selectedThemeFilteredArray && selectedThemeFilteredArray.length > 0) {
                            this.change(selectedThemeFilteredArray[0]);
                        }
                    }
                }
            )
        }

    }

}
