// export async function migrateDbIfNeeded(db) {
//     const DATABASE_VERSION = 1;
//     let { user_version: currentDbVersion } = await db.getFirstAsync(
//       'PRAGMA user_version'
//     );
//     if (currentDbVersion >= DATABASE_VERSION) {
//       return;
//     }
//     if (currentDbVersion === 0) {
//       await db.execAsync(`
//       PRAGMA journal_mode = WAL;
//       CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
//       INSERT INTO test (value, intValue) VALUES ('test1', 123);
//       INSERT INTO test (value, intValue) VALUES ('test2', 456);
//       INSERT INTO test (value, intValue) VALUES ('test3', 789);
//   `);
//       await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'hello', 1);
//       await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'world', 2);
//       currentDbVersion = 1;
//     }
//     await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
//   }
//   export const firstRow = await db.getFirstAsync('SELECT * FROM test')