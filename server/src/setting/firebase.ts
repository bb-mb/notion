import admin from "firebase-admin";
import serviceAccount from "@/env/firebase.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});
