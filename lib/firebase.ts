// import admin from "firebase-admin";

// export default function initialize(): void {
// 	if (admin.apps.length === 0) {
// 		admin.initializeApp({
// 			credential: admin.credential.cert({
// 				projectId: process.env.FIREBASE_PROJECT_ID,
// 				clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
// 				privateKey: process.env.FIREBASE_PRIVATE_KEY,
// 			}),
// 			databaseURL: process.env.FIREBASE_DATABASE_URL,
// 		});
// 	}
// }

export {};
