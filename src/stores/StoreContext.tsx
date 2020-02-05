import React from 'react'
import {RootStore} from "./RootStore"; // 6.x or mobx-react-lite@1.4.0

// const storeContext = React.createContext<TStore | null>(null)
// export const AppContextProvider = storeContext.Provider;
//
// export const AppContextConsumer = storeContext.Consumer;
// // @ts-ignore
// export const StoreProvider = ({ children }) => {
//     const store = useLocalStore(createStore)
//     return <AppContextProvider value={store}> {children} </AppContextProvider>
// }
//
// export const useStore = () => {
//     const store = React.useContext(storeContext)
//     if (!store) {
//         // this is especially useful in TypeScript so you don't need to be checking for null all the time
//         throw new Error('useStore must be used within a StoreProvider.')
//     }
//     return store
// }



export const storesContext = React.createContext({
    rootStore: new RootStore()
})

export const useStores = () => {
    const store = React.useContext(storesContext);
    if (!store) {
        // this is especially useful in TypeScript so you don't need to be checking for null all the time
        throw new Error('useStore must be used within a StoreProvider.')
    }
    return store
}

export const useRootStore = () => {
    return useStores().rootStore
}
