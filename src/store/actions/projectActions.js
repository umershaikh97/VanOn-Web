// Without thunk we use it like this, but as we are using thunk middleware, we can return a function
// export const createProject = (project) => {
//     return { type: 'CREATE_PROJECT', payload: project };
// };


// export const createProject = (project) => {
//     return async (dispatch, getState) => {
//         try {
//             dispatch({ type: 'CREATE_PROJECT' });
//             const response = await db.collection('projects').add({
//                 ...project,
//                 authorFirstName: 'Umer',
//                 authorLastName: 'Shaikh',
//                 authorId: 12345,
//                 createdAt: new Date()
//             })
//             if (response) {
//                 dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
//             }
//         }
//         catch (error) {
//             dispatch({ type: 'CREATE_PROJECT_ERROR', payload: error });
//         }
//     };
// };


// export const getProjects = () => {
//     return async (dispatch, getState) => {
//         try {
//             let snapshot = await db.collection('projects').get();
//             let projects = snapshot.docs.map((doc) => {
//                 let data = doc.data();
//                 data.id = doc.id; // including a Key for id of that document
//                 return data;
//             });
//             dispatch({ type: 'FETCH_PROJECTS_SUCCESS', payload: projects });
//         }
//         catch (error) {
//             dispatch({ type: 'FETCH_PROJECTS_ERROR', payload: error });
//         }
//     };
// };