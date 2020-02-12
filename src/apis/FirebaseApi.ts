import {firestore} from "../firebase";
import {ITask} from "../models/Task";
import {IPokemon} from "../models/Pokemon";
import {IProject} from "../models/Project";

export class FirebaseApi {

    static async getUser(userId: string) {
        return firestore.doc(`users/${userId}`);
    }

    static async getProjects(userId: string) {
        return firestore.collection(`users/${userId}/projects`).orderBy('name');
    }

    static async getTasks(userId: string) {
        return firestore.collection(`users/${userId}/tasks`).where('complete', '==', false).orderBy('title');
    }

    static async getPokemons(userId: string) {
        return firestore.collection(`users/${userId}/pokemon`).orderBy('variety');
    }

    //
    //
    // static async getResultCompleteAnswer(userId: string, testSetId: string, resultId: string) {
    //     return firestore.doc(`users/${userId}/test-sets/${testSetId}/results/${resultId}/complete-answer/${resultId}`);
    // }
    //
    // static async getTestSet(userId: string, id: string) {
    //     return firestore.doc(`users/${userId}/test-sets/${id}`);
    // }
    //
    static async saveTask(userId: string, task: ITask) {
        const dbPath = `users/${userId}/tasks`;
        if (task.id) {
            return firestore.collection(dbPath).doc(task.id).update(task);
        } else {
            const newId = firestore.collection(dbPath).doc().id;
            task.id = newId;
            return firestore.collection(dbPath).doc(newId).set(task);
        }
    }

    static async saveProject(userId: string, project: IProject) {
        const dbPath = `users/${userId}/projects`;
        if (project.id) {
            return firestore.collection(dbPath).doc(project.id).update(project);
        } else {
            const newId = firestore.collection(dbPath).doc().id;
            project.id = newId;
            return firestore.collection(dbPath).doc(newId).set(project);
        }
    }

    static async completeTask(userId: string, taskId: string) {
        const dbPath = `users/${userId}/tasks`;
        return firestore.collection(dbPath).doc(taskId).update({complete: true});
    }

    static async caughtPokemon(userId: string, pokemon: IPokemon) {
        const dbPath = `users/${userId}/pokemon`;
        return firestore.collection(dbPath).doc(pokemon.id).set(pokemon);
    }

    static async setPokemonAsPartner(userId: string, pokemon: IPokemon) {
        const dbPath = `users/${userId}/`;
        return firestore.doc(dbPath).update({partnerPokemon: pokemon});
    }

    static async updatePokemon(userId: string, pkmn: IPokemon) {
        const dbPath = `users/${userId}/pokemon`;
        return firestore.collection(dbPath).doc(pkmn.id).update(pkmn);
    }

    //
    // static async removeTestSet(userId: string, testSetId: string) {
    //         return firestore.collection(`users/${userId}/test-sets`).doc(testSetId).delete();
    // }
    //
    // static async updateTestSetStatus(userId: string, testSetId: string,   status: "RUNNING" | "WAITING" | "WAITING_API_LIMIT") {
    //         return firestore.collection(`users/${userId}/test-sets`).doc(testSetId).update({status: status});
    // }
    //
    // static async getLatestsTestSetResult(userId: string, testSetId: string) {
    //     const ref = await firestore.collection(`users/${userId}/test-sets/${testSetId}/testSetResults`).orderBy("date", "desc").limit(10);
    //     const lastTestSetResult = await ref.get();
    //     const list: ITestSetResult[] = [];
    //     lastTestSetResult.forEach((doc: any) => {
    //         list.push(doc.data() as ITestSetResult);
    //         console.log(list);
    //     });
    //     return list;
    // }
    //
    // static async getResultsByTestSetResult(userId: string, testSetId: string, testSetResultId: string, type: "first" | "next" | "previous", ref: any, pageSize: number) {
    //     const field = 'url';
    //     if (type === "next") {
    //         const lastVisibleRef = await ref.get();
    //         const lastVisible = lastVisibleRef.docs[lastVisibleRef.docs.length - 1];
    //         return firestore.collection(`users/${userId}/test-sets/${testSetId}/results`).where('testSetResultId', '==', testSetResultId).orderBy(field).startAfter(lastVisible).limit(pageSize);
    //     } else if (type === "previous") {
    //         const lastVisibleRef = await ref.get();
    //         const lastVisible = lastVisibleRef.docs[lastVisibleRef.docs.length - 1];
    //         return firestore.collection(`users/${userId}/test-sets/${testSetId}/results`).where('testSetResultId', '==', testSetResultId).orderBy(field).endBefore(lastVisible).limit(pageSize);
    //     } else {
    //         return firestore.collection(`users/${userId}/test-sets/${testSetId}/results`).where('testSetResultId', '==', testSetResultId).orderBy(field).limit(pageSize);
    //     }
    // }
    //
    //
    // static async updateApiKey(userId: string, apiKey: string) {
    //     return firestore.doc(`users/${userId}`).update({apiKey: apiKey});
    // }
}
