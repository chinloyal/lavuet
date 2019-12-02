export interface AppDialogOptions {
	showCancelBtn?: boolean;
	cancelBtnText?: string;
	okBtnText?: string;
	title: string;
	message: string;
	visible?: boolean;
	dialogType?: string;
	onConfirm?: Function;
}

export interface AppDialogInstance {
	show(params: AppDialogOptions): Function;
}
