export class User {
	constructor(
		public first_name: string,
		public last_name: string,
		public email: string,
		// tslint:disable-next-line: trailing-comma
		public id: number = 0
	) {}
}
