import {firestore} from "../firebase";

export class FirebaseApi {

    static async getUser(userId: string) {
        return firestore.doc(`users/${userId}`);
    }

    // static async getTestSets(userId: string) {
    //     return firestore.collection(`users/${userId}/test-sets`).orderBy('name');
    // }
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
    // static async saveTestSet(userId: string, testSet: ITestSet) {
    //     if (testSet.id) {
    //         return firestore.collection(`users/${userId}/test-sets`).doc(testSet.id).update(testSet);
    //     } else {
    //         const newId = firestore.collection(`users/${userId}/test-sets`).doc().id;
    //         testSet.id = newId;
    //         return firestore.collection(`users/${userId}/test-sets`).doc(newId).set(testSet);
    //     }
    // }
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
