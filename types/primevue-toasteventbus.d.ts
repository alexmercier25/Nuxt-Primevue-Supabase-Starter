declare module "primevue/toasteventbus" {
  export interface ToastEventBus {
    add: (message: any) => void;
    removeGroup: (group: string) => void;
    removeAllGroups: () => void;
  }
  const toastEventBus: ToastEventBus;
  export default toastEventBus;
}
