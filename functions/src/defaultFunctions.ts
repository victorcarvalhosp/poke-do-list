import * as functions from "firebase-functions";
import {firestore} from "./db";

export const createDefaultProjects = functions.firestore
    .document(`users/{userId}`)
    .onCreate(async (snapshot, context) => {
        const batch = firestore.batch();
        const userId = context.params.userId;
        // const newUser = snapshot.data();

        const defaultProjects = [
            {
                name: 'Personal',
                theme: 'silver'
            },
            {
                name: 'Study',
                theme: 'blue'
            },
            {
                name: 'Work',
                theme: 'red'
            },

        ];

        for (const proj of defaultProjects) {
            const newId = firestore.collection(`users/${userId}/projects`).doc().id;
            batch.set(firestore.collection(`users/${userId}/projects`).doc(newId), {
                name: proj.name,
                theme: proj.theme,
                id: newId
            });
        }

        return batch.commit();
    });
