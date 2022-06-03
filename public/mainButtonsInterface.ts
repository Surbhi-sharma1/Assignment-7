export interface IMainPage {
    load(): void;
    Btn: HTMLButtonElement;
    updateDate(date: Date, text: string): void;
}