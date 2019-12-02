/**
 * Instead of directly using secure-ls, use this extended version,
 * there might be a better choice in the future where you could switch
 * out the implementation from here, instead of removing secure-ls
 * from every single file.
 */

import SecureLS from 'secure-ls';

export class SecureStorage extends SecureLS {
	public static getInstance(): SecureStorage {
		return SecureStorage._instance;
	}

	private static _instance: SecureStorage = new SecureStorage({
		encryptionSecret: process.env.MIX_APP_SECRET,
	});

	private constructor(config?: SecureConfig) {
		super(config);
		SecureStorage._instance = this;
	}
}

interface SecureConfig {
	encodingType?: string;
	isCompression?: boolean;
	encryptionSecret?: string;
	encryptionNamespace?: string;
}
