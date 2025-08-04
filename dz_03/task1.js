const fs = require('fs');

const folderName = 'myFolder';

fs.mkdir(folderName, (err) => {
  if (err) {
    console.error(`Error creating folder:`, err);
  } else {
    console.log(`Folder '${folderName}' created successfully.`);
  }

  fs.rmdir(folderName, (err) => {
    if (err) {
      console.error(`Error removing folder:`, err);
    } else {
      console.log(`Folder '${folderName}' removed successfully.`);
    }
  });
});
