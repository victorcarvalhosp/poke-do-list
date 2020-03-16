import {firestore} from "../firebase";
import {ITask} from "../models/Task";
import {IPokemon} from "../models/Pokemon";
import {IProject} from "../models/Project";
import firebase from "firebase";
import {IPokedexStatus} from "../models/PokedexStatus";

export class FirebaseApi {

    static async getUser(userId: string) {
        return firestore.doc(`users/${userId}`);
    }

    static async getProjects(userId: string) {
        return firestore.collection(`users/${userId}/projects`).orderBy('name');
    }

    static async getOpenTasksByProject(userId: string, projectId: string) {
        return firestore.collection(`users/${userId}/tasks`).where('complete', '==', false).where("project.id", "==", projectId).orderBy('date');
    }

    static async getOpenTasksUntilDate(userId: string, date: firebase.firestore.Timestamp) {
        return firestore.collection(`users/${userId}/tasks`).where('complete', '==', false).where("date", "<=", date).orderBy('date');
    }

    static async getInboxTasks(userId: string) {
        return firestore.collection(`users/${userId}/tasks`).where("project", "==", null).where('complete', '==', false).orderBy('title');
    }

    static async getPokemons(userId: string) {
        return firestore.collection(`users/${userId}/pokemon`).orderBy('variety');
    }

    static async getProject(userId: string, projectId: string) {
        return firestore.doc(`users/${userId}/projects/${projectId}`);
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

    static async removeTask(userId: string, taskId: string) {
        return firebase
            .firestore().collection(`users/${userId}/tasks`).doc(taskId).delete();
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

    static async removeProject(userId: string, projectId: string) {
        return firebase
            .firestore().collection(`users/${userId}/projects`).doc(projectId).delete();
    }

    static async removePokemon(userId: string, pokemonId: string) {
        return firebase
            .firestore().collection(`users/${userId}/pokemon`).doc(pokemonId).delete();
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

    static async updatePokedex(userId: string, pokedex: Record<number, IPokedexStatus>) {
        const dbPath = `users/${userId}/`;
        return firestore.doc(dbPath).update({pokedex: pokedex});
    }

    static async updateExploreItems(userId: string, exploreItemsCompleted: number[]) {
        const dbPath = `users/${userId}/`;
        return firestore.doc(dbPath).update({exploreItemsCompleted: exploreItemsCompleted});
    }

    static async updatePowerUps(userId: string, totalPowerUps: number) {
        const dbPath = `users/${userId}/`;
        return firestore.doc(dbPath).update({powerUps: totalPowerUps});
    }

    static async updateTheme(userId: string, theme: string) {
        return firebase
            .firestore()
            .doc(`users/${userId}`)
            .update({theme: theme});
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
