const fs = require('fs');
const path = require('path');

// FIle sistem

// fs.mkdir(path.join(__dirname, 'notes'), (error) => {
//   if (error) throw new Error(error);

//   console.log('dir good');
// });

// fs.writeFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'Hello world',
//   (err) => {
//     if (err) throw new Error(err);

//     console.log('файл был создан');

//     fs.appendFile(
//       path.join(__dirname, 'notes', 'mynotes.txt'),
//       ' From append fiel',
//       (err) => {
//         if (err) throw new Error(err);

//         console.log('файл был изменен');
//       },
//     );
//     fs.readFile(
//       path.join(__dirname, 'notes', 'mynotes.txt'),
//       'utf-8',
//       (err, data) => {
//         if (err) throw new Error(err);
//         console.log(data);
//       },
//     );
//   },
// );

fs.rename(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  (err) => {
    if (err) throw new Error(err);

    console.log('Файл переименован');
  },
);
