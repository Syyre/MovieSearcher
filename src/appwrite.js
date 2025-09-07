import { Client, Databases, Query, ID, TablesDB } from "appwrite";

const database_ID = import.meta.env.VITE_DATABASE_ID;
const table = import.meta.env.VITE_TABLE_ID;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client().setEndpoint(endpoint).setProject(projectId);

const tablesDB = new TablesDB(client);

export const updateSearchCount = async (searchTerm, movie) => {
  //1. Use Apprwite SDK to update the search count in the database
  //2. If the search term already exists, increment the count
  //3. If the search term does not exist, create a new record with count = 1
  try {
    // const res = await database.listDocuments(database_ID, table, [
    //   Query.equal("searchTerm", searchTerm),
    // ]);

    // if (res.total > 0) {
    //   const documentId = res.documents[0].$id;
    //   await database.updateDocument(database, table, documentId, {
    //     $inc: { count: 1 },
    //   });
    // } else {
    //   await database.createDocument(database, table, ID.unique(), {
    //     searchTerm,
    //     count: 1,
    //     movie_ID: movie.id,
    //     poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    //   });
    const res = await tablesDB.listRows({
      databaseId: database_ID,
      tableId: table,
      queries: [Query.equal("searchTerm", searchTerm)],
    });
    if (res.total > 0) {
      const recordId = res.rows[0].$id;
      await tablesDB.updateRow({
        databaseId: database_ID,
        tableId: table,
        recordId,
        data: {
          count: res.rows[0].count + 1,
        },
      });
    } else {
      await tablesDB.createRow({
        databaseId: database_ID,
        tableId: table,
        rowId: ID.unique(),
        data: {
          searchTerm,
          count: 1,
          movie_ID: movie.id,
          poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        },
      });
    }
  } catch (error) {
    console.error("Error updating search count:", error);
  }
};
